import { ImSpinner9 } from 'react-icons/im';

const LoadingState = () => {
	return (
		<div>
			<div className="flex gap-2 items-center">
				<ImSpinner9 className="text-primary" />
				<span className="text-sm text-muted-foreground">
					Searching the constitution...
				</span>
			</div>
			<div className="flex gap-2 items-center">
				<ImSpinner9 className="text-primary" />
				<span className="text-sm text-muted-foreground">
					Finding relevant sections...
				</span>
			</div>
			<div className="flex gap-2 items-center">
				<ImSpinner9 className="text-primary" />
				<span className="text-sm text-muted-foreground">
					Preparing a plain-language explanation...
				</span>
			</div>
			<div className="flex gap-2 items-center">
				<ImSpinner9 className="text-primary" />
				<span className="text-sm text-muted-foreground">
					Retrieving relevant articles...
				</span>
			</div>
			<div className="flex gap-2 items-center">
				<ImSpinner9 className="text-primary" />
				<span className="text-sm text-muted-foreground">
					Verifying supporting citations...
				</span>
			</div>
		</div>
	);
};

export default LoadingState;
