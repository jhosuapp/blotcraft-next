import { blootcraftApi } from "@/shared/api";
import { FfaUsersResponseInterface } from "../interfaces";
import { sleep } from "@/shared/utils";

const getFfaUsers = async (
    page: number,
    search: string,
):Promise<FfaUsersResponseInterface> => {

    await sleep(1500);

    const params = new URLSearchParams();

    if(search !== ''){
        params.append('search', search);
    }

    params.append('page', `${page}`);

    const { data } = await blootcraftApi.get<FfaUsersResponseInterface>('/ffa',{
        params
    });

    return data;
}

export { getFfaUsers }