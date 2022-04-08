export interface IFakeUser {
    id: {
        value: string;
    },
    name: {
        first: string,
        last: string;
    },
    login: {
        username: string;
    },
    registered: {
        date: Date | string,
        age: number;
    },
    dob: {
        date: Date | string,
        age: number;
    },
    location: {
        country: string,
        city: string;
    },
    picture: {
        large: string;
    };
}
