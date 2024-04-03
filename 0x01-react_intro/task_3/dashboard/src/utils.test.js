import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe('getFooterCopy', () => {
  it('returns the correct string when argument is true', () => {
    const isIndex = true;
    expect(getFooterCopy(isIndex)).toBe('Holberton School');
  });

  it('returns the correct string when argument is false', () => {
    const isIndex = false;
    expect(getFooterCopy(isIndex)).toBe('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  it('returns a non-empty string', () => {
    const notification = getLatestNotification();
    expect(typeof notification).toBe('string');
    expect(notification.length).toBeGreaterThan(0);
  });
});
