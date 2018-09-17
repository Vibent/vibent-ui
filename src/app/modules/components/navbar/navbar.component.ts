import { Component, ElementRef, OnInit } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { User } from '../../../shared/models/user';
import { ProfileImageService } from '../../../core/http/profile-image.service';
import { HttpService } from '../../../core/http/http.service';
import { UserManagementService } from '../../../core/services/user-management.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  location: Location;
  mobile_menu_visible: any = 0;
  private listTitles: any[];
  private toggleButton: any;
  private sidebarVisible: boolean;

  public userProfileImage: File = null;
  public user: User;

  constructor(location: Location,
              private element: ElementRef,
              private router: Router,
              private route: ActivatedRoute,
              private profileImageService: ProfileImageService,
              private userManagementService: UserManagementService,
              private httpService: HttpService,
              private authenticationService: AuthenticationService) {
    this.location = location;
    this.sidebarVisible = false;
    this.user = this.userManagementService.getMe();
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.router.events.subscribe((event) => {
      this.sidebarClose();
      const $layer: any = document.getElementsByClassName('close-layer')[0];
      if ($layer) {
        $layer.remove();
        this.mobile_menu_visible = 0;
      }
    });
    this.userManagementService.change.subscribe(() => {
      this.user = this.userManagementService.getMe();
    });
  }

  public sidebarOpen(): void {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);

    body.classList.add('nav-open');

    this.sidebarVisible = true;
  }

  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  }
  
  public sidebarToggle(): void {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    const $toggle = document.getElementsByClassName('navbar-toggler')[0];
    
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
    const body = document.getElementsByTagName('body')[0];
    
    if (this.mobile_menu_visible === 1) {
      // $('html').removeClass('nav-open');
      body.classList.remove('nav-open');
      if ($layer) {
        $layer.remove();
      }
      setTimeout(function () {
        $toggle.classList.remove('toggled');
      }, 400);
      
      this.mobile_menu_visible = 0;
    } else {
      setTimeout(function () {
        $toggle.classList.add('toggled');
      }, 430);
      
      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');
      
      
      if (body.querySelectorAll('.main-panel')) {
        document.getElementsByClassName('main-panel')[0].appendChild($layer);
      } else if (body.classList.contains('off-canvas-sidebar')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      }
      
      setTimeout(function () {
        $layer.classList.add('visible');
      }, 100);
      
      $layer.onclick = function () {
        body.classList.remove('nav-open');
        this.mobile_menu_visible = 0;
        $layer.classList.remove('visible');
        setTimeout(function () {
          $layer.remove();
          $toggle.classList.remove('toggled');
        }, 400);
      }.bind(this);
      
      body.classList.add('nav-open');
      this.mobile_menu_visible = 1;
      
    }
  };
  
  public getTitle(): string {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(2);
    }
    
    const t = this.listTitles.find(function (e) {
      return (e.path === titlee);
    });
    
    return t ? t.title : 'Vibent';
  }
  
  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
