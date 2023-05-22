// Header Component
'use client';

import scss from './header.module.scss';
import MenuIcon from '@assets/svg/icon-hamburger.svg';
import Logo from '@assets/svg/logo.svg';
import CartIcon from '@assets/svg/icon-cart.svg';
import Link from 'next/link';
import Container from '@layout/Container/Container';
import { routes } from '@routes';
import NavLink from '@components/ui/NavLink/NavLink';
import { useState } from 'react';
import MobileMenu from '@components/MobileMenu/MobileMenu';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<header
				className={scss.header}
				style={{
					backgroundColor: isMenuOpen ? 'black' : 'transparent'
				}}
			>
				<Container>
					<div className={scss.inner}>
						<button
							className={scss.menu}
							onClick={toggleMenu}
							aria-expanded={isMenuOpen}
						>
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
								<NavLink
									path='/'
									label='Home'
								/>
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
			<MobileMenu isMenuOpen={isMenuOpen} />
		</>
	);
}
