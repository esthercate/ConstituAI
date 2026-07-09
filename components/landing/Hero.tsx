import React from 'react'

const Hero = () => {
  return (
		<div className="container flex flex-col items-center justify-center gap-4">
			<h1 className="flex flex-col text-center gap-2">
				Ask anything about the{' '}
				<span className="text-primary">Constitution of Kenya</span>
			</h1>
			<p className="text-center max-w-sm">
				Get clear, easy to understand answers grounded in the Constitution.
			</p>
		</div>
	);
}

export default Hero