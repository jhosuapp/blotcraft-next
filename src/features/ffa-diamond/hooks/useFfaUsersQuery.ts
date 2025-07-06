import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import { getFfaUsers } from "../actions";

type Props = {
    search: string;
}

const useFfaUsers = ({ search }:Props) => {

    const [page, setPage] = useState<number>(1);

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
        setPage
    }
}

export { useFfaUsers }