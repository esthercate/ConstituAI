import { create } from 'zustand';
import { Citation } from '@/types/citation';

interface ConversationStore {
	question: string;
	answer: string;
	citations: Citation[];

	isLoading: boolean;
	hasAskedQuestion: boolean;

	setQuestion: (question: string) => void;

	startLoading: () => void;

	setResponse: (answer: string, citations: Citation[]) => void;

	resetConversation: () => void;
}

export const useConversationStore = create<ConversationStore>((set) => ({
	question: '',
	answer: '',
	citations: [],

	isLoading: false,
	hasAskedQuestion: false,

	setQuestion: (question) =>
		set({
			question,
			hasAskedQuestion: true,
		}),

	startLoading: () =>
		set({
			isLoading: true,
		}),

	setResponse: (answer, citations) =>
		set({
			answer,
			citations,
			isLoading: false,
		}),

	resetConversation: () =>
		set({
			question: '',
			answer: '',
			citations: [],
			isLoading: false,
			hasAskedQuestion: false,
		}),
}));
