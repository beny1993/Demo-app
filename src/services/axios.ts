import getConfig from 'next/config';
import axios, { AxiosResponse } from 'axios';
// import {getCookie, removeCookie} from "@/utils/cookie";

const { publicRuntimeConfig } = getConfig();
export const { baseURL, clientId, clientSecret } = publicRuntimeConfig;

const headers: { [key: string]: any } = {};

const axiosApiInstance = axios.create({
  baseURL,
  headers,
});


// axiosApiInstance.interceptors.request.use((req) => {
//   if (!process.browser && req.headers.common.accessToken) {
//      req.headers.Authorization = `Bearer ${req.headers.common.accessToken}`;
//   } else if (getCookie('accessToken')) {
//     req.headers.Authorization = `Bearer ${getCookie('accessToken')}`;
//   }
//   return req;
// });

// axiosApiInstance.interceptors.response.use(
//     (response) => {
//      if (!response?.data?.success && CheckUrl) {
//         /* write error handling function here */
//         return Promise.reject(response);
//       }
//       return response;
//     },
//     async (error) => {
//       const originalRequest = error.config;
//       if (error?.response?.status === 422 && CheckRefreshUrl) {
//         const store = initializeStore();
//         store.dispatch(/* LogOut action */);
//         removeCookie('accessToken');
//         removeCookie('refreshToken');
//         await Router.push('/login');
//         return Promise.reject(error);
//       }
//       if (error?.response?.status === 422 && !originalRequest._retry) {
//         const refreshTokenResponse = await refreshToken();
//         if (refreshTokenResponse.status === 200) {
//           setCookie('accessToken', refreshTokenResponse.data.accessToken);
//           setCookie('refreshToken', refreshTokenResponse.data.refreshToken);
//           originalRequest._retry = true;
//           originalRequest.headers.Authorization = `Bearer ${token}`;
//           const originResponse = await axios(originalRequest);
//           return originResponse;
//         }
//         return Promise.reject(error);
//       }
//       errorHandling(error);
//       return Promise.reject(error.response);
//     },
// );

export async function post(url, body) {
  return axiosApiInstance
    .post(url, body)
    .then((res) => res)
    .catch((error) => error);
}

export async function get(url) {
  return axiosApiInstance
    .get(url)
    .then((res) => res)
    .catch((error) => error);
}

export async function put(url, body) {
  return axiosApiInstance
    .put(url, body)
    .then((res) => res)
    .catch((error) => error);
}

export async function remove(url, body) {
  return axiosApiInstance
    .put(url, body)
    .then((res) => res)
    .catch((error) => error);
}

export const fetcher = (url: string) =>
  axiosApiInstance
    .get(url)
    .then((res: AxiosResponse) => res.data)
    .catch((error) => error);

export default axiosApiInstance;
