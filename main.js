// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

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