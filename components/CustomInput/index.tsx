'use client';

import { ChangeEvent, FC } from 'react';
import { Field, FormikContextType, useFormikContext } from 'formik';
import styles from './index.module.scss';
import { clsx } from 'clsx';

interface ICustomInput {
  label: string;
  placeholder: string;
  field_Id: string;
  field_Name: string;
  type?: string;
}

export const CustomInput: FC<ICustomInput> = ({ label, placeholder, field_Id, field_Name, type = 'text', ...rest }) => {
  const { errors, setFieldValue }: FormikContextType<any> = useFormikContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFieldValue(field_Name, e.target.value);
  };

  return (
    <div className={styles.input_wrapper}>
      <label className={styles.label} htmlFor={field_Id}>
        {label}
      </label>

      <Field
        className={clsx({ error: errors[field_Name] })}
        name={field_Name}
        type={type}
        id={field_Id}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {errors && <span className={'input_error'}>{errors[field_Name] as string}</span>}
    </div>
  );
};
