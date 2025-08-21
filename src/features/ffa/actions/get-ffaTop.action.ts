import { blootcraftApi } from "@/shared/api";
import { FfaTopResponseInterface, IrequestType } from "../interfaces";

const getFfaTop = async ( requestType:IrequestType ):Promise<FfaTopResponseInterface> => {
    const { data } = await blootcraftApi.get<FfaTopResponseInterface>(`/${requestType}/ranking`);

    return data;
}

export { getFfaTop }