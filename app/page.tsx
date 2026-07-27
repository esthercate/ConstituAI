import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/landing/Hero';
import SearchBar from '@/components/landing/SearchBar';
import SuggestedQuestions from '@/components/landing/SuggestedQuestions';
import TrustedBadges from '@/components/landing/TrustedBadges';
import QuestionCard from '@/components/conversation/QuestionCard';
import AiAnswerSection from '@/components/conversation/AiAnswerSection';

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-[url(/bgimage.png)] dark:bg-[url('/darkbgimage.png')] bg-cover bg-center bg-no-repeat">
			<Navbar />
			<main className="main">
				<Hero />
				<SearchBar />
				<SuggestedQuestions />
				<TrustedBadges />
				<QuestionCard />
				<AiAnswerSection />
			</main>
			<Footer />
		</div>
	);
}
