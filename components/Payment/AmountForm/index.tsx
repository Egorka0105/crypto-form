'use client';

import { ChangeEvent, useCallback, useState } from 'react';
import { FIELD_NAMES, MOCK_INPUT_DATA } from '@/utils/variables';
import { clsx } from 'clsx';
import { amount_schema, email_schema } from '@/utils/validations';
import axios from 'axios';
import { Loader } from '@/components/Loader';
import { useSearchParams } from 'next/navigation';
import styles from './index.module.scss';

export const AmountForm = () => {
  const [isFormSend, setFormSend] = useState(false);
  const [amount, setAmount] = useState('');
  const [error, serError] = useState('');
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const userId = params.get('userId');

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const validEmail = await amount_schema.validate(e.target.value, { abortEarly: false });
      setAmount(() => validEmail);
      serError(() => '');
    } catch (e: any) {
      serError(e.message);
    }
  };

  const handleSubmit = useCallback(async () => {
    const reqValue = {
      depositAmount: amount.toString(),
      userId: userId && +userId,
    };
    setLoading(true);
    try {
      const { status } = await axios.post(
        'https://crypto-bot-npm5.onrender.com/easytrading-bot/deposit/direct-deposit',
        reqValue
      );
      if (status === 200) setFormSend(true);
    } catch (e: any) {
      await Promise.reject(e);
    } finally {
      setLoading(false);
    }
  }, [amount, userId]);
  return (
    <>
      {!loading && !isFormSend && (
        <div className={styles.form}>
          <label htmlFor={FIELD_NAMES.DEPOSIT_AMOUNT}>{MOCK_INPUT_DATA.DEPOSIT_AMOUNT.LABEL}</label>
          <input
            type={'number'}
            className={clsx({ error: error })}
            onChange={handleChange}
            placeholder={MOCK_INPUT_DATA.DEPOSIT_AMOUNT.PLACEHOLDER}
            id={FIELD_NAMES.DEPOSIT_AMOUNT}
          />
          {error && <span className={'input_error'}>{error}</span>}

          <button onClick={handleSubmit} className={'submit_btn'} type={'button'} disabled={!amount || !!error}>
            Отправить
          </button>
        </div>
      )}

      {loading && <Loader />}

      {isFormSend && (
        <div>
          <p>Данные успешно отправлены</p>
        </div>
      )}
    </>
  );
};
