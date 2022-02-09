import IContext from "./context"

type ResolverFn = (parent: any, args: any, ctx: IContext) => any;

interface IResolverMap {
    [field: string]: ResolverFn;
};

export default interface IResolvers {
    Query: IResolverMap;
};