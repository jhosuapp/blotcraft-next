import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query"

import { getFfaUsers } from "../actions";
import { useTabStore } from "../stores";

const useFfaUsers = () => {
    const requestType = useTabStore.getState().requestType;
    const [page, setPage] = useState<number>(1);
    const [search, setSearch] = useState<string>('');

    const ffaUsersQuery = useQuery({
        queryKey: [requestType, 'ffaUsers', { page, search }],
        queryFn:  ()=> getFfaUsers(page, search, requestType),
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