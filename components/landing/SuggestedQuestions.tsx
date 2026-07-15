import { GoLaw } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';
import { GiHandcuffs } from 'react-icons/gi';

const suggestedQuestions = [
	{
		icon: GoLaw,
		question: 'What are my rights to freedom of speech?',
	},
	{
		icon: FiUsers,
		question: 'What does the Constitution say about devolution?',
	},
	{
		icon: GiHandcuffs,
		question: 'Can I be arrested without a reason?',
	},
];

const SuggestedQuestions = () => {
	return (
		<div className="container">
			<div className="mx-0 flex flex-col gap-3 lg:mx-56">
				<span className="text-muted-foreground">Try asking</span>

				<div className="flex flex-col items-center gap-5 md:flex-row">
					{suggestedQuestions.map(({ icon: Icon, question }) => (
						<div
							key={question}
							className="card flex w-full items-center gap-4 p-3 lg:p-5"
						>
							<Icon
								size={40}
								className="text-primary"
							/>

							<span className="text-sm text-balance text-muted-foreground">
								{question}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SuggestedQuestions;
