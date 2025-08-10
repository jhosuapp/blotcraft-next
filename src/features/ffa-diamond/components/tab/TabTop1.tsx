import { motion } from "framer-motion";
import { Skin3d } from "@/shared/components";

import styles from './tab.module.css';
import { CrownIcon } from "@/config/assets/icon";
import { Transalations } from "@/shared/interfaces";
import { useFfaUsers } from "../../hooks";

type Props = {
    translation: Transalations;
}

const TabTop1 = ({ translation }:Props):JSX.Element => {
    const { ffaUsersQuery }  = useFfaUsers();

    // Catch error
    if(ffaUsersQuery.isError){
        return (
            <>
            </>
        )
    }

    const data = ffaUsersQuery?.data?.data[0] ?? null; 
    const kdr = data?.kills / data?.deaths;
    const formattedKDR = parseFloat(kdr.toFixed(2));
    
  
    return (
        <div className={ styles.tabTop1 }>
            <div className={ styles.tabTop1__block }>
                <CrownIcon />
                <motion.span
                    className={ styles.tabTop1__title }
                    animate={{
                        backgroundImage: [
                        "linear-gradient(45deg, #ff8a00, #e52e71)",
                        "linear-gradient(45deg, #e52e71, #6617cb)",
                        "linear-gradient(45deg, #6617cb, #00cc99)",
                        "linear-gradient(45deg, #00cc99, #ff8a00)",
                    ],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "reverse"
                    }}
                >
                    1. { data?.name ?? translation('loading') }
                </motion.span>
            </div>
            <Skin3d 
                walk
                username={ data?.name ?? 'jhosuapp' }
                autoRotate={ false }
            />
            <div className={ `${styles.tabTop1__info} ${styles.tabContentTopModal__info}` }>
                <p>
                    <span>{ translation('userPoints') }:</span>
                    <span>{ data?.points ?? translation('loading') }</span>
                </p>
                <p>
                    <span>{ translation('userKills') }:</span>
                    <span>{ data?.kills ?? translation('loading') }</span>
                </p>
                <p>
                    <span>{ translation('userDeaths') }:</span>
                    <span>{ data?.deaths ?? translation('loading') }</span>
                </p>
                <p>
                    <span>{ translation('userKDR') }:</span>
                    <span>
                    {(() => {
                        if (data?.deaths === 0) return '0';
                        if (typeof formattedKDR === 'number' && !isNaN(formattedKDR)) {
                            return formattedKDR;
                        }
                        return translation('loading');
                    })()}
                    </span>
                </p>
                <p>
                    <span>{ translation('userKS') }:</span>
                    <span>{ data?.killStreak ?? translation('loading') }</span>
                </p>
            </div>
        </div>
    )
}

export { TabTop1 }
