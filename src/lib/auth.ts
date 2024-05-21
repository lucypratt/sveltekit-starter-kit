import {redirect} from '@sveltejs/kit';
import {kindeAuthClient, type SessionManager} from '@kinde-oss/kinde-auth-sveltekit';
import type {RequestEvent} from '@sveltejs/kit';

export async function checkAuthentication(event: RequestEvent) {
	const isAuthenticated = await kindeAuthClient.isAuthenticated(
		event.request as unknown as SessionManager
	);

	if (!isAuthenticated) {
		throw redirect(303, '/');
	}

	return isAuthenticated;
}
