import Link from "next/link";
import s from "./index.module.scss"

export default function Home() {
  return (
    <div className={s.home}>
        <Link className={"submit_btn"} href={"/login"}>
            Login Page
        </Link>
    </div>
  );
}
