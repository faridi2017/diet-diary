import { LandingModuleModule } from './landing-module.module';

describe('LandingModuleModule', () => {
  let landingModuleModule: LandingModuleModule;

  beforeEach(() => {
    landingModuleModule = new LandingModuleModule();
  });

  it('should create an instance', () => {
    expect(landingModuleModule).toBeTruthy();
  });
});
