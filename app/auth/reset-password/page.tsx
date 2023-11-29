import { ResetPasswordForm } from '@/components/Forms';
import { Suspense } from 'react';
import { MOCK_RESET_PASSWORD } from '@/utils/variables';
import {Loader} from "@/components";

export default function ResetPassword() {
  return (
    <div className={"form_container"}>
      <h4>{MOCK_RESET_PASSWORD.TITLE}</h4>
      <Suspense fallback={<Loader />}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
