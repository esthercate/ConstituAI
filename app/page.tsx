import ThemeToggle from '@/components/layout/ThemeToggle';
export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center">
			<ThemeToggle />
			<h1>Ask the Constitution</h1>
		</div>
	);
}
