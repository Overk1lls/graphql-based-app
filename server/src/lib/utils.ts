import fetch from 'node-fetch';
import { IUser } from '../interfaces/dto/user.dto';

export const fetchAPI = async (
    url: string,
    method: string,
    headers: any,
    body: any
) => {
    return await fetch(url, {
        method,
        headers,
        body
    })
        .then((res: any) => res.json())
        .catch((err: Error) => console.error(err));
};

export const createFakeUsers = async (num: number) => {
    const url = `https://randomuser.me/api/?results=${num}`;
    const { results } = await fetch(url).then((res: any) => res.json());
    const users: IUser = results.map((user: any, index: number) => ({
        id: index,
        name: `${user.name.first} ${user.name.last}`,
        username: user.login.username,
        problems: user.registered.age,
        solves: user.dob.age,
        location: {
            country: user.location.country,
            city: user.location.city
        },
        avatar: user.picture.large
    }));
    return users;
};