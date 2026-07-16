import { MdOutlineVerifiedUser } from 'react-icons/md';
import { GoBook } from 'react-icons/go';
import { FiUser } from 'react-icons/fi';
import { MdLockOutline } from 'react-icons/md';

const trustedBadges = [
	{
		badge: MdOutlineVerifiedUser,
		title: 'Reliable',
		description: 'Answers come directly from the Constitution.',
	},
	{
		badge: GoBook,
		title: 'Cited',
		description: 'See the exact articles behind every answer.',
	},
	{
		badge: FiUser,
		title: 'For Everyone',
		description: 'Simple explanations for citizens, students & leaders.',
	},
	{
		badge: MdLockOutline,
		title: 'Private',
		description: 'Your answers are never stored.',
	},
];

const TrustedBadges = () => {
	return (
		<div className="container">
			<div className="card mx-0 flex flex-col lg:flex-row justify-between gap-y-4 p-3 lg:mx-28 lg:p-4">
				{trustedBadges.map(({ badge: Icon, title, description }, index) => (
					<div
						key={title}
						className={`flex flex-col items-center px-6 justify-center gap-1 ${
							index !== trustedBadges.length - 1
								? 'border-b border-border lg:border-b-0 lg:border-r py-3 lg:py-0'
								: ''
						}`}
					>
						<Icon
							size={30}
							className="text-primary"
						/>
						<span className="text-foreground font-bold text-sm">{title}</span>
						<span className="text-muted-foreground text-center text-sm text-balance">
							{description}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default TrustedBadges;
