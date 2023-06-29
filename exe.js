function balancedExpression(string) {
    const elements = [['{', '}'], ['[', ']'], ['(', ')']];
    const keys = {};
    for (let i in string) {
        keys[string[i]] = keys[string[i]] ? keys[string[i]] + 1 : 1;
    }

    return elements.reduce((alreadyCheked, value) => {
        const toOpen = keys[value[0]]
        const toEnd = keys[value[1]]
        
        return (
            Boolean(toOpen) || Boolean(toEnd) ? Boolean(toOpen && toEnd && toOpen === toEnd) : true
        ) && alreadyCheked;
    }, true);
}

//TESTES 

console.log(balancedExpression('(f[fd{saf{s}d]f)')) // deve retornar false
console.log(balancedExpression('[i like to (drink)')) //deve retornar false
console.log(balancedExpression('[2*3-(4/3]')) //deve retornar false

console.log(balancedExpression('(f[fd{saf}{s}d]f)')) //deve retornar true
console.log(balancedExpression('[coffe is a {pro(gra)mmer} (medicine)]')) //deve retornar true
console.log(balancedExpression('[7/2-(5*2)]')) //deve retornar true