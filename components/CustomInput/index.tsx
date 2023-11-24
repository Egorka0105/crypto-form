'use client';

import { ChangeEvent, FC, FocusEvent, SyntheticEvent, useMemo, useState } from 'react';
import { Field, FormikContextType, useFormikContext } from 'formik';
import { useDebouncedCallback } from 'use-debounce';
import styles from './index.module.scss';

interface ICustomInput {
  label: string;
  placeholder: string;
  field_Id: string;
  field_Name: string;
  type?: string;
}

export const CustomInput: FC<ICustomInput> = ({ label, placeholder, field_Id, field_Name, type = 'text', ...rest }) => {
  const [value, setValue] = useState('');
  const { errors, setFieldValue }: FormikContextType<any> = useFormikContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  };

  const handleBlur = () => {
    setFieldValue(field_Name, value);
  };

  return (
    <div className={styles.input_wrapper}>
      <label className={styles.label} htmlFor={field_Id}>
        {label}
      </label>
      <Field
        className={styles.input}
        value={value}
        name={field_Name}
        type={type}
        id={field_Id}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {errors && <span className={styles.error}>{errors[field_Name] as string}</span>}
    </div>
  );
};
