import Link from 'next/link';
import { ROUTES } from '@/utils/variables';
import s from './index.module.scss';

export default function Home() {
  return (
    <div className={s.home}>
      <Link className={'submit_btn'} href={ROUTES.AUTH_LOGIN}>
        Login Page
      </Link>
    </div>
  );
}
