import { MOCK_RESET_PASSWORD } from '@/utils/variables';
import Image from 'next/image';
import Link from 'next/link';
import './index.scss';

export default function Page() {
  return (
    <div className={'form_container'}>
      <div className={'qr_wrapper'}>
        <Image src={'/qr-test.png'} alt={'qr cod'} width={200} height={200} />
        <span className={'qr_wrapper__link'}>TPCrSKPgRzyjxsmJMLRt27HKMcVkXmHyn1</span>
        <span className={'qr_wrapper__link_description'}>Your address USDT</span>
      </div>

      <Link className={'payment_test__confirm_btn'} href={'/payment-test/second-step'}>
        Confirm the payment
      </Link>
    </div>
  );
}
