import { createClient, type NormalizeOAS } from 'fets';
import openapi from './openapi';

export const slackClient = createClient<NormalizeOAS<typeof openapi>>({
	endpoint: 'https://slack.com/api',
});
