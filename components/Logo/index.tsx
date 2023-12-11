import Image from 'next/image';
import { FC } from 'react';
import { Poppins } from 'next/font/google';
import { clsx } from 'clsx';
import styles from './index.module.scss';

interface ILogoProps {
  isOpen: boolean;
}

const poppins = Poppins({ subsets: ['latin'], weight: ['600']});

export const Logo: FC<ILogoProps> = ({ isOpen }) => {
  return (
    <div className={styles.logo}>
      <Image className={styles.img} src={'./logo.svg'} alt={'Logo'} height={29} width={28} />
      {isOpen ? <span className={clsx(poppins.className, styles.title)}>Easy Trading</span> : null}
    </div>
  );
};
