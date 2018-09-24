import { IBubble } from './IBubble';

export class SurveyBubble extends IBubble {
  options ?: SurveyOption[];
  title ?: string;
}

export class SurveyOption {
  answers ?: SurveyAnswer[];
  content ?: string;
  id ?: number;
  userRef ?: string;
}

export class SurveyAnswer {
  id ?: number;
  userRef ?: string;
}