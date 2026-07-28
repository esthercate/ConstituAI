'use client';

import { useState } from 'react';
import { GoBook } from 'react-icons/go';
import { IoIosArrowDropdown } from 'react-icons/io';
import { FaCheckCircle } from 'react-icons/fa';

interface Citation {
	article: string;
	title: string;
	content: string;
}

const citations: Citation[] = [
	{
		article: 'Article 33',
		title: 'Freedom of Expression',
		content:
			'Every person has the right to freedom of expression, which includes the freedom to seek, receive, or impart information or ideas, subject only to the limitations provided by law.',
	},
	{
		article: 'Article 37',
		title: 'Access to Information',
		content:
			'Every citizen has the right of access to information held by the State and information held by another person that is required for the exercise or protection of any right or fundamental freedom.',
	},
];

const CitationItem = ({ article, title, content }: Citation) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="citation p-4 flex flex-col gap-5 flex-1">
			<div className="flex justify-between items-start">
				<div className="flex items-center gap-4">
					<GoBook
						size={40}
						className="text-primary"
					/>

					<div className="flex flex-col">
						<span className="text-foreground font-bold text-sm">{article}</span>
						<span className="text-muted-foreground text-sm">{title}</span>
					</div>
				</div>

				<div className="flex items-center justify-center px-2 py-1 gap-2 border border-green-400 rounded-full self-start">
					<FaCheckCircle
						size={15}
						className="text-green-400"
					/>
					<span className="text-green-400 text-xs">Verified</span>
				</div>
			</div>

			<p>This article supports the answer above.</p>

			{isOpen && (
				<div className="text-sm text-muted-foreground leading-6 border-t border-border pt-4">
					<div className="bg-citation/50 p-3 rounded-lg">
						<span>{content}</span>
					</div>
				</div>
			)}

			<div className="border-t border-border" />

			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex justify-between items-center w-full"
			>
				<span className="text-primary text-sm">
					{isOpen ? 'Collapse' : 'Read Full Article'}
				</span>

				<IoIosArrowDropdown
					size={28}
					className={`text-primary transition-transform duration-300 ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</button>
		</div>
	);
};

const CitationCard = () => {
	return (
		<div className="flex flex-col gap-3 w-full">
			<span className="text-primary text-lg">Citations</span>

			<div className="flex gap-4 items-start">
				{citations.map((citation) => (
					<CitationItem
						key={citation.article}
						{...citation}
					/>
				))}
			</div>
		</div>
	);
};

export default CitationCard;
