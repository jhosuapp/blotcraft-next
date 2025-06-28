import Link from "next/link";
import Layout from "pages/Layout";

const IndexPage = () => (
  <Layout 
    title="Minecraft PvP al Máximo Nivel | Blotcraft Oficial"
    description="Únete a Blotcraft, el servidor de Minecraft PvP en español donde el combate es intenso, la competencia es real y cada partida cuenta. ¡Entra ahora y demuestra tu habilidad!"
  >
    <section>
      <h1 className="text-title">Hello Next.js</h1>
      <h2 className="text-description">Blootcraft - prueba tailwind</h2>
    </section>
  </Layout>
);

export default IndexPage;
