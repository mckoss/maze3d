import { assert } from "chai";

import { Maze } from "../maze.js";

suite("Maze", () => {
    test("constructor", () => {
        const maze = new Maze<string, string>("start");
        assert.equal(maze.start, "start");
    });

    test("two-cell maze", () => {
        const maze = new Maze<string, string>("start");
        maze.addEdge("edge", "start", "cell2");
        assert.equal(maze.neighbors.size, 2);
        assert.equal(maze.neighbors.get("start")!.size, 1);
        assert.equal(maze.current, "start");
        assert.equal(maze.frontier.size, 1);

        assert.equal(maze.nextEdge(), "edge");
        assert.equal(maze.current, "cell2");
        assert.equal(maze.frontier.size, 2);

        assert.isUndefined(maze.nextEdge());
        assert.equal(maze.frontier.size, 0);
    });

    test("3x3 maze", () => {
        const maze = new Maze<number, [number, number]>(0);
        for (let rw = 0; rw < 3; rw++) {
            for (let col = 0; col < 3; col++) {
                const index = rw * 3 + col;
                if (col < 2) {
                    maze.addEdge([index, index + 1], index, index + 1);
                }
                if (rw < 2) {
                    maze.addEdge([index, index + 3], index, index + 3);
                }
            }
        }
        assert.equal(maze.neighbors.size, 9);
        assert.equal(maze.neighbors.get(0)!.size, 2);
        assert.equal(maze.current, 0);
        assert.equal(maze.frontier.size, 1);

        let edgeCount = 0;
        let edge: [number, number] | undefined;
        while ((edge = maze.nextEdge()) !== undefined) {
            edgeCount++;
            console.log(edge);
        }
        assert.equal(edgeCount, 8);
        assert.equal(maze.frontier.size, 0);
    });

});
