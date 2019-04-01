import { UserManagementService } from '../../../user-management.service';
import { HttpService } from '../../../../http/http.service';
import { User } from '../../../../../shared/models/user';
import { Observable, of } from 'rxjs';
import {
  AlgoliaPlace,
  TravelDataModel,
  TravelProposal,
  TravelRequest
} from '../../../../../shared/models/bubbles/TravelBubble';
import { TravelDataService } from './travel-data.service';

let travelDataService: TravelDataService;
let userManagementService: UserManagementService;
let httpService: HttpService;

const travelDataModel = new TravelDataModel();
let travelProposal: TravelProposal;
let travelRequest: TravelRequest;
let place: AlgoliaPlace;
let secondPlace: AlgoliaPlace;

const user: User = {ref: 'ref'};

describe('Travel data Service', () => {

  beforeEach(() => {

    userManagementService = <UserManagementService>{
      getMe(userRef: string): User {
        return user;
      }
    };
    httpService = <HttpService> {
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
});