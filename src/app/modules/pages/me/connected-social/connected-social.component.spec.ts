import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectedSocialComponent } from './connected-social.component';

describe('ConnectedSocialComponent', () => {
  let component: ConnectedSocialComponent;
  let fixture: ComponentFixture<ConnectedSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectedSocialComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
