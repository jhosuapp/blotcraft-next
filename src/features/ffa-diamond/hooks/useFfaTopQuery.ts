import { useQuery } from "@tanstack/react-query"
import { getFfaTop } from "../actions";

const DataDefault = {
    id:          1,
    uuid:        '2',
    name:        'Jhosuapp',
    dateCreated: 'string',
    last_online: 'string',
    kitData:     'string',
    kills:       10,
    deaths:      10,
    killStreak:  10,
    bestStreak:  10,
    time:        'string',
    weather:     false,
    killsVisibility: 'string',
}

const useFfaTop = () => {
    const ffaTopQuery = useQuery({
        queryKey: ['ffaTop'],
        queryFn:  ()=> getFfaTop(),
        staleTime: 60 * 1000,
        refetchOnWindowFocus: true,
        retry: false,
        placeholderData: {
            deaths: [{ ...DataDefault }],
            kills: [{ ...DataDefault }],
            ks: [{ ...DataDefault }]
        }
    });

    return {
        ffaTopQuery,
    }
}

export { useFfaTop }