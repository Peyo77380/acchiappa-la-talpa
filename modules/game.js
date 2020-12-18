import { createChild } from "../helpers/helpers.js";

export class Game 
{
    constructor () {
        this.wrapper = document.querySelector('.app');

    
        if (! this.wrapper ) {
            throw new Error ('Something went wrong while loading. Please refresh...') ;
        } 

    }

    setBoard (height, width) {
        this.board = createChild('board', 'div', this.wrapper);

        const table = createChild('boardTable', 'table', this.board);
        for (let i = 0; i < height; i++) {
            const row = createChild('boardRow', 'tr', table );
            for (let j = 0; j < width; j++) {
                const cell = createChild('boardCell', 'td', row);
                cell.innerText = j;
            }
        }
    
    }

    setScoreCounter () {
        this.scoreCounter = createChild('scoreCounter', 'div', this.wrapper);
    }

}


