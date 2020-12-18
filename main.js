'use strict';

import { Game } from './modules/game.js';


try {
    let game = new Game();

    game.setBoard (5, 3);
} catch (e) {
    alert(e)
}