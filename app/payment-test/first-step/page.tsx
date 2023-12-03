import Image from 'next/image';
import { ConfirmDeposit } from '@/app/payment-test/first-step/ConfirmDeposit';
import './index.scss';

export default function Page() {
  return (
    <div className={'form_container'}>
      <p className={"payment_test__title"}>
        Отправьте <strong>50 USDT</strong> используя QR-код или номер кошелька и нажмите подтвердить платеж
      </p>

      <div className={'qr_wrapper'}>
        <Image src={'/qr-test.png'} alt={'qr cod'} width={200} height={200} />
        <span className={'qr_wrapper__link'}>TPCrSKPgRzyjxsmJMLRt27HKMcVkXmHyn1</span>
        <span className={'qr_wrapper__link_description'}>Ваш адрес USDT</span>
      </div>

      <p className={"payment_test__sub-title"}>
        Отправляйте только <strong>USDT TRC20</strong> на этот адрес. Другие активы могут не дойти
      </p>

      <ConfirmDeposit />
    </div>
  );
}
