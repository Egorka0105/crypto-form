import { Suspense } from 'react';
import { TraderRegistrationForm } from '@/components/Forms/TraderRegistrationForm';

export default function Page() {
  return (
    <div>
      <h2>Sign Up</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <TraderRegistrationForm />
      </Suspense>
    </div>
  );
}
