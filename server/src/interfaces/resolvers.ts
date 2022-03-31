import { IContext } from './context';

export type ResolverFn = (parent: unknown, args: unknown, ctx: IContext) => unknown;

export interface IResolverMap {
    [field: string]: ResolverFn;
}

export interface IResolvers {
    Query: IResolverMap;
}
