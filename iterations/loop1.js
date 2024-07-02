// for loop 
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}
for(let i =0; i<=10; i++){
    console.log(`outer luuo value is ${i}`);
    for(let j=0; j<=10; j++){
    //console.log(`inner loop value is ${j} and loop is${i}`);
    console.log( i + "x" + j + "=" + i*j );
    }
}

let myarr = [ "you", "me", "shiv","power"];
for( let i =0; i<myarr.length; i++){ // yeh baki languages ki trah out of bound nhi dega bas out of loop gya toh undefined dedega
    const element = myarr[i];
    console.log(element)
}

// Important keywords    - break and continue

for(let i =1; i<=20; i++){
    if(i == 5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value is ${i}`);

}


for(let i =1; i<=20; i++){
    if(i == 5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value is ${i}`);

}


