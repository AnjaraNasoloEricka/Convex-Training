export interface IAuth {
    username: string;
    password: string;
}

/**
 * check if the param meets criteria to be a task.
 */
function isValid(arg: unknown): boolean {
    return (
        !!arg &&
        typeof arg === 'object' &&
        'password' in arg && typeof arg.password === 'string' &&
        'username' in arg && typeof arg.username === 'string'
    );
}

export default {
    isValid
} as const;