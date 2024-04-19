export interface IUser {
    _id: string;
    name: string;
    email: string;
}

/**
 * check if the param meets criteria to be a task.
 */
function isUser(arg: unknown): boolean {
    return (
        !!arg &&
        typeof arg === 'object' &&
        'name' in arg && typeof arg.name === 'string' &&
        'email' in arg && typeof arg.email === 'string'
    );
}

export default {
    isUser
} as const;