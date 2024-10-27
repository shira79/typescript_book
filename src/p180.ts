for (const i of sequence(1,100)){
    const message = getFizzBuzzString(i);
    console.log(message);
}

function sequence(start: number, end: number): number[] {
    const result = [];
    for (let i = start; i <= end; i++){
        result.push(i);
    }
    return result;
}

function getFizzBuzzString(i:number): string {
    if (i % 3 === 0 && i % 5 === 0){
        return 'FizzBuzz';
    }
    if (i % 3 === 0){
        return 'Fizz';
    }
    if (i % 5 === 0){
        return 'Buzz';
    }
    return String(i);
}
