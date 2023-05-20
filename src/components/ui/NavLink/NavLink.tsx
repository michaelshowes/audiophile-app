// NavLink Component

import Link from 'next/link';
import scss from './navLink.module.scss';

type NavLinkProps = {
	path: string;
	label: string;
};

export default function NavLink({ path, label }: NavLinkProps) {
	return (
		<Link
			href={path}
			className={scss.navLink}
		>
			{label}
		</Link>
	);
}
