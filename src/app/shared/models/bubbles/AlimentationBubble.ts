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
  FOOD = "FOOD",
  DRINK = "DRINK",
  OTHER = "OTHER",
}