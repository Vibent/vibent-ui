import {User} from './user';
import {Event} from './event';

export class Group {

  constructor(
    public _groupName: string,
    public _groupSize: number,
    public _groupDescription: string,
    public _groupMembers: User[],
    public _groupEvents: Event[]) { }

}
