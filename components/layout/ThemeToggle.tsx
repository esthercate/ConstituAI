'use client';

import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<button
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
			className="rounded-full border border-border bg-surface p-2"
			aria-label="Toggle theme"
		>
			{resolvedTheme === 'dark' ? (
				<MdLightMode className="h-5 w-5" />
			) : (
				<MdDarkMode className="h-5 w-5" />
			)}
		</button>
	);
}
