import { createChild, randomInteger } from "../helpers/helpers.js";

export class Character 
{
    constructor () {

        
    }

    setPicture () {
        this.htmlElement = '<div>OO</div>';
    }


    setPosition (maxHeight, maxWidth) {

        if (!maxHeight || !maxWidth) {
            throw new Error ('The board dimensions are not defined.');
        }

        this.coordinate = {
            'x' : randomInteger ( 0, maxHeight) +1,
            'y' : randomInteger (0, maxWidth) +1,
        }
    }

    draw (place) {
        
        let row = place.querySelector(`tr:nth-child(${this.coordinate.x})`);
        
        let cell = row.querySelector(`td:nth-child(${this.coordinate.y})`)
        
        let char = createChild('char', 'div', cell);


    }




}