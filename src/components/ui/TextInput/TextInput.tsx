// TextInput Component
'use client';

import { ChangeEvent, useState } from 'react';
import scss from './textInput.module.scss';
import cx from 'classnames';
import { z } from 'zod';

const inputSchema = z
	.string()
	.min(3, { message: 'This field must be at least 3 characters long' })
	.max(30, { message: 'This field cannot exceed 30 characters' })
	.regex(/^[a-zA-Z0-9]+$/, 'This field can only contain letters and numbers');

type TextInputProps = {
	label: string;
	placeholder: string;
	required?: boolean;
};

export default function TextInput({
	label,
	placeholder,
	required
}: TextInputProps) {
	const [inputValue, setInputValue] = useState<z.infer<typeof inputSchema>>('');
	const [errorMsg, setErrorMsg] = useState<string>('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const validate = inputSchema.safeParse(e.target.value);

		if (!validate.success) {
			setErrorMsg(validate.error.format()._errors[0]);
		} else {
			setErrorMsg('');
		}

		setInputValue(e.target.value);
	};

	return (
		<label
			className={cx([scss.textInput], {
				[scss.error]: errorMsg
			})}
		>
			<div className={scss.header}>
				<span className={scss.label}>
					{label}
					{required && <span>*</span>}
				</span>
				{errorMsg && <span className={scss.errorMsg}>{errorMsg}</span>}
			</div>
			<input
				name='name'
				type='text'
				value={inputValue}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</label>
	);
}
