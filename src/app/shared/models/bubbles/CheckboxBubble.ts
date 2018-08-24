import { IBubble } from './IBubble';

export class CheckboxBubble extends IBubble {
  options ?: CheckboxOption[];
  title ?: string;
}

export class CheckboxOption {
  answers ?: CheckboxAnswer[];
  content?: string;
  id ?: number;
  userRef ?: string;
}

export class CheckboxAnswer {
  id ?: number;
  userRef ?: string;
}