// Radio Component
'use client';

import scss from './radio.module.scss';
import cx from 'classnames';

type RadioProps = {
	label: string;
	value: string;
	name: string;
	checked: boolean;
	onChange: (value: string) => void;
};

export default function Radio({
	label,
	value,
	onChange,
	name,
	checked,
	...props
}: RadioProps) {
	const handleChange = () => {
		onChange(value);
	};

	return (
		<label
			className={cx([scss.radio], {
				[scss.active]: checked
			})}
		>
			<input
				{...props}
				type='radio'
				name={name}
				value={value}
				checked={checked}
				onChange={handleChange}
			/>
			<span className={scss.label}>{label}</span>
		</label>
	);
}
