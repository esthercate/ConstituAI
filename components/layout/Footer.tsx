import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
		<div className="footer">
			<div className="flex flex-col md:flex-row items-center gap-4">
				<Image
					src="/logo.svg"
					alt="Logo"
					width={50}
					height={50}
				/>
				<div className="flex flex-col gap-1 text-xs lg:text-sm text-muted-foreground">
					<span className="text-xs lg:text-sm text-muted-foreground/80">
						ConstituAI is an independent civil tool.
					</span>
					<span className="text-xs lg:text-sm text-muted-foreground/80">
						Not affiliated with any government entity.
					</span>
				</div>
			</div>
			<span className="text-xs lg:text-sm text-muted-foreground/80">
				© {new Date().getFullYear()} ConstituAI. All rights reserved.
			</span>
		</div>
	);
}

export default Footer