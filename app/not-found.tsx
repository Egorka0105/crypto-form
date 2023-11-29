import Link from 'next/link';
import s from './index.module.scss';

export default async function Page() {
  return (
    <div className={s.home}>
        <div className={s.notFound_wrapper}>
            <h2 className={s.notFound_title}>404: Not found Page</h2>
            <Link className={'submit_btn'} href={'/login'}>
                Login Page
            </Link>
        </div>
    </div>
  );
}
