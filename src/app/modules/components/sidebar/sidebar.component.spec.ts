import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { AdminPanelService } from '../../../core/services/admin-panel.service';
import { Observable } from 'rxjs/Observable';

fdescribe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  class MockAuthenticationService {
  }

  const mockAdminPanelService = {
    change: Observable
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: AuthenticationService, useClass: MockAuthenticationService},
        {provide: AdminPanelService, useValue: mockAdminPanelService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call service change', () => {
    spyOn(mockAdminPanelService, 'change').and.returnValue({ subscribe: () => Observable });
    expect(mockAdminPanelService.change).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
