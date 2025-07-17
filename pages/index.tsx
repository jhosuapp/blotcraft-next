import { HomeView } from "@/features";
import { Container } from "@/shared/components";
import { PageTransition } from "@/shared/layouts";
import Layout from "pages/Layout";
import { useTranslation } from "react-i18next";

const IndexPage = () => {
  const { t } = useTranslation('translation');

  return (
    <Layout 
      title={t('seo.title')}
      description={t('seo.description')}
      textPage={t('seo.nextPage')}
      linkPage={'/ffa-diamond'}
    >
      <PageTransition>
        <HomeView />
      </PageTransition>
    </Layout>
  )
};

export default IndexPage;
