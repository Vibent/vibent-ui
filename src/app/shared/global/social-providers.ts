import { Provider } from '../models/provider';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { environment } from '../../../environments/environment';

const DEV_SOCIAL_PROVIDERS: Provider[] = [
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    label: 'Google',
    provider: new GoogleLoginProvider('821632933125-0re06sp9j4l9nurpql79glsfm4k64sai.apps.googleusercontent.com'),
    color: '#DC483C',
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    label: 'Facebook',
    provider: new FacebookLoginProvider('550656608676022'),
    color: '#3B5998',
  }
];

const PROD_SOCIAL_PROVIDERS: Provider[] = [
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    label: 'Google',
    provider: new GoogleLoginProvider('634029875861-09kdkppk1khbs7krahm18tcqmggts3ee.apps.googleusercontent.com'),
    color: '#DC483C',
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    label: 'Facebook',
    provider: new FacebookLoginProvider('203432600535344'),
    color: '#3B5998',
  }
];

let SOCIAL_PROVIDERS;
if (environment.prod) {
  SOCIAL_PROVIDERS = PROD_SOCIAL_PROVIDERS;
} else {
  SOCIAL_PROVIDERS = DEV_SOCIAL_PROVIDERS;
}
export default SOCIAL_PROVIDERS;