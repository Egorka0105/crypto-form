import { FC, useState } from 'react';
import { FormikContextType, useFormikContext } from 'formik';
import { clsx } from 'clsx';
import s from './index.module.scss';

interface ICustomTextArea {
  label: string;
  placeholder: string;
  field_Id: string;
  field_Name: string;
  type?: string;
}

export const CustomTextArea: FC<ICustomTextArea> = ({
  label,
  placeholder,
  field_Id,
  field_Name,
  type = 'text',
  ...rest
}) => {
  const [value, setValue] = useState('');
  const { errors, setFieldValue }: FormikContextType<any> = useFormikContext();

  const handleChange = (event: any) => {
    setValue(() => event.target.value);
  };

  const handleBlur = (event: any) => {
    setFieldValue(field_Name, value);
  };

  return (
    <div className={s.wrapper}>
      <label htmlFor={field_Id}>{label}</label>
      <textarea
        className={clsx(s.textArea, { error: errors[field_Name] })}
        value={value}
        id={field_Id}
        name={field_Name}
        onChange={handleChange}
        placeholder={placeholder}
        onBlur={handleBlur}
      />

      {errors && <span className={'input_error'}>{errors['text'] as string}</span>}
    </div>
  );
};
