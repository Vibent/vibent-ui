import { Provider } from '../models/provider';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

const SOCIAL_PROVIDERS: Provider[] = [
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    label: 'Google',
    provider: new GoogleLoginProvider('821632933125-0re06sp9j4l9nurpql79glsfm4k64sai.apps.googleusercontent.com'),
    color: '#DC483C',
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    label: 'Facebook',
    provider: new FacebookLoginProvider('203432600535344'),
    color: '#3B5998',
  }
];

export default SOCIAL_PROVIDERS;