import axios from 'axios';
import { fetchUserDataAdvanced } from './index';
import { UserData, UserDataArray } from './types.ts';
jest.mock('axios');
interface ApiResponse {
	data: UserDataArray;
}
describe('getData', () => {
	let response: ApiResponse;
	beforeEach(() => {
		response = {
			data: [
				{
					login: 'sindresorhus',
					id: 170270,
					node_id: 'MDQ6VXNlcjE3MDI3MA==',
					avatar_url: 'https://avatars.githubusercontent.com/u/170270?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/sindresorhus',
					html_url: 'https://github.com/sindresorhus',
					followers_url: 'https://api.github.com/users/sindresorhus/followers',
					following_url: 'https://api.github.com/users/sindresorhus/following{/other_user}',
					gists_url: 'https://api.github.com/users/sindresorhus/gists{/gist_id}',
					starred_url: 'https://api.github.com/users/sindresorhus/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/sindresorhus/subscriptions',
					organizations_url: 'https://api.github.com/users/sindresorhus/orgs',
					repos_url: 'https://api.github.com/users/sindresorhus/repos',
					events_url: 'https://api.github.com/users/sindresorhus/events{/privacy}',
					received_events_url: 'https://api.github.com/users/sindresorhus/received_events',
					type: 'User',
					site_admin: false,
					score: 1.0,
				},
				{
					login: 'JakeWharton',
					id: 66577,
					node_id: 'MDQ6VXNlcjY2NTc3',
					avatar_url: 'https://avatars.githubusercontent.com/u/66577?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/JakeWharton',
					html_url: 'https://github.com/JakeWharton',
					followers_url: 'https://api.github.com/users/JakeWharton/followers',
					following_url: 'https://api.github.com/users/JakeWharton/following{/other_user}',
					gists_url: 'https://api.github.com/users/JakeWharton/gists{/gist_id}',
					starred_url: 'https://api.github.com/users/JakeWharton/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/JakeWharton/subscriptions',
					organizations_url: 'https://api.github.com/users/JakeWharton/orgs',
					repos_url: 'https://api.github.com/users/JakeWharton/repos',
					events_url: 'https://api.github.com/users/JakeWharton/events{/privacy}',
					received_events_url: 'https://api.github.com/users/JakeWharton/received_events',
					type: 'User',
					site_admin: false,
					score: 1.0,
				},
				{
					login: 'rafaballerini',
					id: 54322854,
					node_id: 'MDQ6VXNlcjU0MzIyODU0',
					avatar_url: 'https://avatars.githubusercontent.com/u/54322854?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/rafaballerini',
					html_url: 'https://github.com/rafaballerini',
					followers_url: 'https://api.github.com/users/rafaballerini/followers',
					following_url: 'https://api.github.com/users/rafaballerini/following{/other_user}',
					gists_url: 'https://api.github.com/users/rafaballerini/gists{/gist_id}',
					starred_url: 'https://api.github.com/users/rafaballerini/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/rafaballerini/subscriptions',
					organizations_url: 'https://api.github.com/users/rafaballerini/orgs',
					repos_url: 'https://api.github.com/users/rafaballerini/repos',
					events_url: 'https://api.github.com/users/rafaballerini/events{/privacy}',
					received_events_url: 'https://api.github.com/users/rafaballerini/received_events',
					type: 'User',
					site_admin: false,
					score: 1.0,
				},
			],
		};
	});

	test('Корректное значение', async () => {
		(axios.get as jest.Mock).mockReturnValue(Promise.resolve(response));
		let url: string = `https://api.github.com/search/users?q=type:user&page=1&per_page=3`;
		const data = await fetchUserDataAdvanced(url);
		expect(axios.get).toBeCalledTimes(1);
		expect(data).toMatchSnapshot();
	});
});
