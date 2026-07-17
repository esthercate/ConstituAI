import Logo from '../common/Logo';
import ThemeToggle from './ThemeToggle';
// import Link from 'next/link';
import Button from '../common/Button';
import { FaPlus } from 'react-icons/fa';

const Navbar = () => {
	return (
		<div className="navbar">
			<Logo />
			<div className="flex items-center gap-4 lg:gap-6">
				<Button className="hidden  items-center gap-2 text-primary lg:flex">
					<FaPlus className="text-primary" /> New Chat
				</Button>
				<div className="w-px h-6 border-l border-border hidden lg:block" />
				<ThemeToggle />
				{/* <Link
					href="/about"
					className="text-foreground font-bold hover:text-primary transition-colors text-sm lg:text-base"
				>
					About
				</Link> */}
			</div>
		</div>
	);
};

export default Navbar;
