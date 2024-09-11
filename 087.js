function checknullun(n1){
    if (n1 === null || n1 === undefined){
        return 'Please enter number again'
    }else {return n1}
}

let testfun1 = checknullun(5)
let testfun2 = checknullun()
console.log(testfun1)
console.log(testfun2)