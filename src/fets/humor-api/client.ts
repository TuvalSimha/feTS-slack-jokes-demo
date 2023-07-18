import { createClient, type NormalizeOAS } from 'fets';
import openapi from './openapi';

export const humorClient = createClient<NormalizeOAS<typeof openapi>>({
	endpoint: 'https://api.humorapi.com',
});
