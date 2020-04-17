import { hello } from '.';

describe('index.ts', () => {
  it('exports hello world', async () => {
    expect(hello).toBe('world');
  });
});
