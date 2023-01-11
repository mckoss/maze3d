export { Maze };

import { RandomSet } from "./random-set.js";

// Maze class builds a maze on a complete graph of cells and the potential
// connecting edges between them.
//
// This class uses generics to allow the allow for any representation of Cell
// and Edge.  For example, a Cell could be a string, a number, or a instance
// of a class.
//
// We use a modified depth-first algorithm to generate the maze.  We start
// with a single cell and add it to the maze.  We then randomly select an
// edge from the set of edges that connect to another cell.  We proceed
// greedily until we cannot add any more neighbors, or until we have reached
// the depth limit.
//
// We then restart the process on a new cell in the frontier Set.  We are
// finished when all the cells of the maze have been visited.
class Maze<Cell, Edge> {
    start: Cell;
    current: Cell | undefined;
    depth: number = 0;
    depthLimit: number;

    visited: Set<Cell> = new Set();
    neighbors: Map<Cell, RandomSet<[Edge, Cell]>> = new Map();
    frontier: RandomSet<Cell> = new RandomSet();

    constructor(start: Cell, depthLimit = 10) {
        this.start = start;
        this.depthLimit = depthLimit;
        this.visit(start);
    }

    addEdge(edge: Edge, cell1: Cell, cell2: Cell) {
        this.addNeighbor(cell1, cell2, edge);
        this.addNeighbor(cell2, cell1, edge);
    }

    addNeighbor(cell1: Cell, cell2: Cell, edge: Edge) {
        if (!this.neighbors.has(cell1)) {
            this.neighbors.set(cell1, new RandomSet());
        }
        const rs = this.neighbors.get(cell1)!;
        rs.add([edge, cell2]);
    }

    nextEdge(): Edge | undefined {
        if (this.visited.size === this.cellCount) {
            return undefined;
        }

        // Try to deepen the current path to a neighboring cell.
        if (this.current !== undefined && this.depth < this.depthLimit) {
            let edge = this.findEdge();
            if (edge !== undefined) {
                return edge;
            }
        }

        // Restart from a frontier cell, and find one with an unvisited
        // neighbor.  We remove frontier cells if all their neighbors have
        // been visited.
        while (this.frontier.size > 0) {
            console.log(`Restarting after ${this.depth} cells (${this.visited.size} visited, ${this.frontier.size} remain)`);
            this.depth = 0;
            this.current = this.frontier.peek()!;
            let edge = this.findEdge();
            if (edge !== undefined) {
                return edge;
            }

            // Frontier cell has no unvisited neighbors.
            this.frontier.deleteLast();
        }

        return undefined;
    }

    // Find an edge to an unvisited neighbor from the current cell.
    // The current cell is changed to the neighbor if one is found.
    findEdge(): Edge | undefined {
        let neighbors = this.neighbors.get(this.current!)!;
        let neighbor: [Edge, Cell] | undefined;
        while ((neighbor = neighbors.next()) !== undefined) {
            if (this.visited.has(neighbor[1])) {
                continue;
            }
            this.visit(neighbor[1]);
            return neighbor[0];
        }
        return undefined;
    }

    visit(cell: Cell) {
        if (this.current === undefined) {
            this.depth = 0;
        }
        this.current = cell;
        this.visited.add(cell);
        this.frontier.add(cell);
        this.depth += 1;
    }

    get cellCount(): number {
        return this.neighbors.size;
    }
}
