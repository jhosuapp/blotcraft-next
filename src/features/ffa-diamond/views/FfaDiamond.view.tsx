import { FloatingDots, HeroBanner } from "@/shared/components";
import image from '@/config/assets/webp/bg-ffa-diamond.jpg';
import { Tab } from "../components";

const FfaDiamondView = ():JSX.Element => {
    return (
        <>
            {/* Animations stars floating */}
            <FloatingDots />
            {/* Hero banner */}
            <HeroBanner 
                title={'Free For All Diamond PVP'}
                subtitle={'Blootcraft'}
                categories={['FFA', 'PVP', 'Minecraft', '1.12+']}
                textLink={'Follow in discord'}
                image={ image }
                altImage={'Ffa diamond blootcraft banner'}
            />
            {/* Tab categories */}
            <Tab />
        </>
    )
}

export { FfaDiamondView }