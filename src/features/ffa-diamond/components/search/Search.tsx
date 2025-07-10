import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button, Input } from "@/shared/components";

import styles from './search.module.css';
import icon from '@/config/assets/svg/icon-search.svg';

type Props = {
    search: string;
    setSearch: (search: string)=> void;
}

const Search = ({ search, setSearch }:Props):JSX.Element => {
    const { t } = useTranslation('ffaDiamond');
    const [localSearch, setLocalSearch] = useState<string>(search);
    
    return (
        <div className={ styles.search }>
            <Input 
                placeholder={ t('searchPlaceholder') }
                onChange={ (e)=> setLocalSearch(e.target.value) }
                value={ localSearch }
            />
            <Button 
                text={ t('searchButton') }
                style="secondary"
                className={ styles.searchButton }   
                icon={ icon }             
                onClick={ ()=> setSearch(localSearch) }
            />
        </div>
    )
}

export { Search }