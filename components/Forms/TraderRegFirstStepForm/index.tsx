'use client';

import { useState } from 'react';
import { AUTH_URL, FIELD_NAMES, MOCK_INPUT_DATA, TRADER_FIRST_STEP_INIT_VALUE } from '@/utils/variables';
import { Form, Formik } from 'formik';
import { CustomInput } from '@/components/CustomInput';
import { CustomSelect } from '@/components/CustomSelect';
import { traderType_options } from '@/utils/variables/options';
import { fetchFormSubmitData } from '@/utils/helpers/fetch-form-submit-data';
import { Loader } from '@/components';
import { trader_first_step_schema } from '@/utils/validations';

export const TraderRegFirstStepForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    const reqBodyValue = {
      [FIELD_NAMES.RECIPIENT]: values[FIELD_NAMES.RECIPIENT],
    };
    const reqHeadValue = values[FIELD_NAMES.TRADER_TYPE];

    try {
      await fetchFormSubmitData(`${AUTH_URL.REGISTRATION_TRADER_PREPARATION}?b2x=${reqHeadValue}`, reqBodyValue);
    } catch (e: any) {
      await Promise.reject(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loading ? (
        <Formik
          initialValues={TRADER_FIRST_STEP_INIT_VALUE}
          onSubmit={handleSubmit}
          validationSchema={trader_first_step_schema}
        >
          {({ isValid, values }) => (
            <Form>
              <CustomInput
                label={MOCK_INPUT_DATA.EMAIL.LABEL}
                placeholder={MOCK_INPUT_DATA.EMAIL.PLACEHOLDER}
                field_Id={FIELD_NAMES.RECIPIENT}
                field_Name={FIELD_NAMES.RECIPIENT}
              />
              <CustomSelect
                options={traderType_options}
                placeholder={'Select options'}
                label={'Trader type'}
                field_Id={FIELD_NAMES.TRADER_TYPE}
                field_Name={FIELD_NAMES.TRADER_TYPE}
              />

              <button className={'submit_btn'} type={'submit'} disabled={!isValid}>
                Send
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <Loader />
      )}
    </>
  );
};
