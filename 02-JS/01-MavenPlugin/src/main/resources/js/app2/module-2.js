class TaxStrategy {
    constructor(country) {
        this.country = country;
    }

    taxFor(amount) {
        return "TODO CALCULATE ["+this.country+"] ["+amount+"]";
    }

}
