'use client';

import { Formik, Form } from 'formik';
import { CustomInput } from '@/components/CustomInput';
import { FIELD_NAMES } from '@/utils/variables';
import { trader_schema } from '@/utils/validations';

const initTraderValues = {
  [FIELD_NAMES.FULL_NAME]: '',
  [FIELD_NAMES.EMAIL]: '',
  [FIELD_NAMES.TG_CHANNEL_NAME]: '',
  [FIELD_NAMES.PASSWORD]: '',
};

export default function Page() {
  const handleSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <div>
      <Formik initialValues={initTraderValues} onSubmit={handleSubmit} validationSchema={trader_schema}>
        <Form>
          <CustomInput
            label={'Name'}
            placeholder={'Jon Smith'}
            field_Id={FIELD_NAMES.FULL_NAME}
            field_Name={FIELD_NAMES.FULL_NAME}
          />

          <CustomInput
            label={'Email'}
            placeholder={'example@gmail.com'}
            field_Id={FIELD_NAMES.EMAIL}
            field_Name={FIELD_NAMES.EMAIL}
          />

          <CustomInput
            label={'Telegram channel name'}
            placeholder={'Telegram channel name'}
            field_Id={FIELD_NAMES.TG_CHANNEL_NAME}
            field_Name={FIELD_NAMES.TG_CHANNEL_NAME}
          />

          <CustomInput
            label={'Password'}
            placeholder={'*******'}
            field_Id={FIELD_NAMES.PASSWORD}
            field_Name={FIELD_NAMES.PASSWORD}
          />

          <CustomInput
            label={'Confirm Password'}
            placeholder={'*******'}
            field_Id={FIELD_NAMES.CONFIRM_PASSWORD}
            field_Name={FIELD_NAMES.CONFIRM_PASSWORD}
          />

          <button type={'submit'}>submit</button>
        </Form>
      </Formik>
    </div>
  );
}
