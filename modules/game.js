import { createChild } from "../helpers/helpers.js";
import { Character } from "./character.js";
import { Timer } from "./timer.js";

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
        this.height = height;
        this.width = width;

        this.boardTable = createChild('boardTable', 'table', this.board);
        for (let i = 0; i < height; i++) {
            const row = createChild('boardRow', 'tr', this.boardTable );
            for (let j = 0; j < width; j++) {
                const cell = createChild('boardCell', 'td', row);
            }
        }
    
    }

    setScoreCounter () {
        this.scoreCounter = createChild('scoreCounter', 'div', this.wrapper);
    }


    startGame () {
        
        if (!this.height || !this.width) {
            throw new Error ('The board dimensions are not defined.');
        }

        if ( ! this.boardTable ) {
            throw new Error ('The parent element is not defined.')
        }
        
        

        for (let i = 0; i<10; i++) {
            let timer = new Timer();
            timer.setTimeout ( this.setCharacterProperties, [this.height, this.width, this.boardTable], (2000 + Math.random() /Math.random() * i*1000) );
            

        }

    
    }

    setCharacterProperties (height, width, boardTable) {
        let character = new Character (height, width, boardTable);
        let timer = new Timer ();
        timer.setTimeout ( character.hide, '', 2000)
    }

}

