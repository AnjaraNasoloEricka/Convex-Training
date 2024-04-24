import {IUser} from '@src/models/User';
import {ConvexHttpClient} from "convex/browser";
import {api} from "../../../convex/_generated/api";
import EnvVars from "@src/constants/EnvVars";

const client = new ConvexHttpClient(EnvVars.Convex.Url);

// **** Variables **** //

export const USER_NOT_FOUND_ERR = 'User not found';

// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(): Promise<IUser[]> {
    return await client.query(api.users.getUsers);
}

function getById(id: any): Promise<IUser> {
    return client.query(api.users.getUserById, {id})
        .then((result: IUser | null) => {
            if (result === null) {
                throw new Error(USER_NOT_FOUND_ERR);
            }
            return result;
        });
}

function getByEmail(email: string): Promise<IUser> {
    return client.query(api.users.getUserByEmail, {email})
        .then((result: IUser | null) => {
            if (result === null) {
                throw new Error(USER_NOT_FOUND_ERR);
            }
            return result;
        });
}

/**
 * Add one user.
 */
async function addOne(user: IUser): Promise<void> {
    await client.mutation(api.users.addUser, {user});
}

/**
 * Update one user.
 */
async function updateOne(user: IUser): Promise<void> {
    await client.mutation(api.users.updateUser, {user});
}

/**
 * Delete a user by their id.
 */
async function _delete(id: any): Promise<void> {
    await client.mutation(api.users.deleteUser, {id});
}


// **** Export default **** //

export default {
    getAll,
    addOne,
    updateOne,
    delete: _delete,
} as const;
