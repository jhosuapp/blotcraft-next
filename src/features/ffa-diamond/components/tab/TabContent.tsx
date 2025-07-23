import { useTranslation } from 'react-i18next'; 
import { motion } from 'framer-motion';

import { Container, Feedback, LoaderSecondary } from "@/shared/components";

import styles from './tab.module.css';
import { Pager } from "../pager/Pager";
import { useFfaUsers } from "../../hooks";
import { TabContentItem } from "./TabContentItem";
import { Search } from '../search/Search';
import { fadeInMotion } from '@/shared/motion';
import { Transalations } from '@/shared/interfaces';

type Props = {
    translation: Transalations;
}

const TabContent = ({ translation }:Props):JSX.Element => {
    const { page, setPage, ffaUsersQuery, search, setSearch }  = useFfaUsers();

    // Catch loading
    if(ffaUsersQuery.isLoading){
        return (
            <Container className={ styles.tabContentParent }>
                <LoaderSecondary 
                    className='!min-h-[500px] bg-secondary rounded-b-md'
                />
            </Container>
        )
    }

    // Catch error
    if(ffaUsersQuery.isError){
        return (
            <Container className={ styles.tabContentParent }>
                <Feedback
                    className='!min-h-[500px] bg-secondary'
                />
            </Container>
        )
    }

    // Catch not found users
    if(!ffaUsersQuery.data.data.length || !ffaUsersQuery.data.data){
        return (
            <Container className={ styles.tabContentParent }>
                <Feedback
                    className='!min-h-[500px]'
                    texFeedback={ `${ translation('notResults') } '${ search }'` }
                />
            </Container>
        )
    }

    return (
        <Container className={ styles.tabContentParent }>
            <motion.section className={ styles.tabContent }
                {...fadeInMotion(0.25)} 
            >
                <article className={ styles.tabContentHead }>
                    <div className={ styles.tabContentHeadItem }>
                        <p>{translation('userName')}</p>
                        <p>{translation('userKills')}</p>
                        <p>{translation('userDeaths')}</p>
                        <p>{translation('userKS')}</p>
                        <p>{translation('userKDR')}</p>
                    </div>
                </article>
                <article className={ styles.tabContentBody }>
                    {ffaUsersQuery.data && ffaUsersQuery.data.data.map((data, index)=>(
                        <TabContentItem data={data} index={ index } key={index} />
                    ))}
                </article>
            </motion.section>
            <motion.section className={styles.tabContentPager}
                {...fadeInMotion(0.25)}
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