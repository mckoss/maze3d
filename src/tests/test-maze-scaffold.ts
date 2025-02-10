import { assert } from "chai";

import { indexFromCoord, coordFromIndex, buildMaze } from "../maze-scaffold.js";

suite("Maze Scaffold", () => {
    test("indexFromPos - posFromIndex", () => {
        const tests: [[number, number, number], number][] = [
            [[0, 0, 0], 0],
            [[1, 0, 0], 1],
            [[0, 1, 0], 3],
            [[0, 0, 1], 9],
            [[2, 2, 2], 26],
        ];

        for (const [pos, index] of tests) {
            assert.equal(indexFromCoord(...pos, 3, 3), index);
            assert.deepEqual(coordFromIndex(index, 3, 3), pos);
        }
    });

    test("buildMaze", () => {
        const maze = buildMaze(3, 3, 3);
        assert.equal(maze.neighbors.size, 27);
        assert.equal(maze.neighbors.get(0)!.size, 3);
        assert.equal(maze.current, 0);
        assert.equal(maze.frontier.size, 1);

        let edgeCount = 0;
        while (maze.nextEdge() !== undefined) {
            edgeCount++;
        }
        assert.equal(edgeCount, 26);
        assert.equal(maze.visited.size, 27);
        // No assertion for frontier size - as we can have candidates for
        // expansion not fully proved as completely explored.
    });
});
