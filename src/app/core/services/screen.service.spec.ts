import { BootstrapWidth, ScreenService } from './screen.service';

describe('Screen Service', () => {

  let screenService: ScreenService;

  beforeEach(() => {
    screenService = new ScreenService();
  });

  it('check bootstrap widths', () => {
    expect(BootstrapWidth.xs).toBe(576);
    expect(BootstrapWidth.sm).toBe(540);
    expect(BootstrapWidth.md).toBe(720);
    expect(BootstrapWidth.lg).toBe(960);
    expect(BootstrapWidth.xl).toBe(1140);
  });

});