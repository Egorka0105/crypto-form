import { ChangeEvent, FC, useState } from 'react';
import { FormikContextType, useFormikContext } from 'formik';

interface ICustomSelectProps {
  options: any[];
  label: string;
  placeholder: string;
  field_Id: string;
  field_Name: string;
}

export const CustomSelect: FC<ICustomSelectProps> = ({ options, label, placeholder, field_Id, field_Name }) => {
  const { errors, setFieldValue, values }: FormikContextType<any> = useFormikContext();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFieldValue(field_Name, e.target.value);
  };

  return (
    <div className="custom-select-container">
      <label htmlFor={field_Id}>{label}</label>
      <select id={field_Id} value={values[field_Name] ?? ''} onChange={handleChange}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>

      {errors[field_Name] && <span className={'input_error'}>{errors[field_Name] as string}</span>}
    </div>
  );
};
