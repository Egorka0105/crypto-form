import { FC } from 'react';
import Image from 'next/image';
import styles from "./index.module.scss";

interface ICheckPasswordVisibleProps {
  toggleVisible: () => void;
  isVisible: boolean;
}

export const CheckPasswordVisible: FC<ICheckPasswordVisibleProps> = ({ isVisible, toggleVisible }) => {
  return (
    <button className={styles.check_visible} onClick={toggleVisible} type={'button'}>
      {isVisible ? (
        <Image src={'/icons/eye.svg'} alt={'password is visible'} width={24} height={24} />
      ) : (
        <Image src={'/icons/eye-off.svg'} alt={'password doest visible'} width={24} height={24} />
      )}
    </button>
  );
};
