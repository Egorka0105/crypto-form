import { MOCK_SIGN_UP } from '@/utils/variables';
import { SupportRegistrationForm } from '@/components/Forms';

export default function SignUpSupport() {
  return (
    <div className={'form_container'}>
      <h4>{MOCK_SIGN_UP.TITLE}</h4>
      <SupportRegistrationForm />
    </div>
  );
}
