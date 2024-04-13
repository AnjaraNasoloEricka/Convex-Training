export interface ITask {
    _id: string;
    text: string;
    isCompleted: boolean;
}

/**
 * check if the param meets criteria to be a task.
 */
function isTask(arg: unknown): boolean {
    return (
        !!arg &&
        typeof arg === 'object' &&
        'text' in arg && typeof arg.text === 'string' &&
        'isCompleted' in arg && typeof arg.isCompleted === 'boolean'
    );
}

export default {
    isTask
} as const;