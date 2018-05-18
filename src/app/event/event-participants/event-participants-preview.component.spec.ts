import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EventParticipantsPreviewComponent} from './event-participants-preview.component';


describe('GroupPreviewMemberComponent', () => {
  let component: EventParticipantsPreviewComponent;
  let fixture: ComponentFixture<EventParticipantsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventParticipantsPreviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventParticipantsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
