import request from "./request";
import {CustomSuccessData, Get} from "./axiosType";


const get: Get = async (url, params, config) => {
    config = {
        method: 'get',
        url: url
    };
    if (params) {
        config.params = params;
    }
    const response = await request(config);
    return response.data;
}

export {get};

interface getDirLsParam {
    path: string
}

export async function getDirLs(params: getDirLsParam): Promise<CustomSuccessData<any>> {
    return await get('/api/getDirLs', params)
}
