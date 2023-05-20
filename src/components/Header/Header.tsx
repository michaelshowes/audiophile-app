// Header Component

import scss from './header.module.scss';
import MenuIcon from '@assets/svg/icon-hamburger.svg';
import Logo from '@assets/svg/logo.svg';
import CartIcon from '@assets/svg/icon-cart.svg';
import Link from 'next/link';
import Container from '@layout/Container/Container';
import { routes } from '@routes';
import NavLink from '@components/ui/NavLink/NavLink';

export default function Header() {
	return (
		<header className={scss.header}>
			<Container>
				<div className={scss.inner}>
					<button className={scss.menu}>
						<MenuIcon />
					</button>
					<Link
						href='/'
						className={scss.logo}
					>
						<Logo />
					</Link>
					<nav className={scss.nav}>
						<ul>
							{routes.map((route, i) => (
								<li key={i}>
									<NavLink
										path={route.path}
										label={route.name}
									/>
								</li>
							))}
						</ul>
					</nav>
					<button className={scss.cart}>
						<CartIcon />
					</button>
				</div>
			</Container>
		</header>
	);
}
