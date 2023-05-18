// Button Component

import scss from './button.module.scss';
import cx from 'classnames';
import ArrowRightIcon from '@assets/svg/icon-arrow-right.svg';

type ButtonProps = {
	label: string;
	variant?: 'primary' | 'secondary' | 'ghost';
};

export default function Button({ label, variant = 'primary' }: ButtonProps) {
	return (
		<button
			className={cx([scss.button], {
				[scss.primary]: variant === 'primary',
				[scss.secondary]: variant === 'secondary',
				[scss.ghost]: variant === 'ghost'
			})}
		>
			<span>{label}</span>
			{variant === 'ghost' && <ArrowRightIcon />}
		</button>
	);
}
