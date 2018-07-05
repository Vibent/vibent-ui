import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupRequestsComponent } from './group-requests.component';

describe('GroupRequestsComponent', () => {
  let component: GroupRequestsComponent;
  let fixture: ComponentFixture<GroupRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupRequestsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
