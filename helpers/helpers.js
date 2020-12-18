

export function createChild ( classname, htmlTag, parent ) {

    if ( ! parent ) {
        throw new Error('The parent container doesn\'t exist');
    }

    if ( typeof classname !== 'string' ) {
        throw new Error('The classname of the new element has to be a string');
    } 

    if ( typeof htmlTag !== 'string' ) {
        throw new Error('The HTML tag of the new element has to be a string');
    }
    if ( typeof parent !== 'object' ) {
        throw new Error('The parent element has to be an HTML object');
    }


    const child = document.createElement(htmlTag);
    child.classList.add(classname);
    parent.appendChild(child);

    return child;
}

export function randomInteger(min, max) {
    
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error ('Minimum and maximum have to be of type "number".')
    }
    return Math.floor((Math.random() * max) + min);
  }

