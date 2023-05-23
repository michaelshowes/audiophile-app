// Footer Component

import Logo from '@assets/svg/logo.svg';
import Container from '@layout/Container/Container';
import scss from './footer.module.scss';
import { routes } from '@routes';
import NavLink from '@components/ui/NavLink/NavLink';
import Facebook from '@assets/svg/icon-facebook.svg';
import Twitter from '@assets/svg/icon-twitter.svg';
import Instagram from '@assets/svg/icon-instagram.svg';

export default function Footer() {
	return (
		<div className={scss.footer}>
			<Container className={scss.accent}>
				<div />
			</Container>
			<Container>
				<div className={scss.inner}>
					<div className={scss.upper}>
						<Logo />
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
					</div>
					<p>
						Audiophile is an all in one stop to fulfill your audio needs.
						We&apos;re a small team of music lovers and sound specialists who
						are devoted to helping you get the most out of personal audio. Come
						and visit our demo facility - we&rsquo;re open 7 days a week.
					</p>
					<div className={scss.lower}>
						<p className={scss.copyright}>
							Copyright 2021. All Rights Reserved
						</p>
						<div className={scss.social}>
							<a href='https://www.facebook.com'>
								<Facebook />
							</a>
							<a href='https://www.twitter.com'>
								<Twitter />
							</a>
							<a href='https://www.instagram.com'>
								<Instagram />
							</a>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
