export { Maze };

// Maze class builds a maze on a complete graph of cells
// and the potential connecting edges between them.
//
// This class is templated using references for Cells and Edges.
class Maze<Cell, Edge> {
    start: Cell;
    end: Cell;
    cells: Set<Cell> = new Set();
    edges: Map<Edge, [Cell, Cell]> = new Map();

    constructor(start: Cell, end: Cell) {
        this.start = start;
        this.end = end;
    }

    addCell(cell: Cell) {
        this.cells.add(cell);
    }

    addEdge(edge: Edge, cell1: Cell, cell2: Cell) {
        this.edges.set(edge, [cell1, cell2]);
    }
}
