import { toast, ToastOptions, TypeOptions } from 'react-toastify';

export const toastMessage = async (
  message: string,
  type: TypeOptions,
  delay?: number,
  arg?: ToastOptions
): Promise<void> => {
  toast(message, {
    position: 'top-right',
    autoClose: 2000,
    type,
    delay: delay || 0,
    style: {
      background: 'var(--toastify-color-light)',
      borderLeft: `4px solid var(--toastify-color-${type})`,
    },
    pauseOnHover: true,
    ...arg,
  });
};
