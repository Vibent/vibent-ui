/**
 * Abstract component for expanded bubbles
 */
export abstract class AbstractExpandedBubbleComponent {

  contentDisplayed = true;

  constructor() {
  }

  openBubbleSettings() {
    this.contentDisplayed = false;
  }

  onBackToContentSent() {
    this.contentDisplayed = true;
  }

}
