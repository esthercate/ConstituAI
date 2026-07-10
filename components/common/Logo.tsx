import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
	return (
		<div className="flex items-center justify-between">
			<Link
				href="/"
				className="flex items-center justify-center gap-2"
			>
				<Image
					src="/justice_shield_logo.svg"
					alt="Logo"
					width={80}
					height={80}
				/>
				<div className="flex flex-col justify-center">
					<h5>
						Constitu<span className="text-primary">AI</span>
					</h5>
					<span className="text-xs lg:text-sm text-muted-foreground">
						Understand. Empower. Uphold.
					</span>
				</div>
			</Link>
		</div>
	);
};

export default Logo;
