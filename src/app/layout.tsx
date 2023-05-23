import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import { Manrope } from 'next/font/google';
import '@styles/normalize.scss';
import '@styles/main.scss';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
	title: 'Audiophile E-Commerce App',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={manrope.className}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
