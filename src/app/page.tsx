import Heading from '@components/ui/Heading/Heading';

type Props = {};
export default function Home({}: Props) {
	return (
		<div>
			<Heading type='h1'>Heading 1</Heading>
			<Heading type='h2'>Heading 2</Heading>
			<Heading type='h3'>Heading 3</Heading>
			<Heading type='h4'>Heading 4</Heading>
			<Heading type='h5'>Heading 5</Heading>
			<Heading type='h6'>Heading 6</Heading>
		</div>
	);
}
