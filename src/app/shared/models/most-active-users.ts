import { Observable, Subject } from 'rxjs';
import { User } from './user';

export class MostActiveUsers {

  constructor(
    public users: Observable<User>[],
    public amount: number,
    public amountRemaining: number
  ) {
  }
}
