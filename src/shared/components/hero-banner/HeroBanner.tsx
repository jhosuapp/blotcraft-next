import Image, { StaticImageData } from "next/image";
import { motion } from 'framer-motion';

import { Container } from "../container/Container";
import styles from './heroBanner.module.css';
import { fadeUpHeroBanner } from "./heroBanner.motion";

type Props = {
    title: string;
    subtitle: string;
    categories: string[];
    textLink: string;
    image: StaticImageData;
    altImage: string;
}

const HeroBanner = ({ title, subtitle, categories, textLink, image, altImage }:Props):JSX.Element => {
    return (
        <section className="relative overflow-hidden">
            <Container className={ styles.banner }>
                <article className={ styles.bannerContent }>
                    <motion.h1 
                        className={ styles.bannerTitle }
                        { ...fadeUpHeroBanner(0.55, 0.15) }
                    >
                        { title }
                    </motion.h1>
                    <motion.h2 
                        className={ styles.bannerSubititle }
                        { ...fadeUpHeroBanner(0.57, 0.13) }
                    >
                        { subtitle }
                    </motion.h2>
                    <div className={ styles.bannerFlex }>
                        <motion.ul 
                            className={ styles.bannerCategories }
                            { ...fadeUpHeroBanner(0.59, 0.11) }
                        >
                            {categories.map((data, index)=>(
                                <li key={index}>{ data }</li> 
                            ))}
                        </motion.ul>
                        <motion.div 
                            className={ styles.bannerLink }
                            { ...fadeUpHeroBanner(0.59, 0.09) }
                        >
                            <a href="https://discord.com/invite/blotcraft" target="_blank" rel="noopener noreferrer">{ textLink }</a>
                        </motion.div>
                    </div>
                </article>
            </Container>
            <motion.section 
                className={ styles.bannerImage }
                { ...fadeUpHeroBanner(0.62, 0.08) }
            >
                <Image src={ image } alt={ altImage } />
            </motion.section>
        </section>
    )
}

export { HeroBanner }