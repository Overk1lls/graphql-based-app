export interface IFakeUser {
    id: number,
    name: {
        first: string,
        last: string;
    },
    username: string,
    problems: number,
    solves: number,
    location: {
        country: string,
        city: string;
    },
    avatar: string;
}
