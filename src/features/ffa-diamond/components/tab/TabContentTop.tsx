import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { fadeUpMotion } from '@/shared/motion';
import { Container } from '@/shared/components';
import { Transalations } from '@/shared/interfaces';
import { FfaUsersItemInterface } from "../../interfaces";
import { TabContentTopItem } from './TabContentTopItem';

import styles from './tab.module.css';
import iconSkull from '@/config/assets/svg/icon-skull.svg';
import iconSword from '@/config/assets/svg/icon-sword.svg';
import { TabContentTopButton } from './TabContentTopButton';
import { useTabStore } from '../../stores';

type Props = {
    translation: Transalations;
}

const TabContentTop = ({ translation }:Props):JSX.Element => {
    const currentCategory = useTabStore(state => state.currentCategory);

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
                <motion.article 
                    className={ styles.tabContentTopBlock }
                    drag="x"
                    dragConstraints={{ left: -840, right: 0 }}
                >
                    {users.map((data, index)=>(
                        <TabContentTopItem data={ data } index={ index } key={ index } />
                    ))}
                </motion.article>
            </motion.section>
        </Container>
    )
}

/**
 * ==============   Data   ================
 */

const users: FfaUsersItemInterface[] = [
    {
        id:          1,
        uuid:        '2',
        name:        'Jhosuapp',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Rompepitas',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Killer',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Sqmmo',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'Hakeka',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Emy',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Bbyad',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'deep',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Jhosuapp',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Jhosuapp',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Jhosuapp',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
]


export { TabContentTop }