import { configStore } from './store';
import {
  getHeadMessage,
  getSelectedShip,
  getPlacingStatus,
  getPlacingPosition,
  getOccupier,
  getIsOccupied,
  getName,
  getIsHit,
  getIsOccupiedByBot,
  getOccupierByBot,
  getPlayerTurn,
  getBotTurn,
  getStartBattle,
  getIsHitBot,
} from './selectors';
import {
  ChangeHeadMessage,
  selectShip,
  setPlayerName,
  changePlacingPosition,
  changePlacingStatus,
  changeBotTurn,
  changePlayerTurn,
  startBattle,
  playerHitTarget,
  botHitTarget,
} from './main/actions';
import { initCells, hitPlayerCell, occupyCell } from './cells/actions';
import {
  hitBotCell,
  initBotCells,
  occupyBotCell,
} from './cells/botCells/actions';
//exports
export {
  getHeadMessage,
  getIsOccupied,
  getOccupier,
  getPlacingStatus,
  initCells,
  hitPlayerCell,
  occupyCell,
  configStore,
  ChangeHeadMessage,
  setPlayerName,
  selectShip,
  getSelectedShip,
  getPlacingPosition,
  changePlacingPosition,
  changePlacingStatus,
  getIsHit,
  getName,
  hitBotCell,
  initBotCells,
  occupyBotCell,
  getIsOccupiedByBot,
  getOccupierByBot,
  changeBotTurn,
  changePlayerTurn,
  getPlayerTurn,
  getBotTurn,
  startBattle,
  getStartBattle,
  getIsHitBot,
  playerHitTarget,
  botHitTarget,
};
