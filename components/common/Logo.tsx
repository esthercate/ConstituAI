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
					<h4>
						Constitu<span className="text-primary">AI</span>
					</h4>
					<span className="text-xs lg:text-sm text-muted-foreground">
						Understand. Empower. Uphold.
					</span>
				</div>
			</Link>
		</div>
	);
}

export default Logo