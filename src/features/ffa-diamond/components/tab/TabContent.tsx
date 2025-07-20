import { useTranslation } from 'react-i18next'; 
import { easeIn, motion } from 'framer-motion';

import { Container, Feedback, LoaderSecondary } from "@/shared/components";
import { Icategories } from "../../interfaces";
import { useTabStore } from "../../stores";

import styles from './tab.module.css';
import { Pager } from "../pager/Pager";
import { useFfaUsers } from "../../hooks";
import { TabContentItem } from "./TabContentItem";
import { Search } from '../search/Search';
import { fadeInMotion } from '@/shared/motion';

type Props = {
    category: Icategories;
}

const TabContent = ({ category }:Props):JSX.Element => {
    const { t } = useTranslation('ffaDiamond');
    const currentCategory = useTabStore( state => state.currentCategory );
    const isEnable = currentCategory == category;
    const { page, setPage, ffaUsersQuery, search, setSearch }  = useFfaUsers();

    //Is enable validation
    if(!isEnable){
        return (
            <></>
        )
    }

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
                    {...fadeInMotion()}
                >
                    <Search 
                        search={ search }
                        setSearch={ setSearch }
                    />
                </motion.section>
                <Feedback
                    className='!min-h-[500px]'
                    texFeedback={ `${ t('notResults') } '${ search }'` }
                />
            </Container>
        )
    }

    return (
        <Container className={ styles.tabContentParent }>
            <motion.section
                {...fadeInMotion(0.25)}
            >
                <Search 
                    search={search}
                    setSearch={ setSearch }
                />
            </motion.section>
            <motion.section className={ styles.tabContent }
                {...fadeInMotion(0.25)} 
            >
                <article className={ styles.tabContentHead }>
                    <div className={ styles.tabContentHeadItem }>
                        <p>{t('userName')}</p>
                        <p>{t('userKills')}</p>
                        <p>{t('userDeaths')}</p>
                        <p>{t('userKS')}</p>
                        <p>{t('userKDR')}</p>
                    </div>
                </article>
                <article className={ styles.tabContentBody }>
                    {ffaUsersQuery.data && ffaUsersQuery.data.data.map((data, index)=>(
                        <TabContentItem data={data} key={index} />
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