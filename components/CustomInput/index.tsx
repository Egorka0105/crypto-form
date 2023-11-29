'use client';

import { ChangeEvent, FC, HTMLProps, useState } from 'react';
import { Field, FormikContextType, useFormikContext } from 'formik';
import { clsx } from 'clsx';
import { CheckPasswordVisible } from '@/components/CheckPasswordVisible';
import { FIELD_NAMES, FIELD_TYPES } from '@/utils/variables';
import styles from './index.module.scss';

interface ICustomInput {
  label: string;
  placeholder: string;
  field_Id: string;
  field_Name: string;
  type?: string;
}

export const CustomInput: FC<ICustomInput> = ({ label, placeholder, field_Id, field_Name, type = 'text', ...rest }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { errors, setFieldValue }: FormikContextType<any> = useFormikContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(field_Name, e.target.value);
  };

  const handleIsPasswordVisible = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className={styles.input_wrapper}>
      <label className={styles.label} htmlFor={field_Id}>
        {label}
      </label>

      <div className={styles.field}>
        <Field
          className={clsx(styles.input, { error: errors[field_Name] })}
          name={field_Name}
          type={!isPasswordVisible ? type : FIELD_TYPES.TEXT}
          id={field_Id}
          placeholder={placeholder}
          onChange={handleChange}
          autoComplete="off"
        />

        {(field_Name === FIELD_NAMES.PASSWORD || field_Name === FIELD_NAMES.CONFIRM_PASSWORD) && (
          <CheckPasswordVisible toggleVisible={handleIsPasswordVisible} isVisible={isPasswordVisible} />
        )}
      </div>

      {errors && <span className={'input_error'}>{errors[field_Name] as string}</span>}
    </div>
  );
};
