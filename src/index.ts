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
    if (isSome(option)) {
        console.log(option.value);
    }
}

function isSome<T>(option: Option<T>): option is { value: T, label: 'some' } {
    return option.label === 'some';
}

test(someOption)
test(noneOption);


