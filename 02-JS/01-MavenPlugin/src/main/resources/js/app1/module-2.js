var app1TaxStrategyFactory = (function() {

    function TaxStrategy(country) {
        this.country = country;
    };

    TaxStrategy.prototype.taxFor = function(amount) {
        return "TODO CALCULATE ["+this.country+"] ["+amount+"]";
    };

    TaxStrategyFactory = {};

    TaxStrategyFactory.getInstance = function(country) {
        // Note: can not get any taxstrategy without new call.
        return new TaxStrategy(country);
    };

    return {
        getInstance: TaxStrategyFactory.getInstance
    };

})(/* no-args*/);