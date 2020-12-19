

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

export function setEventListener (object, eventType, onEventFunction, bindedParams) {

    if (typeof onEventFunction !== 'function') {
        throw new Error ('The third argument has to be a function');
    }
    
    if (typeof eventType !== 'string') {
        throw new Error ('The event type has to be a string');
    }




    if (bindedParams && ( typeof bindedParams === 'string' ) ) {
        return object.addEventListener(eventType, onEventFunction.bind(bindedParams));

    } else if (bindedParams && ( typeof bindedParams === 'object' ) ) {

        if (bindedParams.isArray) {
            let [x,y,z] = bindedParams;
            return object.addEventListener(eventType, onEventFunction.bind(x,y,z));

        } 
        return object.addEventListener(eventType, onEventFunction.bind(bindedParams));

    } else if (!bindedParams) {
        return object.addEventListener(eventType, onEventFunction);

    } else {
        throw new Error('Something went wrong...');

    }
}


export function setUniqueEventListener (object, eventType, onEventFunction, bindedParams) {

    if (typeof onEventFunction !== 'function') {
        throw new Error ('The third argument has to be a function');
    }
    
    if (typeof eventType !== 'string') {
        throw new Error ('The event type has to be a string');
    }




    if (bindedParams && ( typeof bindedParams === 'string' ) ) {
        return object.addEventListener(eventType, function () {
            onEventFunction.bind(bindedParams);
            object.removeEventListener(eventType, onEventFunction);
        });

    } else if (bindedParams && ( typeof bindedParams === 'object' ) ) {

        if (bindedParams.isArray) {
            let [x,y,z] = bindedParams;
            return object.addEventListener(eventType, function () {
                onEventFunction.bind(x,y,z);
                object.removeEventListener(eventType, onEventFunction);
            });

        } 
        return object.addEventListener(eventType, function () {
            onEventFunction.bind(bindedParams);
            object.removeEventListener(eventType, onEventFunction);
        });

    } else if (!bindedParams) {
        return object.addEventListener(eventType, function () {
            onEventFunction;
            object.removeEventListener(eventType, onEventFunction);

        });

    } else {
        throw new Error('Something went wrong...');

    }
}

