import { IMessages } from '../imessages';

export class MessagesFr implements IMessages {
  public readonly PHONE_ALREADY_TAKEN = 'Numéro de téléphone déjà enregistré.';
  public readonly EMAIL_ALREADY_TAKEN = 'Mail déjà enregistré.';
  public readonly BAD_LOGIN = 'Mot de passe ou mail/téléphone incorrect!';
  public readonly REGISTER_CONFIRMATION = 'Vous allez recevoir une confirmation.';
  public readonly BUBBLE_CREATED = 'Bulle créée';
  public readonly ALIMENTATION_BUBBLE_CREATED = 'Votre bulle Alimentation est prête ! Vous pouvez maintenant dresser la liste des aliments et boissons dont vous aurez besoin.';
  public readonly CHECKBOX_BUBBLE_CREATED = 'Votre bulle Checkbox est prête ! Vous pouvez maintenant établir une liste que tout le monde pourra cocher.';
  public readonly SURVEY_BUBBLE_CREATED = 'Votre bulle Sondage est prête ! Ajoutez des options pour que les participants puissent voter.';
  public readonly PLANNING_BUBBLE_CREATED = 'Votre bulle Planning est prête ! Tout le monde va pouvoir vous aidez à planifier.';
  public readonly TRAVEL_BUBBLE_CREATED = 'Votre bulle Transport est prête ! Organiez vos transports vers l\'événement';
  public readonly FREE_BUBBLE_CREATED = 'Votre bulle Libre est prête ! Votre message est visible par tous.';
  public readonly ATTACH_REQUEST = 'Attacher votre demande à cette proposition ?';
  public readonly ATTACH_REQUEST_TEXT = 'Vous avez une demande existante, vous souhaitez la joindre à cette proposition ? Votre demande n\'apparaîtra plus car vous aurez réservé une place dans cette voiture.';
  public readonly TAKE_A_SEAT = 'Prendre une place ?';
  public readonly TAKE_A_SEAT_TEXT = 'Vous êtes sur le point de réserver une place dans cette voiture. Êtes-vous sûr que vous pensez que la personne qui vous propose cet itinéraire sera en mesure de venir vous chercher facilement ?';
  public readonly DELETE_BOOKING = 'Annuler votre réservation ?';
  public readonly DELETE_BOOKING_TEXT = 'Vous êtes sur le point d\'annuler votre réservation et de libérer une place.';
  public readonly NEED_CREATE_PROPOSAL = 'Créez une proposition d\'abord.';
  public readonly NEED_CREATE_PROPOSAL_TEXT = 'Vous devez créer une proposition pour prendre une personne dans votre voiture. Faites-le dans la section "Fournisseurs".';
  public readonly NO_SEAT_IN_CAR = 'Il n\'y a plus de place.' ;
  public readonly NO_SEAT_IN_CAR_TEXT = 'Il n\'y a plus de place dans votre voiture.';
  public readonly TAKE_THEM = 'Lui réserver une place dans votre voiture ?';
  public readonly TAKE_THEM_TEXT = 'Vous acceptez de venir chercher la personne en la prenant à l\'endroit indiqué.';
  public readonly DELETE_REQUEST = 'Supprimer votre demande ?';
  public readonly DELETE_REQUEST_TEXT = 'Vous êtes sur le point de supprimer votre demande.';
  public readonly DELETE_PROPOSAL = 'Supprimer votre proposition ?';
  public readonly DELETE_PROPOSAL_TEXT = 'Vous êtes sur le point de supprimer votre proposition.';
  public readonly GROUP_JOINED = 'Groupe rejoint.';
  public readonly GROUP_JOINED_TEXT = 'Page des groupes';
  public readonly SIZE_TOO_BIG = 'Taille de l\'image trop importante.';
  public readonly SIZE_TOO_BIG_TEXT = 'Veuillez en selectionner une autre.';

  public readonly INVITATION_SENT = 'Invitation envoyée';
  public readonly BAD_EMAIL = 'Mail incorrect';
  public readonly PASSWORD_RESET_SENT = 'Vous allez recevoir un mail pour réinitialiser votre mot de passe.';
  public readonly PASSWORD_RESET = 'Votre mot de passe a été mis à jour.';
  public readonly EMAIL_CONFIRMED = 'Votre mail est vérifié.';
  public readonly EMAIL_UNCONFIRMED = 'Une erreur est survenue lors de la vérification mail.';
  public readonly EVENT_CREATED = 'Votre événement est créé, vous pouvez maintenant y ajouter des bulles.';
  public readonly GROUP_CREATED = 'Votre groupe est créé, vous pouvez maintenant y inviter des personnes.';
  public readonly GROUP_UPDATED = 'Groupe mis à jour.';
  public readonly EVENT_UPDATED = 'Événement mis à jour.';
  public readonly EVENT_DELETED = 'Événement supprimé.';
  public readonly LEAVE_GROUP = 'Quitter le groupe ?';
  public readonly LEAVE_GROUP_TEXT = 'Êtes-vous sûr de vouloir quitter le groupe ?';

  public readonly ARE_YOU_SURE = 'Êtes-vous sûr ?';
  public readonly DELETE = 'Supprimer';
  public readonly NO_REVERT = 'Vous ne pourrez pas revenir en arrière !';
  public readonly GROUP_DELETED = 'Groupe supprimé.';
  public readonly DELETED = 'Supprimé';
  public readonly BOOK = 'Réserver';
  public readonly YES = 'Oui';
  public readonly OOPS = 'Oops';

  public readonly MUST_SELECT_PROPOSAL_LOCATION = 'Vous devez choisir un lieu de départ pour votre proposition.';
  public readonly MUST_SELECT_REQUEST_LOCATION = 'Vous devez choisir le lieu d\'où vous voulez être emmené.';

  public readonly SOCIAL_LOGIN_FAIL = 'Échec de l\'ouverture d\'une session de réseau social.';
  public readonly SOCIAL_LINK_FAIL = 'Échec de la mise en place du lien avec le réseau social.';
  public readonly SOCIAL_UNLINK_FAIL = 'Échec de la déconnexion du compte avec le réseau social.';
  public readonly SOCIAL_ARE_YOU_SURE_UNLINK = 'Êtes-vous sûr de vouloir dissocier votre compte ${name} ?';
  public readonly SOCIAL_CAN_RELINK = 'Vous pourrez l\'associer de nouveau à tout moment.';
}