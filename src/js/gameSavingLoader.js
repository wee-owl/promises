import GameSavingObject from './gameSavingObject';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read().then((data) => json(data))
      .then((data) => JSON.parse(data))
      .then((data) => new GameSavingObject(data));
  }
}
