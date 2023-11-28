import { ResetPasswordForm } from '@/components/Forms';
import { Suspense } from 'react';

export default function ResetPassword() {
  return (
    <div>
      <h2>Password Reset</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
