import React from 'react'

const Button = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<button
			className={`rounded-full border border-border bg-surface-muted py-1.5 px-4 text-foreground font-medium hover:text-primary transition-colors shadow-lg hover:shadow-xl cursor-pointer ${className}`}
		>
			{children}
		</button>
	);
};

export default Button