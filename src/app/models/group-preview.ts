import {GroupPreviewMember} from './group-preview-member';

export class GroupPreview {

  constructor(public ref: string,
              public _groupName: string,
              public _groupSize: number,
              public _groupDescription: string,
              public _groupMembers: GroupPreviewMember[]) {
  }

}
