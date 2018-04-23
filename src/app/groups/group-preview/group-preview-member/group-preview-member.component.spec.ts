import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPreviewMemberComponent } from './group-preview-member.component';

describe('GroupPreviewMemberComponent', () => {
  let component: GroupPreviewMemberComponent;
  let fixture: ComponentFixture<GroupPreviewMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupPreviewMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupPreviewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
