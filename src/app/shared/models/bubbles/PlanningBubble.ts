import { IBubble } from './IBubble';

export class PlanningBubble extends IBubble {
  entries ?: PlanningEntry[];
  title ?: string;
}

export class PlanningEntry {
  content ?: string;
  end ?: string;
  id ?: number;
  start ?: string;
  userRef ?: string;
}