import LogOutSvg from '@/public/icons/create-announce.svg';
import { FC } from 'react';
import styles from './index.module.scss';

interface ILogOutButtonProps {
  isOpen: boolean;
}

export const LogOutButton: FC<ILogOutButtonProps> = ({ isOpen }) => {
  return (
    <button type={'button'}>
      <LogOutSvg />
    </button>
  );
};
