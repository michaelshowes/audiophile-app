import { HTMLAttributes } from 'react';
import scss from './container.module.scss';
import cx from 'classnames';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
	children: React.ReactNode;
	maxWidth?: number;
};

export default function Container({
	children,
	maxWidth = 1110
}: ContainerProps) {
	return (
		<div
			className={scss.container}
			style={{ maxWidth: maxWidth }}
		>
			{children}
		</div>
	);
}
