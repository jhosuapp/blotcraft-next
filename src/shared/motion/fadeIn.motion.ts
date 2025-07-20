import { PartialMotionVariants } from "@/shared/interfaces";
import { easeIn } from "framer-motion";

export const fadeInMotion = (delayAnimate?: number):PartialMotionVariants => {
    return {
        initial:{ opacity: 0 },
        animate:{ 
            opacity: 1,
            transition: {
                duration: 0.25,
                ease: easeIn,
                delay: delayAnimate ?? 0
            }
        },
        exit:{ 
            opacity: 0 
        },
    }
}