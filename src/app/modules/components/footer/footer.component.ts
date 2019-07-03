import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/i18n/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  date: Date = new Date();

  constructor(private languageService: LanguageService, private router: Router) {
  }

  changeLanguage(code: string) {
    this.languageService.setLanguage(code);
  }

  aboutUs() {
    this.router.navigate(['/about']);
  }

}
