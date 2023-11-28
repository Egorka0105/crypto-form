import { LoginForm } from '@/components/Forms/LoginForm';
import { MOCK_LOGIN } from '@/utils/variables';

export default function Login() {
  return (
    <div className={"form_container"}>
      <h4>{MOCK_LOGIN.TITLE}</h4>
      <LoginForm />
    </div>
  );
}
