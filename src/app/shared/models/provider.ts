import { AuthServiceConfigItem } from 'angularx-social-login/src/auth.service';
import { LoginProvider } from 'angularx-social-login/src/entities/login-provider';

export interface Provider extends AuthServiceConfigItem {
  id: string,
  label: string,
  provider: LoginProvider,
  color: string,
}