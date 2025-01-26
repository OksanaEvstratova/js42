import {healthLevel} from '../health';

const charList = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
];

const charList2 = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
];

test('health test', () => {
    const result = healthLevel(charList);
    //eslint-disable-next-line
    expect(result).toEqual(charList2);
});