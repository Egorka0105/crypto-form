import { LoginForm } from '@/components/Forms/LoginForm';
import styles from './index.module.scss';

export default function Login() {
  return (
    <div className={styles.login_page}>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}
