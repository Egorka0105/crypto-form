"use client"

import "./index.scss"
import Link from "next/link";
import { useSearchParams} from "next/navigation";


export const ConfirmDeposit = () => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const userId = params.get('userId');

    return (
        <Link className={'payment_test__confirm_btn'} href={`/payment-test/second-step?userId=${userId}`}>
            Confirm the payment
        </Link>
    );
};