import { CreateDealForm } from '@/components/Forms/CreateDealForm';
import { Suspense } from 'react';
import { Loader } from '@/components';

export default function CreateDeal() {
  return (
    <div className={'form_container'}>
      <h2>Create a deal</h2>
      <Suspense fallback={<Loader />}>
        <CreateDealForm />
      </Suspense>
    </div>
  );
}
