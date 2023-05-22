// Form Component
'use client';

import Input from '@components/ui/Input/Input';
import scss from './form.module.scss';
import { useState } from 'react';

export default function Form() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		zip: '',
		city: '',
		country: '',
		eMoneyNumber: null,
		eMoneyPin: null
	});

	return (
		<div className={scss.form}>
			<Input
				type='text'
				label='Name'
				placeholder='Insert your name'
				value={formData.name}
				onChange={(value) => setFormData({ ...formData, name: value })}
			/>
		</div>
	);
}
