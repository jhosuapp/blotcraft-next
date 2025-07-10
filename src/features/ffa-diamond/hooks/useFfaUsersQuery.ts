import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import { getFfaUsers } from "../actions";

const useFfaUsers = () => {

    const [page, setPage] = useState<number>(1);
    const [search, setSearch] = useState<string>('');

    const ffaUsersQuery = useQuery({
        queryKey: ['ffaUsers', { page, search }],
        queryFn:  ()=> getFfaUsers(page, search),
        staleTime: 60 * 1000,
        refetchOnWindowFocus: true,
        retry: false
    });

    useEffect(()=>{
        setPage(1);
    },[search]);

    return {
        ffaUsersQuery,
        page,
        setPage,
        search,
        setSearch
    }
}

export { useFfaUsers }