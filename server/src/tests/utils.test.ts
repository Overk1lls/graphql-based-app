/* eslint-disable */

import { IFakeUser } from '../interfaces/dto/fake-user.dto';
import { IUser } from '../interfaces/dto/user.dto';

jest.mock('axios');

const axios = require('axios') as jest.Mock;
const { fetchAPI, createFakeUsers } = require('../lib/utils');

describe('Utils test', () => {

    it('Fetch API method (axios)', async () => {
        axios.mockResolvedValue({ data: 5 });

        const res = await fetchAPI({});

        expect(axios).toHaveBeenCalled();
        expect(res).toBe(5);
    });

    it('Should return 2 fake users', async () => {
        const fakeUsers: { results: IFakeUser[] } = {
            results: [
                {
                    id: {
                        value: '12312'
                    },
                    name: {
                        first: 'Allie',
                        last: 'Spencer'
                    },
                    login: {
                        username: 'Test_1'
                    },
                    registered: {
                        date: '2018-08-01T01:31:27.842Z',
                        age: 4
                    },
                    dob: {
                        date: '1969-04-16T16:21:44.438Z',
                        age: 53
                    },
                    location: {
                        country: 'Country 1',
                        city: 'City 1'
                    },
                    picture: {
                        large: 'https://randomuser.me/api/portraits/women/92.jpg',
                    }
                },
                {
                    login: {
                        username: 'Test_2'
                    },
                    name: {
                        first: 'Diana',
                        last: 'Richards'
                    },
                    location: {
                        city: 'Modesto',
                        country: 'United States',
                    },
                    dob: {
                        date: '1948-08-06T10:01:25.729Z',
                        age: 74
                    },
                    registered: {
                        date: '2018-04-23T23:09:18.528Z',
                        age: 4
                    },
                    id: {
                        value: '055-90-7979'
                    },
                    picture: {
                        large: 'https://randomuser.me/api/portraits/women/23.jpg'
                    },
                },
            ]
        };
        axios.mockResolvedValue({ data: fakeUsers });

        const users: IUser[] = await createFakeUsers(2);

        expect(axios).toHaveBeenCalled();
        expect(axios).toHaveBeenLastCalledWith('https://randomuser.me/api/?results=2', {
            method: 'GET',
            headers: undefined,
            data: undefined
        });
        expect(users).toEqual([
            {
                id: 0,
                name: 'Allie Spencer',
                username: 'Test_1',
                problems: 4,
                solves: 53,
                location: {
                    country: 'Country 1',
                    city: 'City 1'
                },
                avatar: 'https://randomuser.me/api/portraits/women/92.jpg'
            },
            {
                id: 1,
                name: 'Diana Richards',
                username: 'Test_2',
                problems: 4,
                solves: 74,
                location: {
                    country: 'United States',
                    city: 'Modesto'
                },
                avatar: 'https://randomuser.me/api/portraits/women/23.jpg'
            }
        ] as IUser[]);
    });
});

/* eslint-disable */
