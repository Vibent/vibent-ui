import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupRightsComponent } from './group-rights.component';

describe('GroupRequestsComponent', () => {
  let component: GroupRightsComponent;
  let fixture: ComponentFixture<GroupRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupRightsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
