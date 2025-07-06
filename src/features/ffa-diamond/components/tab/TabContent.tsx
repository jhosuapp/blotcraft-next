import Image from "next/image";

import { Container } from "@/shared/components";
import { Icategories } from "../../interfaces";
import { useTabStore } from "../../stores";

import styles from './tab.module.css';
import steve from '@/config/assets/png/steve.png';
import { Pager } from "../pager/Pager";
import { useState } from "react";

type Props = {
    category: Icategories;
}

const TabContent = ({ category }:Props):JSX.Element => {
    const currentCategory = useTabStore( state => state.currentCategory );
    const [currentPage, setCurrentPage] = useState<number>(1);

    return (
        <Container>
            <section className={ styles.tabContent }>
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
                    <div className={ styles.tabContentBodyItem }>
                        <p>
                            <Image src={ steve } alt="steve head" />
                            Jhosuapp
                        </p>
                        <p>100</p>
                        <p>100</p>
                        <p>50</p>
                        <p>1</p>
                    </div>
                </article>
            </section>
            <section className={styles.tabContentPager}>
                <Pager
                    totalPages={2456}
                    currentPage={currentPage}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </section>
        </Container>
    )
}

export { TabContent }