import * as yup from 'yup';
import {FIELD_NAMES} from "@/utils/variables";

export const fullName_schema: any = yup.string().required('Field is required');

export const email_schema: any = yup.string().email('Invalid field. Should be: example@gmail.com').required('Field is required');

export const telegram_channel_schema: any = yup.string().required('Field is required');

export const password_schema: any = yup.string().required('Field is required');

export const trader_schema: any = yup.object().shape({
    [FIELD_NAMES.FULL_NAME]: fullName_schema,
    [FIELD_NAMES.EMAIL]: email_schema,
    [FIELD_NAMES.TG_CHANNEL_NAME]: telegram_channel_schema,
    [FIELD_NAMES.PASSWORD]: password_schema,
    [FIELD_NAMES.CONFIRM_PASSWORD]: password_schema,
});