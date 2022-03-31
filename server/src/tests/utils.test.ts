// import { fetchAPI } from "../lib/utils";

// jest.mock('node-fetch');

// import { IUser } from '../interfaces/dto/user.dto';
import * as utils from '../lib/utils';

// jest.mock('../lib/utils', () => ({
//     __esModule: true,
//     fetchAPI: jest.fn()
// }));

// ------- NOT WORKING

describe('Utils Test', () => {
    it('', async () => {
        // const fetch = await import('node-fetch');
        // const { fetchAPI } = await import('../lib/utils');
        
        // MOCK FETCH HERE fetch.mockReturnValue(Promise.resolve(5))

        // CALL fetchAPI()
        // const response = await fetchAPI({});

        // EXPECT TO BE WORKING
        // expect(fetch).toHaveBeenCalled();
        // expect(response).toBe(5);

        console.log(utils);
    })

    // it('Should create 2 fake users', async () => {
        // const fakeUsers: Record<string, any> = {
        //     results: [
        //         {
        //             gender: 'female',
        //             id: {
        //                 name: '12312',
        //                 value: '12312'
        //             },
        //             name: {
        //                 title: 'Ms',
        //                 first: 'Allie',
        //                 last: 'Spencer'
        //             },
        //             login: {
        //                 username: 'Test_1'
        //             },
        //             registered: {
        //                 date: '2018-08-01T01:31:27.842Z',
        //                 age: 4
        //             },
        //             dob: {
        //                 date: '1969-04-16T16:21:44.438Z',
        //                 age: 53
        //             },
        //             location: {
        //                 country: 'Country 1',
        //                 city: 'City 1'
        //             },
        //             picture: {
        //                 large: 'https://randomuser.me/api/portraits/women/92.jpg',
        //                 medium: 'https://randomuser.me/api/portraits/med/women/92.jpg',
        //                 thumbnail: 'https://randomuser.me/api/portraits/thumb/women/92.jpg'
        //             }
        //         },
        //         {
        //             gender: 'female',
        //             name: {
        //                 title: 'Mrs',
        //                 first: 'Diana',
        //                 last: 'Richards'
        //             },
        //             location: {
        //                 street: {
        //                     number: 4590,
        //                     name: 'Hickory Creek Dr'
        //                 },
        //                 city: 'Modesto',
        //                 state: 'Colorado',
        //                 country: 'United States',
        //                 postcode: 55951,
        //                 coordinates: {
        //                     latitude: '45.9148',
        //                     longitude: '-72.8817'
        //                 },
        //                 timezone: {
        //                     offset: '-2:00',
        //                     description: 'Mid-Atlantic'
        //                 }
        //             },
        //             email: 'diana.richards@example.com',
        //             login: {
        //                 uuid: '3f7410ad-0102-44f9-8c86-75918da28fdc',
        //                 username: 'smallgorilla314',
        //                 password: 'puffy',
        //                 salt: 'ZOiG83WP',
        //                 md5: 'c266b709e8c983ff49f0e63017953500',
        //                 sha1: 'bfe1872e7558ee9b4210f0ed522b4f43524e6d87',
        //                 sha256: 'b7dd4024281c87fa55efec0d6bb299807749c752d713a60d7c2c3dba43b3035f'
        //             },
        //             dob: {
        //                 date: '1948-08-06T10:01:25.729Z',
        //                 age: 74
        //             },
        //             registered: {
        //                 date: '2018-04-23T23:09:18.528Z',
        //                 age: 4
        //             },
        //             phone: '(515)-569-4911',
        //             cell: '(538)-084-7708',
        //             id: {
        //                 name: 'SSN',
        //                 value: '055-90-7979'
        //             },
        //             picture: {
        //                 large: 'https://randomuser.me/api/portraits/women/23.jpg',
        //                 medium: 'https://randomuser.me/api/portraits/med/women/23.jpg',
        //                 thumbnail: 'https://randomuser.me/api/portraits/thumb/women/23.jpg'
        //             },
        //             nat: 'US'
        //         },
        //     ]
        // };
        // const fetch = await import('node-fetch');
        // const { fetchAPI } = await import('../lib/utils');
        // (fetchAPI as jest.Mock).mockReturnValue(Promise.resolve(fakeUsers));

        // const response = await createFakeUsers(2);

        // expect(fetch).toHaveBeenCalled();
        // expect(fetch).toHaveBeenCalledWith({ url: 'https://randomuser.me/api/?results=2' });
        // expect(response).toEqual([
        //     {
        //         id: 1,
        //         name: 'Allie Spencer',
        //         username: 'Test_1',
        //         problems: 4,
        //         solves: 53,
        //         location: {
        //             country: 'Country 1',
        //             city: 'City 1'
        //         },
        //         avatar: 'https://randomuser.me/api/portraits/women/92.jpg'
        //     },
        //     {
        //         id: 2,
        //         name: 'Diana Richards',
        //         username: 'smallgorilla314',
        //         problems: 4,
        //         solves: 74,
        //         location: {
        //             country: 'United States',
        //             city: 'Modesto'
        //         },
        //         avatar: 'https://randomuser.me/api/portraits/women/23.jpg'
        //     }
        // ] as IUser[]);
    // });
});
