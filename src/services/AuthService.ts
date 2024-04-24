import {IUser} from '@src/models/User';
import {ConvexHttpClient} from "convex/browser";
import {api} from "../../../convex/_generated/api";
import EnvVars from "@src/constants/EnvVars";
import {IAuth} from "@src/models/AuthData";
import {check, sign} from "@src/util/misc";

const client = new ConvexHttpClient(EnvVars.Convex.Url);

// **** Variables **** //

export const USER_NOT_FOUND_ERR = 'User not found';

// **** Functions **** //

/**
 * Get all users.
 */

async function attempt(user: IAuth): Promise<any> {
    let account = await client.query(api.users.getByEmail, {email: user.email})
        .then((result: IUser | null) => {
            if (result === null) {
                throw new Error(USER_NOT_FOUND_ERR);
            }
            return result;
        });

    if (await check(account.password, user.password)) {
        return {
            user: account,
            token: sign({data: account._id})
        }
    }
}


// **** Export default **** //

export default {
    attempt
} as const;
