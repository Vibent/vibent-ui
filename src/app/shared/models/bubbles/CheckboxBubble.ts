import { IBubble } from './IBubble';
import { User } from '../user';
import { Observable } from 'rxjs';

export class CheckboxBubble extends IBubble {
  options ?: CheckboxOption[];
  title ?: string;
}

export class CheckboxOption {
  bubbleId: number;
  answers ?: CheckboxAnswer[];
  content?: string;
  id ?: number;
  userRef ?: string;
}

export class CheckboxAnswer {
  optionId ?: number;
  id ?: number;
  userRef ?: string;
}

export class CheckboxDataModel {
  answerUsers: Observable<User>[];
}
