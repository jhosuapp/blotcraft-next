import Image from "next/image";
import { motion } from 'framer-motion';

import { Container } from "@/shared/components";
import { fadeUpMotion } from "@/shared/motion";
import { Transalations } from "@/shared/interfaces";

import iconPlay from '@/config/assets/svg/icon-play.svg';
import styles from './hero.module.css';
import { HeroText } from "./HeroText";

type Props = {
    translation: Transalations;
}

const Hero = ({ translation }:Props):JSX.Element => {
    return (
        <Container className={ styles.hero }>
            {/* Stars */}
            <motion.article 
                className={ `${ styles.heroVideo__stars }  ${styles.heroVideo__scroll}` }  
                {...fadeUpMotion(0.54, 0.16)}
            >
                {Array.from({ length: 7 }).map((_, i) => (
                    <span key={i}></span>
                ))}
            </motion.article>
            {/* Iframe */}
            <motion.article 
                className={ styles.heroVideo }  
                {...fadeUpMotion(0.55, 0.15)}
            >
                <motion.iframe 
                    {...fadeUpMotion(0.56, 0.13)} 
                    className={ styles.heroVideo__iframe } 
                    loading="lazy" 
                    allow="autoplay; encrypted-media" 
                    src="https://www.youtube.com/embed/Lnezno0aG74?autoplay=1&loop=1&playlist=Lnezno0aG74&mute=1"
                />
                <div className={ styles.heroVideo__content }>
                    <HeroText
                        text="PLAY"
                        delays={['1.25s', '10s', '15.5s', '3.5s']}
                        motionConfig={fadeUpMotion(0.57, 0.11)}
                    />
                    <motion.button 
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        {...fadeUpMotion(0.58, 0.09)}
                    >
                        <Image src={ iconPlay } alt="Play blotcraft" />
                    </motion.button>
                    <HeroText
                        text="REEL"
                        delays={['1.25s', '10s', '15.5s', '3.5s']}
                        motionConfig={fadeUpMotion(0.57, 0.11)}
                    />
                </div>
            </motion.article>
            {/* Stars */}
            <motion.article 
                className={ `${ styles.heroVideo__stars }  ${styles.heroVideo__scroll}` }  
                {...fadeUpMotion(0.60, 0.07)}
            >
                <span></span>
                <span></span>
                <p>{ translation('hero.scroll') }</p>
                <span></span>
                <span></span>
            </motion.article>
        </Container>
    )
}

export { Hero }