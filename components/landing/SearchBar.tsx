import { FiArrowRight, FiSearch } from 'react-icons/fi';

const SearchBar = () => {
	return (
		<div className="container">
			<div className="card flex justify-between items-center mx-0 lg:mx-56 p-3 lg:p-6">
				<div className="flex gap-4 w-full items-center">
					<FiSearch className="text-primary text-3xl" />
					<input
						type="text"
						placeholder="Ask the constitution..."
						className="flex w-full bg-transparent text-foreground placeholder:text-muted-foreground/60 text-base outline-none"
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
