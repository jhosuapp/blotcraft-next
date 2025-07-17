import { useTranslation } from "react-i18next";

import { Hero, AnimateLine, AnimateLineSecondary } from "../components";
import { Container } from "@/shared/components";

const HomeView = ():JSX.Element => {
    const { t } = useTranslation('home');

    return (
        <>
            {/* Line animate */}
            <Container className="!w-full !px-0 !py-0 bg-cuartary">
                {/* <AnimateLineSecondary /> */}
                {/* Hero banner */}
                <Hero translation={ t } />
                {/* Line animate */}
                <AnimateLine />
                <section style={{ height: "100vh" }}></section>
            </Container>
        </>
    )
}

export { HomeView }