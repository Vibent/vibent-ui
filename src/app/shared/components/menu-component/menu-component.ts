import { VibentBaseComponent, VibentRoutes } from '../base-component/base-component';

export abstract class MenuComponent extends VibentBaseComponent {

  onHowItWorks() {
    document.getElementById('home-explanations').scrollIntoView({ behavior: 'smooth' });
  }

  onAboutUs() {
    this.navigateToUrl(VibentRoutes.ABOUT_URL);
  }

  onTerms() {
    this.navigateToUrl(VibentRoutes.TERMS_URL);
  }

  onGetApp() {
    this.navigateToUrl(VibentRoutes.GET_APP);
  }

}