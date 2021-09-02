import { AxiosRequestConfig } from 'axios';

/**
 * 网络请求响应格式，T 是具体的接口返回类型数据
 */
interface CustomSuccessData<T> {
  code: number;
  msg?: string;
  message?: string;
  data?: T;
  [keys: string]: any;
}

/**
 * Get请求返回类型
 */
interface Get {
  <T>(url: string, params?: string | object, config?: AxiosRequestConfig): Promise<
    CustomSuccessData<T>
  >;
}

/**
 * Post请求返回类型
 */
interface Post {
  <T>(url: string, params?: string | object, config?: AxiosRequestConfig): Promise<
    CustomSuccessData<T>
  >;
}

/**
 * Patch请求返回类型
 */
interface Patch {
  <T>(url: string, params?: string | object, config?: AxiosRequestConfig): Promise<
    CustomSuccessData<T>
  >;
}

/**
 * Delete请求返回类型
 */
interface Delete {
  <T>(url: string, params?: string | object, config?: AxiosRequestConfig): Promise<
    CustomSuccessData<T>
  >;
}

export type { CustomSuccessData, Get, Post, Patch, Delete };