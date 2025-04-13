import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

const ActiveLink = ({ href, children, className, activeClassName }) => {
    const { pathname } = useRouter();
    const isActive = pathname === href;

    return (
        <Link href={href} className={clsx(className, { [activeClassName]: isActive })}>
            {children}
        </Link>
    );
};

export default ActiveLink;
