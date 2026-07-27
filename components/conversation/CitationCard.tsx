import { GoBook } from 'react-icons/go';

const CitationCard = () => {
	return (
		<div className="flex flex-col gap-3">
			<h6>Citation</h6>
			<div className="citation p-4">
				<div className="flex justify-between">
					<div className="flex items-center gap-4">
						<GoBook
							size={40}
							className="text-primary"
						/>
						<div className="flex flex-col">
							<span className="text-foreground font-bold text-sm">
								Article 33
							</span>
							<span className="text-muted-foreground text-center text-sm text-balance">
								Freedom of Expression
							</span>
						</div>
					</div>
					<div>Verified</div>
				</div>
			</div>
		</div>
	);
};

export default CitationCard;
