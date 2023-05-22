// MobileMenu Component
'use client';

import scss from './mobileMenu.module.scss';
import useMenuAnimation from '@hooks/animation/useMenuAnimation';
import CategoryCards from '@components/CategoryCards/CategoryCards';

export default function MobileMenu({ isMenuOpen }: { isMenuOpen: boolean }) {
	const scope = useMenuAnimation(isMenuOpen);

	return (
		<div
			ref={scope}
			className={scss.mobileMenu}
			style={{
				zIndex: isMenuOpen ? 100 : -1
			}}
		>
			<div
				className={scss.overlay}
				id='overlay'
			/>
			<div
				className={scss.inner}
				id='dropdown'
			>
				<CategoryCards />
			</div>
		</div>
	);
}
