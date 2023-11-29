import { FC } from 'react';
import { Field, FormikContextType, useFormikContext } from 'formik';

interface ICustomUploadInput {
  label: string;
  field_Id: string;
  field_Name: string;
  type?: string;
}

export const CustomUploadInput: FC<ICustomUploadInput> = ({ label, field_Id, field_Name, type = 'file', ...rest }) => {
  const { errors, setFieldValue }: FormikContextType<any> = useFormikContext();

  const handleChange = (event: any) => {
    const file = event.target.files[0];
    console.log(file);
    setFieldValue(field_Name, file);
  };

  return (
    <div>
      <label htmlFor={field_Id}>{label}</label>
      <Field id={field_Id} name={field_Name} type={type} accept="image/*" onChange={handleChange} />
    </div>
  );
};
