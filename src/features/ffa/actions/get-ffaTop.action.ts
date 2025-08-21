import { blootcraftApi } from "@/shared/api";
import { FfaTopResponseInterface } from "../interfaces";

const getFfaTop = async ():Promise<FfaTopResponseInterface> => {

    const { data } = await blootcraftApi.get<FfaTopResponseInterface>('/ffa-diamond/ranking');

    return data;
}

export { getFfaTop }