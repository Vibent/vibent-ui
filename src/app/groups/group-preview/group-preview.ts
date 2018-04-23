import {GroupPreviewMember} from './group-preview-member/group-preview-member';

export class GroupPreview {

  constructor(
    public _groupName: string,
    public _groupSize: number,
    public _groupDescription: string,
    public _groupMembers: GroupPreviewMember[]) { }

}
