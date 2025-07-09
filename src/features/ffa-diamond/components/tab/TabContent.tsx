import { easeIn, motion } from 'framer-motion';

import { Container, Feedback, LoaderSecondary } from "@/shared/components";
import { Icategories } from "../../interfaces";
import { useTabStore } from "../../stores";

import styles from './tab.module.css';
import { Pager } from "../pager/Pager";
import { useFfaUsers } from "../../hooks";
import { TabContentItem } from "./TabContentItem";

type Props = {
    category: Icategories;
}

const TabContent = ({ category }:Props):JSX.Element => {
    const currentCategory = useTabStore( state => state.currentCategory );
    const { page, setPage, ffaUsersQuery }  = useFfaUsers({ search: '' });
    
    // Catch loading
    if(ffaUsersQuery.isLoading){
        return (
            <LoaderSecondary 
                className='!min-h-[700px]'
            />
        )
    }

    // Catch error
    if(ffaUsersQuery.isError){
        return (
            <Feedback
                className='!min-h-[700px]'
                texFeedback='Killer es gay y por eso no ha cargado la base de datos'
            />
        )
    }

    return (
        <Container>

            <motion.section className={ styles.tabContent }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.25,
                    ease: easeIn
                }}
            >
                <article className={ styles.tabContentHead }>
                    <div className={ styles.tabContentHeadItem }>
                        <p>Name</p>
                        <p>Kills</p>
                        <p>Deaths</p>
                        <p>KillStreak</p>
                        <p>KDR</p>
                    </div>
                </article>
                <article className={ styles.tabContentBody }>
                    {ffaUsersQuery.data && ffaUsersQuery.data.data.map((data, index)=>(
                        <TabContentItem data={data} key={index} />
                    ))}
                </article>
            </motion.section>
            <motion.section className={styles.tabContentPager}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.25,
                    ease: easeIn
                }}
            >
                <Pager
                    totalPages={ffaUsersQuery.data.pagination.totalPages}
                    currentPage={page}
                    onPageChange={(page) => setPage(page)}
                />
            </motion.section>
        </Container>
    )
}

export { TabContent }