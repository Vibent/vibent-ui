import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicGroupComponent } from './public-group.component';

describe('PublicGroupComponent', () => {
  let component: PublicGroupComponent;
  let fixture: ComponentFixture<PublicGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PublicGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
