// Counter Component
'use client';

import { MouseEvent } from 'react';
import scss from './counter.module.scss';
import cx from 'classnames';

type CounterProps = {
	count: number;
	add: (count: number) => void;
	subtract: (count: number) => void;
};

export default function Counter({ count, add, subtract }: CounterProps) {
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.currentTarget.id === 'add' ? add(count) : subtract(count);
	};

	return (
		<div className={scss.counter}>
			<button
				className={cx([scss.add], {
					[scss.disabled]: count === 1
				})}
				id='subtract'
				onClick={(e) => handleClick(e)}
			>
				-
			</button>
			<div className={scss.number}>{count}</div>
			<button
				id='add'
				className={cx([scss.subtract], {
					[scss.disabled]: count === 99
				})}
				onClick={(e) => handleClick(e)}
			>
				+
			</button>
		</div>
	);
}
