function matchingStrings(strings, queries) {
    let r = []
    for(let i of queries){
        let cc = 0
        for(let j of strings){
            if(i === j) cc++
        }
        r.push(cc)
    }
    return r
}

console.log(matchingStrings(['aba','baba','aba','xzxb'],['aba','xzxb','ab']));