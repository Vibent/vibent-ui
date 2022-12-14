import { Injectable } from '@angular/core';
import { IMessages } from './imessages';
import { LanguageService } from './language.service';
import { MessagesFr } from './messages/messages.fr';
import { MessagesEn } from './messages/messages.en';

@Injectable()
export class MessageService implements IMessages {

  public readonly CONFIRM_BUTTON_COLOR = '#3085d6';
  public readonly CANCEL_BUTTON_COLOR = '#d33';


  constructor(private languageService: LanguageService) {
    let selectedMessages;
    switch (languageService.getLanguage()) {
      case 'fr':
        selectedMessages = new MessagesFr();
        break;
      default:
        selectedMessages = new MessagesEn();
    }

    for (let i in selectedMessages) {
      this[i] = selectedMessages[i];
    }
  }

  ALIMENTATION_BUBBLE_CREATED: string;
  AN_ERROR_OCCURED: string;
  ARE_YOU_SURE: string;
  ATTACH_REQUEST: string;
  ATTACH_REQUEST_TEXT: string;
  BAD_EMAIL: string;
  BAD_LOGIN: string;
  BOOK: string;
  BUBBLE_CREATED: string;
  CHECKBOX_BUBBLE_CREATED: string;
  DELETE: string;
  DELETE_BOOKING: string;
  DELETE_BOOKING_TEXT: string;
  DELETE_PROPOSAL: string;
  DELETE_PROPOSAL_TEXT: string;
  DELETE_REQUEST: string;
  DELETE_REQUEST_TEXT: string;
  DELETED: string;
  EMAIL_ALREADY_TAKEN: string;
  EMAIL_CONFIRMED: string;
  EMAIL_UNCONFIRMED: string;
  EVENT_CREATED: string;
  EVENT_CREATED_ADD_BUBBLES: string;
  EVENT_DELETED: string;
  EVENT_JOINED: string;
  EVENT_JOINED_TEXT: string;
  EVENT_UPDATED: string;
  FREE_BUBBLE_CREATED: string;
  INVITATION_SENT: string;
  INVITATIONS_SENT: string;
  LIST_DELETED: string;
  LIST_JOINED: string;
  LIST_JOINED_TEXT: string;
  MIN_ONE_EMAIL_REQUIRED: string;
  MUST_SELECT_PROPOSAL_LOCATION: string;
  MUST_SELECT_REQUEST_LOCATION: string;
  NEED_CREATE_PROPOSAL: string;
  NEED_CREATE_PROPOSAL_TEXT: string;
  NO_REVERT: string;
  NO_SEAT_IN_CAR: string;
  NO_SEAT_IN_CAR_TEXT: string;
  NOT_PARTICIPATING_EVENT: string;
  OOPS: string;
  PARTICIPATING_EVENT: string;
  PASSWORD_RESET: string;
  PASSWORD_RESET_SENT: string;
  PHONE_ALREADY_TAKEN: string;
  PLANNING_BUBBLE_CREATED: string;
  REGISTER_CONFIRMATION: string;
  SIZE_TOO_BIG: string;
  SIZE_TOO_BIG_TEXT: string;
  SOCIAL_ARE_YOU_SURE_UNLINK: string;
  SOCIAL_CAN_RELINK: string;
  SOCIAL_LINK_FAIL: string;
  SOCIAL_LOGIN_FAIL: string;
  SOCIAL_UNLINK_FAIL: string;
  SURVEY_BUBBLE_CREATED: string;
  TAKE_A_SEAT: string;
  TAKE_A_SEAT_TEXT: string;
  TAKE_THEM: string;
  TAKE_THEM_TEXT: string;
  TRAVEL_BUBBLE_CREATED: string;
  YES: string;
  YOU_DONT_KNOW_YET: string;
}

