function map<Argument,Return>(array: Argument[], callback: (value: Argument) => Return): Return[]{
    const result = [];
    for (const value of array){
        result.push(callback(value));
    }
    return result;
}

function twice(value: number):number{
    return value * 2;
}

const arr1 = [1,2,3,4,5];
console.log(map<number, number>(arr1, twice))

function addSuffix(suffix: string){
    return (str: string) => {
        return str + suffix;
    }
}
const arr2 = ['apple', 'banana', 'cherry'];
console.log(map<string, string>(arr2, addSuffix('!!!')))

function repeat (value: number, char:string): string{
    let result = '';
    for (let i = 0; i < value; i++){
        result += char;
    }
    return result;
}

const arr3 = [10,20, 30];
console.log(map<number, string>(arr3, (value) => repeat(value, 'z')))