import { IBubble } from './IBubble';

export class AlimentationBubble extends IBubble {
  entries ?: AlimentationEntry[];
}

export class AlimentationEntry {
  brings ?: AlimentationBring[];
  currentBringing?: number;
  id ?: number;
  name ?: string;
  totalRequested: number;
  type: AlimType;
  bubbleId ?: number;
}

export class AlimentationBring {
  id ?: number;
  quantity ?: number;
  userRef ?: string;
  entryId ?: number;
}

export enum AlimType {
  FOOD = 'FOOD',
  DRINK = 'DRINK',
  OTHER = 'OTHER',
}

export class AlimentationDataModel {
  ratio: string;
  bringingsByUsers: BringsByUser[];
  progressWidth: string;
  deleteBringButtonClass: string;
}

export class BringsByUser {
  userName ?: any;
  quantity ?: number;
}