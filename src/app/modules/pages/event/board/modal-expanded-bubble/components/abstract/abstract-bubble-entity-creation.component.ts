export abstract class AbstractBubbleEntityCreationComponent {
  toggle = false;

  toggleCreationCard() {
    this.toggle = !this.toggle;
  }
}
