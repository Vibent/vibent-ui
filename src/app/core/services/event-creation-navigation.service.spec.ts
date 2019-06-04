import { EventCreationNavigationService, EventCreationState } from './event-creation-navigation.service';

describe('Event Creation Navigation Service', () => {

  let navigation: EventCreationNavigationService;

  beforeEach(() => {
    navigation = new EventCreationNavigationService();
  });

  it('check states setters', () => {
    navigation.setState(EventCreationState.TITLE);
    expect(navigation.state).toBe(EventCreationState.TITLE);
    navigation.setState(EventCreationState.PARTICIPANTS);
    expect(navigation.state).toBe(EventCreationState.PARTICIPANTS);
    navigation.setState(EventCreationState.DESCRIPTION);
    expect(navigation.state).toBe(EventCreationState.DESCRIPTION);
    navigation.setState(EventCreationState.DATE);
    expect(navigation.state).toBe(EventCreationState.DATE);
  });

  it('check purge ', () => {
    navigation.setState(EventCreationState.DATE);
    navigation.lastTitle = 'test';
    navigation.lastDescription = 'test';
    navigation.lastDate = 'test';
    navigation.purge();
    expect(navigation.state).toBe(EventCreationState.TITLE);
    expect(navigation.lastTitle).toBeNull();
    expect(navigation.lastDescription).toBeNull();
    expect(navigation.lastDate).toBeNull();
  });

  it('check on Back ', () => {
    navigation.setState(EventCreationState.DESCRIPTION);
    navigation.onBack();
    expect(navigation.state).toBe(EventCreationState.TITLE);
    navigation.setState(EventCreationState.DATE);
    navigation.onBack();
    expect(navigation.state).toBe(EventCreationState.DESCRIPTION);
    navigation.setState(EventCreationState.TITLE);
    navigation.onBack();
    expect(navigation.state).toBe(EventCreationState.TITLE);
  });

  it('check states checkers', () => {
    navigation.setState(EventCreationState.TITLE);
    expect(navigation.checkState(EventCreationState.TITLE)).toBe(true);
    navigation.setState(EventCreationState.PARTICIPANTS);
    expect(navigation.checkState(EventCreationState.PARTICIPANTS)).toBe(true);
    navigation.setState(EventCreationState.DESCRIPTION);
    expect(navigation.checkState(EventCreationState.DESCRIPTION)).toBe(true);
    navigation.setState(EventCreationState.DATE);
    expect(navigation.checkState(EventCreationState.DATE)).toBe(true);
  });

});