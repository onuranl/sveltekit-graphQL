/** @type {import('./$types').Actions} */

import axios, { AxiosError, type AxiosResponse } from 'axios';
import type { Actions } from '@sveltejs/kit';

import { toast } from '@zerodevx/svelte-toast';

export const actions: Actions = {
	login: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');
		const password = data.get('password');

		axios({
			method: 'get',
			url: 'https://large-oryx-93.hasura.app/api/rest/login',
			data: { email, password },
			headers: {
				'Content-Type': 'application/json',
				'x-hasura-admin-secret': 'LdlWowjC4B4CWeV5hTiDbAfLYs1WK1NLMqkeYcIxSPTw5D7nD07Dd3gRfvTAyEd8'
			}
		})
			.then((response: AxiosResponse) => {
				toast.push('başarılı');
				return response.data;
			})
			.catch((err: AxiosError) => {
				console.log('err', err.response?.data.error);
				return toast.push(err.response?.data.error);
			});

		return false;
	},
	register: async ({ request }) => {
		const data = await request.formData();

		const username = data.get('username');
		const email = data.get('email');
		const password = data.get('password');

		const isEmailExitOnOtherPlatforms = async () => {
			const response = await axios.get('https://jsonplaceholder.typicode.com/comments');

			const data: Array<{ email: string }> = response.data;

			const emails: Array<string> = data.map((item) => item.email);

			return emails.includes(email as string);
		};

		if (await isEmailExitOnOtherPlatforms()) {
			return toast.push('email alreadt usign on other platforms');
		}

		axios({
			method: 'post',
			url: 'https://large-oryx-93.hasura.app/api/rest/register',
			data: { username, email, password },
			headers: {
				'Content-Type': 'application/json',
				'x-hasura-admin-secret': 'LdlWowjC4B4CWeV5hTiDbAfLYs1WK1NLMqkeYcIxSPTw5D7nD07Dd3gRfvTAyEd8'
			}
		})
			.then((response: AxiosResponse) => {
				toast.push('başarılı');
				return response.data;
			})
			.catch((err: AxiosError) => {
				console.log('err', err.response?.data.error);
				return toast.push(err.response?.data.error);
			});
	}
};
