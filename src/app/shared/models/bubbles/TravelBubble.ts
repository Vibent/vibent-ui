import { IBubble } from './IBubble';

export class TravelBubble extends IBubble {
  id: number;
  proposals ?: TravelProposal[];
  requests ?: TravelRequest[];
}

export class TravelEntity {
  bubbleId?: number;
  id ?: number;
  userRef ?: string;
  passByCities?: string;
  capacity ?: number;
}

export class TravelProposal extends TravelEntity {
  attachedRequests ?: TravelRequest[];
}

export class TravelRequest extends TravelEntity {
  proposalId?: number;
}

export class TravelDataModel {
  seatsLeft?: number;
  canTakeSeat?: boolean;
  availableSeatsList?: number[];
  headerLocation?: string;
  completeAddress?: string;
}

/* tslint:disable:variable-name */
export class AlgoliaPlace {
  locale_names: any;
  _geoloc: any;
  city: any;
  is_city: boolean;
}