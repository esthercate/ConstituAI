'use client';

import { FiArrowRight, FiSearch } from 'react-icons/fi';
import { useRef } from 'react';

const SearchBar = () => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleInput = () => {
		const textarea = textareaRef.current;
		if (!textarea) return;

		textarea.style.height = '0px';
		textarea.style.height = `${textarea.scrollHeight}px`;
	};

	return (
		<div className="container">
			<div className="card flex justify-between items-center mx-0 lg:mx-56 p-3 lg:p-6">
				<div className="flex gap-4 w-full items-center">
					<FiSearch className="text-primary text-3xl" />
					<textarea
						ref={textareaRef}
						rows={1}
						onInput={handleInput}
						placeholder="Ask the constitution..."
						className="w-full resize-none overflow-hidden bg-transparent text-base text-foreground placeholder:text-muted-foreground/60 outline-none"
					/>
				</div>

				<button
					type="button"
					className="flex items-center gap-2 text-white rounded-xl bg-button px-4 sm:px-8 py-3"
				>
					<FiArrowRight className="text-lg" />
					<span className="hidden sm:inline">Ask</span>
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
