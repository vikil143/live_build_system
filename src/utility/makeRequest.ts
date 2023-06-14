import axios, {AxiosResponse} from 'axios';

let BASEURL = 'https://jsonplaceholder.typicode.com/';

type Method = 'GET' | 'POST';

interface MakeRequestParams {
  url: string;
  method: Method;
  data?: object;
}

export type MakeRequestResponse<T> = Promise<AxiosResponse<T>>;

const makeRequest = async <T extends any>({
  method,
  url,
  data,
}: MakeRequestParams): MakeRequestResponse<T> => {
  const instance = axios.create({
    baseURL: BASEURL,
    method,
  });
  return await instance.request({
    url,
    // I tried stringfy and normal atlast please check and give feedback
    // data: data !== undefined ? JSON.stringify(data) : {},
    data: data,
  });
};

export default makeRequest;
