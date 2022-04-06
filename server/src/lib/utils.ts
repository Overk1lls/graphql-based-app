import fetch, { HeadersInit, BodyInit, FetchError } from 'node-fetch';
import { IUser } from '../interfaces/dto/user.dto';
import { IFakeUser } from '../interfaces/fake-user.interface';

export const fetchAPI = async ({ url, method = 'GET', headers, body }: {
    url?: string,
    method?: string,
    headers?: HeadersInit,
    body?: BodyInit
}) => fetch(url, { method, headers, body })
    .then(res => res.json())
    .catch(err => console.error(err));

export const createFakeUsers = async (num: number) => {
    const url = `https://randomuser.me/api/?results=${num}`;
    const { results }: Record<string, any> = await fetchAPI({ url });

    const users = results.map((user: Record<string, any> & IFakeUser, index: number) => ({
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
    })) as IUser[];

    return users;
};
