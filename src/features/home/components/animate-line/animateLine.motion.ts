import { PartialMotionVariants } from "@/shared/interfaces";

export const animatePath = ():PartialMotionVariants => {
    return {
        initial:{ 
            pathLength: 0 
        },
        animate:{ pathLength: 1, 
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 30,
                restDelta: 0.001,
                mass: 0.5,
                delay: 1,
                duration: 1,
            } 
        },
        exit:{ 
            pathLength: 0 
        },
    }
}