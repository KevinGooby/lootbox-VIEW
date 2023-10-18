import axios, { AxiosResponse, CancelToken } from 'axios';

type ApiCallParams = {
  path: string;
  options?: HeadersInit;
  params?: Record<string, any>;
  cancelToken?: CancelToken;
  body?: Record<string, any>;
  headers?: Record<string, string>;
};

type NoBodyApiCallParams = Omit<ApiCallParams, 'body'>;

type ApiCall<T extends ApiCallParams> = (params: T) => Promise<AxiosResponse>;

// TODO: Implement it as bearer token
const apiCallWrapper =
  <T extends ApiCallParams>(fn: ApiCall<T>) =>
  async (params: T) => {
    try {
      const headers = {
        Authorization: 'Bearer',
      };

      const result = await fn({
        ...params,
        headers: { ...params.headers },
      });

      return result;
    } catch (err: Error | any) {
      console.log('test: err:', err);

      return err.response;
    }
  };

export const get = apiCallWrapper<NoBodyApiCallParams>(
  ({ headers, path, params, cancelToken }) =>
    axios.get(path, {
      params,
      cancelToken,
      headers,
      withCredentials: true,
    })
);

export const post = apiCallWrapper<ApiCallParams>(
  ({ headers, path, body, params }) =>
    axios.post(path, body, { params, headers, withCredentials: true })
);

export const put = apiCallWrapper<ApiCallParams>(({ headers, path, body }) =>
  axios.put(path, body, { headers, withCredentials: true })
);

export const patch = apiCallWrapper<ApiCallParams>(
  ({ headers, path, body, params }) =>
    axios.patch(path, body, { params, headers, withCredentials: true })
);

export const authApiDelete = apiCallWrapper<NoBodyApiCallParams>(
  ({ headers, path }) => axios.delete(path, { headers, withCredentials: true })
);
