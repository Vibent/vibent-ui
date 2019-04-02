import { RoutingStateService } from './routing-state.service';
import { Router } from '@angular/router';

describe('Routing state Service', () => {

  let router: Router;

  beforeEach(() => {
    router = <Router> {};
  });

  it('should return default route', () => {
    const routingState = new RoutingStateService(router);
    spyOn(routingState, 'loadRouting').and.callFake(() => {
      routingState.history.push('test');
    });
    routingState.loadRouting();
    expect(routingState.getPreviousRoute()).toBe('/');
  });

  it('should return previous route', () => {
    const routingState = new RoutingStateService(router);
    spyOn(routingState, 'loadRouting').and.callFake(() => {
      routingState.history.push('test');
      routingState.history.push('test2');
    });
    routingState.loadRouting();
    expect(routingState.getPreviousRoute()).toBe('test');
  });

  it('should delete content after ? in  previous route', () => {
    const routingState = new RoutingStateService(router);
    spyOn(routingState, 'loadRouting').and.callFake(() => {
      routingState.history.push('test?returnValue=events');
      routingState.history.push('test2');
    });
    routingState.loadRouting();
    expect(routingState.getPreviousRoute()).toBe('test');
  });

  it('should delete last history element', () => {
    const routingState = new RoutingStateService(router);
    routingState.history.push('test?returnValue=events');
    routingState.history.push('dummy?returnValue=groups');
    routingState.history.push('test?returnValue=events');
    routingState.history.push('dummy');
    routingState.unstackHistory();
    expect(routingState.history[routingState.history.length - 1]).toBe('test?returnValue=events');
  });

  it('should correctly sanitize route', () => {
    const routingState = new RoutingStateService(router);
    expect(routingState.sanitizeRoute('dummy?returnValue=groups')).toBe('dummy');
    expect(routingState.sanitizeRoute('dummyWithoutChar')).toBe('dummyWithoutChar');
  });
});