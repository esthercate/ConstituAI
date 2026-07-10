import { FiArrowRight, FiSearch } from 'react-icons/fi';

const SearchBar = () => {
	return (
		<div className="card">
			<FiSearch className="text-primary text-3xl" />
			<input
				type="text"
				placeholder="Type your constitutional question here..."
				className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-base outline-none"
			/>

			<button
				type="button"
				className="flex items-center gap-2 rounded-xl bg-button px-8 py-4"
			>
				<FiArrowRight className="text-lg" />
				Ask
			</button>
		</div>
	);
};

export default SearchBar;
