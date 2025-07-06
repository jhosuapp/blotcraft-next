import { FloatingDots, HeroBanner } from "@/shared/components";
import image from '@/config/assets/webp/bg-ffa-diamond.jpg';

const FfaDiamondView = ():JSX.Element => {
    return (
        <>
            <FloatingDots />
            <HeroBanner 
                title={'Free For All Diamond PVP'}
                subtitle={'Blootcraft'}
                categories={['FFA', 'PVP', 'Minecraft', '1.12+']}
                textLink={'Follow in discord'}
                image={ image }
                altImage={'Ffa diamond blootcraft banner'}
            />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos odit eum neque eius incidunt quo, voluptatum ad aliquam error quia?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos odit eum neque eius incidunt quo, voluptatum ad aliquam error quia?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos odit eum neque eius incidunt quo, voluptatum ad aliquam error quia?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos odit eum neque eius incidunt quo, voluptatum ad aliquam error quia?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos odit eum neque eius incidunt quo, voluptatum ad aliquam error quia?</p>
        </>
    )
}

export { FfaDiamondView }