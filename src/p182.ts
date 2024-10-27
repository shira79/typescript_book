function map(array: number[], callback: (value: number) => number ): number[]{
    const result = [];
    for (const value of array){
        result.push(callback(value));
    }
    return result;
}

function twice(value: number):number{
    return value * 2;
}

const numbers = [1,2,3,4,5];
console.log(map(numbers, twice))