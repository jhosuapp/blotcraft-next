import { FfaDiamondView } from "@/features";
import { useScrollLimit } from "@/shared/hooks";
import { PageTransition } from "@/shared/layouts";
import Layout from "pages/Layout";
import { useTranslation } from "react-i18next";

const FfaDiamond = ():JSX.Element => {
    const { t } = useTranslation('ffaDiamond');
    const scrollLimit = useScrollLimit(900);

    return (
        <Layout 
            title={t('seo.title')}
            description={t('seo.description')}
            isDarkBg
            isDark={scrollLimit}
            textPage={t('seo.nextPage')}
            linkPage={'/ffa-netherite'}
        >
            <PageTransition>
                <FfaDiamondView />
            </PageTransition>
        </Layout>
    )
}

export default FfaDiamond;