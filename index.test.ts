import formatTime from "./index";

describe('formatTime', () => {
    test('formats time with HH:MM:SS', () => {
        expect(formatTime(3661, 'HH:MM:SS')).toBe('01:01:01');
    });

    test('formats time with MM:SS when there are no hours', () => {
        expect(formatTime(61, 'MM:SS')).toBe('01:01');
    });

    test('formats time with SS when there are no minutes and hours', () => {
        expect(formatTime(59, 'SS')).toBe('59');
    });

    test('formats time with MM:SS when hours should be ignored', () => {
        expect(formatTime(3661, 'MM:SS')).toBe('61:01');
    });

    test('formats time with SS when hours and minutes should be ignored', () => {
        expect(formatTime(3661, 'SS')).toBe('3661');
    });

    test('formats time with optional HH in parentheses', () => {
        expect(formatTime(3661, '(HH:)MM:SS')).toBe('01:01:01');
        expect(formatTime(361, '(HH:)MM:SS')).toBe('06:01');
    });

    test('formats time with optional MM in parentheses', () => {
        expect(formatTime(61, '(MM:)SS')).toBe('01:01');
        expect(formatTime(1, '(MM:)SS')).toBe('01');
    });

    test('formats time with optional HH and MM in parentheses', () => {
        expect(formatTime(3661, '(HH:)(MM:)SS')).toBe('01:01:01');
        expect(formatTime(61, '(HH:)(MM:)SS')).toBe('01:01');
        expect(formatTime(1, '(HH:)(MM:)SS')).toBe('01');
    });

    test('handles edge cases for exactly 60 seconds', () => {
        expect(formatTime(60, 'MM:SS')).toBe('01:00');
    });

    test('handles edge cases for exactly 3600 seconds', () => {
        expect(formatTime(3600, 'HH:MM:SS')).toBe('01:00:00');
    });

    test('handles zero seconds', () => {
        expect(formatTime(0, 'HH:MM:SS')).toBe('00:00:00');
    });

    test('handles zero seconds with optional format', () => {
        expect(formatTime(0, '(HH:)(MM:)SS')).toBe('00');
    });
});