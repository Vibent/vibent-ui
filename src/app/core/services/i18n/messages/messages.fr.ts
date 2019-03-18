import { IMessages } from '../imessages';

export class MessagesFr implements IMessages {
  public readonly PHONE_ALREADY_TAKEN = 'TODOFR his phone number is already registred.';
  public readonly EMAIL_ALREADY_TAKEN = 'TODOFR his email is already registred.';
  public readonly BAD_LOGIN = 'TODOFR ncorrect password or email/phone!';
  public readonly REGISTER_CONFIRMATION = 'TODOFR ou will receive a confirmation.';
  public readonly BUBBLE_CREATED = 'TODOFR he bubble is created';
  public readonly ALIMENTATION_BUBBLE_CREATED = 'TODOFR our alimentation bubble is ready! You can now list food and drink that you need by going in.';
  public readonly CHECKBOX_BUBBLE_CREATED = 'TODOFR our checkbox bubble is ready! You can now list some things to do, where anyone can help you to check.';
  public readonly SURVEY_BUBBLE_CREATED = 'TODOFR our survey bubble is ready! Anyone can now add options and vote!';
  public readonly PLANNING_BUBBLE_CREATED = 'TODOFR our planning bubble is ready! Anyone can now add some plans !';
  public readonly TRAVEL_BUBBLE_CREATED = 'TODOFR our travel bubble is ready! Let\'TODOFR  for a transport organization.';
  public readonly FREE_BUBBLE_CREATED = 'TODOFR our Free bubble is ready! Add a comment for everyone.';
  public readonly ATTACH_REQUEST = 'TODOFR ttach your request to this proposal?.';
  public readonly ATTACH_REQUEST_TEXT = 'TODOFR ou have an existing request, want to attach it to this proposal? Your request will no longer appear because you will have booked a place in this car';
  public readonly TAKE_A_SEAT = 'TODOFR ake a seat?';
  public readonly TAKE_A_SEAT_TEXT = 'TODOFR ou\'TODOFR e about to book a seat in this car. Are you sure you think the person proposing this route will be able to pick you up easily?';
  public readonly DELETE_BOOKING = 'TODOFR elete your booking?';
  public readonly DELETE_BOOKING_TEXT = 'TODOFR ou\'TODOFR e about to cancel your reservation and free a place.';
  public readonly NEED_CREATE_PROPOSAL = 'TODOFR reate a proposal first.';
  public readonly NEED_CREATE_PROPOSAL_TEXT = 'TODOFR ou need to create a proposal to take a person in your car. Do it in "Providers" section.';
  public readonly NO_SEAT_IN_CAR = 'TODOFR o more seat.';
  public readonly NO_SEAT_IN_CAR_TEXT = 'TODOFR here is no more remaining seat in your car.';
  public readonly TAKE_THEM = 'TODOFR ake him in your car';
  public readonly TAKE_THEM_TEXT = 'TODOFR ou agree to pick up the person by picking him up at the indicated place, are you sure?';
  public readonly DELETE_REQUEST = 'TODOFR elete your request?';
  public readonly DELETE_REQUEST_TEXT = 'TODOFR ou\'TODOFR e about to delete your request';
  public readonly DELETE_PROPOSAL = 'TODOFR elete your proposal?';
  public readonly DELETE_PROPOSAL_TEXT = 'TODOFR ou\'TODOFR e about to delete your proposal';
  public readonly GROUP_JOINED = 'TODOFR roup joined.';
  public readonly GROUP_JOINED_TEXT = 'TODOFR o to groups page.';
  public readonly NO_EVENT_GROUP = 'TODOFR here is no event in this group. You can create one by clicking on the button just above. Group members can then participate and help you organize';
  public readonly SIZE_TOO_BIG = 'TODOFR mage too big';
  public readonly SIZE_TOO_BIG_TEXT = 'TODOFR our image is too big, please select another one.';

  public readonly INVITATION_SENT = 'TODOFR nvitation sent.';
  public readonly BAD_EMAIL = 'TODOFR mail incorrect.';
  public readonly PASSWORD_RESET_SENT = 'TODOFR ou will receive an email to update your password.';
  public readonly PASSWORD_RESET = 'TODOFR our password has been updated';
  public readonly EMAIL_CONFIRMED = 'TODOFR our email is verified.';
  public readonly EMAIL_UNCONFIRMED = 'TODOFR n error occured during your email verification.';
  public readonly EVENT_CREATED = 'TODOFR our event is created, you can now add some bubbles to it.';
  public readonly GROUP_CREATED = 'TODOFR our group is created, you can now invite some people.';
  public readonly GROUP_UPDATED = 'TODOFR roup updated.';
  public readonly EVENT_UPDATED = 'TODOFR vent updated.';
  public readonly EVENT_DELETED = 'TODOFR vent deleted.';
  public readonly LEAVE_GROUP = 'TODOFR eave the group?';
  public readonly LEAVE_GROUP_TEXT = 'TODOFR ou\'TODOFR e about to leave the group. Are you sure?';

  public readonly ARE_YOU_SURE = 'TODOFR re you sure?';
  public readonly DELETE = 'TODOFR elete';
  public readonly NO_REVERT = 'TODOFR ou won\'TODOFR  be able to revert this!';
  public readonly GROUP_DELETED = 'TODOFR roup deleted';
  public readonly DELETED = 'TODOFR eleted';
  public readonly BOOK = 'TODOFR ook';
  public readonly YES = 'TODOFR es';
  public readonly OOPS = 'TODOFR ops...';

  public readonly MUST_SELECT_PROPOSAL_LOCATION = 'TODOFR ou must select a place of departure for your proposal';
  public readonly MUST_SELECT_REQUEST_LOCATION = 'TODOFR ou must select a place from where you want to be taken';

  public readonly SOCIAL_LOGIN_FAIL = 'TODOFR ailed social network login';
  public readonly SOCIAL_LINK_FAIL = 'TODOFR ailed linking the social network account';
  public readonly SOCIAL_UNLINK_FAIL = 'TODOFR ailed unlinking the social network account';
  public readonly SOCIAL_ARE_YOU_SURE_UNLINK = 'TODOFR re you sure you want to unlink your ${name} account ?';
  public readonly SOCIAL_CAN_RELINK = 'TODOFR ou can relink it after if you wish';
}