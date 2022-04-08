/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { IUser } from '../interfaces/dto/user.dto';
import { IFakeUser } from '../interfaces/dto/fake-user.dto';
import { APIError, ErrorCode } from '../services/api-error.service';

export const fetchAPI = async ({ url, method = 'GET', headers, body }: {
    url: string,
    method?: 'GET' | 'POST',
    headers?: AxiosRequestHeaders,
    body?: AxiosRequestConfig
}) => axios(url, { method, headers, data: body })
    .then(res => {
        if (res.status >= 400) {
            throw new APIError(ErrorCode.BAD_REQUEST);
        }
        return res.data;
    })
    .catch(err => console.error(err));

export const createFakeUsers = async (num: number) => {
    const url = `https://randomuser.me/api/?results=${num}`;
    const { results }: { results: IFakeUser[] } = await fetchAPI({ url });

    const users = results.map((user: IFakeUser, index: number) => ({
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
/* eslint-disable @typescript-eslint/no-explicit-any */
