import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<Navbar />
			<main className="main">
				<h1>Ask the Constitution</h1>
			</main>
			<Footer />
		</div>
	);
}
