class Dictionary{
    constructor(wordsArray){
        this.dict = new Set(wordsArray)
    }

    isInDict(word){
        return this.dict.some((dictWord) =>{
            const regexTemplate = word.replaceAll('*','.')
            const regex = new RegExp(`^${regexTemplate}$`)
            return regex.test(dictWord)
        })
     //   return this.dict.has(word)
    }
}

const test = new Dictionary(['cat','bar','dog']);

console.log(test.isInDict('cat'))
console.log(test.isInDict('don'))
console.log(test.isInDict('bat'))
