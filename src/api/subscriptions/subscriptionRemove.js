/* @flow */
import type { ApiResponse, Auth } from '../../types';
import { apiDelete } from '../apiFetch';

export default (auth: Auth, subscriptions: string[], principals?: string[]): Promise<ApiResponse> =>
  apiDelete(auth, 'users/me/subscriptions', res => res, {
    subscriptions: JSON.stringify(subscriptions),
    principals: JSON.stringify(principals),
  });
