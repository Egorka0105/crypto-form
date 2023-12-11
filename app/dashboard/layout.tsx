import {ReactNode} from "react";
import {DashboardBar} from "@/components/DashboardBar";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="">
            <div className="">
                <DashboardBar />
            </div>
            <div>{children}</div>
        </div>
    );
}