import { main } from '.';

export interface Env {
	HUMOR_API_KEY: string;
	SLACK_CHANNEL: string;
	SLACK_AUTH_TOKEN: string;
}

export default {
	// async scheduled(env: Env): Promise<Response> {
	// 	if (!env.HUMOR_API_KEY || !env.SLACK_CHANNEL || !env.SLACK_AUTH_TOKEN) {
	// 		throw new Response('Missing environment variables');
	// 	}
	// 	console.info(`Executed from scheduled timer...`);
	// 	const result = await main(env);
	// 	if (!result.ok) {
	// 		throw new Response(JSON.stringify(result.message));
	// 	}
	// 	return new Response(JSON.stringify(result.message.text));
	// },
	async fetch(request: Request, env: Env): Promise<Response> {
		// if (!env.HUMOR_API_KEY || !env.SLACK_CHANNEL || !env.SLACK_AUTH_TOKEN) {
		// 	throw new Response('Missing environment variables');
		// }
		console.info(`Executed from HTTP request...`);
		const result = await main(env);
		if (!result.ok) {
			throw new Response(JSON.stringify(result.message));
		}
		console.log(result.message.text);
		return new Response(JSON.stringify(result.message.text));
	},
};
