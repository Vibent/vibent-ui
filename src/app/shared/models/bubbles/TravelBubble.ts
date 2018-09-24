import { IBubble } from './IBubble';

export class TravelBubble extends IBubble {
  proposals ?: TravelProposal[];
  requests ?: TravelRequest[];
}

export class TravelProposal {
  capacity ?: number;
  id ?: number;
  passByCities ?: string;
  userRef ?: string;
}

export class TravelRequest {
  capacity ?: number;
  id ?: number;
  userRef ?: string;
}