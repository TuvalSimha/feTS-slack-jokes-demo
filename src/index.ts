import { humorClient } from './fets/humor-api/client';
import { slackClient } from './fets/slack-api/client';
import { Env } from './worker';

export async function main(env: Env) {
	const humorResponse = await humorClient['/jokes/random'].get({
		query: {
			'api-key': env.HUMOR_API_KEY,
		},
	});
	if (!humorResponse.ok) {
		const errorResponse = await humorResponse.text();
		throw new Error(errorResponse);
	}

	const randomJoke = await humorResponse.json();
	console.log(randomJoke);

	const slackResponse = await slackClient['/chat.postMessage'].post({
		headers: {
			Authorization: `Bearer ${env.SLACK_AUTH_TOKEN}`,
			token: env.SLACK_AUTH_TOKEN,
		},
		formUrlEncoded: {
			blocks: JSON.stringify([
				{
					type: 'header',
					text: {
						type: 'plain_text',
						text: 'Joke of the day',
						emoji: true,
					},
				},
				{
					type: 'divider',
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: `*${randomJoke.joke}*`,
					},
				},
			]),
			channel: env.SLACK_CHANNEL,
		},
	});
	console.log(slackResponse);
	if (!slackResponse.ok) {
		const errorResponse = await slackResponse.text();
		throw new Error(errorResponse);
	}

	const slackMessageWithJoke = await slackResponse.json();
	if (slackMessageWithJoke.ok) {
		console.log('Joke sent to Slack');
	}

	return slackMessageWithJoke;
}
