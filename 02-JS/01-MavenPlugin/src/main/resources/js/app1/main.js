var myApp1 = (function() {

    var _name,_remoteService,_taxStrategy, app= {};

    app.init = function(name) {
        _name = name;
    };

    app.getName = function() {
        return _name;
    };

    app.countTaxFor = function(amount) {
        return _taxStrategy.taxFor(amount);
    };

    app.callRemote = function() {
        return _remoteService.getRemoteData();
    };

    app.setRemoteService = function(remoteService) {
        _remoteService = remoteService;
    };

    app.setTaxStrategy = function(taxStrategy) {
        _taxStrategy = taxStrategy;
    };

    return app;

})(/*no args*/);


