


//  === is Strict equality operator that checks value and DataType must be same 
// 1 === 1      true
// 1 === "1"    false  (number ≠ string)
// true === 1   false


//  !== Strict inequality operator that checks value or type or both are different 
// 1 !== 2       true (different values)
// 1 !== "1"     true (different types)
// 5 !== 5      false (same value + same type)

// continue is used inside loops it skips the current iteration and jumps to the next loop cycle.
// Does NOT run the rest of the code in that iteration

for(let day = 0;day <= 7;++day){   
    if(day === 0)
        console.log('Sunday');
    else if(day !== 0 && day === 7)
        continue;
    else
        console.log('Working days');
}

