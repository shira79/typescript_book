type User = {
    name: string;
    age: number;
    premium: boolean;
};

const data: string = ` 
    uhyo,26,1
    yamada,30,0
    tanaka,25,1
`;


const users:User[] = data.split(/\n/).map((line:string) => {
    return line.trim();
}).filter((line:string) => {
    return line !== '';
}).map((line:string) => {
    const [name, age, premium] = line.split(',');
    return {
        name: name,
        age: Number(age),
        premium: premium === '1',
    }
});

console.log(users);


for (const user of users) {
    if(user.premium) {
        console.log(`${user.name} (${user.age})はプレミアム会員です`);
    } else {
        console.log(`${user.name} (${user.age})はプレミアム会員ではありません`);
    }
}