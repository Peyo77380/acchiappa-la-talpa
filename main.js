'use strict';

import { Game } from './modules/game.js';


try {
    let game = new Game();

    game.setBoard (8, 8);
    game.setScoreCounter();
    game.startGame();

} catch (e) {
    alert(e)
}