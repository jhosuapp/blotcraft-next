import { FfaDiamondView } from "@/features";
import { useScrollLimit } from "@/shared/hooks";
import Layout from "pages/Layout";

const FfaDiamond = ():JSX.Element => {
    const scrollLimit = useScrollLimit(900);

    return (
        <Layout 
            title="Minecraft PvP al Máximo Nivel | Blotcraft Oficial"
            description="Únete a Blotcraft, el servidor de Minecraft PvP en español donde el combate es intenso, la competencia es real y cada partida cuenta. ¡Entra ahora y demuestra tu habilidad!"
            isDarkBg
            isDark={scrollLimit}
        >
            <FfaDiamondView />
        </Layout>
    )
}

export default FfaDiamond;