'use client';

import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<button
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
			className="rounded-full bg-surface p-2 shadow-lg hover:shadow-xl transition-shadow"
			aria-label="Toggle theme"
		>
			{resolvedTheme === 'dark' ? (
				<MdLightMode className="h-5 w-5 hover:text-primary" />
			) : (
				<MdDarkMode className="h-5 w-5 hover:text-primary" />
			)}
		</button>
	);
}
