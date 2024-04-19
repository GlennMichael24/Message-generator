const getRandomNumber = num => {
    return Math.floor(Math.random() * num)
}

const collectiveAdvice = {
    colorInfo: ['blue', 'red', 'white', 'black', 'green', 'yellow'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['trust no one', 'keep an eye on the sky', 'go out and meet someone', 'today the world is yours']
}

let personalWisdom = []

for(let prop in collectiveAdvice) {
    let optionIndex = getRandomNumber(collectiveAdvice[prop].length)

    
}