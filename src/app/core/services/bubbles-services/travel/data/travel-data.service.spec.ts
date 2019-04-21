import { UserManagementService } from '../../../user-management.service';
import { HttpService } from '../../../../http/http.service';
import { User } from '../../../../../shared/models/user';
import { Observable, of } from 'rxjs';
import {
  AlgoliaPlace,
  TravelBubble,
  TravelProposal,
  TravelRequest
} from '../../../../../shared/models/bubbles/TravelBubble';
import { TravelDataService } from './travel-data.service';

let travelDataService: TravelDataService;
let userManagementService: UserManagementService;
let httpService: HttpService;

let travelProposal: TravelProposal;
let travelRequest: TravelRequest;
let place: AlgoliaPlace;
let secondPlace: AlgoliaPlace;
let travelBubble: TravelBubble;

const user: User = {ref: 'ref'};

describe('Travel data Service', () => {

  beforeEach(() => {

    userManagementService = <UserManagementService>{
      getMe(userRef: string): User {
        return user;
      }
    };
    httpService = <HttpService>{
      getUser(userRef: string): Observable<User> {
        return of(user);
      }
    };

    place = {
      city: {
        ar: ['ليون'],
        default: ['Lyon'],
        it: ['Lione'],
        ja: ['リヨン'],
        ru: ['Лион'],
        zh: ['里昂']
      },
      is_city: true,
      locale_names: {
        default: ['Lyon']
      },
      _geoloc: {lng: 4.8469911, lat: 45.753918}
    };

    secondPlace = {
      city: {
        default: ['Villeurbanne']
      },
      is_city: false,
      locale_names: {
        default: ['<streetnum> <streetmod> Avenue Albert Einstein']
      },
      _geoloc: [{lng: 4.8800821, lat: 45.782791}]
    };

    travelRequest = {
      id: 0,
      proposalId: 0,
      bubbleId: 0,
      passByCities: '',
      capacity: 5,
      userRef: 'ref2'
    };

    travelProposal = {
      attachedRequests: [travelRequest],
      id: 0,
      bubbleId: 0,
      passByCities: '',
      capacity: 5,
      userRef: 'ref'
    };

    travelBubble = new TravelBubble();
    travelBubble.proposals = [travelProposal];
    travelBubble.requests = [travelRequest];

    travelDataService = new TravelDataService(userManagementService);
  });

  it('Check canTakeSeat: connected user is the proposal creator', () => {
    expect(travelDataService.getCanTakeSeat(travelProposal)).toBe(false);
  });

  it('Check canTakeSeat: connected user is not the proposal creator', () => {
    travelProposal.userRef = 'dummy';
    expect(travelDataService.getCanTakeSeat(travelProposal)).toBe(true);
  });

  it('Check canTakeSeat: connected user is not the proposal creator but have an attached request', () => {
    travelProposal.userRef = 'dummy';
    travelProposal.attachedRequests[0].userRef = 'ref';
    expect(travelDataService.getCanTakeSeat(travelProposal)).toBe(false);
  });

  it('Check canTakeSeat: connected user is not the proposal creator, nor have an attached request', () => {
    travelProposal.userRef = 'dummy';
    travelProposal.attachedRequests[0].userRef = 'dummy';
    expect(travelDataService.getCanTakeSeat(travelProposal)).toBe(true);
  });

  it('Check getSeatsLeft', () => {
    expect(travelDataService.getSeatsLeft(travelProposal)).toBe(4);
  });

  it('Check getAvailableSeatsList', () => {
    expect(travelDataService.getAvailableSeatsList(travelProposal)).toEqual(Array(4));
  });

  it('Check getHeaderLocation from a place which is a city', () => {
    expect(travelDataService.getHeaderLocation(place)).toBe('Lyon');
  });

  it('Check getHeaderLocation from a place which is a city', () => {
    expect(travelDataService.getCompleteAddress(place)).toBe('Lyon');
  });

  it('Check getHeaderLocation from a place which isn\'t a city', () => {
    expect(travelDataService.getHeaderLocation(secondPlace)).toBe('Villeurbanne');
  });

  it('Check getHeaderLocation from a place which isn\'t a city', () => {
    expect(travelDataService.getCompleteAddress(secondPlace)).toBe('Avenue Albert Einstein, Villeurbanne');
  });

  it('Check getUserActivity general', () => {
    expect(travelDataService.getUserActivity(travelBubble).length).toBe(2);
  });

  it('Check getUserActivity no requests', () => {
    travelBubble.requests = [];
    expect(travelDataService.getUserActivity(travelBubble)[0]).toBe('ref');
  });

  it('Check getUserActivity no proposals or requests', () => {
    travelBubble.requests = [];
    travelBubble.proposals = [];
    expect(travelDataService.getUserActivity(travelBubble).length).toBe(0);
  });

  // getBubbleCompletion
  it('Check getBubbleCompletion general', () => {
    expect(travelDataService.getBubbleCompletion(travelBubble)).toBe(50);
  });

  it('Check getBubbleCompletion no attached requests', () => {
    travelBubble.proposals[0].attachedRequests = [];
    expect(travelDataService.getBubbleCompletion(travelBubble)).toBe(0);
  });

  it('Check getBubbleCompletion no detached requests', () => {
    travelBubble.requests = [];
    expect(travelDataService.getBubbleCompletion(travelBubble)).toBe(100);
  });

  it('Check getBubbleCompletion no requests at all', () => {
    travelBubble.requests = [];
    travelBubble.proposals[0].attachedRequests = [];
    expect(travelDataService.getBubbleCompletion(travelBubble)).toBe(100);
  });

  // getAvailableSeats
  it('Check getAvailableSeats general', () => {
    travelBubble.proposals[0].capacity = 6;
    expect(travelDataService.getAvailableSeats(travelBubble)).toBe(1);
  });

  it('Check getAvailableSeats no attached requests', () => {
    travelBubble.proposals[0].attachedRequests = [];
    expect(travelDataService.getAvailableSeats(travelBubble)).toBe(5);
  });

  // getProposedSeats
  it('Check getProposedSeats general', () => {
    expect(travelDataService.getProposedSeats(travelBubble)).toBe(5);
  });

  it('Check getProposedSeats no attached requests', () => {
    travelBubble.proposals[0].attachedRequests = [];
    expect(travelDataService.getProposedSeats(travelBubble)).toBe(5);
  });

  it('Check getProposedSeats no detached requests', () => {
    travelBubble.requests = [];
    expect(travelDataService.getProposedSeats(travelBubble)).toBe(5);
  });

  // getTakenSeats
  it('Check getTakenSeats general', () => {
    expect(travelDataService.getTakenSeats(travelBubble)).toBe(5);
  });

  it('Check getTakenSeats no attached requests', () => {
    travelBubble.proposals[0].attachedRequests = [];
    expect(travelDataService.getTakenSeats(travelBubble)).toBe(0);
  });

  // getDetachedRequestedSeats
  it('Check getDetachedRequestedSeats general', () => {
    expect(travelDataService.getDetachedRequestedSeats(travelBubble)).toBe(5);
  });

  it('Check getDetachedRequestedSeats no attached requests', () => {
    travelBubble.proposals[0].attachedRequests = [];
    expect(travelDataService.getDetachedRequestedSeats(travelBubble)).toBe(5);
  });

  it('Check getDetachedRequestedSeats no detached requests', () => {
    travelBubble.requests = [];
    expect(travelDataService.getDetachedRequestedSeats(travelBubble)).toBe(0);
  });

  it('Check getDetachedRequestedSeats no requests at all', () => {
    travelBubble.requests = [];
    travelBubble.proposals[0].attachedRequests = [];
    expect(travelDataService.getDetachedRequestedSeats(travelBubble)).toBe(0);
  });
});
