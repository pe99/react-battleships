import Cell from "../components/Cell";
import Row from "../components/Row";

import { initCellState } from "../store/cellReducer";
//size of grid
export const ROW_SIZE = 10;
export const createGrid = (size) => {
	let rows = [];
	let cellsState = {};
	//creating rows
	for (let row = 1; row < size + 1; row++) {
		let cells = [];
		//creating cells
		for (let col = 1; col < size + 1; col++) {
			//creating grid
			cells.push(
				<Cell key={generateCellId(row, col)} row={row} col={col} />
			);
			//creating cells state
			cellsState[`${generateCellId(row, col)}`] = initCellState(row, col);
		}
		rows.push(<Row key={row} cells={cells} row={row} />);
	}

	return { cellsState, rows };
};
export const generateCellId = (row, col) => {
	return row * ROW_SIZE + col - ROW_SIZE;
};
