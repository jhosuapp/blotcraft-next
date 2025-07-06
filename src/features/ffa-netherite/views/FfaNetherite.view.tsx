import { FloatingDots, HeroBanner } from "@/shared/components";
import image from '@/config/assets/webp/bg-ffa-netherite.jpg';

const FfaNetheriteView = ():JSX.Element => {
    return (
        <>
            <FloatingDots />
            <HeroBanner 
                title={'Free For All Netherite PVP'}
                subtitle={'Blootcraft'}
                categories={['FFA', 'PVP', 'Minecraft', '1.12+', 'Netherite']}
                textLink={'Follow in discord'}
                image={ image }
                altImage={'Ffa diamond blootcraft banner'}
            />
        </>
    )
}

export { FfaNetheriteView }