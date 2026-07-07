import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
		<div className="footer">
			<div className="flex items-center gap-4">
				<Image
					src="/logo.svg"
					alt="Logo"
					width={100}
					height={100}
				/>
				<div className="flex flex-col gap-1 text-sm text-muted-foreground">
					<p>ConstituAI is an independent civil tool.</p>
					<p>Not affiliated with any government entity.</p>
				</div>
			</div>
			<p className="text-sm text-muted-foreground">
				© 2026 ConstituAI. All rights reserved.
			</p>
		</div>
	);
}

export default Footer