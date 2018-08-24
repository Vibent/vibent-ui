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
}

export class AlimentationBring {
  id ?: number;
  quantity ?: number;
  userRef ?: string;
}

export enum AlimType {
  FOOD,
  DRINK,
  OTHER,
}