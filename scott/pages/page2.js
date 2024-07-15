class pageTwo{
    constructor(company,yoe){
        this.company = company
        this.yoe = yoe
    }

    greet(){
        return `You work in ${this.company} with ${this.yoe} of experience`
    }
}