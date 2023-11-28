import { CreateDealForm } from '@/components/Forms/CreateDealForm';
import { Suspense } from 'react';

export default function CreateDeal() {
  return (
    <div>
      <h2>Create a deal</h2>
      <Suspense fallback={<div>Loading....</div>}>
        <CreateDealForm />
      </Suspense>
    </div>
  );
}
