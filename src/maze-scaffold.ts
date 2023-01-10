export { buildMaze, indexFromCoord, coordFromIndex };

import { Maze } from "./maze.js";

function buildMaze(rows: number, columns: number, depth: number) : Maze<number, [number, number]> {
    const depthLimit = Math.floor(Math.sqrt(rows * columns * depth));
    const maze = new Maze<number, [number, number]>(0, depthLimit);

    for (let d = 0; d < depth; d++) {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {

                const index = indexFromCoord(c, r, d, rows, columns);
                if (c < columns - 1) {
                    maze.addEdge([index, 0], index, index + 1)
                }
                if (r < rows - 1) {
                    maze.addEdge([index, 1], index, index + columns)
                }
                if (d < depth - 1) {
                    maze.addEdge([index, 2], index, index + columns * rows)
                }
            }
        }
    }

    return maze;
}

function indexFromCoord(c: number, r: number, d: number, rows: number, columns: number) {
    return (rows * columns) * d + columns * r + c;
}

function coordFromIndex(index: number, rows: number, columns: number) {
    const column = index % columns;
    const row = Math.floor(index / columns) % rows;
    const depth = Math.floor(index / (rows * columns));

    return [column, row, depth];
}
