import { APIRequestContext } from '@playwright/test';

export type ApiClient = {
  get: (url: string, options?: any) => Promise<any>;
  post: (url: string, data?: any, options?: any) => Promise<any>;
  put: (url: string, data?: any, options?: any) => Promise<any>;
  delete: (url: string, options?: any) => Promise<any>;
};

export const apiFixtures = {
  apiClient: async ({ request }: { request: APIRequestContext }, use: any) => {
    const client: ApiClient = {
      get: (url, options = {}) => request.get(url, options),
      post: (url, data = {}, options = {}) => request.post(url, { data, ...options }),
      put: (url, data = {}, options = {}) => request.put(url, { data, ...options }),
      delete: (url, options = {}) => request.delete(url, options)
    };

    await use(client);
  }
};
