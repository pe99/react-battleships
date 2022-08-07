//size of grid
export const ROW_SIZE = 10;
export const generateCellId = (row, col) => {
  return row * ROW_SIZE + col - ROW_SIZE;
};
export const validateShipLocation = ({
  row,
  col,
  placingPosition = 'H',
  shipSize,
  isOccupied,
  cells,
}) => {
  //test the parameters is right
  // console.log({ row, col, placingPosition, shipSize, isOccupied, cells });
  row = 1 * row;
  col = col * 1;
  if (isOccupied) return false;
  else if (placingPosition === 'H') {
    if (col - 1 + shipSize > ROW_SIZE) return false;

    for (let newCol = col; newCol < col + shipSize; newCol++) {
      const cellId = generateCellId(row, newCol);
      if (cells[cellId]?.occupy.isOccupied) return false;
    }
  } else if (placingPosition === 'V') {
    if (row - 1 + shipSize > ROW_SIZE) return false;

    for (let newRow = row; newRow < row + shipSize; newRow++) {
      const cellId = generateCellId(newRow, col);
      if (cells[cellId]?.occupy.isOccupied) return false;
    }
  } else {
  }
  return true;
};
export const getShipSize = (ship) => {
  switch (ship) {
    case 'boat':
      return 1;
    case 'ship':
      return 2;
    case 'submarine':
      return 3;
    case 'battlesShip':
      return 4;
    case 'carrier':
      return 5;
    default:
      return 0;
  }
};
