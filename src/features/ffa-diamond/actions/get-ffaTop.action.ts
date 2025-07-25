import { blootcraftApi } from "@/shared/api";
import { FfaTopResponseInterface } from "../interfaces";
import { sleep } from "@/shared/utils";

const getFfaTop = async ():Promise<FfaTopResponseInterface> => {

    await sleep(1500);

    const { data } = await blootcraftApi.get<FfaTopResponseInterface>('/ffa/ranking');

    return data;
}

export { getFfaTop }