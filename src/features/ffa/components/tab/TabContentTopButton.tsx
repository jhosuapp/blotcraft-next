import Image from 'next/image';
import { motion } from 'framer-motion';

import { Icategories } from '../../interfaces';
import { useTabStore } from '../../stores';

type Props = {
    src: string;
    category: Icategories;
}

const TabContentTopButton = ({ src, category }:Props):JSX.Element => {
    const setCurrentCategory = useTabStore(state => state.setCurrentCategory);
    const currentCategory = useTabStore(state => state.currentCategory);
    const isEnable = currentCategory === category;

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={ ()=> setCurrentCategory(category) }
            className={ `${isEnable && '!bg-primary'}` }
        >
            <Image src={ src } alt='Icon' />
        </motion.button>
    )
}

export { TabContentTopButton }