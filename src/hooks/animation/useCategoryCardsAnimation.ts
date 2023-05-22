import { useAnimate, stagger } from 'framer-motion';
import { useEffect } from 'react';

export default function useCategoryCardsAnimation(isMenuOpen: boolean) {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate('#image', { opacity: 1, y: 0 }, { delay: stagger(0.1) });
	}, [animate, scope, isMenuOpen]);

	return scope;
}
