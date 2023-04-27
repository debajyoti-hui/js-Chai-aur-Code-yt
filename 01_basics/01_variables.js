const accountId = 144553;
let accountEmail = "debajyoti@google.com";
var accountPassword = "12345";
accountCity = "Kolkata";

// accountId = 2 // NOT ALLOWED

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/