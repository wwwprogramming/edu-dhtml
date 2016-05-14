
// JUST AN EXAMPLE ON HOW TO TEST APPLICATION1

myApp1.init("John Doe");
myApp1.setRemoteService(app1RemoteService);
myApp1.setTaxStrategy(app1TaxStrategyFactory.getInstance("FINLAND/23/14/8"));

console.log(myApp.getName());
console.log(myApp.countTaxFor(12));
console.log(myApp.callRemote());