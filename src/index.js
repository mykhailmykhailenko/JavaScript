class Worker {
    #rate;

    constructor(name, rate, days) {
        this.name = name;
        this.rate = rate;
        if(value < 0 ) {
            throw new RangeError('rate must be > 0');
        }
        this.#rate = value;
    }

    get rate() {
        return this.#rate;
    }
}