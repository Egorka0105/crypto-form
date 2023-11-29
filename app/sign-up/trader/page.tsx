import { Suspense } from 'react';
import { TraderRegistrationForm } from '@/components/Forms/TraderRegistrationForm';
import { MOCK_SIGN_UP } from '@/utils/variables';

export default function Page() {
  return (
    <div className={'form_container'}>
      <h2>{MOCK_SIGN_UP.TITLE}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <TraderRegistrationForm />
      </Suspense>
    </div>
  );
}
