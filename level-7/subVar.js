function solution(value) {
    //Edge case
    let ass = value.toString().split('')
    if (ass.length >= 5) return `Value is ${value}`

    //Add leading zeroes depending on length of value
    while (ass.length < 5) {
        ass.unshift(0)
    }
    return `Value is ${ass.join('')}`

}