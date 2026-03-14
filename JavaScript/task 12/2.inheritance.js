
class car{
    constructor(name,model){
        this.name= name,
        this.model= model
    }

}

class myCar  extends car{ 
    constructor(name,model,rate){
        super (name,model)              //calling parent constructor
        this.rate= rate
    }

    display() {
        console.log(`Is this ${this.name} ${this.model} costs ${this.rate} lakhs`)
    }
}

print = new myCar('skoda', 'slavia' , 15);

print.display()
    
