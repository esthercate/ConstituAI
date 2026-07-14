import React from 'react'
import { GoLaw } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';
import { GiHandcuffs } from 'react-icons/gi';

const SuggestedQuestions = () => {
  return (
		<div className="container">
			<div className="flex flex-col gap-1">
				<span className="text-muted-foreground">Try asking</span>
				<div className="flex flex-col md:flex-row gap-5 items-center">
					<div className="card w-full flex gap-4 items-center">
						<GoLaw
							size={30}
							className="text-primary"
						/>
						<span className="text-sm text-muted-foreground text-balance">
							What are my rights to freedom of speech?
						</span>
					</div>
					<div className="card w-full flex gap-4 items-center">
						<FiUsers
							size={30}
							className="text-primary"
						/>
						<span className="text-sm text-muted-foreground text-balance">
							What does the Constitution say about devolution?
						</span>
					</div>
					<div className="card w-full flex gap-4 items-center">
						<GiHandcuffs
							size={30}
							className="text-primary"
						/>
						<span className="text-sm text-muted-foreground text-balance">
							Can I be arrested without a reason?
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SuggestedQuestions