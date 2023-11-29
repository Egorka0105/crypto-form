'use client';

import { FC, useRef } from 'react';
import { FormikContextType, useFormikContext } from 'formik';
import Image from 'next/image';
import { FIELD_NAMES } from '@/utils/variables';
import { bytesToKilobytes } from '@/utils/helpers';
import s from './index.module.scss';

interface ICustomUploadInput {
  label: string;
  field_Id: string;
  field_Name: string;
  type?: string;
}

export const CustomUploadInput: FC<ICustomUploadInput> = ({ label, field_Id, field_Name, type = 'file', ...rest }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { values, setFieldValue }: FormikContextType<any> = useFormikContext();

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (event: any) => {
    if (!event.target.files) {
      return;
    }
    const currentFile = event.target.files[0];

    if (currentFile) {
      setFieldValue(field_Name, currentFile);
    }
  };

  return (
    <>
      <div className={s.upload_wrapper}>
        <input
          className={s.input}
          ref={inputRef}
          id={field_Id}
          name={field_Name}
          type={type}
          onChange={handleChange}
          multiple
        />
        <button onClick={handleUploadClick} className={s.button} type={'button'}>
          {!values[FIELD_NAMES.FILE] && (
            <>
              <span className={s.label}>{label}</span>
              <Image src={'/icons/upload.svg'} alt={'upload image'} width={24} height={24} />
            </>
          )}
          {values[FIELD_NAMES.FILE] && (
            <>
              <Image src={'/icons/upload-successful.svg'} alt={'image is upload'} width={24} height={24} />
              <span className={s.image_name}>{values[FIELD_NAMES.FILE].name}</span>
              <span className={s.image_size}>{bytesToKilobytes(values[FIELD_NAMES.FILE].size)}</span>
            </>
          )}
        </button>
      </div>
    </>
  );
};
