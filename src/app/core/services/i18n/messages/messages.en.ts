import { IMessages } from '../imessages';

export class MessagesEn implements IMessages {
  public readonly PHONE_ALREADY_TAKEN = 'This phone number is already registred.';
  public readonly EMAIL_ALREADY_TAKEN = 'This email is already registred.';
  public readonly BAD_LOGIN = 'Incorrect password or email/phone!';
  public readonly REGISTER_CONFIRMATION = 'You will receive a confirmation.';
  public readonly BUBBLE_CREATED = 'The bubble is created';
  public readonly ALIMENTATION_BUBBLE_CREATED = 'Your alimentation bubble is ready! You can now list food and drink that you need by going in.';
  public readonly CHECKBOX_BUBBLE_CREATED = 'Your checkbox bubble is ready! You can now list some things to do, where anyone can help you to check.';
  public readonly SURVEY_BUBBLE_CREATED = 'Your survey bubble is ready! Anyone can now add options and vote!';
  public readonly PLANNING_BUBBLE_CREATED = 'Your planning bubble is ready! Anyone can now add some plans !';
  public readonly TRAVEL_BUBBLE_CREATED = 'Your travel bubble is ready! Let\'s for a transport organization.';
  public readonly FREE_BUBBLE_CREATED = 'Your Free bubble is ready! Add a comment for everyone.';
  public readonly ATTACH_REQUEST = 'Attach your request to this proposal?.';
  public readonly ATTACH_REQUEST_TEXT = 'You have an existing request, want to attach it to this proposal? Your request will no longer appear because you will have booked a place in this car';
  public readonly TAKE_A_SEAT = 'Take a seat?';
  public readonly TAKE_A_SEAT_TEXT = 'You\'re about to book a seat in this car. Are you sure you think the person proposing this route will be able to pick you up easily?';
  public readonly DELETE_BOOKING = 'Delete your booking?';
  public readonly DELETE_BOOKING_TEXT = 'You\'re about to cancel your reservation and free a place.';
  public readonly NEED_CREATE_PROPOSAL = 'Create a proposal first.';
  public readonly NEED_CREATE_PROPOSAL_TEXT = 'You need to create a proposal to take a person in your car. Do it in "Providers" section.';
  public readonly NO_SEAT_IN_CAR = 'No more seat.';
  public readonly NO_SEAT_IN_CAR_TEXT = 'There is no more remaining seat in your car.';
  public readonly TAKE_HIM = 'Take him in your car';
  public readonly TAKE_HIM_TEXT = 'You agree to pick up the person by picking him up at the indicated place, are you sure?';
  public readonly DELETE_REQUEST = 'Delete your request?';
  public readonly DELETE_REQUEST_TEXT = 'You\'re about to delete your request';
  public readonly DELETE_PROPOSAL = 'Delete your proposal?';
  public readonly DELETE_PROPOSAL_TEXT = 'You\'re about to delete your proposal';
  public readonly GROUP_JOINED = 'Group joined.';
  public readonly GROUP_JOINED_TEXT = 'Go to groups page.';
  public readonly NO_EVENT_GROUP = 'There is no event in this group. You can create one by clicking on the button just above. Group members can then participate and help you organize';
  public readonly SIZE_TOO_BIG = 'Image too big';
  public readonly SIZE_TOO_BIG_TEXT = 'Your image is too big, please select another one.';

  public readonly INVITATION_SENT = 'Invitation sent.';
  public readonly BAD_EMAIL = 'Email incorrect.';
  public readonly PASSWORD_RESET_SENT = 'You will receive an email to update your password.';
  public readonly PASSWORD_RESET = 'Your password has been updated';
  public readonly EMAIL_CONFIRMED = 'Your email is verified.';
  public readonly EMAIL_UNCONFIRMED = 'An error occured during your email verification.';
  public readonly EVENT_CREATED = 'Your event is created, you can now add some bubbles to it.';
  public readonly GROUP_CREATED = 'Your group is created, you can now invite some people.';
  public readonly GROUP_UPDATED = 'Group updated.';
  public readonly EVENT_UPDATED = 'Event updated.';
  public readonly EVENT_DELETED = 'Event deleted.';
  public readonly LEAVE_GROUP = 'Leave the group?';
  public readonly LEAVE_GROUP_TEXT = 'You\'re about to leave the group. Are you sure?';

  public readonly ARE_YOU_SURE = 'Are you sure?';
  public readonly DELETE = 'Delete';
  public readonly NO_REVERT = 'You won\'t be able to revert this!';
  public readonly GROUP_DELETED = 'Group deleted';
  public readonly DELETED = 'Deleted';
  public readonly BOOK = 'Book';
  public readonly YES = 'Yes';
  public readonly OOPS = 'Oops...';

  public readonly MUST_SELECT_PROPOSAL_LOCATION = 'You must select a place of departure for your proposal';
  public readonly MUST_SELECT_REQUEST_LOCATION = 'You must select a place from where you want to be taken';

  public readonly SOCIAL_LOGIN_FAIL = 'Failed social network login';
  public readonly SOCIAL_LINK_FAIL = 'Failed linking the social network account';
  public readonly SOCIAL_UNLINK_FAIL = 'Failed unlinking the social network account';
  public readonly SOCIAL_ARE_YOU_SURE_UNLINK = 'Are you sure you want to unlink your ${name} account ?';
  public readonly SOCIAL_CAN_RELINK = 'You can relink it after if you wish';
}