export class Timer 
{
    setTimeout (triggeredFunction, params, timeout) {
        this.timeout = setTimeout(
            () => {
                if (params === [] || !params) {

                    triggeredFunction();
                } else {
                    let [x,y, z] = params;
                    triggeredFunction(x,y,z);
                }

            }, 
            timeout);
    }


    setInterval (repeatedFunction, params, interval)
    {
        
        this.interval = setInterval(
            () => {
                if (params === [] || !params) {

                    repeatedFunction();
                } else {
                    let [x,y, z] = params;
                    repeatedFunction(x,y,z);
                }

            }, 
            interval);
    }

    stopInterval () {
        clearInterval(this.interval);
    }

}