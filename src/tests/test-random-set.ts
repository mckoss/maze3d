import { assert } from "chai";

import { RandomSet, randInt } from "../random-set.js";

suite("RandomSet", () => {
    test("randInt", () => {
        for (let i = 0; i < 100; i++) {
            const n = randInt(10);
            assert.isAtLeast(n, 0);
            assert.isBelow(n, 10);
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
