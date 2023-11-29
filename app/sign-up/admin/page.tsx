import { MOCK_SIGN_UP } from '@/utils/variables';
import { SignUpAdminForm } from '@/components/Forms';

export default function SignUpAdmin() {
  return (
    <div className={"form_container"}>
      <h4>{MOCK_SIGN_UP.TITLE}</h4>
      <SignUpAdminForm />
    </div>
  );
}
