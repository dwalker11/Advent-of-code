import test from "ava";
import captcha from "./captcha";

test('first test case', t => {
    const input = [1,1,2,2];

    t.is(captcha(input), 3);
});

test('second test case', t => {
    const input = [1,1,1,1];

    t.is(captcha(input), 4);
});

test('third test case', t => {
    const input = [1,2,3,4];

    t.is(captcha(input), 0);
});

test('third test case', t => {
    const input = [9,1,2,1,2,1,2,9];

    t.is(captcha(input), 9);
});
