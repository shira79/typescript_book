import * as fs from 'fs/promises';

const readFileWithTimeout = async (filePath: string, timeout: number): Promise<string> => {
    const timeoutPromise: Promise<string> = new Promise((resolve) => {
        setTimeout(() => resolve('timeoutやで'), timeout)
    });
    const readPromise = fs.readFile(filePath, 'utf-8')
    return Promise.race([readPromise, timeoutPromise])
};

const timeout = 0;
try {
    const result = await readFileWithTimeout('src/shira.txt', timeout);

    if (result === 'timeoutやで') {
        throw new Error('Timeout');
    }

    const text = result;
    const searchTerm = 'shira';

    let position = text.indexOf(searchTerm);
    let count = 0;
    while (position !== -1) {
        count++;
        position = text.indexOf(searchTerm, position + 1);
    }
    console.log(count)
} catch (error: any) {
    console.error('Error:', error.message)
}