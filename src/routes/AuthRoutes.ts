import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import AuthService from '@src/services/convex/AuthService';
import {IReq, IRes} from './types/express/misc';


// **** Functions **** //

/**
 * Authenticate an user.
 */
async function attempt(req: IReq, res: IRes) {
    const user = req.body
    const authResponse = await AuthService.attempt({user.email, user.password});
    return res.status(HttpStatusCodes.OK).json({authResponse});
}

export default {
    attempt
} as const;
