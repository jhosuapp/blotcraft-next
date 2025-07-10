import { Button, Input } from "@/shared/components";

import styles from './search.module.css';
import icon from '@/config/assets/svg/icon-search.svg';
import { useState } from "react";

type Props = {
    search: string;
    setSearch: (search: string)=> void;
}

const Search = ({ search, setSearch }:Props):JSX.Element => {
    const [localSearch, setLocalSearch] = useState<string>(search);
    
    return (
        <div className={ styles.search }>
            <Input 
                placeholder="Search by name"
                onChange={ (e)=> setLocalSearch(e.target.value) }
                value={ localSearch }
            />
            <Button 
                text={'Buscar'}
                style="secondary"
                className={ styles.searchButton }   
                icon={ icon }             
                onClick={ ()=> setSearch(localSearch) }
            />
        </div>
    )
}

export { Search }