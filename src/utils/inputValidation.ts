import { z } from 'zod';

export const textInputValidation = z
	.string()
	.min(3, { message: 'Must be at least 3 characters long' })
	.max(30, { message: 'Cannot exceed 30 characters' })
	.regex(/^[a-zA-Z0-9]+$/, 'Only letters and numbers allowed');

export const emailInputValidation = z
	.string()
	.email({ message: 'Must be a valid email' });

export const phoneInputValidation = z
	.string()
	.min(10, { message: 'Must be at least 10 digits long' })
	.max(10, { message: 'Cannot exceed 10 digits' })
	.regex(/^[0-9]/, 'Invalid phone number');

export const zipCodeInputValidation = z
	.string()
	.min(5, { message: 'Must be at least 5 digits long' })
	.max(5, { message: 'Cannot exceed 5 digits' })
	.regex(/^[0-9]+$/, 'Invalid zip code');

export const eMoneyInputValidation = z
	.string()
	.min(9, { message: 'Must be 9 digits' })
	.max(9, { message: 'Must be 9 digits' })
	.regex(/^[0-9]+$/, 'Invalid e-Money Number');

export const eMoneyPinInputValidation = z
	.string()
	.min(4, { message: 'PIN must be 4 digits' })
	.max(4, { message: 'PIN must be 4 digits' })
	.regex(/^[0-9]+$/, 'Invalid PIN');
