import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/landing/Hero';
import SearchBar from '@/components/landing/SearchBar';
import SuggestedQuestions from '@/components/landing/SuggestedQuestions';
import TrustedBadges from '@/components/landing/TrustedBadges';
export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<Navbar />
			<main className="main">
				<Hero />
				{/* <SearchBar />
				<SuggestedQuestions />
				<TrustedBadges /> */}
			</main>
			<Footer />
		</div>
	);
}
