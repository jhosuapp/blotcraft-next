import { easeIn, motion } from 'framer-motion';

import { Container, Feedback, LoaderSecondary } from "@/shared/components";
import { Icategories } from "../../interfaces";
import { useTabStore } from "../../stores";

import styles from './tab.module.css';
import { Pager } from "../pager/Pager";
import { useFfaUsers } from "../../hooks";
import { TabContentItem } from "./TabContentItem";
import { Search } from '../search/Search';

type Props = {
    category: Icategories;
}

const TabContent = ({ category }:Props):JSX.Element => {
    const currentCategory = useTabStore( state => state.currentCategory );
    const { page, setPage, ffaUsersQuery, search, setSearch }  = useFfaUsers();
    
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
            />
        )
    }

    // Catch error
    if(!ffaUsersQuery.data.data.length || !ffaUsersQuery.data.data){
        return (
            <Container className={ styles.tabContentParent }>
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        ease: easeIn
                    }}
                >
                    <Search 
                        search={ search }
                        setSearch={ setSearch }
                    />
                </motion.section>
                <Feedback
                    className='!min-h-[500px]'
                    texFeedback={ `No hemos encontrado resultados para '${ search }'` }
                />
            </Container>
        )
    }

    return (
        <Container className={ styles.tabContentParent }>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.25,
                    ease: easeIn
                }}
            >
                <Search 
                    search={search}
                    setSearch={ setSearch }
                />
            </motion.section>
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
                        <p>Nombre</p>
                        <p>Asesinatos</p>
                        <p>Muertes</p>
                        <p>Racha</p>
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