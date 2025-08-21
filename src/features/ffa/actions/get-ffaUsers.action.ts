import { blootcraftApi } from "@/shared/api";
import { FfaUsersResponseInterface, IrequestType } from "../interfaces";

const getFfaUsers = async (
    page: number,
    search: string,
    requestType: IrequestType,
):Promise<FfaUsersResponseInterface> => {
    const params = new URLSearchParams();

    if(search !== ''){
        params.append('search', search);
    }

    params.append('page', `${page}`);

    const { data } = await blootcraftApi.get<FfaUsersResponseInterface>(`/${requestType}`,{
        params
    });

    return data;
}

export { getFfaUsers }