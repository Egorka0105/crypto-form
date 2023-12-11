import { toastMessage } from '@/utils/helpers/toasttify';
import { API } from '@/utils/api';
import { AxiosResponse } from 'axios';

export const fetchFormSubmitData = async <T, E extends string>(
  endpoint: E,
  values: T,
  additionalFields?: Record<string, any>
): Promise<AxiosResponse<any>> => {
  const requestData = {
    ...values,
    ...additionalFields,
  };
  try {
    const res = await API.post(endpoint, requestData);
    if (res.status === 200) await toastMessage('Data sent successfully', 'success');
    return res;
  } catch (e: any) {
    await toastMessage(e.message, 'error');
    throw e;
  }
};
