// HomeHero Component

import Image from 'next/image';
import scss from './homeHero.module.scss';
import mobileImg from '/images/mobile/image-header.jpg';
import Heading from '@components/ui/Heading/Heading';
import Button from '@components/ui/Button/Button';
import Container from '@layout/Container/Container';

export default function HomeHero() {
	return (
		<div className={scss.homeHero}>
			<div className={scss.divider}>
				<div />
			</div>
			<div className={scss.image}>
				<Image
					className={scss.mobile}
					src='/images/mobile/image-header.jpg'
					alt='hero image'
					fill
				/>
				<Image
					className={scss.tablet}
					src='/images/tablet/image-header.jpg'
					alt='hero image'
					fill
				/>
				<Image
					className={scss.desktop}
					src='/images/desktop/image-hero.jpg'
					alt='hero image'
					fill
				/>
			</div>
			<Container>
				<div className={scss.inner}>
					<div className={scss.eyebrow}>New Product</div>
					<Heading type='h1'>XX99 Mark II Headphones</Heading>
					<p>
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>
					<Button
						label='See Product'
						link
					/>
				</div>
			</Container>
		</div>
	);
}
