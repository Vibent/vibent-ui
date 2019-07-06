import { RoutingStateService } from './routing-state.service';
import { Router } from '@angular/router';
import { VibentRoutes } from '../../shared/components/base-component/base-component';

describe('Routing state Service', () => {

  let router: Router;

  beforeEach(() => {
    router = <Router>{};
  });

  it('should return default route', () => {
    const routingState = new RoutingStateService(router);
    spyOn(routingState, 'loadRouting').and.callFake(() => {
      routingState.history.push('test');
    });
    routingState.loadRouting();
    expect(routingState.getPreviousRoute()).toBe(VibentRoutes.DEFAULT_URL);
  });

  it('should return previous route', () => {
    const routingState = new RoutingStateService(router);
    spyOn(routingState, 'loadRouting').and.callFake(() => {
      routingState.history.push('/events');
      routingState.history.push('/me');
    });
    routingState.loadRouting();
    expect(routingState.getPreviousRoute()).toBe(VibentRoutes.EVENTS_URL);
  });

  it('should delete content after ? in  previous route', () => {
    const routingState = new RoutingStateService(router);
    spyOn(routingState, 'loadRouting').and.callFake(() => {
      routingState.history.push('/events?returnValue=events');
      routingState.history.push('/me');
    });
    routingState.loadRouting();
    expect(routingState.getPreviousRoute()).toBe(VibentRoutes.EVENTS_URL);
  });

  it('should delete last history element', () => {
    const routingState = new RoutingStateService(router);
    routingState.history.push('/about?returnValue=events');
    routingState.history.push('/dummy?returnValue=groups');
    routingState.history.push('/register?returnValue=events');
    routingState.history.push('/dummy');
    routingState.unstackHistory();
    expect(routingState.history[routingState.history.length - 1]).toBe(VibentRoutes.REGISTER_URL + '?returnValue=events');
  });

  it('should correctly sanitize route', () => {
    const routingState = new RoutingStateService(router);
    expect(routingState.sanitizeRoute('/terms?returnValue=groups')).toBe(VibentRoutes.TERMS_URL);
    expect(routingState.sanitizeRoute('/loginWithoutChar')).toBe(VibentRoutes.DEFAULT_URL);
  });
});