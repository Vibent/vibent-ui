import { TutorialNavigationService, TutorialState } from './tutorial-navigation.service';

describe('Event Creation Navigation Service', () => {

  let navigation: TutorialNavigationService;

  beforeEach(() => {
    navigation = new TutorialNavigationService();
  });

  it('check states setters', () => {
    navigation.setState(TutorialState.WELCOME);
    expect(navigation.state).toBe(TutorialState.WELCOME);

    navigation.setState(TutorialState.CREATE_EVENT);
    expect(navigation.state).toBe(TutorialState.CREATE_EVENT);

    navigation.setState(TutorialState.JOIN_EVENT);
    expect(navigation.state).toBe(TutorialState.JOIN_EVENT);

    navigation.setState(TutorialState.PROFILE);
    expect(navigation.state).toBe(TutorialState.PROFILE);

    navigation.setState(TutorialState.ENJOY);
    expect(navigation.state).toBe(TutorialState.ENJOY);
  });

  it('check purge ', () => {
    navigation.setState(TutorialState.CREATE_EVENT);
    navigation.purge();
    expect(navigation.state).toBe(TutorialState.WELCOME);
  });

  it('check on Back ', () => {
    navigation.setState(TutorialState.WELCOME);
    navigation.onBack();
    expect(navigation.state).toBe(TutorialState.WELCOME);

    navigation.setState(TutorialState.CREATE_EVENT);
    navigation.onBack();
    expect(navigation.state).toBe(TutorialState.WELCOME);

    navigation.setState(TutorialState.JOIN_EVENT);
    navigation.onBack();
    expect(navigation.state).toBe(TutorialState.CREATE_EVENT);

    navigation.setState(TutorialState.PROFILE);
    navigation.onBack();
    expect(navigation.state).toBe(TutorialState.JOIN_EVENT);

    navigation.setState(TutorialState.ENJOY);
    navigation.onBack();
    expect(navigation.state).toBe(TutorialState.PROFILE);
  });

  it('check states checkers', () => {
    navigation.setState(TutorialState.WELCOME);
    expect(navigation.checkState(TutorialState.WELCOME)).toBe(true);

    navigation.setState(TutorialState.CREATE_EVENT);
    expect(navigation.checkState(TutorialState.CREATE_EVENT)).toBe(true);

    navigation.setState(TutorialState.JOIN_EVENT);
    expect(navigation.checkState(TutorialState.JOIN_EVENT)).toBe(true);

    navigation.setState(TutorialState.PROFILE);
    expect(navigation.checkState(TutorialState.PROFILE)).toBe(true);

    navigation.setState(TutorialState.ENJOY);
    expect(navigation.checkState(TutorialState.ENJOY)).toBe(true);
  });

});