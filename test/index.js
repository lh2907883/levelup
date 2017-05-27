import VNode from '../src/vnode';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('a-chain-adding-function', () => {
    // var addTwo = add(2);
    // addTwo; // 2
    // addTwo + 5; // 7
    // addTwo(3); // 5
    // addTwo(3)(5); // 10
    it('create instance successful', () => {
        expect(VNode.create()).to.be.an.instanceof(VNode);
    });
});