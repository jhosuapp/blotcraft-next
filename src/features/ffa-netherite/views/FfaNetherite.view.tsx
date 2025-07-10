import { Feedback, FloatingDots, HeroBanner } from "@/shared/components";
import image from '@/config/assets/webp/bg-ffa-netherite.jpg';

const FfaNetheriteView = ():JSX.Element => {
    return (
        <>
            <FloatingDots />
            <HeroBanner 
                title={'Free For All Netherite PVP'}
                subtitle={'Blootcraft'}
                categories={['FFA', 'PVP', 'Minecraft', '1.12+', 'Netherite']}
                textLink={'Síguenos en discord'}
                image={ image }
                altImage={'Ffa diamond blootcraft banner'}
            />
            <Feedback
                className='!min-h-[700px]'
                texFeedback="No hay datos aún"
            />
        </>
    )
}

export { FfaNetheriteView }