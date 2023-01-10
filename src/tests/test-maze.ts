import { assert } from "chai";

import { Maze } from "../maze.js";

suite("Maze", () => {
    test("constructor", () => {
        const maze = new Maze<string, string>("start", "end");
        assert.equal(maze.start, "start");
        assert.equal(maze.end, "end");
    }
    );
});
