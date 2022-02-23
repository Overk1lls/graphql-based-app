import { IContext } from "./context"

export type ResolverFn = (parent: any, args: any, ctx: IContext) => any;

export interface IResolverMap {
    [field: string]: ResolverFn;
};

export interface IResolvers {
    Query: IResolverMap;
};