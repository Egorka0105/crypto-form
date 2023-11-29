import { Suspense } from 'react';
import { TraderRegistrationForm } from '@/components/Forms/TraderRegistrationForm';
import { MOCK_SIGN_UP } from '@/utils/variables';
import { Loader } from '@/components';

export default function Page() {
  return (
    <div className={'form_container'}>
      <h2>{MOCK_SIGN_UP.TITLE}</h2>
      <Suspense fallback={<Loader />}>
        <TraderRegistrationForm />
      </Suspense>
    </div>
  );
}
