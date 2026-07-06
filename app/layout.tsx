import type { Metadata } from 'next';
import { Nunito, Merriweather } from 'next/font/google';
import './globals.css';

import ThemeProviderWrapper from './ThemeProviderWrapper';

const nunito = Nunito({
	variable: '--font-nunito',
	subsets: ['latin'],
});

const merriweather = Merriweather({
	variable: '--font-merriweather',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'ConstituAI | Ask the Constitution',
	description:
		'ConstituAI is an AI-powered Web App that enables users to ask questions about the Constitution of Kenya in natural language and receive accurate, easy-to-understand answers grounded in the Constitution',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${nunito.variable} ${merriweather.variable}`}
		>
			<body className="min-h-screen bg-background text-foreground">
				<ThemeProviderWrapper>{children}</ThemeProviderWrapper>
			</body>
		</html>
	);
}
