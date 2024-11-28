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
    return mapOption(option, x => x*2);
}

function mapOption<T, U>(option: Option<T>, callback: (value: T) => U): Option<U> {
    if (isSome(option)) {
        return {
            value: callback(option.value),
            label: 'some'
        }
    }
    return option;
}

function isSome<T>(option: Option<T>): option is { value: T, label: 'some' } {
    return option.label === 'some';
}

console.log(test(someOption))
console.log(test(noneOption))


