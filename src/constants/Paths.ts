/**
 * Express router paths go here.
 */


export default {
    Base: '/api',
    Users: {
        Base: '/users',
        Get: '/all',
        Add: '/add',
        Update: '/update',
        Delete: '/delete/:id',
    },
    Task: {
        Base: '/task',
        GetById: '/get/:id',
        Get: '/all',
        Add: '/add',
        Update: '/update/:id',
        Delete: '/delete/:id',
    },
    Auth: {
        Base: '/auth',
        Attempt: '/attempt'
    }
} as const;
