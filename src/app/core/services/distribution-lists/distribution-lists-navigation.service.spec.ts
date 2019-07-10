import { DistributionListsNavigationService, DistributionListState } from './distribution-lists-navigation.service';

describe('List Creation Navigation Service', () => {

  let navigation: DistributionListsNavigationService;

  beforeEach(() => {
    navigation = new DistributionListsNavigationService();
  });

  it('check states setters', () => {
    navigation.setState(DistributionListState.TITLE);
    expect(navigation.state).toBe(DistributionListState.TITLE);
    navigation.setState(DistributionListState.SUMMARY);
    expect(navigation.state).toBe(DistributionListState.SUMMARY);
    navigation.setState(DistributionListState.DESCRIPTION);
    expect(navigation.state).toBe(DistributionListState.DESCRIPTION);
    navigation.setState(DistributionListState.EVENT_CHOICE);
    expect(navigation.state).toBe(DistributionListState.EVENT_CHOICE);
  });

  it('check purge ', () => {
    navigation.setState(DistributionListState.DESCRIPTION);
    navigation.lastTitle = 'test';
    navigation.lastDescription = 'test';
    navigation.lastEvent = 'test';
    navigation.purge();
    expect(navigation.state).toBe(DistributionListState.EVENT_CHOICE);
    expect(navigation.lastTitle).toBeNull();
    expect(navigation.lastDescription).toBeNull();
    expect(navigation.lastEvent).toBeNull();
  });

  it('check on Back ', () => {
    navigation.setState(DistributionListState.DESCRIPTION);
    navigation.onBack();
    expect(navigation.state).toBe(DistributionListState.TITLE);
    navigation.setState(DistributionListState.TITLE);
    navigation.onBack();
    expect(navigation.state).toBe(DistributionListState.EVENT_CHOICE);
  });

  it('check states checkers', () => {
    navigation.setState(DistributionListState.TITLE);
    expect(navigation.checkState(DistributionListState.TITLE)).toBe(true);
    navigation.setState(DistributionListState.EVENT_CHOICE);
    expect(navigation.checkState(DistributionListState.EVENT_CHOICE)).toBe(true);
    navigation.setState(DistributionListState.DESCRIPTION);
    expect(navigation.checkState(DistributionListState.DESCRIPTION)).toBe(true);
    navigation.setState(DistributionListState.SUMMARY);
    expect(navigation.checkState(DistributionListState.SUMMARY)).toBe(true);
  });

});