import { RemoveSpacesAndDiacriticsPipe } from './remove-spaces-and-diacritics.pipe';

describe('RemoveSpacesAndDiacriticsPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveSpacesAndDiacriticsPipe();
    expect(pipe).toBeTruthy();
  });
});
