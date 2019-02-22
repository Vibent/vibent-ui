import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { ProfileImageService } from '../../../core/http/profile-image.service';
import { HttpService } from '../../../core/http/http.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

fdescribe('HomeComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockHttpService = null;

  class MockAuthenticationService {
  }

  class MockImageProfileService {
  }

  class MockHttpService {
    getMe() {
      return null;
    }
  }

  beforeEach(async(() => {
    mockHttpService = new MockHttpService();
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule],
      providers: [
        {provide: AuthenticationService, useClass: MockAuthenticationService},
        {provide: HttpService, useValue: mockHttpService},
        {provide: ProfileImageService, useClass: MockImageProfileService}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spyOn(mockHttpService, 'getMe').and.returnValue({ subscribe: () => {} });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
