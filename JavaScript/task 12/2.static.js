class counter {
    static count = 0;                       //field
    
    static add (value){
        console.log(counter.count += value)  //method
    }
}

counter.add(4)                  