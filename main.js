'use strict';

import { Game } from './modules/game.js';


try {
    let game = new Game();

    game.setBoard (10, 10);
    game.setScoreCounter();
    game.startGame();

} catch (e) {
    alert(e)
}