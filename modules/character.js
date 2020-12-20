import { createChild, randomInteger, setEventListener, setUniqueEventListener } from "../helpers/helpers.js";
import { Timer } from "./timer.js";

export class Character 
{
    constructor (maxHeight, maxWidth, place) {
        this.setPicture();
        this.draw(maxHeight, maxWidth, place);
        

    }

    setPicture () {
        this.htmlElement = '<div>OO</div>';
    }


    setPosition (maxHeight, maxWidth) {

        if (!maxHeight || !maxWidth) {
            throw new Error ('The board dimensions are not defined.');
        }

        this.coordinate = {
            'x' : randomInteger ( 0, maxHeight) + 1,
            'y' : randomInteger (0, maxWidth) + 1,
        }
    }

    draw (maxHeight, maxWidth, place) {
        
        do {
            this.setPosition(maxHeight, maxWidth);
            let row = place.querySelector(`tr:nth-child(${this.coordinate.x})`);
        
            this.cell = row.querySelector(`td:nth-child(${this.coordinate.y})`);
    
        } while (this.cell.innerHTML !== "");

        this.char = createChild('char', 'div', this.cell);

        
        setEventListener(this.char, 'click', this.hide);

        this.setDisplayTime();

    }


    hide (object) {
        if( !object ) {
            return;
        }
    
        if ( object.target) {
            return object.target.parentNode.removeChild(object.target);

        }
        
        return object.innerHTML = '';
    }

    setDisplayTime () {
        let timer = new Timer;
        timer.setTimeout(this.hide, [this.cell], 2000);
    }





}