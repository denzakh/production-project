import { classNames } from './classNames';

describe('classNames', () => {
    test('only one param', () => {
        expect(classNames('cls')).toBe('cls');
    });
    test('with additional param', () => {
        const expected = 'cls one two';
        expect(classNames('cls', {}, ['one', 'two'])).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'cls one two';
        expect(classNames('cls', { one: true, two: true })).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'cls one';
        expect(classNames('cls', { one: true, two: false })).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'cls one';
        expect(classNames('cls', { one: true, two: undefined })).toBe(expected);
    });
});
