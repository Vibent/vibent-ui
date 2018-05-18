import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {GroupMembersComponent} from './group-members.component';

describe('AddGroupMembersComponent', () => {
  let component: GroupMembersComponent;
  let fixture: ComponentFixture<GroupMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
