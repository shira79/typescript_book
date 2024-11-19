

type Option<T> = {
    value: T;
    label: 'some';
} | {
    label: 'none';
}

const someOption: Option<number> = {
    value: 42,
    label: 'some'
}

const noneOption: Option<number> = {
    label: 'none'
}

function test(option: Option<number>) {
    if (option.label === 'some') {
        console.log(option.value);
    }
}

test(someOption)
test(noneOption);


