import { ShortenPipe } from './shorten.pipe';

describe('ShortenPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortenPipe();
    expect(pipe).toBeTruthy();
  });

  it('shorten the input to 3', () => {
    const pipe = new ShortenPipe();
    expect(pipe.transform('test', 3)).toEqual('tes');
  });
});
