import type {RequestEvent} from '@sveltejs/kit';
import {checkAuthentication} from '$lib/auth';
import {kindeAuthClient, type SessionManager} from '@kinde-oss/kinde-auth-sveltekit';

export async function load(event: RequestEvent) {
	await checkAuthentication(event);

	const {request} = event;
	const isAuthenticated = await kindeAuthClient.isAuthenticated(
		request as unknown as SessionManager
	);

	return {
		isAuthenticated
	};
}
