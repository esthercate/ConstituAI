import React from 'react'
import Logo from '../common/Logo';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const Navbar = () => {
  return (
		<div className="navbar">
			<Logo />
			<div className="flex items-center gap-4">
				<ThemeToggle />
				<Link
					href="/"
					className="rounded-full border border-border bg-surface-muted py-1.5 px-4 text-primary font-bold"
				>
					About
				</Link>
			</div>
		</div>
	);
}

export default Navbar