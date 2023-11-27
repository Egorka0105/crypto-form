import * as yup from 'yup';
import { FIELD_NAMES } from '@/utils/variables';

export const fullName_schema: any = yup.string().required('Field is required');

export const email_schema: any = yup
  .string()
  .email('Invalid field. Should be: example@gmail.com')
  .required('Field is required');

export const telegram_channel_schema: any = yup.string().required('Field is required');

export const password_schema: any = yup
  .string()
  .min(6, 'The password must contain at least 6 characters')
  .required('Field is required');

export const password_confirm_schema: any = yup
  .string()
  .oneOf([yup.ref('password')], 'Passwords do not match')
  .required('Field is required');

export const trader_first_step_schema: any = yup.object().shape({
  recipient: email_schema,
});

export const trader_schema: any = yup.object().shape({
  [FIELD_NAMES.FULL_NAME]: fullName_schema,
  [FIELD_NAMES.EMAIL]: email_schema,
  [FIELD_NAMES.TG_CHANNEL_NAME]: telegram_channel_schema,
  [FIELD_NAMES.PASSWORD]: password_schema,
  [FIELD_NAMES.CONFIRM_PASSWORD]: password_schema,
});

export const admin_schema: any = yup.object().shape({
  [FIELD_NAMES.FULL_NAME]: fullName_schema,
  [FIELD_NAMES.EMAIL]: email_schema,
  [FIELD_NAMES.PASSWORD]: password_schema,
  [FIELD_NAMES.CONFIRM_PASSWORD]: password_confirm_schema,
});

export const support_schema: any = yup.object().shape({
  [FIELD_NAMES.FULL_NAME]: fullName_schema,
  [FIELD_NAMES.EMAIL]: email_schema,
  [FIELD_NAMES.PASSWORD]: password_schema,
  [FIELD_NAMES.CONFIRM_PASSWORD]: password_schema,
});

export const login_schema: any = yup.object().shape({
  [FIELD_NAMES.EMAIL]: email_schema,
  [FIELD_NAMES.PASSWORD]: password_schema,
});

export const forgot_password_schema: any = yup.object().shape({
  [FIELD_NAMES.EMAIL]: email_schema,
});

export const reset_password_schema: any = yup.object().shape({
  [FIELD_NAMES.PASSWORD]: password_schema,
  [FIELD_NAMES.CONFIRM_PASSWORD]: password_confirm_schema,
});
