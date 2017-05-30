import add from '../../5kyu/a-chain-adding-function';
import { assert } from 'chai';

describe('a-chain-adding-function', () => {
    var test = function(title, target, should) {
        it(title, () => {
            assert.equal(target, should, `${title}应该等于${should},但实际等于${target}`);
        });
    };
    var addTwo = add(2);
    test('addTwo', addTwo, 2);
    test('addTwo + 5', addTwo + 5, 7);
    test('addTwo(3)', addTwo(3), 5);
    test('addTwo(3)(5)', addTwo(3)(5), 10);

});