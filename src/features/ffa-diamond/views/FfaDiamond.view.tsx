import { useTranslation } from "react-i18next";

import { FloatingDots, HeroBanner } from "@/shared/components";
import image from '@/config/assets/webp/bg-ffa-diamond.jpg';
import { Tab } from "../components";

const FfaDiamondView = ():JSX.Element => {
    const { t } = useTranslation('ffaDiamond');

    return (
        <>
            {/* Animations stars floating */}
            <FloatingDots />
            {/* Hero banner */}
            <HeroBanner 
                title={ t('title') }
                subtitle={'Blotcraft'}
                categories={['FFA', 'PVP', 'Minecraft', '1.12+']}
                textLink={ t('discord') }
                image={ image }
                altImage={ 'discord blotcraft' }
            />
            {/* Tab categories */}
            <Tab />
        </>
    )
}

export { FfaDiamondView }