import { TraderRegFirstStepForm } from '@/components/Forms/TraderRegFirstStepForm';
import { Suspense } from 'react';
import { Loader } from '@/components';

export default function TraderSignUpFirstStep() {
  return (
    <div className={'form_container'}>
      <h4>Sign Up: First Step</h4>
      <Suspense fallback={<Loader />}>
        <TraderRegFirstStepForm />
      </Suspense>
    </div>
  );
}
