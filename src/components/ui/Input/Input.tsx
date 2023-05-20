// TextInput Component
'use client';

import { ChangeEvent, useState } from 'react';
import scss from './input.module.scss';
import cx from 'classnames';
import { z } from 'zod';
import {
	textInputValidation,
	emailInputValidation,
	phoneInputValidation,
	zipCodeInputValidation,
	eMoneyInputValidation,
	eMoneyPinInputValidation
} from '@utils/inputValidation';

type TextInputValidation = z.infer<typeof textInputValidation>;
type EmailInputValidation = z.infer<typeof emailInputValidation>;
type PhoneInputValidation = z.infer<typeof phoneInputValidation>;
type ZipCodeInputValidation = z.infer<typeof zipCodeInputValidation>;
type EMoneyInputValidation = z.infer<typeof eMoneyInputValidation>;
type EMoneyPinInputValidation = z.infer<typeof eMoneyPinInputValidation>;

type InputProps = {
	type: 'text' | 'email' | 'tel';
	label: string;
	placeholder: string;
	value: string;
	required?: boolean;
	onChange: (value: string) => void;
};

export default function Input({
	label,
	placeholder,
	required,
	onChange,
	type,
	value
}: InputProps) {
	const [errorMsg, setErrorMsg] = useState('');

	const setInput = (
		validate: z.SafeParseReturnType<string, string>,
		input: string
	) => {
		if (!validate.success) {
			setErrorMsg(validate.error.format()._errors[0]);
		} else {
			setErrorMsg('');
		}
		onChange(input);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (type === 'text') {
			if (label === 'Zip Code') {
				const input: ZipCodeInputValidation = e.target.value;
				const validate = zipCodeInputValidation.safeParse(e.target.value);

				setInput(validate, input);
			} else if (label === 'e-Money Number') {
				const input: EMoneyInputValidation = e.target.value;
				const validate = eMoneyInputValidation.safeParse(e.target.value);

				setInput(validate, input);
			} else if (label === 'e-Money PIN') {
				const input: EMoneyPinInputValidation = e.target.value;
				const validate = eMoneyPinInputValidation.safeParse(e.target.value);

				setInput(validate, input);
			} else {
				const input: TextInputValidation = e.target.value;
				const validate = textInputValidation.safeParse(e.target.value);

				setInput(validate, input);
			}
		} else if (type === 'email') {
			const input: EmailInputValidation = e.target.value;
			const validate = emailInputValidation.safeParse(e.target.value);

			setInput(validate, input);
		} else if (type === 'tel') {
			const input: PhoneInputValidation = e.target.value;
			const validate = phoneInputValidation.safeParse(e.target.value);

			setInput(validate, input);
		}
	};

	return (
		<label
			className={cx([scss.input], {
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
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</label>
	);
}
