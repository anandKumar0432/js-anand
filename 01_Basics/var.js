const accountId = 1234
let accountNo = "3214"
var accountCity = "katihar"
accountNo = "4356"
accountMail = "anand@google.com"
accountCity = "Biharsharif"

// prefer not to use var
// because of issue in block scope and fundtional scope
console.table( [accountId,accountNo, accountCity ,accountMail] )
