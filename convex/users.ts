import {query, mutation} from "./_generated/server";
import {v} from "convex/values";

export const getUsers = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("users").collect();
    },
});

export const getUserById = query({
    args: {id: v.id("users")},
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id);
    },
});

export const addUser = mutation({
    args: {
        user: v.object({
            name: v.string(),
            email: v.string()
        })
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("users", args.user);
    },
});

export const updateUser = mutation({
    args: {
        user: v.object({
            _id: v.any(),
            name: v.string(),
            email: v.string()
        })
    },
    handler: async (ctx, args) => {
        const {user} = args;
        await ctx.db.replace(user._id, user);
        console.log(await ctx.db.get(user._id));
    }
});

export const deleteUser = mutation({
    args: {id: v.id("users")},
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);
    },
});
