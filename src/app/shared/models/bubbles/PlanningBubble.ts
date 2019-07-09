 import { IBubble } from './IBubble';
 import { Observable } from 'rxjs';
 import { User } from '../user';

export class PlanningBubble extends IBubble {
  entries ?: PlanningEntry[];
}

export class PlanningEntry {
  content ?: string;
  end ?: string;
  id ?: number;
  bubbleId ?: number;
  start ?: string;
  userRef ?: string;
  hasTime ?: boolean;
}

export class PlanningDataModel {
  user: Observable<User>;
  start: Date;
}