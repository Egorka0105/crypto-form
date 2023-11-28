import { ChangeEvent, FC } from 'react';
import { FormikContextType, useFormikContext } from 'formik';

interface ICustomUploadInput {
  label: string;
  field_Id: string;
  field_Name: string;
  type?: string;
}

export const CustomUploadInput: FC<ICustomUploadInput> = ({ label, field_Id, field_Name, type = 'file', ...rest }) => {
  const { errors, setFieldValue }: FormikContextType<any> = useFormikContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(field_Name, event.target.value);
  };

  return (
    <div>
      <label htmlFor={field_Id}>{label}</label>
      <input id={field_Id} name={field_Name} type={type} accept="image/*" onChange={handleChange} multiple/>
    </div>
  );
};
