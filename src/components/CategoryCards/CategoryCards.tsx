// CategoryCards Component
'use client';

import scss from './categoryCards.module.scss';
import Image from 'next/image';
import Button from '@components/ui/Button/Button';
import { routes } from '@routes';
import Container from '@layout/Container/Container';

export default function CategoryCards() {
	return (
		<section className={scss.categoryCards}>
			<Container>
				<ul>
					{routes.map((route, i) => (
						<li key={i}>
							<Image
								src={route.img.src}
								alt={route.img.alt}
								width={route.img.width}
								height={route.img.height}
								id='image'
							/>
							<h2>{route.name}</h2>
							<Button
								link
								label='Shop'
								variant='ghost'
								src={route.path}
							/>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
