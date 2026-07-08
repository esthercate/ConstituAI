import { GoLaw } from 'react-icons/go';
import Link from 'next/link';

const Logo = () => {
  return (
		<div className="flex items-center justify-between">
			<Link
				href="/"
				className="flex items-center gap-2"
			>
				<GoLaw size={40} />
				<div>
					<p className="text-lg lg:text-xl font-bold">
						Constitu<span className="text-primary">AI</span>
					</p>
					<p className="text-xs lg:text-sm text-muted-foreground">
						Understand. Empower. Uphold.
					</p>
				</div>
			</Link>
		</div>
	);
}

export default Logo