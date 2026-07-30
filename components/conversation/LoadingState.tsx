// !TODO Figure out this component after I fetch data
import { ImSpinner9 } from 'react-icons/im';

const LoadingState = () => {
	return (
		<div className="container">
			{/* Status */}
			<div className="card mx-0 flex flex-col gap-y-4 p-3 lg:mx-28 lg:p-4">
				<div className="flex items-center gap-3">
					<ImSpinner9 className="h-5 w-5 animate-spin text-primary" />

					<div>
						<p className="font-medium text-foreground">
							Searching the Constitution...
						</p>

						<p className="text-sm text-muted-foreground">
							This usually takes a few seconds.
						</p>
					</div>
				</div>

				{/* Fake AI response */}
				<div className="mt-8 space-y-3">
					<div className="h-4 w-full animate-pulse rounded bg-muted" />
					<div className="h-4 w-11/12 animate-pulse rounded bg-muted" />
					<div className="h-4 w-10/12 animate-pulse rounded bg-muted" />
					<div className="h-4 w-9/12 animate-pulse rounded bg-muted" />
					<div className="h-4 w-8/12 animate-pulse rounded bg-muted" />
				</div>

				{/* Citation Skeleton */}
				<div className="mt-8">
					<p className="mb-3 text-sm font-medium text-muted-foreground">
						Sources
					</p>

					<div className="space-y-3">
						<div className="h-20 animate-pulse rounded-xl border border-border bg-muted/40" />

						<div className="h-20 animate-pulse rounded-xl border border-border bg-muted/40" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoadingState;
