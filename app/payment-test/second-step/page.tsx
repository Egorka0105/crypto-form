import { AmountForm } from '@/components/Payment/AmountForm';
import { Suspense } from 'react';
import { Loader } from '@/components';

export default function Page() {
  return (
    <div className={'form_container'}>
      <Suspense fallback={<Loader />}>
        <AmountForm />
      </Suspense>
    </div>
  );
}
