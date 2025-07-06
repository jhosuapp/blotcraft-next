import { Icategories } from '../../interfaces';
import { useTabStore } from '../../stores';
import styles from './tab.module.css';

type Props = {
    text: string;
    category: Icategories;
}

const TabButton = ({ text, category }:Props):JSX.Element => {
    const setCurrentCategory = useTabStore( state => state.setCurrentCategory );
    const currentCategory = useTabStore( state => state.currentCategory );

    return (
        <button 
            onClick={()=> setCurrentCategory(category) }
            className={ `${styles.tabButton} ${currentCategory == category && styles.tabButtonActive}` }
        >
            { text }
        </button>
    )
}

export { TabButton }