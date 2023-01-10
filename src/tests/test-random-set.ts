import { assert } from "chai";

import { RandomSet, randInt, shuffle } from "../random-set.js";

suite("RandomSet", () => {
    test("randInt", () => {
        for (let i = 0; i < 100; i++) {
            const n = randInt(10);
            assert.isAtLeast(n, 0);
            assert.isBelow(n, 10);
        }
    });

    test("shuffle", () => {
        const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const b = a.concat();
        shuffle(a);
        assert(a.length === 10, "wrong size");
        assert.notDeepEqual(a, b);
        for (let i = 0; i < 10; i++) {
            assert(a.indexOf(i) !== -1, `missing ${i}`);
        }
    });

    test("next", () => {
        const rs = new RandomSet<number>();
        for (let i = 0; i < 10; i++) {
            rs.add(i);
        }
        const a = [];
        let v: number | undefined;
        while ((v = rs.next()) !== undefined) {
            a.push(v);
        }
        assert(a.length === 10, `expect 10, got ${a.length}`);
        assert.isUndefined(rs.next());
    });
});
