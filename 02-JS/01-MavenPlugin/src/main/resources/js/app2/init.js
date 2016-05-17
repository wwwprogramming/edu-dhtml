
// JUST AN EXAMPLE ON HOW TO TEST APPLICATION1

var myApp1 = new MyApp("Jane Doe");
myApp1.setRemoteService(new RemoteService());
myApp1.setTaxStrategy( new TaxStrategy("FINLAND/23/14/8"));

console.log(myApp1.getName());
console.log(myApp1.countTaxFor(12));
console.log(myApp1.callRemote());