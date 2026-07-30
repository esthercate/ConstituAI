import { Citation } from './citation';

export interface ConversationState {
	question: string;
	answer: string;
	citations: Citation[];
	isLoading: boolean;
	hasAskedQuestion: boolean;
}
