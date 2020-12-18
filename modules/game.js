import { createChild } from "../helpers/helpers.js";
import { Character } from "./character.js";

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
        let character = new Character ();

        if (!this.height || !this.width) {
            throw new Error ('The board dimensions are not defined.');
        }
        character.setPosition (this.height, this.width); 
        character.setPicture();
        character.draw(this.boardTable);
    }

}


