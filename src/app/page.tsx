import TextInput from '@components/ui/TextInput/TextInput';

type Props = {};
export default function Home({}: Props) {
	return (
		<div>
			<TextInput
				label='Name'
				placeholder='Insert your name'
			/>
		</div>
	);
}
