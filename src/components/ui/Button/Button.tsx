// Button Component

import scss from './button.module.scss';
import cx from 'classnames';
import ArrowRightIcon from '@assets/svg/icon-arrow-right.svg';
import Link from 'next/link';

type ButtonProps = {
	label: string;
	variant?: 'primary' | 'secondary' | 'ghost';
	link?: boolean;
	src?: string;
};

export default function Button({
	label,
	link,
	src = '',
	variant = 'primary'
}: ButtonProps) {
	return (
		<>
			{!link ? (
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
			) : (
				<Link
					href={src}
					className={cx([scss.button], {
						[scss.primary]: variant === 'primary',
						[scss.secondary]: variant === 'secondary',
						[scss.ghost]: variant === 'ghost'
					})}
				>
					<span>{label}</span>
					{variant === 'ghost' && <ArrowRightIcon />}
				</Link>
			)}
		</>
	);
}
