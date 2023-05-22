import { useAnimate, stagger } from 'framer-motion';
import { useEffect } from 'react';

export default function useMenuAnimation(isMenuOpen: boolean) {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		[
			animate('#overlay', { opacity: isMenuOpen ? 1 : 0 }),
			animate('#dropdown', {
				transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)'
			})
		];
		[
			animate(
				'li img',
				{
					opacity: isMenuOpen ? 1 : 0,
					y: isMenuOpen ? 0 : 20
				},
				{ delay: isMenuOpen ? stagger(0.1, { startDelay: 0.4 }) : 0 }
			)
		];
	}, [animate, scope, isMenuOpen]);

	return scope;
}
