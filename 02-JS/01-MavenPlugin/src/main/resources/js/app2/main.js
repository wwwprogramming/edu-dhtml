class MyApp {
    constructor(name) {
        this.name = name;
    }

    setRemoteService(remoteService) {
        this.remoteService = remoteService;
    }

    setTaxStrategy(taxStrategy) {
        this.taxStrategy = taxStrategy;
    }

    getName() {return this.name }

    countTaxFor(amount) {
        return this.taxStrategy.taxFor(amount);
    }

    callRemote() {
        return this.remoteService.getRemoteData();
    }

}



