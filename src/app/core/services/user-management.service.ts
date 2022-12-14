import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { User } from '../../shared/models/user';
import { LoaderService } from './loader/service/loader.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserManagementService {

  change$ = new BehaviorSubject<boolean>(false);

  constructor(private httpService: HttpService,
              private loaderService: LoaderService) {
  }

  public manageUser(user: User) {
    if (!this.getUserSaved(user.ref)) {
      this.addUserToSession(user);
    }
  }

  public setItemIfNotExist(index: string, item: any) {
    if (!window.sessionStorage.getItem(index)) {
      window.sessionStorage.setItem(index, JSON.stringify(item));
    }
  }

  public addUserToSession(user: User) {
    this.setItemIfNotExist('usersInfos', []);
    const users = JSON.parse(window.sessionStorage.getItem('usersInfos'));
    window.sessionStorage.setItem('usersInfos', users.push(user));
  }

  public getUserSaved(userRef: string) {
    this.setItemIfNotExist('usersInfos', []);
    const users = JSON.parse(window.sessionStorage.getItem('usersInfos'));
    return users.find(u => u.userRef === userRef);
  }

  public setMe() {
    this.httpService.getMe().subscribe((user) => {
      this.setMeOnCookie(user);
    });
  }

  public getMe(): User {
    return JSON.parse(window.sessionStorage.getItem('me'));
  }

  public setMeOnCookie(user: User) {
    window.sessionStorage.removeItem('me');
    window.sessionStorage.setItem('me', JSON.stringify(user));
    this.loaderService.closeLoadingPageModal();
    this.change$.next(true);
  }

  socialLink(linkRequest, onFail?: (e) => void): void {
    this.loaderService.displayLoadingPageModal();
    this.httpService.socialLink(linkRequest).toPromise()
      .then(() => {
        this.loaderService.closeLoadingPageModal();
        this.setMe();
      })
      .catch(e => {
        this.loaderService.closeLoadingPageModal();
        onFail(e);
      });
  }

  socialUnlink(unlinkRequest, onFail?: (e) => void): void {
    this.loaderService.displayLoadingPageModal();
    this.httpService.socialUnlink(unlinkRequest).toPromise()
      .then(() => {
        this.loaderService.closeLoadingPageModal();
        this.setMe();
      })
      .catch(e => {
        this.loaderService.closeLoadingPageModal();
        onFail(e);
      });
  }
}

