import { FfaNetheriteView } from "@/features";
import { PageTransition } from "@/shared/layouts";
import Layout from "pages/Layout";

const FfaNetherite = ():JSX.Element => {
    return (
        <Layout 
            title="Minecraft PvP al Máximo Nivel | Blotcraft Oficial"
            description="Únete a Blotcraft, el servidor de Minecraft PvP en español donde el combate es intenso, la competencia es real y cada partida cuenta. ¡Entra ahora y demuestra tu habilidad!"
            isDarkBg
            textPage={'Duels'}
            linkPage={'/duels'}
        >
            <PageTransition>
                <FfaNetheriteView />
            </PageTransition>
        </Layout>
    )
}

export default FfaNetherite;