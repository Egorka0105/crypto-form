'use client';

import { Formik, Form } from 'formik';
import { CustomInput } from '@/components/CustomInput';
import { FIELD_NAMES } from '@/utils/variables';
import { admin_schema } from '@/utils/validations';

const initAdminValues = {
  [FIELD_NAMES.FULL_NAME]: '',
  [FIELD_NAMES.EMAIL]: '',
  [FIELD_NAMES.TG_CHANNEL_NAME]: '',
  [FIELD_NAMES.PASSWORD]: '',
  [FIELD_NAMES.CONFIRM_PASSWORD]: '',
};

export default function Page() {
  const handleSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <div>
      <Formik initialValues={initAdminValues} onSubmit={handleSubmit} validationSchema={admin_schema}>
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