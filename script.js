const getRandomNumber = num => {
    return Math.floor(Math.random() * num)
}

const collectiveAdvice = {
    colorInfo: ['blue', 'red', 'white', 'black', 'green', 'yellow'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['trust no one', 'keep an eye on the sky', 'go out and meet someone', 'remember: today the world is yours']
}

let personalWisdom = []

for(let prop in collectiveAdvice) {
    let optionIndex = getRandomNumber(collectiveAdvice[prop].length)

    switch(prop) {
        case 'colorInfo':
            personalWisdom.push(`Your color now is ${collectiveAdvice[prop][optionIndex]}.`)
            break
        case 'fortuneOutput':
            personalWisdom.push(`You are having: ${collectiveAdvice[prop][optionIndex]}.`)
            break
        case 'advice':
            personalWisdom.push(`You should ${collectiveAdvice[prop][optionIndex]}!`)
            break
        default:
            personalWisdom.push('There is not enough info.')            
    }
}

const formatWisdom = wisdom => {
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
}

formatWisdom(personalWisdom);