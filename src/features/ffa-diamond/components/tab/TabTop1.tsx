import { Skin3d } from "@/shared/components"

const TabTop1 = ():JSX.Element => {
    return (
        <div>
            <Skin3d 
                walk
                username="jhosuapp"
                autoRotate={ false }
            />
        </div>
    )
}

export { TabTop1 }
