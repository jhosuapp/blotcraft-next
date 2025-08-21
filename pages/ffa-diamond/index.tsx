import { FfaView } from "@/features";
import { PageTransition } from "@/shared/layouts";
import Layout from "pages/Layout";
import { useTranslation } from "react-i18next";

const FfaDiamond = ():JSX.Element => {
    const { t } = useTranslation('ffaDiamond');

    return (
        <Layout 
            title={t('seo.title')}
            description={t('seo.description')}
            isDarkBg
            isDark={true}
            textPage={t('seo.nextPage')}
            linkPage={'/ffa-netherite'}
        >
            <PageTransition>
                <FfaView
                    title="FFA DIAMOND"
                    requestType="ffa-diamond"
                />
            </PageTransition>
        </Layout>
    )
}

export default FfaDiamond;