import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { fadeUpMotion } from '@/shared/motion';
import { Container, Feedback, LoaderSecondary } from '@/shared/components';
import { Transalations } from '@/shared/interfaces';
import { FfaUsersItemInterface } from "../../interfaces";
import { TabContentTopItem } from './TabContentTopItem';

import styles from './tab.module.css';
import iconSkull from '@/config/assets/svg/icon-skull.svg';
import iconSword from '@/config/assets/svg/icon-sword.svg';
import { TabContentTopButton } from './TabContentTopButton';
import { useTabStore } from '../../stores';
import { useFfaTop } from '../../hooks';

type Props = {
    translation: Transalations;
}

const TabContentTop = ({ translation }:Props):JSX.Element => {
    const currentCategory = useTabStore(state => state.currentCategory);
    const { ffaTopQuery } = useFfaTop();

    console.log(ffaTopQuery.data);

    return (
        <Container className={ styles.tabContentTopParent }>
            <motion.section 
                {...fadeUpMotion(0.54, 0.16)}
                className={ styles.tabContentTop }
            >   
                <article className={ styles.tabContentTopTitle }>
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={currentCategory}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            Top 10 {currentCategory}
                        </motion.h2>
                    </AnimatePresence>
                    <div>
                        <TabContentTopButton 
                            src={ iconSkull } 
                            category='deaths'
                        />
                        <TabContentTopButton 
                            src={ iconSword } 
                            category='kills'
                        />
                        <TabContentTopButton 
                            src={ iconSkull } 
                            category='ks'
                        />
                    </div>
                </article>
                <AnimatePresence mode="wait">
                    <motion.article 
                        key={ ffaTopQuery.data[currentCategory][0].id }
                        className={ styles.tabContentTopBlock }
                        drag="x"
                        dragConstraints={{ left: -840, right: 0 }}
                    >
                        {ffaTopQuery.data[currentCategory].map((data, index)=>(
                            <TabContentTopItem data={ data } index={ index } key={ `${index}-${data.id}` } />
                        ))}
                    </motion.article>
                </AnimatePresence>
            </motion.section>
        </Container>
    )
}

export { TabContentTop }