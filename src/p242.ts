class User {
    private readonly name: string;
    private readonly age: number;

    constructor(name: string, age: number) {
        if (name.trim() === '') {
            throw new Error('Name cannot be empty');
        }
        this.name = name;
        this.age = age;
    }

    getMessage(message: string): string {
        return `${this.name} (${this.age}) 「${message}」`
    }
}


const uhyo = new User( '  a  ', 26);
console.log(uhyo.getMessage('こんにちわ'));
