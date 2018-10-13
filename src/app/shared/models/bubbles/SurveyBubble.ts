import { IBubble } from './IBubble';

export class SurveyBubble extends IBubble {
  options ?: SurveyOption[];
  title ?: string;
  answerCount?: number;
}

export class SurveyOption {
  bubbleId?: number;
  answers ?: SurveyAnswer[];
  content ?: string;
  id ?: number;
  userRef ?: string;
}

export class SurveyAnswer {
  id ?: number;
  optionId?: number;
  userRef ?: string;
}

export class SurveyDataModel {
  votersNumber: string;
  userVoted: boolean;
  votersNames: any;
  progressWidth: string;
}