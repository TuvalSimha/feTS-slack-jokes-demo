export default {
	openapi: '3.0.0',
	servers: [
		{
			url: 'https://slack.com/api',
		},
	],
	info: {
		contact: {
			name: 'Slack developer relations',
			url: 'https://api.slack.com/support',
		},
		description:
			'One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.',
		title: 'Slack Web API',
		version: '1.7.0',
		'x-apisguru-categories': ['collaboration', 'messaging'],
		'x-logo': {
			url: 'https://api.apis.guru/v2/cache/logo/http_static.tumblr.com_wvuzcz9_LlKncfhmp_slack_logo_240.png',
		},
		'x-origin': [
			{
				format: 'openapi',
				url: 'https://raw.githubusercontent.com/slackapi/slack-api-specs/master/web-api/slack_web_openapi_v2.json',
				version: '3.0',
			},
		],
		'x-providerName': 'slack.com',
	},
	externalDocs: {
		description: 'Learn more about the Slack Web API',
		url: 'https://api.slack.com/web',
	},
	tags: [],
	paths: {
		'/admin.apps.approve': {
			post: {
				description: 'Approve an app for installation on a workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.apps.approve',
				},
				operationId: 'admin_apps_approve',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.apps:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									app_id: {
										description: 'The id of the app to approve.',
										type: 'string',
									},
									request_id: {
										description: 'The id of the request to approve.',
										type: 'string',
									},
									team_id: {
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.apps:write'],
					},
				],
				tags: ['admin.apps', 'admin'],
			},
		},
		'/admin.apps.approved.list': {
			get: {
				description: 'List approved apps for an org or workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.apps.approved.list',
				},
				operationId: 'admin_apps_approved_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.apps:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description: 'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'team_id',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'enterprise_id',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											approved_apps: [
												{
													app: {
														additional_info: '',
														app_directory_url: 'https://myteam.enterprise.slack.com/apps/A0W7UKG8E-my-test-app',
														app_homepage_url: 'https://www.slack.com',
														description: 'test app',
														help_url: 'https://www.slack.com',
														icons: {
															image_1024: 'https://3026743124446w96_2bd4ea1ad1f89a23c242_1024.png',
															image_128: 'https://30267341249446w6_2bd4ea1ad1f89a23c242_128.png',
															image_192: 'https://30267431249446w6_2bd4ea1ad1f89a23c242_192.png',
															image_32: 'https://302674312496446w_2bd4ea1ad1f89a23c242_32.png',
															image_36: 'https://302674312496446w_2bd4ea1ad1f89a23c242_36.png',
															image_48: 'https://302674312496446w_2bd4ea1ad1f89a23c242_48.png',
															image_512: 'https://30267431249446w6_2bd4ea1ad1f89a23c242_512.png',
															image_64: 'https://302674312496446w_2bd4ea1ad1f89a23c242_64.png',
															image_72: 'https://302674312496446w_2bd4ea1ad1f89a23c242_72.png',
															image_96: 'https://302674312496446w_2bd4ea1ad1f89a23c242_96.png',
															image_original: 'https://302674446w12496_2bd4ea1ad1f89a23c242_original.png',
														},
														id: 'A0W7UKG8E',
														is_app_directory_approved: false,
														is_internal: false,
														name: 'My Test App',
														privacy_policy_url: 'https://www.slack.com',
													},
													date_updated: 1574296707,
													last_resolved_by: {
														actor_id: 'W0G82F4FD',
														actor_type: 'user',
													},
													scopes: [
														{
															description: 'Add the ability for people to direct message or mention @my_test_app',
															is_sensitive: true,
															name: 'bot',
															token_type: 'bot',
														},
													],
												},
											],
											ok: true,
											response_metadata: {
												next_cursor: '',
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.apps:read'],
					},
				],
				tags: ['admin.apps.approved', 'admin'],
			},
		},
		'/admin.apps.requests.list': {
			get: {
				description: 'List app requests for a team/workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.apps.requests.list',
				},
				operationId: 'admin_apps_requests_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.apps:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description: 'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'team_id',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											app_requests: [
												{
													app: {
														additional_info: '',
														app_directory_url: 'https://acmecorp.slack.com/apps/A061BL8RQ0-test-app',
														app_homepage_url: '',
														description: '',
														help_url: '',
														icons: {
															image_1024: '/cdn/15258203/img/testapp/service_1024.png',
															image_128: '/cdn/157258203/img/testapp/service_128.png',
															image_192: '/cdn/157258203/img/testapp/service_192.png',
															image_32: '/cdn/157658203/img/testapp/service_32.png',
															image_36: '/cdn/157658203/img/testapp/service_36.png',
															image_48: '/cdn/157658203/img/testapp/service_48.png',
															image_512: '/cdn/15758203/img/testapp/service_512.png',
															image_64: '/cdn/157658203/img/testapp/service_64.png',
															image_72: '/cdn/157658203/img/testapp/service_72.png',
															image_96: '/cdn/157658203/img/testapp/service_96.png',
														},
														id: 'A061BL8RQ0',
														is_app_directory_approved: true,
														is_internal: false,
														name: 'Test App',
														privacy_policy_url: 'https://testapp.com/privacy',
													},
													date_created: 1578956327,
													id: 'Ar0XJGFLMLS',
													message: 'test test again',
													previous_resolution: null,
													scopes: [
														{
															description: 'Post messages to specific channels in Slack',
															is_sensitive: false,
															name: 'incoming-webhook',
															token_type: 'user',
														},
													],
													team: {
														domain: 'acmecorp',
														id: 'T0M94LNUCR',
														name: 'Acme Corp',
													},
													user: {
														email: 'janedoe@example.com',
														id: 'W08RA9G5HR',
														name: 'Jane Doe',
													},
												},
											],
											ok: true,
											response_metadata: {
												next_cursor: '',
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'missing_scope',
											needed: 'admin.apps:read',
											ok: false,
											provided: 'read,client,admin,identify,post,apps',
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.apps:read'],
					},
				],
				tags: ['admin.apps.requests', 'admin'],
			},
		},
		'/admin.apps.restrict': {
			post: {
				description: 'Restrict an app for installation on a workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.apps.restrict',
				},
				operationId: 'admin_apps_restrict',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.apps:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									app_id: {
										description: 'The id of the app to restrict.',
										type: 'string',
									},
									request_id: {
										description: 'The id of the request to restrict.',
										type: 'string',
									},
									team_id: {
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.apps:write'],
					},
				],
				tags: ['admin.apps', 'admin'],
			},
		},
		'/admin.apps.restricted.list': {
			get: {
				description: 'List restricted apps for an org or workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.apps.restricted.list',
				},
				operationId: 'admin_apps_restricted_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.apps:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description: 'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'team_id',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'enterprise_id',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											response_metadata: {
												next_cursor: '',
											},
											restricted_apps: [
												{
													app: {
														additional_info: '',
														app_directory_url: 'https://myteam.enterprise.slack.com/apps/A0FDLP8M2L-my-test-app',
														app_homepage_url: 'https://example.com',
														description: 'A fun test app for Slack',
														help_url: 'https://example.com',
														icons: {
															image_1024: 'https://1433265338rl878408_eb57dbc818daa4ba15d6_1024.png',
															image_128: 'https://4332653438rl87808_eb57dbc818daa4ba15d6_128.png',
															image_192: 'https://4332653438rl87808_eb57dbc818daa4ba15d6_192.png',
															image_32: 'https://143326534038rl8788_eb57dbc818daa4ba15d6_32.png',
															image_36: 'https://143326534038rl8788_eb57dbc818daa4ba15d6_36.png',
															image_48: 'https://143326534038rl8788_eb57dbc818daa4ba15d6_48.png',
															image_512: 'https://4332653438rl87808_eb57dbc818daa4ba15d6_512.png',
															image_64: 'https://143326534038rl8788_eb57dbc818daa4ba15d6_64.png',
															image_72: 'https://143326534038rl8788_eb57dbc818daa4ba15d6_72.png',
															image_96: 'https://143326534038rl8788_eb57dbc818daa4ba15d6_96.png',
															image_original: 'https://143338rl8782653408_eb57dbc818daa4ba15d6_original.png',
														},
														id: 'A0FDLP8M2L',
														is_app_directory_approved: true,
														is_internal: false,
														name: 'My Test App',
														privacy_policy_url: 'https://example.com',
													},
													date_updated: 1574296721,
													last_resolved_by: {
														actor_id: 'W0G82LMFD',
														actor_type: 'user',
													},
													scopes: [
														{
															description: 'Upload, edit, and delete files on the user‟s behalf',
															is_sensitive: true,
															name: 'files:write:user',
															token_type: 'user',
														},
													],
												},
											],
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.apps:read'],
					},
				],
				tags: ['admin.apps.restricted', 'admin'],
			},
		},
		'/admin.conversations.archive': {
			post: {
				description: 'Archive a public or private channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.archive',
				},
				operationId: 'admin_conversations_archive',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_id: {
										description: 'The channel to archive.',
										type: 'string',
									},
								},
								required: ['channel_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of admin.conversations.archive',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'admin.conversations.archive schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from admin.conversations.archive',
									properties: {
										error: {
											enum: [
												'feature_not_enabled',
												'channel_not_found',
												'channel_type_not_supported',
												'default_org_wide_channel',
												'already_archived',
												'cant_archive_general',
												'restricted_action',
												'could_not_archive_channel',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'admin.conversations.archive error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:write'],
					},
				],
				tags: ['admin.conversations', 'admin'],
			},
		},
		'/admin.conversations.convertToPrivate': {
			post: {
				description: 'Convert a public channel to a private channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.convertToPrivate',
				},
				operationId: 'admin_conversations_convertToPrivate',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_id: {
										description: 'The channel to convert to private.',
										type: 'string',
									},
								},
								required: ['channel_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of admin.conversations.convertToPrivate',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'admin.conversations.convertToPrivate schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from admin.conversations.convertToPrivate',
									properties: {
										error: {
											enum: [
												'feature_not_enabled',
												'restricted_action',
												'name_taken',
												'channel_not_found',
												'channel_type_not_supported',
												'default_org_wide_channel',
												'method_not_supported_for_channel_type',
												'could_not_convert_channel',
												'external_channel_migrating',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'admin.conversations.convertToPrivate error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:write'],
					},
				],
				tags: ['admin.conversations', 'admin'],
			},
		},
		'/admin.conversations.create': {
			post: {
				description: 'Create a public or private channel-based conversation.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.create',
				},
				operationId: 'admin_conversations_create',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									description: {
										description: 'Description of the public or private channel to create.',
										type: 'string',
									},
									is_private: {
										description: 'When `true`, creates a private channel instead of a public channel',
										type: 'boolean',
									},
									name: {
										description: 'Name of the public or private channel to create.',
										type: 'string',
									},
									org_wide: {
										description:
											'When `true`, the channel will be available org-wide. Note: if the channel is not `org_wide=true`, you must specify a `team_id` for this channel',
										type: 'boolean',
									},
									team_id: {
										description: 'The workspace to create the channel in. Note: this argument is required unless you set `org_wide=true`.',
										type: 'string',
									},
								},
								required: ['name', 'is_private'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channel_id: 'C12345',
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of admin.conversations.create',
									properties: {
										channel_id: {
											$ref: '#/components/schemas/defs_channel_id',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'admin.conversations.create schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from admin.conversations.create',
									properties: {
										error: {
											enum: [
												'feature_not_enabled',
												'name_taken',
												'restricted_action',
												'team_not_found',
												'invalid_team',
												'invalid_name',
												'could_not_create_channel',
												'team_id_or_org_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'admin.conversations.create error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:write'],
					},
				],
				tags: ['admin.conversations', 'admin'],
			},
		},
		'/admin.conversations.delete': {
			post: {
				description: 'Delete a public or private channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.delete',
				},
				operationId: 'admin_conversations_delete',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_id: {
										description: 'The channel to delete.',
										type: 'string',
									},
								},
								required: ['channel_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of admin.conversations.delete',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'admin.conversations.delete schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from admin.conversations.delete',
									properties: {
										error: {
											enum: [
												'feature_not_enabled',
												'not_an_admin',
												'channel_not_found',
												'channel_type_not_supported',
												'default_org_wide_channel',
												'restricted_action',
												'could_not_delete_channel',
												'missing_scope',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'admin.conversations.delete error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:write'],
					},
				],
				tags: ['admin.conversations', 'admin'],
			},
		},
		'/admin.conversations.disconnectShared': {
			post: {
				description: 'Disconnect a connected channel from one or more workspaces.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.disconnectShared',
				},
				operationId: 'admin_conversations_disconnectShared',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_id: {
										description: 'The channel to be disconnected from some workspaces.',
										type: 'string',
									},
									leaving_team_ids: {
										description: 'The team to be removed from the channel. Currently only a single team id can be specified.',
										type: 'string',
									},
								},
								required: ['channel_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of admin.conversations.disconnectShared',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'admin.conversations.rename schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from admin.conversations.disconnectShared',
									properties: {
										error: {
											enum: [
												'feature_not_enabled',
												'not_an_admin',
												'not_an_enterprise',
												'channel_not_found',
												'not_supported',
												'team_not_found',
												'restricted_action',
												'missing_scope',
												'leaving_team_not_in_channel',
												'no_teams_to_disconnect',
												'leaving_team_required',
												'cannot_kick_team',
												'cannot_kick_home_team',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'admin.conversations.disconnectShared error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:write'],
					},
				],
				tags: ['admin.conversations', 'admin'],
			},
		},
		'/admin.conversations.ekm.listOriginalConnectedChannelInfo': {
			get: {
				description:
					'List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.ekm.listOriginalConnectedChannelInfo',
				},
				operationId: 'admin_conversations_ekm_listOriginalConnectedChannelInfo',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A comma-separated list of channels to filter to.',
						in: 'query',
						name: 'channel_ids',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A comma-separated list of the workspaces to which the channels you would like returned belong.',
						in: 'query',
						name: 'team_ids',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description: 'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channels: [
												{
													id: 'string',
													internal_team_ids: 'array',
													original_connected_channel_id: 'string',
													original_connected_host_id: 'string',
												},
											],
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:read'],
					},
				],
				tags: ['admin.conversations.ekm', 'admin'],
			},
		},
		'/admin.conversations.getConversationPrefs': {
			get: {
				description: 'Get conversation preferences for a public or private channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.getConversationPrefs',
				},
				operationId: 'admin_conversations_getConversationPrefs',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:read`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The channel to get preferences for.',
						in: 'query',
						name: 'channel_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of admin.conversations.getConversationPrefs',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										prefs: {
											properties: {
												can_thread: {
													properties: {
														type: {
															items: {
																type: 'string',
															},
															type: 'array',
														},
														user: {
															items: {
																type: 'string',
															},
															type: 'array',
														},
													},
													type: 'object',
												},
												who_can_post: {
													properties: {
														type: {
															items: {
																type: 'string',
															},
															type: 'array',
														},
														user: {
															items: {
																type: 'string',
															},
															type: 'array',
														},
													},
													type: 'object',
												},
											},
											type: 'object',
										},
									},
									required: ['ok'],
									title: 'admin.conversations.getConversationPrefs schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from admin.conversations.getConversationPrefs',
									properties: {
										error: {
											enum: [
												'feature_not_enabled',
												'not_an_admin',
												'not_an_enterprise',
												'restricted_action',
												'missing_scope',
												'channel_not_found',
												'channel_type_not_supported',
												'could_not_get_conversation_prefs',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'admin.conversations.unarchive error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:read'],
					},
				],
				tags: ['admin.conversations', 'admin'],
			},
		},
		'/admin.conversations.getTeams': {
			get: {
				description: 'Get all the workspaces a given public or private channel is connected to within this Enterprise org.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.getTeams',
				},
				operationId: 'admin_conversations_getTeams',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:read`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The channel to determine connected workspaces within the organization for.',
						in: 'query',
						name: 'channel_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											teams: ['T1234', 'T5678'],
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of admin.conversations.getTeams',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										response_metadata: {
											additionalProperties: false,
											properties: {
												next_cursor: {
													type: 'string',
												},
											},
											required: ['next_cursor'],
											type: 'object',
										},
										team_ids: {
											items: {
												$ref: '#/components/schemas/defs_team',
											},
											type: 'array',
										},
									},
									required: ['ok', 'team_ids'],
									title: 'admin.conversations.getTeams schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from admin.conversations.getTeams',
									properties: {
										error: {
											enum: [
												'feature_not_enabled',
												'channel_not_found',
												'channel_type_not_supported',
												'unsupported_team_type',
												'restricted_action',
												'could_not_get_teams',
												'invalid_cursor',
												'invalid_limit',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'admin.conversations.getTeams error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:read'],
					},
				],
				tags: ['admin.conversations', 'admin'],
			},
		},
		'/admin.conversations.invite': {
			post: {
				description: 'Invite a user to a public or private channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.invite',
				},
				operationId: 'admin_conversations_invite',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_id: {
										description: 'The channel that the users will be invited to.',
										type: 'string',
									},
									user_ids: {
										description: 'The users to invite.',
										type: 'string',
									},
								},
								required: ['user_ids', 'channel_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of admin.conversations.invite',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'admin.conversations.invite schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description: 'Schema for error response from admin.conversations.invite',
									properties: {
										error: {
											enum: [
												'feature_not_enabled',
												'channel_not_found',
												'channel_type_not_supported',
												'default_org_wide_channel',
												'restricted_action',
												'user_must_be_admin',
												'failed_for_some_users',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'admin.conversations.invite error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:write'],
					},
				],
				tags: ['admin.conversations', 'admin'],
			},
		},
		'/admin.conversations.rename': {
			post: {
				description: 'Rename a public or private channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.rename',
				},
				operationId: 'admin_conversations_rename',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_id: {
										description: 'The channel to rename.',
										type: 'string',
									},
									name: {
										type: 'string',
									},
								},
								required: ['channel_id', 'name'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of admin.conversations.rename',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'admin.conversations.rename schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from admin.conversations.rename',
									properties: {
										error: {
											enum: [
												'feature_not_enabled',
												'channel_not_found',
												'channel_type_not_supported',
												'restricted_action',
												'could_not_rename_channel',
												'default_org_wide_channel',
												'name_taken',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'admin.conversations.unarchive error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:write'],
					},
				],
				tags: ['admin.conversations', 'admin'],
			},
		},
		'/admin.conversations.restrictAccess.addGroup': {
			post: {
				description: 'Add an allowlist of IDP groups for accessing a channel',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.restrictAccess.addGroup',
				},
				operationId: 'admin_conversations_restrictAccess_addGroup',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_id: {
										description: 'The channel to link this group to.',
										type: 'string',
									},
									group_id: {
										description:
											'The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to be an allowlist for the private channel.',
										type: 'string',
									},
									team_id: {
										description:
											'The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `admin.conversations:write`',
										type: 'string',
									},
								},
								required: ['token', 'group_id', 'channel_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:write'],
					},
				],
				tags: ['admin.conversations.restrictAccess', 'admin'],
			},
		},
		'/admin.conversations.restrictAccess.listGroups': {
			get: {
				description: 'List all IDP Groups linked to a channel',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.restrictAccess.listGroups',
				},
				operationId: 'admin_conversations_restrictAccess_listGroups',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'channel_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.',
						in: 'query',
						name: 'team_id',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											group_ids: ['YOUR_GROUP_ID'],
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:read'],
					},
				],
				tags: ['admin.conversations.restrictAccess', 'admin'],
			},
		},
		'/admin.conversations.restrictAccess.removeGroup': {
			post: {
				description: 'Remove a linked IDP group linked from a private channel',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.restrictAccess.removeGroup',
				},
				operationId: 'admin_conversations_restrictAccess_removeGroup',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_id: {
										description: 'The channel to remove the linked group from.',
										type: 'string',
									},
									group_id: {
										description:
											'The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to remove from the private channel.',
										type: 'string',
									},
									team_id: {
										description:
											'The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `admin.conversations:write`',
										type: 'string',
									},
								},
								required: ['token', 'team_id', 'group_id', 'channel_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:write'],
					},
				],
				tags: ['admin.conversations.restrictAccess', 'admin'],
			},
		},
		'/admin.conversations.search': {
			get: {
				description: 'Search for public or private channels in an Enterprise organization.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.search',
				},
				operationId: 'admin_conversations_search',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:read`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Comma separated string of team IDs, signifying the workspaces to search through.',
						in: 'query',
						name: 'team_ids',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Name of the the channel to query by.',
						in: 'query',
						name: 'query',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Maximum number of items to be returned. Must be between 1 - 20 both inclusive. Default is 10.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description: 'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'The type of channel to include or exclude in the search. For example `private` will search private channels, while `private_exclude` will exclude them. For a full list of types, check the [Types section](#types).',
						in: 'query',
						name: 'search_channel_types',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'Possible values are `relevant` (search ranking based on what we think is closest), `name` (alphabetical), `member_count` (number of users in the channel), and `created` (date channel was created). You can optionally pair this with the `sort_dir` arg to change how it is sorted ',
						in: 'query',
						name: 'sort',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'Sort direction. Possible values are `asc` for ascending order like (1, 2, 3) or (a, b, c), and `desc` for descending order like (3, 2, 1) or (c, b, a)',
						in: 'query',
						name: 'sort_dir',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channels: [
												{
													created: 1449252889,
													creator: 'U012A3CDE',
													id: 'C012AB3CD',
													is_archived: false,
													is_channel: true,
													is_ext_shared: false,
													is_general: true,
													is_group: false,
													is_im: false,
													is_member: true,
													is_mpim: false,
													is_org_shared: false,
													is_pending_ext_shared: false,
													is_private: false,
													is_shared: false,
													name: 'general',
													name_normalized: 'general',
													num_members: 4,
													pending_shared: [],
													previous_names: [],
													purpose: {
														creator: '',
														last_set: 0,
														value: 'This channel is for team-wide communication and announcements. All team members are in this channel.',
													},
													topic: {
														creator: '',
														last_set: 0,
														value: 'Company-wide announcements and work-based matters',
													},
													unlinked: 0,
												},
											],
											ok: true,
											response_metadata: {
												next_cursor: 'dGVhbTpDMDYxRkE1UEI=',
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of admin.conversations.search',
									properties: {
										channels: {
											items: {
												$ref: '#/components/schemas/objs_channel',
											},
											type: 'array',
										},
										next_cursor: {
											type: 'string',
										},
									},
									required: ['channels', 'next_cursor'],
									title: 'admin.conversations.search schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'not_an_enterprise',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from admin.conversations.search',
									properties: {
										error: {
											enum: [
												'feature_not_enabled',
												'not_an_admin',
												'not_an_enterprise',
												'team_not_found',
												'not_allowed',
												'invalid_auth',
												'invalid_cursor',
												'invalid_search_channel_type',
												'invalid_sort',
												'invalid_sort_dir',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'admin.conversations.search error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:read'],
					},
				],
				tags: ['admin.conversations', 'admin'],
			},
		},
		'/admin.conversations.setConversationPrefs': {
			post: {
				description: 'Set the posting permissions for a public or private channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.setConversationPrefs',
				},
				operationId: 'admin_conversations_setConversationPrefs',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_id: {
										description: 'The channel to set the prefs for',
										type: 'string',
									},
									prefs: {
										description: 'The prefs for this channel in a stringified JSON format.',
										type: 'string',
									},
								},
								required: ['channel_id', 'prefs'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of admin.conversations.setConversationPrefs',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'admin.conversations.setConversationPrefs schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from admin.conversations.setConversationPrefs',
									properties: {
										error: {
											enum: [
												'feature_not_enabled',
												'not_an_admin',
												'channel_not_found',
												'channel_type_not_supported',
												'restricted_action',
												'missing_scope',
												'could_not_set_channel_pref',
												'default_org_wide_channel',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'admin.conversations.setConversationPrefs error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:write'],
					},
				],
				tags: ['admin.conversations', 'admin'],
			},
		},
		'/admin.conversations.setTeams': {
			post: {
				description: 'Set the workspaces in an Enterprise grid org that connect to a public or private channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.setTeams',
				},
				operationId: 'admin_conversations_setTeams',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_id: {
										description: 'The encoded `channel_id` to add or remove to workspaces.',
										type: 'string',
									},
									org_channel: {
										description: 'True if channel has to be converted to an org channel',
										type: 'boolean',
									},
									target_team_ids: {
										description:
											'A comma-separated list of workspaces to which the channel should be shared. Not required if the channel is being shared org-wide.',
										type: 'string',
									},
									team_id: {
										description:
											'The workspace to which the channel belongs. Omit this argument if the channel is a cross-workspace shared channel.',
										type: 'string',
									},
								},
								required: ['channel_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:write'],
					},
				],
				tags: ['admin.conversations', 'admin'],
			},
		},
		'/admin.conversations.unarchive': {
			post: {
				description: 'Unarchive a public or private channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.conversations.unarchive',
				},
				operationId: 'admin_conversations_unarchive',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.conversations:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_id: {
										description: 'The channel to unarchive.',
										type: 'string',
									},
								},
								required: ['channel_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of admin.conversations.unarchive',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'admin.conversations.unarchive schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from admin.conversations.unarchive',
									properties: {
										error: {
											enum: [
												'feature_not_enabled',
												'channel_not_found',
												'channel_not_archived',
												'channel_type_not_supported',
												'restricted_action',
												'could_not_unarchive_channel',
												'default_org_wide_channel',
												'missing_scope',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'admin.conversations.unarchive error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.conversations:write'],
					},
				],
				tags: ['admin.conversations', 'admin'],
			},
		},
		'/admin.emoji.add': {
			post: {
				description: 'Add an emoji.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.emoji.add',
				},
				operationId: 'admin_emoji_add',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									name: {
										description:
											'The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `admin.teams:write`',
										type: 'string',
									},
									url: {
										description:
											'The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best.',
										type: 'string',
									},
								},
								required: ['token', 'name', 'url'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:write'],
					},
				],
				tags: ['admin.emoji', 'admin'],
			},
		},
		'/admin.emoji.addAlias': {
			post: {
				description: 'Add an emoji alias.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.emoji.addAlias',
				},
				operationId: 'admin_emoji_addAlias',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									alias_for: {
										description: 'The alias of the emoji.',
										type: 'string',
									},
									name: {
										description:
											'The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required, although they may be included.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `admin.teams:write`',
										type: 'string',
									},
								},
								required: ['token', 'name', 'alias_for'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:write'],
					},
				],
				tags: ['admin.emoji', 'admin'],
			},
		},
		'/admin.emoji.list': {
			get: {
				description: 'List emoji for an Enterprise Grid organization.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.emoji.list',
				},
				operationId: 'admin_emoji_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.teams:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											cache_ts: '1575283387.000000',
											categories: [
												{
													emoji_names: ['grinning', 'grin', 'joy', 'etc etc ...'],
													name: 'Smileys & People',
												},
											],
											categories_version: '5',
											emoji: {
												black_square: 'alias:black_large_square',
												bowtie: 'https://emoji.slack-edge.com/T9TK3CUKW/bowtie/f3ec6f2bb0.png',
												cubimal_chick: 'https://emoji.slack-edge.com/T9TK3CUKW/cubimal_chick/85961c43d7.png',
												dusty_stick: 'https://emoji.slack-edge.com/T9TK3CUKW/dusty_stick/6177a62312.png',
												glitch_crab: 'https://emoji.slack-edge.com/T9TK3CUKW/glitch_crab/db049f1f9c.png',
												piggy: 'https://emoji.slack-edge.com/T9TK3CUKW/piggy/b7762ee8cd.png',
												pride: 'https://emoji.slack-edge.com/T9TK3CUKW/pride/56b1bd3388.png',
												shipit: 'alias:squirrel',
												simple_smile: {
													apple: 'https://a.slack-edge.com/80588/img/emoji_2017_12_06/apple/simple_smile.png',
													google: 'https://a.slack-edge.com/80588/img/emoji_2017_12_06/google/simple_smile.png',
												},
												slack: 'https://emoji.slack-edge.com/T9TK3CUKW/slack/7d462d2443.png',
												slack_call: 'https://emoji.slack-edge.com/T9TK3CUKW/slack_call/b81fffd6dd.png',
												squirrel: 'https://emoji.slack-edge.com/T9TK3CUKW/squirrel/465f40c0e0.png',
												thumbsup_all: 'https://emoji.slack-edge.com/T9TK3CUKW/thumbsup_all/50096a1020.gif',
												white_square: 'alias:white_large_square',
											},
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:read'],
					},
				],
				tags: ['admin.emoji', 'admin'],
			},
		},
		'/admin.emoji.remove': {
			post: {
				description: 'Remove an emoji across an Enterprise Grid organization',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.emoji.remove',
				},
				operationId: 'admin_emoji_remove',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									name: {
										description:
											'The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `admin.teams:write`',
										type: 'string',
									},
								},
								required: ['token', 'name'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:write'],
					},
				],
				tags: ['admin.emoji', 'admin'],
			},
		},
		'/admin.emoji.rename': {
			post: {
				description: 'Rename an emoji.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.emoji.rename',
				},
				operationId: 'admin_emoji_rename',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									name: {
										description:
											'The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required, although they may be included.',
										type: 'string',
									},
									new_name: {
										description: 'The new name of the emoji.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `admin.teams:write`',
										type: 'string',
									},
								},
								required: ['token', 'name', 'new_name'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:write'],
					},
				],
				tags: ['admin.emoji', 'admin'],
			},
		},
		'/admin.inviteRequests.approve': {
			post: {
				description: 'Approve a workspace invite request.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.inviteRequests.approve',
				},
				operationId: 'admin_inviteRequests_approve',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.invites:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					$ref: '#/components/requestBodies/admin_inviteRequests_approve',
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.invites:write'],
					},
				],
				tags: ['admin.inviteRequests', 'admin'],
			},
		},
		'/admin.inviteRequests.approved.list': {
			get: {
				description: 'List all approved workspace invite requests.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.inviteRequests.approved.list',
				},
				operationId: 'admin_inviteRequests_approved_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.invites:read`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'ID for the workspace where the invite requests were made.',
						in: 'query',
						name: 'team_id',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Value of the `next_cursor` field sent as part of the previous API response',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.invites:read'],
					},
				],
				tags: ['admin.inviteRequests.approved', 'admin'],
			},
		},
		'/admin.inviteRequests.denied.list': {
			get: {
				description: 'List all denied workspace invite requests.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.inviteRequests.denied.list',
				},
				operationId: 'admin_inviteRequests_denied_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.invites:read`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'ID for the workspace where the invite requests were made.',
						in: 'query',
						name: 'team_id',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Value of the `next_cursor` field sent as part of the previous api response',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'The number of results that will be returned by the API on each invocation. Must be between 1 - 1000 both inclusive',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.invites:read'],
					},
				],
				tags: ['admin.inviteRequests.denied', 'admin'],
			},
		},
		'/admin.inviteRequests.deny': {
			post: {
				description: 'Deny a workspace invite request.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.inviteRequests.deny',
				},
				operationId: 'admin_inviteRequests_deny',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.invites:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					$ref: '#/components/requestBodies/admin_inviteRequests_approve',
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.invites:write'],
					},
				],
				tags: ['admin.inviteRequests', 'admin'],
			},
		},
		'/admin.inviteRequests.list': {
			get: {
				description: 'List all pending workspace invite requests.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.inviteRequests.list',
				},
				operationId: 'admin_inviteRequests_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.invites:read`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'ID for the workspace where the invite requests were made.',
						in: 'query',
						name: 'team_id',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Value of the `next_cursor` field sent as part of the previous API response',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.invites:read'],
					},
				],
				tags: ['admin.inviteRequests', 'admin'],
			},
		},
		'/admin.teams.admins.list': {
			get: {
				description: 'List all of the admins on a given workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.teams.admins.list',
				},
				operationId: 'admin_teams_admins_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.teams:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The maximum number of items to return.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description: 'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'team_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											admin_ids: ['U1234'],
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:read'],
					},
				],
				tags: ['admin.teams.admins', 'admin'],
			},
		},
		'/admin.teams.create': {
			post: {
				description: 'Create an Enterprise team.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.teams.create',
				},
				operationId: 'admin_teams_create',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.teams:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									team_description: {
										description: 'Description for the team.',
										type: 'string',
									},
									team_discoverability: {
										description: "Who can join the team. A team's discoverability can be `open`, `closed`, `invite_only`, or `unlisted`.",
										type: 'string',
									},
									team_domain: {
										description: 'Team domain (for example, slacksoftballteam).',
										type: 'string',
									},
									team_name: {
										description: 'Team name (for example, Slack Softball Team).',
										type: 'string',
									},
								},
								required: ['team_domain', 'team_name'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											team: 'T12345',
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:write'],
					},
				],
				tags: ['admin.teams', 'admin'],
			},
		},
		'/admin.teams.list': {
			get: {
				description: 'List all teams on an Enterprise organization',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.teams.list',
				},
				operationId: 'admin_teams_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.teams:read`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The maximum number of items to return. Must be between 1 - 100 both inclusive.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description: 'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											teams: [
												{
													discoverability: 'hidden',
													id: 'T1234',
													name: 'My Team',
													primary_owner: {
														email: 'bront@slack.com',
														user_id: 'W1234',
													},
													team_url: 'https://subarachnoid.slack.com/',
												},
											],
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:read'],
					},
				],
				tags: ['admin.teams', 'admin'],
			},
		},
		'/admin.teams.owners.list': {
			get: {
				description: 'List all of the owners on a given workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.teams.owners.list',
				},
				operationId: 'admin_teams_owners_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.teams:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'team_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description: 'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											owner_ids: ['U1234'],
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:read'],
					},
				],
				tags: ['admin.teams.owners', 'admin'],
			},
		},
		'/admin.teams.settings.info': {
			get: {
				description: 'Fetch information about settings in a workspace',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.teams.settings.info',
				},
				operationId: 'admin_teams_settings_info',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.teams:read`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'team_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											team: {
												default_channels: 'array',
												domain: 'string',
												email_domain: 'string',
												enterprise_id: 'string',
												enterprise_name: 'string',
												icon: 'array',
												id: 'string',
												name: 'string',
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:read'],
					},
				],
				tags: ['admin.teams.settings', 'admin'],
			},
		},
		'/admin.teams.settings.setDefaultChannels': {
			post: {
				description: 'Set the default channels of a workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.teams.settings.setDefaultChannels',
				},
				operationId: 'admin_teams_settings_setDefaultChannels',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_ids: {
										description: 'An array of channel IDs.',
										type: 'string',
									},
									team_id: {
										description: 'ID for the workspace to set the default channel for.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `admin.teams:write`',
										type: 'string',
									},
								},
								required: ['token', 'team_id', 'channel_ids'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:write'],
					},
				],
				tags: ['admin.teams.settings', 'admin'],
			},
		},
		'/admin.teams.settings.setDescription': {
			post: {
				description: 'Set the description of a given workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.teams.settings.setDescription',
				},
				operationId: 'admin_teams_settings_setDescription',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.teams:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									description: {
										description: 'The new description for the workspace.',
										type: 'string',
									},
									team_id: {
										description: 'ID for the workspace to set the description for.',
										type: 'string',
									},
								},
								required: ['team_id', 'description'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:write'],
					},
				],
				tags: ['admin.teams.settings', 'admin'],
			},
		},
		'/admin.teams.settings.setDiscoverability': {
			post: {
				description: 'An API method that allows admins to set the discoverability of a given workspace',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.teams.settings.setDiscoverability',
				},
				operationId: 'admin_teams_settings_setDiscoverability',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.teams:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									discoverability: {
										description:
											"This workspace's discovery setting. It must be set to one of `open`, `invite_only`, `closed`, or `unlisted`.",
										type: 'string',
									},
									team_id: {
										description: 'The ID of the workspace to set discoverability on.',
										type: 'string',
									},
								},
								required: ['team_id', 'discoverability'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:write'],
					},
				],
				tags: ['admin.teams.settings', 'admin'],
			},
		},
		'/admin.teams.settings.setIcon': {
			post: {
				description: 'Sets the icon of a workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.teams.settings.setIcon',
				},
				operationId: 'admin_teams_settings_setIcon',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									image_url: {
										description: 'Image URL for the icon',
										type: 'string',
									},
									team_id: {
										description: 'ID for the workspace to set the icon for.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `admin.teams:write`',
										type: 'string',
									},
								},
								required: ['token', 'image_url', 'team_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:write'],
					},
				],
				tags: ['admin.teams.settings', 'admin'],
			},
		},
		'/admin.teams.settings.setName': {
			post: {
				description: 'Set the name of a given workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.teams.settings.setName',
				},
				operationId: 'admin_teams_settings_setName',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.teams:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									name: {
										description: 'The new name of the workspace.',
										type: 'string',
									},
									team_id: {
										description: 'ID for the workspace to set the name for.',
										type: 'string',
									},
								},
								required: ['team_id', 'name'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:write'],
					},
				],
				tags: ['admin.teams.settings', 'admin'],
			},
		},
		'/admin.usergroups.addChannels': {
			post: {
				description: 'Add one or more default channels to an IDP group.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.usergroups.addChannels',
				},
				operationId: 'admin_usergroups_addChannels',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.usergroups:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_ids: {
										description: 'Comma separated string of channel IDs.',
										type: 'string',
									},
									team_id: {
										description: 'The workspace to add default channels in.',
										type: 'string',
									},
									usergroup_id: {
										description: 'ID of the IDP group to add default channels for.',
										type: 'string',
									},
								},
								required: ['usergroup_id', 'channel_ids'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'not_an_admin',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response if the token provided is not associated with an Org Admin or Owner',
					},
				},
				security: [
					{
						slackAuth: ['admin.usergroups:write'],
					},
				],
				tags: ['admin.usergroups', 'admin'],
			},
		},
		'/admin.usergroups.addTeams': {
			post: {
				description: 'Associate one or more default workspaces with an organization-wide IDP group.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.usergroups.addTeams',
				},
				operationId: 'admin_usergroups_addTeams',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.teams:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									auto_provision: {
										description: 'When `true`, this method automatically creates new workspace accounts for the IDP group members.',
										type: 'boolean',
									},
									team_ids: {
										description:
											'A comma separated list of encoded team (workspace) IDs. Each workspace *MUST* belong to the organization associated with the token.',
										type: 'string',
									},
									usergroup_id: {
										description: 'An encoded usergroup (IDP Group) ID.',
										type: 'string',
									},
								},
								required: ['usergroup_id', 'team_ids'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.teams:write'],
					},
				],
				tags: ['admin.usergroups', 'admin'],
			},
		},
		'/admin.usergroups.listChannels': {
			get: {
				description: 'List the channels linked to an org-level IDP group (user group).',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.usergroups.listChannels',
				},
				operationId: 'admin_usergroups_listChannels',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.usergroups:read`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'ID of the IDP group to list default channels for.',
						in: 'query',
						name: 'usergroup_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'ID of the the workspace.',
						in: 'query',
						name: 'team_id',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Flag to include or exclude the count of members per channel.',
						in: 'query',
						name: 'include_num_members',
						schema: {
							type: 'boolean',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channels: [
												{
													id: 'C024BE91L',
													name: 'fun',
													num_members: 34,
													team_id: 'T024BE911',
												},
												{
													id: 'C024BE91K',
													name: 'more fun',
													team_id: 'T024BE912',
												},
												{
													id: 'C024BE91M',
													is_redacted: true,
													name: 'public-channel',
													num_members: 34,
													team_id: 'T024BE911',
												},
												{
													id: 'C024BE91N',
													name: 'some more fun',
													team_id: 'T024BE921',
												},
											],
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'not_an_admin',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response if the token provided is not associated with an Org Admin or Owner',
					},
				},
				security: [
					{
						slackAuth: ['admin.usergroups:read'],
					},
				],
				tags: ['admin.usergroups', 'admin'],
			},
		},
		'/admin.usergroups.removeChannels': {
			post: {
				description: 'Remove one or more default channels from an org-level IDP group (user group).',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.usergroups.removeChannels',
				},
				operationId: 'admin_usergroups_removeChannels',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.usergroups:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_ids: {
										description: 'Comma-separated string of channel IDs',
										type: 'string',
									},
									usergroup_id: {
										description: 'ID of the IDP Group',
										type: 'string',
									},
								},
								required: ['usergroup_id', 'channel_ids'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'not_an_admin',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response if the token provided is not associated with an Org Admin or Owner',
					},
				},
				security: [
					{
						slackAuth: ['admin.usergroups:write'],
					},
				],
				tags: ['admin.usergroups', 'admin'],
			},
		},
		'/admin.users.assign': {
			post: {
				description: 'Add an Enterprise user to a workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.users.assign',
				},
				operationId: 'admin_users_assign',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.users:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_ids: {
										description: 'Comma separated values of channel IDs to add user in the new workspace.',
										type: 'string',
									},
									is_restricted: {
										description: 'True if user should be added to the workspace as a guest.',
										type: 'boolean',
									},
									is_ultra_restricted: {
										description: 'True if user should be added to the workspace as a single-channel guest.',
										type: 'boolean',
									},
									team_id: {
										description: 'The ID (`T1234`) of the workspace.',
										type: 'string',
									},
									user_id: {
										description: 'The ID of the user to add to the workspace.',
										type: 'string',
									},
								},
								required: ['team_id', 'user_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.users:write'],
					},
				],
				tags: ['admin.users', 'admin'],
			},
		},
		'/admin.users.invite': {
			post: {
				description: 'Invite a user to a workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.users.invite',
				},
				operationId: 'admin_users_invite',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.users:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel_ids: {
										description: 'A comma-separated list of `channel_id`s for this user to join. At least one channel is required.',
										type: 'string',
									},
									custom_message: {
										description: 'An optional message to send to the user in the invite email.',
										type: 'string',
									},
									email: {
										description: 'The email address of the person to invite.',
										type: 'string',
									},
									guest_expiration_ts: {
										description:
											'Timestamp when guest account should be disabled. Only include this timestamp if you are inviting a guest user and you want their account to expire on a certain date.',
										type: 'string',
									},
									is_restricted: {
										description: 'Is this user a multi-channel guest user? (default: false)',
										type: 'boolean',
									},
									is_ultra_restricted: {
										description: 'Is this user a single channel guest user? (default: false)',
										type: 'boolean',
									},
									real_name: {
										description: 'Full name of the user.',
										type: 'string',
									},
									resend: {
										description: 'Allow this invite to be resent in the future if a user has not signed up yet. (default: false)',
										type: 'boolean',
									},
									team_id: {
										description: 'The ID (`T1234`) of the workspace.',
										type: 'string',
									},
								},
								required: ['team_id', 'email', 'channel_ids'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.users:write'],
					},
				],
				tags: ['admin.users', 'admin'],
			},
		},
		'/admin.users.list': {
			get: {
				description: 'List users on a workspace',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.users.list',
				},
				operationId: 'admin_users_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.users:read`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The ID (`T1234`) of the workspace.',
						in: 'query',
						name: 'team_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Limit for how many users to be retrieved per page',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											users: [
												{
													email: 'bront@slack.com',
													id: 'T1234',
													is_admin: false,
													is_bot: false,
													is_owner: false,
													is_primary_owner: false,
													is_restricted: false,
													is_ultra_restricted: false,
												},
											],
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.users:read'],
					},
				],
				tags: ['admin.users', 'admin'],
			},
		},
		'/admin.users.remove': {
			post: {
				description: 'Remove a user from a workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.users.remove',
				},
				operationId: 'admin_users_remove',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.users:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									team_id: {
										description: 'The ID (`T1234`) of the workspace.',
										type: 'string',
									},
									user_id: {
										description: 'The ID of the user to remove.',
										type: 'string',
									},
								},
								required: ['team_id', 'user_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.users:write'],
					},
				],
				tags: ['admin.users', 'admin'],
			},
		},
		'/admin.users.session.invalidate': {
			post: {
				description: 'Invalidate a single session for a user by session_id',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.users.session.invalidate',
				},
				operationId: 'admin_users_session_invalidate',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.users:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									session_id: {
										type: 'integer',
									},
									team_id: {
										description: 'ID of the team that the session belongs to',
										type: 'string',
									},
								},
								required: ['team_id', 'session_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.users:write'],
					},
				],
				tags: ['admin.users.session', 'admin'],
			},
		},
		'/admin.users.session.reset': {
			post: {
				description: 'Wipes all valid sessions on all devices for a given user',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.users.session.reset',
				},
				operationId: 'admin_users_session_reset',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.users:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									mobile_only: {
										description: 'Only expire mobile sessions (default: false)',
										type: 'boolean',
									},
									user_id: {
										description: 'The ID of the user to wipe sessions for',
										type: 'string',
									},
									web_only: {
										description: 'Only expire web sessions (default: false)',
										type: 'boolean',
									},
								},
								required: ['user_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.users:write'],
					},
				],
				tags: ['admin.users.session', 'admin'],
			},
		},
		'/admin.users.setAdmin': {
			post: {
				description: 'Set an existing guest, regular user, or owner to be an admin user.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.users.setAdmin',
				},
				operationId: 'admin_users_setAdmin',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.users:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									team_id: {
										description: 'The ID (`T1234`) of the workspace.',
										type: 'string',
									},
									user_id: {
										description: 'The ID of the user to designate as an admin.',
										type: 'string',
									},
								},
								required: ['team_id', 'user_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.users:write'],
					},
				],
				tags: ['admin.users', 'admin'],
			},
		},
		'/admin.users.setExpiration': {
			post: {
				description: 'Set an expiration for a guest user',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.users.setExpiration',
				},
				operationId: 'admin_users_setExpiration',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.users:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									expiration_ts: {
										description: 'Timestamp when guest account should be disabled.',
										type: 'integer',
									},
									team_id: {
										description: 'The ID (`T1234`) of the workspace.',
										type: 'string',
									},
									user_id: {
										description: 'The ID of the user to set an expiration for.',
										type: 'string',
									},
								},
								required: ['team_id', 'user_id', 'expiration_ts'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.users:write'],
					},
				],
				tags: ['admin.users', 'admin'],
			},
		},
		'/admin.users.setOwner': {
			post: {
				description: 'Set an existing guest, regular user, or admin user to be a workspace owner.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.users.setOwner',
				},
				operationId: 'admin_users_setOwner',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.users:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									team_id: {
										description: 'The ID (`T1234`) of the workspace.',
										type: 'string',
									},
									user_id: {
										description: 'Id of the user to promote to owner.',
										type: 'string',
									},
								},
								required: ['team_id', 'user_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.users:write'],
					},
				],
				tags: ['admin.users', 'admin'],
			},
		},
		'/admin.users.setRegular': {
			post: {
				description: 'Set an existing guest user, admin user, or owner to be a regular user.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/admin.users.setRegular',
				},
				operationId: 'admin_users_setRegular',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin.users:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									team_id: {
										description: 'The ID (`T1234`) of the workspace.',
										type: 'string',
									},
									user_id: {
										description: 'The ID of the user to designate as a regular user.',
										type: 'string',
									},
								},
								required: ['team_id', 'user_id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin.users:write'],
					},
				],
				tags: ['admin.users', 'admin'],
			},
		},
		'/api.test': {
			get: {
				description: 'Checks API calling code.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/api.test',
				},
				operationId: 'api_test',
				parameters: [
					{
						description: 'Error response to return',
						in: 'query',
						name: 'error',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'example property to return',
						in: 'query',
						name: 'foo',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: {
										type: 'object',
									},
									description: 'Schema for successful response api.test method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'api.test success schema',
									type: 'object',
								},
							},
						},
						description: 'Standard success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											args: {
												error: 'my_error',
											},
											error: 'my_error',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: {
										type: 'object',
									},
									description: 'Schema for error response api.test method',
									properties: {
										error: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'api.test error schema',
									type: 'object',
								},
							},
						},
						description: 'Artificial error response',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['api'],
			},
		},
		'/apps.event.authorizations.list': {
			get: {
				description:
					'Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/apps.event.authorizations.list',
				},
				operationId: 'apps_event_authorizations_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `authorizations:read`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'event_context',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											authorizations: {
												enterprise_id: 'string',
												is_bot: 'string',
												team_id: 'string',
												user_id: 'string',
											},
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['authorizations:read'],
					},
				],
				tags: ['apps.event.authorizations', 'apps'],
			},
		},
		'/apps.permissions.info': {
			get: {
				description: 'Returns list of permissions this app has on a team.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/apps.permissions.info',
				},
				operationId: 'apps_permissions_info',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											info: {
												app_home: {
													resources: {
														ids: ['D0C0NU1Q8', 'D0BH95DLH'],
													},
													scopes: ['chat:write', 'im:history', 'im:read'],
												},
												channel: {
													resources: {
														excluded_ids: [],
														ids: ['C061FA5PB'],
														wildcard: false,
													},
													scopes: ['channels:read'],
												},
												group: {
													resources: {
														ids: [],
													},
													scopes: [],
												},
												im: {
													resources: {
														ids: [],
													},
													scopes: [],
												},
												mpim: {
													resources: {
														ids: [],
													},
													scopes: [],
												},
												team: {
													resources: {
														ids: [],
													},
													scopes: [],
												},
											},
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from apps.permissions.info method',
									properties: {
										info: {
											properties: {
												app_home: {
													properties: {
														resources: {
															$ref: '#/components/schemas/objs_resources',
														},
														scopes: {
															$ref: '#/components/schemas/objs_scopes',
														},
													},
													type: 'object',
												},
												channel: {
													properties: {
														resources: {
															$ref: '#/components/schemas/objs_resources',
														},
														scopes: {
															$ref: '#/components/schemas/objs_scopes',
														},
													},
													type: 'object',
												},
												group: {
													properties: {
														resources: {
															$ref: '#/components/schemas/objs_resources',
														},
														scopes: {
															$ref: '#/components/schemas/objs_scopes',
														},
													},
													type: 'object',
												},
												im: {
													properties: {
														resources: {
															$ref: '#/components/schemas/objs_resources',
														},
														scopes: {
															$ref: '#/components/schemas/objs_scopes',
														},
													},
													type: 'object',
												},
												mpim: {
													properties: {
														resources: {
															$ref: '#/components/schemas/objs_resources',
														},
														scopes: {
															$ref: '#/components/schemas/objs_scopes',
														},
													},
													type: 'object',
												},
												team: {
													properties: {
														resources: {
															$ref: '#/components/schemas/objs_resources',
														},
														scopes: {
															$ref: '#/components/schemas/objs_scopes',
														},
													},
													required: ['scopes', 'resources'],
													type: 'object',
												},
											},
											required: ['team', 'channel', 'group', 'mpim', 'im', 'app_home'],
											type: 'object',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'info'],
									title: 'apps.permissions.info schema',
									type: 'object',
								},
							},
						},
						description: 'Standard success response when used with a user token',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from apps.permissions.info method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'apps.permissions.info error schema',
									type: 'object',
								},
							},
						},
						description: 'Standard failure response when used with an invalid token',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['apps.permissions', 'apps'],
			},
		},
		'/apps.permissions.request': {
			get: {
				description: 'Allows an app to request additional scopes',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/apps.permissions.request',
				},
				operationId: 'apps_permissions_request',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A comma separated list of scopes to request for',
						in: 'query',
						name: 'scopes',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Token used to trigger the permissions API',
						in: 'query',
						name: 'trigger_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from apps.permissions.request method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'apps.permissions.request schema',
									type: 'object',
								},
							},
						},
						description: 'Standard success response when used with a user token',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_trigger_id',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from apps.permissions.request method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'invalid_trigger',
												'trigger_exchanged',
												'invalid_scope',
												'invalid_user',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'apps.permissions.request error schema',
									type: 'object',
								},
							},
						},
						description: 'Standard failure response when trigger_id is invalid',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['apps.permissions', 'apps'],
			},
		},
		'/apps.permissions.resources.list': {
			get: {
				description: 'Returns list of resource grants this app has on a team.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/apps.permissions.resources.list',
				},
				operationId: 'apps_permissions_resources_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The maximum number of items to return.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											resources: [
												{
													id: 'T0DES3UAN',
													type: 'team',
												},
												{
													id: 'D024BFF1M',
													type: 'app_home',
												},
												{
													id: 'C024BE91L',
													type: 'channel',
												},
											],
											response_metadata: {
												next_cursor: 'dGVhbTpDMUg5UkVTR0w=',
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description: 'Schema for successful response apps.permissions.resources.list method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										resources: {
											items: {
												properties: {
													id: {
														title: 'An ID for a resource',
														type: 'string',
														'x-examples': ['T0DES3UAN', 'C0ABC1ABC'],
													},
													type: {
														title: 'The type of resource the `id` corresponds to',
														type: 'string',
														'x-examples': ['team', 'channel', 'mpim'],
													},
												},
												type: 'object',
											},
											type: 'array',
										},
										response_metadata: {
											additionalProperties: false,
											properties: {
												next_cursor: {
													type: 'string',
													'x-examples': ['dGVhbTpDMUg5UkVTR0w='],
												},
											},
											required: ['next_cursor'],
											type: 'object',
										},
									},
									required: ['ok', 'resources'],
									title: 'apps.permissions.resources.list success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical successful paginated response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_cursor',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from apps.permissions.resources.list method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'invalid_cursor',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'apps.permissions.resources.list error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['apps.permissions.resources', 'apps'],
			},
		},
		'/apps.permissions.scopes.list': {
			get: {
				description: 'Returns list of scopes this app has on a team.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/apps.permissions.scopes.list',
				},
				operationId: 'apps_permissions_scopes_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											scopes: {
												app_home: ['chat:write', 'im:history', 'im:read'],
												channel: ['channels:history', 'chat:write'],
												group: ['chat:write'],
												im: ['chat:write'],
												mpim: ['chat:write'],
												team: ['users:read'],
												user: [],
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description: 'Schema for successful response api.permissions.scopes.list method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										scopes: {
											additionalProperties: true,
											properties: {
												app_home: {
													$ref: '#/components/schemas/objs_scopes',
												},
												channel: {
													$ref: '#/components/schemas/objs_scopes',
												},
												group: {
													$ref: '#/components/schemas/objs_scopes',
												},
												im: {
													$ref: '#/components/schemas/objs_scopes',
												},
												mpim: {
													$ref: '#/components/schemas/objs_scopes',
												},
												team: {
													$ref: '#/components/schemas/objs_scopes',
												},
												user: {
													$ref: '#/components/schemas/objs_scopes',
												},
											},
											type: 'object',
										},
									},
									required: ['ok', 'scopes'],
									title: 'api.permissions.scopes.list success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical successful paginated response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from apps.permissions.scopes.list method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'apps.permissions.scopes.list error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['apps.permissions.scopes', 'apps'],
			},
		},
		'/apps.permissions.users.list': {
			get: {
				description: 'Returns list of user grants and corresponding scopes this app has on a team.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/apps.permissions.users.list',
				},
				operationId: 'apps_permissions_users_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The maximum number of items to return.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											resources: [
												{
													id: 'U0DES3UAN',
													scopes: ['dnd:write:user', 'reminders:write:user'],
												},
												{
													id: 'U024BFF1M',
													scopes: ['reminders:write:user'],
												},
											],
											response_metadata: {
												next_cursor: 'dGVhbTdPMUg5UkFTT0w=',
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical successful paginated response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_cursor',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['apps.permissions.users', 'apps'],
			},
		},
		'/apps.permissions.users.request': {
			get: {
				description: 'Enables an app to trigger a permissions modal to grant an app access to a user access scope.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/apps.permissions.users.request',
				},
				operationId: 'apps_permissions_users_request',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A comma separated list of user scopes to request for',
						in: 'query',
						name: 'scopes',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Token used to trigger the request',
						in: 'query',
						name: 'trigger_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The user this scope is being requested for',
						in: 'query',
						name: 'user',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Standard success response when used with a user token',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_trigger_id',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Standard failure response when trigger_id is invalid',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['apps.permissions.users', 'apps'],
			},
		},
		'/apps.uninstall': {
			get: {
				description: 'Uninstalls your app from a workspace.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/apps.uninstall',
				},
				operationId: 'apps_uninstall',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Issued when you created your application.',
						in: 'query',
						name: 'client_id',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Issued when you created your application.',
						in: 'query',
						name: 'client_secret',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from apps.uninstall method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'apps.uninstall schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from apps.uninstall method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'invalid_client_id',
												'bad_client_secret',
												'client_id_token_mismatch',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'apps.uninstall error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['apps'],
			},
		},
		'/auth.revoke': {
			get: {
				description: 'Revokes a token.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/auth.revoke',
				},
				operationId: 'auth_revoke',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Setting this parameter to `1` triggers a _testing mode_ where the specified token will not actually be revoked.',
						in: 'query',
						name: 'test',
						schema: {
							type: 'boolean',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											revoked: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from auth.revoke method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										revoked: {
											type: 'boolean',
										},
									},
									required: ['ok', 'revoked'],
									title: 'auth.revoke schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from auth.revoke method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'auth.revoke error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['auth'],
			},
		},
		'/auth.test': {
			get: {
				description: 'Checks authentication & identity.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/auth.test',
				},
				operationId: 'auth_test',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											team: 'Subarachnoid Workspace',
											team_id: 'T12345678',
											url: 'https://subarachnoid.slack.com/',
											user: 'grace',
											user_id: 'W12345678',
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response auth.test method',
									properties: {
										bot_id: {
											$ref: '#/components/schemas/defs_bot_id',
										},
										is_enterprise_install: {
											type: 'boolean',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										team: {
											type: 'string',
										},
										team_id: {
											$ref: '#/components/schemas/defs_team',
										},
										url: {
											type: 'string',
										},
										user: {
											type: 'string',
										},
										user_id: {
											$ref: '#/components/schemas/defs_user_id',
										},
									},
									required: ['ok', 'url', 'team', 'user', 'team_id', 'user_id'],
									title: 'auth.test success schema',
									type: 'object',
								},
							},
						},
						description: 'Standard success response when used with a user token',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response auth.test method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'token_revoked',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'auth.test error schema',
									type: 'object',
								},
							},
						},
						description: 'Standard failure response when used with an invalid token',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['auth'],
			},
		},
		'/bots.info': {
			get: {
				description: 'Gets information about a bot user.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/bots.info',
				},
				operationId: 'bots_info',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `users:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Bot user to get info on',
						in: 'query',
						name: 'bot',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											bot: {
												app_id: 'A161CLERW',
												deleted: false,
												icons: {
													image_36: 'https://...',
													image_48: 'https://...',
													image_72: 'https://...',
												},
												id: 'B061F7JD2',
												name: 'beforebot',
												updated: 1449272004,
												user_id: 'U012ABCDEF',
											},
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from bots.info method',
									properties: {
										bot: {
											additionalProperties: false,
											properties: {
												app_id: {
													$ref: '#/components/schemas/defs_app_id',
												},
												deleted: {
													type: 'boolean',
												},
												icons: {
													additionalProperties: false,
													properties: {
														image_36: {
															format: 'uri',
															type: 'string',
														},
														image_48: {
															format: 'uri',
															type: 'string',
														},
														image_72: {
															format: 'uri',
															type: 'string',
														},
													},
													required: ['image_36', 'image_48', 'image_72'],
													type: 'object',
												},
												id: {
													$ref: '#/components/schemas/defs_bot_id',
												},
												name: {
													type: 'string',
												},
												updated: {
													type: 'integer',
												},
												user_id: {
													$ref: '#/components/schemas/defs_user_id',
												},
											},
											required: ['id', 'deleted', 'name', 'updated', 'app_id', 'icons'],
											type: 'object',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'bot'],
									title: 'bots.info schema',
									type: 'object',
								},
							},
						},
						description: 'When successful, returns bot info by bot ID.',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'bot_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from bots.info method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'bot_not_found',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'bots.info error schema',
									type: 'object',
								},
							},
						},
						description: 'When no bot can be found, it returns an error.',
					},
				},
				security: [
					{
						slackAuth: ['users:read'],
					},
				],
				tags: ['bots'],
			},
		},
		'/calls.add': {
			post: {
				description: 'Registers a new Call.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/calls.add',
				},
				operationId: 'calls_add',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `calls:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									created_by: {
										description:
											'The valid Slack user ID of the user who created this Call. When this method is called with a user token, the `created_by` field is optional and defaults to the authed user of the token. Otherwise, the field is required.',
										type: 'string',
									},
									date_start: {
										description: 'Call start time in UTC UNIX timestamp format',
										type: 'integer',
									},
									desktop_app_join_url: {
										description: 'When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL.',
										type: 'string',
									},
									external_display_id: {
										description:
											'An optional, human-readable ID supplied by the 3rd-party Call provider. If supplied, this ID will be displayed in the Call object.',
										type: 'string',
									},
									external_unique_id: {
										description: 'An ID supplied by the 3rd-party Call provider. It must be unique across all Calls from that service.',
										type: 'string',
									},
									join_url: {
										description: 'The URL required for a client to join the Call.',
										type: 'string',
									},
									title: {
										description: 'The name of the Call.',
										type: 'string',
									},
									users: {
										description:
											'The list of users to register as participants in the Call. [Read more on how to specify users here](/apis/calls#users).',
										type: 'string',
									},
								},
								required: ['external_unique_id', 'join_url'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['calls:write'],
					},
				],
				tags: ['calls'],
			},
		},
		'/calls.end': {
			post: {
				description: 'Ends a Call.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/calls.end',
				},
				operationId: 'calls_end',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `calls:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									duration: {
										description: 'Call duration in seconds',
										type: 'integer',
									},
									id: {
										description: '`id` returned when registering the call using the [`calls.add`](/methods/calls.add) method.',
										type: 'string',
									},
								},
								required: ['id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['calls:write'],
					},
				],
				tags: ['calls'],
			},
		},
		'/calls.info': {
			get: {
				description: 'Returns information about a Call.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/calls.info',
				},
				operationId: 'calls_info',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `calls:read`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: '`id` of the Call returned by the [`calls.add`](/methods/calls.add) method.',
						in: 'query',
						name: 'id',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['calls:read'],
					},
				],
				tags: ['calls'],
			},
		},
		'/calls.participants.add': {
			post: {
				description: 'Registers new participants added to a Call.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/calls.participants.add',
				},
				operationId: 'calls_participants_add',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `calls:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									id: {
										description: '`id` returned by the [`calls.add`](/methods/calls.add) method.',
										type: 'string',
									},
									users: {
										description:
											'The list of users to add as participants in the Call. [Read more on how to specify users here](/apis/calls#users).',
										type: 'string',
									},
								},
								required: ['id', 'users'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['calls:write'],
					},
				],
				tags: ['calls.participants', 'calls'],
			},
		},
		'/calls.participants.remove': {
			post: {
				description: 'Registers participants removed from a Call.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/calls.participants.remove',
				},
				operationId: 'calls_participants_remove',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `calls:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									id: {
										description: '`id` returned by the [`calls.add`](/methods/calls.add) method.',
										type: 'string',
									},
									users: {
										description:
											'The list of users to remove as participants in the Call. [Read more on how to specify users here](/apis/calls#users).',
										type: 'string',
									},
								},
								required: ['id', 'users'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['calls:write'],
					},
				],
				tags: ['calls.participants', 'calls'],
			},
		},
		'/calls.update': {
			post: {
				description: 'Updates information about a Call.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/calls.update',
				},
				operationId: 'calls_update',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `calls:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									desktop_app_join_url: {
										description: 'When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL.',
										type: 'string',
									},
									id: {
										description: '`id` returned by the [`calls.add`](/methods/calls.add) method.',
										type: 'string',
									},
									join_url: {
										description: 'The URL required for a client to join the Call.',
										type: 'string',
									},
									title: {
										description: 'The name of the Call.',
										type: 'string',
									},
								},
								required: ['id'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['calls:write'],
					},
				],
				tags: ['calls'],
			},
		},
		'/chat.delete': {
			post: {
				description: 'Deletes a message.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/chat.delete',
				},
				operationId: 'chat_delete',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `chat:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									as_user: {
										description:
											'Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope.',
										type: 'boolean',
									},
									channel: {
										description: 'Channel containing the message to be deleted.',
										type: 'string',
									},
									ts: {
										description: 'Timestamp of the message to be deleted.',
										type: 'number',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channel: 'C024BE91L',
											ok: true,
											ts: '1401383885.000061',
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of chat.delete method',
									properties: {
										channel: {
											$ref: '#/components/schemas/defs_channel',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										ts: {
											$ref: '#/components/schemas/defs_ts',
										},
									},
									required: ['ok', 'channel', 'ts'],
									title: 'chat.delete success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'message_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from chat.delete method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'message_not_found',
												'channel_not_found',
												'cant_delete_message',
												'compliance_exports_prevent_deletion',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'chat.delete error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['chat:write:user', 'chat:write:bot'],
					},
				],
				tags: ['chat'],
			},
		},
		'/chat.deleteScheduledMessage': {
			post: {
				description: 'Deletes a pending scheduled message from the queue.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/chat.deleteScheduledMessage',
				},
				operationId: 'chat_deleteScheduledMessage',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `chat:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									as_user: {
										description:
											'Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope.',
										type: 'boolean',
									},
									channel: {
										description: 'The channel the scheduled_message is posting to',
										type: 'string',
									},
									scheduled_message_id: {
										description: '`scheduled_message_id` returned from call to chat.scheduleMessage',
										type: 'string',
									},
								},
								required: ['channel', 'scheduled_message_id'],
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from chat.deleteScheduledMessage method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'chat.deleteScheduledMessage schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_scheduled_message_id',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from chat.deleteScheduledMessage method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'invalid_scheduled_message_id',
												'channel_not_found',
												'bad_token',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'ekm_access_denied',
												'missing_scope',
												'invalid_arguments',
												'invalid_arg_name',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'chat.deleteScheduledMessage error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response if no message is found',
					},
				},
				security: [
					{
						slackAuth: ['chat:write:user', 'chat:write:bot'],
					},
				],
				tags: ['chat'],
			},
		},
		'/chat.getPermalink': {
			get: {
				description: 'Retrieve a permalink URL for a specific extant message',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/chat.getPermalink',
				},
				operationId: 'chat_getPermalink',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The ID of the conversation or channel containing the message',
						in: 'query',
						name: 'channel',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: "A message's `ts` value, uniquely identifying it within a channel",
						in: 'query',
						name: 'message_ts',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channel: 'C1H9RESGA',
											ok: true,
											permalink: 'https://ghostbusters.slack.com/archives/C1H9RESGA/p135854651500008',
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response chat.getPermalink',
									properties: {
										channel: {
											$ref: '#/components/schemas/defs_channel',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										permalink: {
											format: 'uri',
											type: 'string',
										},
									},
									required: ['ok', 'channel', 'permalink'],
									title: 'chat.getPermalink success schema',
									type: 'object',
								},
							},
						},
						description: 'Standard success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'channel_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from chat.getPermalink method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'channel_not_found',
												'message_not_found',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'chat.getPermalink error schema',
									type: 'object',
								},
							},
						},
						description: 'Error response when channel cannot be found',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['chat'],
			},
		},
		'/chat.meMessage': {
			post: {
				description: 'Share a me message into a channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/chat.meMessage',
				},
				operationId: 'chat_meMessage',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `chat:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description:
											'Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.',
										type: 'string',
									},
									text: {
										description: 'Text of the message to send.',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channel: 'C024BE7LR',
											ok: true,
											ts: '1417671948.000006',
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from chat.meMessage method',
									properties: {
										channel: {
											$ref: '#/components/schemas/defs_channel',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										ts: {
											$ref: '#/components/schemas/defs_ts',
										},
									},
									required: ['ok'],
									title: 'chat.meMessage schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from chat.meMessage method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'channel_not_found',
												'not_in_channel',
												'is_archived',
												'msg_too_long',
												'no_text',
												'rate_limited',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'chat.meMessage error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['chat:write:user', 'chat:write:bot'],
					},
				],
				tags: ['chat'],
			},
		},
		'/chat.postEphemeral': {
			post: {
				description: 'Sends an ephemeral message to a user in a channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/chat.postEphemeral',
				},
				operationId: 'chat_postEphemeral',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `chat:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									as_user: {
										description:
											'Pass true to post the message as the authed user. Defaults to true if the chat:write:bot scope is not included. Otherwise, defaults to false.',
										type: 'boolean',
									},
									attachments: {
										description: 'A JSON-based array of structured attachments, presented as a URL-encoded string.',
										type: 'string',
									},
									blocks: {
										description: 'A JSON-based array of structured blocks, presented as a URL-encoded string.',
										type: 'string',
									},
									channel: {
										description: 'Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name.',
										type: 'string',
									},
									icon_emoji: {
										description:
											'Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below.',
										type: 'string',
									},
									icon_url: {
										description:
											'URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.',
										type: 'string',
									},
									link_names: {
										description: 'Find and link channel names and usernames.',
										type: 'boolean',
									},
									parse: {
										description: 'Change how messages are treated. Defaults to `none`. See [below](#formatting).',
										type: 'string',
									},
									text: {
										description:
											'How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail.',
										type: 'string',
									},
									thread_ts: {
										description:
											"Provide another message's `ts` value to post this message in a thread. Avoid using a reply's `ts` value; use its parent's value instead. Ephemeral messages in threads are only shown if there is already an active thread.",
										type: 'string',
									},
									user: {
										description:
											'`id` of the user who will receive the ephemeral message. The user should be in the channel specified by the `channel` argument.',
										type: 'string',
									},
									username: {
										description:
											"Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.",
										type: 'string',
									},
								},
								required: ['channel', 'user'],
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											message_ts: '1502210682.580145',
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from chat.postEphemeral method',
									properties: {
										message_ts: {
											$ref: '#/components/schemas/defs_ts',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'message_ts'],
									title: 'chat.postEphemeral success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'user_not_in_channel',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from chat.postEphemeral method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'channel_not_found',
												'is_archived',
												'msg_too_long',
												'no_text',
												'restricted_action',
												'too_many_attachments',
												'user_not_in_channel',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'chat.postEphemeral error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['chat:write:user', 'chat:write:bot'],
					},
				],
				tags: ['chat'],
			},
		},
		'/chat.postMessage': {
			post: {
				description: 'Sends a message to a channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/chat.postMessage',
				},
				operationId: 'chat_postMessage',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `chat:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									as_user: {
										description:
											'Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [authorship](#authorship) below.',
										type: 'string',
									},
									attachments: {
										description: 'A JSON-based array of structured attachments, presented as a URL-encoded string.',
										type: 'string',
									},
									blocks: {
										description: 'A JSON-based array of structured blocks, presented as a URL-encoded string.',
										type: 'string',
									},
									channel: {
										description:
											'Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details.',
										type: 'string',
									},
									icon_emoji: {
										description:
											'Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below.',
										type: 'string',
									},
									icon_url: {
										description:
											'URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.',
										type: 'string',
									},
									link_names: {
										description: 'Find and link channel names and usernames.',
										type: 'boolean',
									},
									mrkdwn: {
										description: 'Disable Slack markup parsing by setting to `false`. Enabled by default.',
										type: 'boolean',
									},
									parse: {
										description: 'Change how messages are treated. Defaults to `none`. See [below](#formatting).',
										type: 'string',
									},
									reply_broadcast: {
										description:
											'Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`.',
										type: 'boolean',
									},
									text: {
										description:
											'How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail.',
										type: 'string',
									},
									thread_ts: {
										description:
											"Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead.",
										type: 'string',
									},
									unfurl_links: {
										description: 'Pass true to enable unfurling of primarily text-based content.',
										type: 'boolean',
									},
									unfurl_media: {
										description: 'Pass false to disable unfurling of media content.',
										type: 'boolean',
									},
									username: {
										description:
											"Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.",
										type: 'string',
									},
								},
								required: ['channel'],
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channel: 'C1H9RESGL',
											message: {
												attachments: [
													{
														fallback: "This is an attachment's fallback",
														id: 1,
														text: 'This is an attachment',
													},
												],
												bot_id: 'B19LU7CSY',
												subtype: 'bot_message',
												text: "Here's a message for you",
												ts: '1503435956.000247',
												type: 'message',
												username: 'ecto1',
											},
											ok: true,
											ts: '1503435956.000247',
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of chat.postMessage method',
									properties: {
										channel: {
											$ref: '#/components/schemas/defs_channel',
										},
										message: {
											$ref: '#/components/schemas/objs_message',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										ts: {
											$ref: '#/components/schemas/defs_ts',
										},
									},
									required: ['ok', 'channel', 'ts', 'message'],
									title: 'chat.postMessage success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'too_many_attachments',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response chat.postMessage method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'channel_not_found',
												'not_in_channel',
												'is_archived',
												'msg_too_long',
												'no_text',
												'too_many_attachments',
												'rate_limited',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'chat.postMessage error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response if too many attachments are included',
					},
				},
				security: [
					{
						slackAuth: ['chat:write:user', 'chat:write:bot'],
					},
				],
				tags: ['chat'],
			},
		},
		'/chat.scheduleMessage': {
			post: {
				description: 'Schedules a message to be sent to a channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/chat.scheduleMessage',
				},
				operationId: 'chat_scheduleMessage',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `chat:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									as_user: {
										description:
											'Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [chat.postMessage](chat.postMessage#authorship).',
										type: 'boolean',
									},
									attachments: {
										description: 'A JSON-based array of structured attachments, presented as a URL-encoded string.',
										type: 'string',
									},
									blocks: {
										description: 'A JSON-based array of structured blocks, presented as a URL-encoded string.',
										type: 'string',
									},
									channel: {
										description:
											'Channel, private group, or DM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details.',
										type: 'string',
									},
									link_names: {
										description: 'Find and link channel names and usernames.',
										type: 'boolean',
									},
									parse: {
										description:
											'Change how messages are treated. Defaults to `none`. See [chat.postMessage](chat.postMessage#formatting).',
										type: 'string',
									},
									post_at: {
										description: 'Unix EPOCH timestamp of time in future to send the message.',
										type: 'string',
									},
									reply_broadcast: {
										description:
											'Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`.',
										type: 'boolean',
									},
									text: {
										description:
											'How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail.',
										type: 'string',
									},
									thread_ts: {
										description:
											"Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead.",
										type: 'number',
									},
									unfurl_links: {
										description: 'Pass true to enable unfurling of primarily text-based content.',
										type: 'boolean',
									},
									unfurl_media: {
										description: 'Pass false to disable unfurling of media content.',
										type: 'boolean',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channel: 'C1H9RESGL',
											message: {
												attachments: [
													{
														fallback: "This is an attachment's fallback",
														id: 1,
														text: 'This is an attachment',
													},
												],
												bot_id: 'B19LU7CSY',
												subtype: 'bot_message',
												text: "Here's a message for you in the future",
												type: 'delayed_message',
												username: 'ecto1',
											},
											ok: true,
											post_at: '1562180400',
											scheduled_message_id: 'Q1298393284',
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of chat.scheduleMessage method',
									properties: {
										channel: {
											$ref: '#/components/schemas/defs_channel',
										},
										message: {
											additionalProperties: false,
											properties: {
												bot_id: {
													$ref: '#/components/schemas/defs_bot_id',
												},
												bot_profile: {
													$ref: '#/components/schemas/objs_bot_profile',
												},
												team: {
													$ref: '#/components/schemas/defs_team',
												},
												text: {
													type: 'string',
												},
												type: {
													type: 'string',
												},
												user: {
													$ref: '#/components/schemas/defs_user_id',
												},
												username: {
													type: 'string',
												},
											},
											required: ['type', 'text', 'bot_id', 'user', 'team'],
											type: 'object',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										post_at: {
											pattern: '^\\d{10}$',
											type: 'integer',
										},
										scheduled_message_id: {
											pattern: '^[Q][A-Z0-9]{8,}$',
											title: 'Scheduled Message ID',
											type: 'string',
										},
									},
									required: ['ok', 'channel', 'post_at', 'scheduled_message_id', 'message'],
									title: 'chat.scheduleMessage success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'time_in_past',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response chat.scheduleMessage method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'invalid_time',
												'time_in_past',
												'time_too_far',
												'channel_not_found',
												'not_in_channel',
												'is_archived',
												'msg_too_long',
												'no_text',
												'restricted_action',
												'restricted_action_read_only_channel',
												'restricted_action_thread_only_channel',
												'restricted_action_non_threadable_channel',
												'too_many_attachments',
												'rate_limited',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'ekm_access_denied',
												'missing_scope',
												'invalid_arguments',
												'invalid_arg_name',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'chat.scheduleMessage error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response if the `post_at` is invalid (ex. in the past or too far into the future)',
					},
				},
				security: [
					{
						slackAuth: ['chat:write:user', 'chat:write:bot'],
					},
				],
				tags: ['chat'],
			},
		},
		'/chat.scheduledMessages.list': {
			get: {
				description: 'Returns a list of scheduled messages.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/chat.scheduledMessages.list',
				},
				operationId: 'chat_scheduledMessages_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The channel of the scheduled messages',
						in: 'query',
						name: 'channel',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A UNIX timestamp of the latest value in the time range',
						in: 'query',
						name: 'latest',
						schema: {
							type: 'number',
						},
					},
					{
						description: 'A UNIX timestamp of the oldest value in the time range',
						in: 'query',
						name: 'oldest',
						schema: {
							type: 'number',
						},
					},
					{
						description: 'Maximum number of original entries to return.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description:
							'For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											response_metadata: {
												next_cursor: '',
											},
											scheduled_messages: [
												{
													channel_id: 'C1H9RESGL',
													date_created: 1551891734,
													id: 1298393284,
													post_at: 1551991428,
													text: "Here's a message for you in the future",
												},
											],
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from chat.scheduledMessages.list method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										response_metadata: {
											additionalProperties: false,
											properties: {
												next_cursor: {
													type: 'string',
												},
											},
											required: ['next_cursor'],
											type: 'object',
										},
										scheduled_messages: {
											items: {
												additionalProperties: false,
												properties: {
													channel_id: {
														$ref: '#/components/schemas/defs_channel_id',
													},
													date_created: {
														pattern: '^\\d{10}$',
														type: 'integer',
													},
													id: {
														pattern: '^[Q][A-Z0-9]{8,}$',
														type: 'string',
													},
													post_at: {
														pattern: '^\\d{10}$',
														type: 'integer',
													},
													text: {
														type: 'string',
													},
												},
												required: ['id', 'channel_id', 'post_at', 'date_created'],
												type: 'object',
											},
											type: 'array',
										},
									},
									required: ['ok', 'scheduled_messages', 'response_metadata'],
									title: 'chat.scheduledMessages.list schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_channel',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from chat.scheduledMessages.list method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'invalid_channel',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'ekm_access_denied',
												'missing_scope',
												'invalid_arguments',
												'invalid_arg_name',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'chat.scheduledMessages.list error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response if the channel passed is invalid',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['chat.scheduledMessages', 'chat'],
			},
		},
		'/chat.unfurl': {
			post: {
				description: 'Provide custom unfurl behavior for user-posted URLs',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/chat.unfurl',
				},
				operationId: 'chat_unfurl',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `links:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'Channel ID of the message',
										type: 'string',
									},
									ts: {
										description: 'Timestamp of the message to add unfurl behavior to.',
										type: 'string',
									},
									unfurls: {
										description:
											'URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their unfurl blocks or message attachments.',
										type: 'string',
									},
									user_auth_message: {
										description:
											'Provide a simply-formatted string to send as an ephemeral message to the user as invitation to authenticate further and enable full unfurling behavior',
										type: 'string',
									},
									user_auth_required: {
										description: 'Set to `true` or `1` to indicate the user must install your Slack app to trigger unfurls for this domain',
										type: 'boolean',
									},
									user_auth_url: {
										description:
											'Send users to this custom URL where they will complete authentication in your app to fully trigger unfurling. Value should be properly URL-encoded.',
										type: 'string',
									},
								},
								required: ['channel', 'ts'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from chat.unfurl method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'chat.unfurl success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical, minimal success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'cannot_unfurl_url',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from chat.unfurl method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'cannot_unfurl_url',
												'cannot_find_service',
												'missing_unfurls',
												'cannot_prompt',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'chat.unfurl error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['links:write'],
					},
				],
				tags: ['chat'],
			},
		},
		'/chat.update': {
			post: {
				description: 'Updates a message.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/chat.update',
				},
				operationId: 'chat_update',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `chat:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									as_user: {
										description:
											'Pass true to update the message as the authed user. [Bot users](/bot-users) in this context are considered authed users.',
										type: 'string',
									},
									attachments: {
										description:
											"A JSON-based array of structured attachments, presented as a URL-encoded string. This field is required when not presenting `text`. If you don't include this field, the message's previous `attachments` will be retained. To remove previous `attachments`, include an empty array for this field.",
										type: 'string',
									},
									blocks: {
										description:
											"A JSON-based array of [structured blocks](/block-kit/building), presented as a URL-encoded string. If you don't include this field, the message's previous `blocks` will be retained. To remove previous `blocks`, include an empty array for this field.",
										type: 'string',
									},
									channel: {
										description: 'Channel containing the message to be updated.',
										type: 'string',
									},
									link_names: {
										description:
											'Find and link channel names and usernames. Defaults to `none`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `none`.',
										type: 'string',
									},
									parse: {
										description:
											'Change how messages are treated. Defaults to `client`, unlike `chat.postMessage`. Accepts either `none` or `full`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `client`.',
										type: 'string',
									},
									text: {
										description:
											"New text for the message, using the [default formatting rules](/reference/surfaces/formatting). It's not required when presenting `blocks` or `attachments`.",
										type: 'string',
									},
									ts: {
										description: 'Timestamp of the message to be updated.',
										type: 'string',
									},
								},
								required: ['channel', 'ts'],
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channel: 'C024BE91L',
											message: {
												text: 'Updated text you carefully authored',
												user: 'U34567890',
											},
											ok: true,
											text: 'Updated text you carefully authored',
											ts: '1401383885.000061',
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response of chat.update method',
									properties: {
										channel: {
											type: 'string',
										},
										message: {
											properties: {
												attachments: {
													items: {
														type: 'object',
													},
													type: 'array',
												},
												blocks: {
													type: 'object',
												},
												text: {
													type: 'string',
												},
											},
											required: ['text'],
											title: 'Message object',
											type: 'object',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										text: {
											type: 'string',
										},
										ts: {
											type: 'string',
										},
									},
									required: ['ok', 'channel', 'ts', 'text', 'message'],
									title: 'chat.update success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'cant_update_message',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response chat.update method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'message_not_found',
												'cant_update_message',
												'channel_not_found',
												'edit_window_closed',
												'msg_too_long',
												'too_many_attachments',
												'rate_limited',
												'no_text',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'request_timeout',
												'invalid_json',
												'json_not_object',
												'upgrade_required',
												'fatal_error',
												'is_inactive',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'chat.update error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['chat:write:user', 'chat:write:bot'],
					},
				],
				tags: ['chat'],
			},
		},
		'/conversations.archive': {
			post: {
				description: 'Archives a conversation.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.archive',
				},
				operationId: 'conversations_archive',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'ID of conversation to archive',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response conversations.archive method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'conversations.archive success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'channel_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.archive method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'method_not_supported_for_channel_type',
												'missing_scope',
												'not_supported',
												'channel_not_found',
												'already_archived',
												'cant_archive_general',
												'restricted_action',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'user_is_bot',
												'user_is_restricted',
												'user_is_ultra_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'team_added_to_org',
												'missing_charset',
												'superfluous_charset',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.archive error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.close': {
			post: {
				description: 'Closes a direct message or multi-person direct message.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.close',
				},
				operationId: 'conversations_close',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'Conversation to close.',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response conversations.close method',
									properties: {
										already_closed: {
											type: 'boolean',
										},
										no_op: {
											type: 'boolean',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'conversations.close success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'channel_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.close method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'method_not_supported_for_channel_type',
												'channel_not_found',
												'user_does_not_own_channel',
												'missing_scope',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.close error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.create': {
			post: {
				description: 'Initiates a public or private channel-based conversation',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.create',
				},
				operationId: 'conversations_create',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									is_private: {
										description: 'Create a private channel instead of a public one',
										type: 'boolean',
									},
									name: {
										description: 'Name of the public or private channel to create',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channel: {
												created: 1504554479,
												creator: 'U0123456',
												id: 'C0EAQDV4Z',
												is_archived: false,
												is_channel: true,
												is_ext_shared: false,
												is_general: false,
												is_group: false,
												is_im: false,
												is_member: true,
												is_mpim: false,
												is_org_shared: false,
												is_pending_ext_shared: false,
												is_private: false,
												is_shared: false,
												last_read: '0000000000.000000',
												latest: null,
												name: 'endeavor',
												name_normalized: 'endeavor',
												pending_shared: [],
												previous_names: [],
												priority: 0,
												purpose: {
													creator: '',
													last_set: 0,
													value: '',
												},
												topic: {
													creator: '',
													last_set: 0,
													value: '',
												},
												unlinked: 0,
												unread_count: 0,
												unread_count_display: 0,
											},
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response conversations.create method',
									properties: {
										channel: {
											$ref: '#/components/schemas/objs_conversation',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'channel'],
									title: 'conversations.create success schema',
									type: 'object',
								},
							},
						},
						description: 'If successful, the command returns a rather stark [conversation object](/types/conversation)',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'name_taken',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.create method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										detail: {
											type: 'string',
										},
										error: {
											enum: [
												'method_not_supported_for_channel_type',
												'missing_scope',
												'name_taken',
												'restricted_action',
												'no_channel',
												'invalid_name_required',
												'invalid_name_punctuation',
												'invalid_name_maxlength',
												'invalid_name_specials',
												'invalid_name',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'user_is_bot',
												'user_is_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.create error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response when name already in use',
					},
				},
				security: [
					{
						slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.history': {
			get: {
				description: "Fetches a conversation's history of messages and events.",
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.history',
				},
				operationId: 'conversations_history',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:history`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Conversation ID to fetch history for.',
						in: 'query',
						name: 'channel',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'End of time range of messages to include in results.',
						in: 'query',
						name: 'latest',
						schema: {
							type: 'number',
						},
					},
					{
						description: 'Start of time range of messages to include in results.',
						in: 'query',
						name: 'oldest',
						schema: {
							type: 'number',
						},
					},
					{
						description: 'Include messages with latest or oldest timestamp in results only when either timestamp is specified.',
						in: 'query',
						name: 'inclusive',
						schema: {
							type: 'boolean',
						},
					},
					{
						description:
							"The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.",
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description:
							'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											has_more: true,
											messages: [
												{
													text: 'I find you punny and would like to smell your nose letter',
													ts: '1512085950.000216',
													type: 'message',
													user: 'U012AB3CDE',
												},
												{
													text: 'What, you want to smell my shoes better?',
													ts: '1512104434.000490',
													type: 'message',
													user: 'U061F7AUR',
												},
											],
											ok: true,
											pin_count: 0,
											response_metadata: {
												next_cursor: 'bmV4dF90czoxNTEyMDg1ODYxMDAwNTQz',
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from conversations.history method',
									properties: {
										channel_actions_count: {
											type: 'integer',
										},
										channel_actions_ts: {
											items: {
												anyOf: [
													{
														type: 'integer',
													},
													{
														nullable: true,
													},
												],
											},
										},
										has_more: {
											type: 'boolean',
										},
										messages: {
											items: {
												$ref: '#/components/schemas/objs_message',
											},
											minItems: 1,
											type: 'array',
											uniqueItems: true,
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										pin_count: {
											type: 'integer',
										},
									},
									required: ['ok', 'messages', 'has_more', 'pin_count', 'channel_actions_ts', 'channel_actions_count'],
									title: 'conversations.history success schema',
									type: 'object',
								},
							},
						},
						description: "Typical success response containing a channel's messages",
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'channel_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.history method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'missing_scope',
												'channel_not_found',
												'invalid_ts_latest',
												'invalid_ts_oldest',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.history error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['channels:history', 'groups:history', 'im:history', 'mpim:history'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.info': {
			get: {
				description: 'Retrieve information about a conversation.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.info',
				},
				operationId: 'conversations_info',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Conversation ID to learn more about',
						in: 'query',
						name: 'channel',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Set this to `true` to receive the locale for this conversation. Defaults to `false`',
						in: 'query',
						name: 'include_locale',
						schema: {
							type: 'boolean',
						},
					},
					{
						description: 'Set to `true` to include the member count for the specified conversation. Defaults to `false`',
						in: 'query',
						name: 'include_num_members',
						schema: {
							type: 'boolean',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channel: {
												created: 1449252889,
												creator: 'W012A3BCD',
												id: 'C012AB3CD',
												is_archived: false,
												is_channel: true,
												is_ext_shared: false,
												is_general: true,
												is_group: false,
												is_im: false,
												is_member: true,
												is_mpim: false,
												is_org_shared: false,
												is_pending_ext_shared: false,
												is_private: false,
												is_read_only: false,
												is_shared: false,
												last_read: '1502126650.228446',
												locale: 'en-US',
												name: 'general',
												name_normalized: 'general',
												parent_conversation: null,
												pending_shared: [],
												previous_names: ['specifics', 'abstractions', 'etc'],
												purpose: {
													creator: 'W012A3BCD',
													last_set: 1449709364,
													value: 'This part of the workspace is for fun. Make fun here.',
												},
												topic: {
													creator: 'W012A3BCD',
													last_set: 1449709364,
													value: 'For public discussion of generalities',
												},
												unlinked: 0,
											},
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response conversations.info',
									properties: {
										channel: {
											$ref: '#/components/schemas/objs_conversation',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'channel'],
									title: 'conversations.info success schema',
									type: 'object',
								},
							},
						},
						description:
							'Typical success response for a public channel. (Also, a response from a private channel and a multi-party IM is very similar to this example.)',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'channel_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.info method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'missing_scope',
												'channel_not_found',
												'team_added_to_org',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.info error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response when a channel cannot be found',
					},
				},
				security: [
					{
						slackAuth: ['channels:read', 'groups:read', 'im:read', 'mpim:read'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.invite': {
			post: {
				description: 'Invites users to a channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.invite',
				},
				operationId: 'conversations_invite',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'The ID of the public or private channel to invite user(s) to.',
										type: 'string',
									},
									users: {
										description: 'A comma separated list of user IDs. Up to 1000 users may be listed.',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channel: {
												created: 1449252889,
												creator: 'W012A3BCD',
												id: 'C012AB3CD',
												is_archived: false,
												is_channel: true,
												is_ext_shared: false,
												is_general: true,
												is_group: false,
												is_im: false,
												is_member: true,
												is_mpim: false,
												is_org_shared: false,
												is_pending_ext_shared: false,
												is_private: false,
												is_read_only: false,
												is_shared: false,
												last_read: '1502126650.228446',
												locale: 'en-US',
												name: 'general',
												name_normalized: 'general',
												num_members: 23,
												pending_shared: [],
												previous_names: ['specifics', 'abstractions', 'etc'],
												purpose: {
													creator: 'W012A3BCD',
													last_set: 1449709364,
													value: 'This part of the workspace is for fun. Make fun here.',
												},
												topic: {
													creator: 'W012A3BCD',
													last_set: 1449709364,
													value: 'For public discussion of generalities',
												},
												unlinked: 0,
											},
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from conversations.invite method',
									properties: {
										channel: {
											$ref: '#/components/schemas/objs_conversation',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'channel'],
									title: 'conversations.invite error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response when an invitation is extended',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'method_not_supported_for_channel_type',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.invite method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'method_not_supported_for_channel_type',
												'missing_scope',
												'channel_not_found',
												'user_not_found',
												'no_user',
												'cant_invite_self',
												'not_in_channel',
												'already_in_channel',
												'is_archived',
												'cant_invite',
												'too_many_users',
												'ura_max_channels',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'user_is_bot',
												'user_is_restricted',
												'user_is_ultra_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'team_added_to_org',
												'missing_charset',
												'superfluous_charset',
											],
											type: 'string',
										},
										errors: {
											items: {
												additionalProperties: false,
												properties: {
													error: {
														enum: [
															'method_not_supported_for_channel_type',
															'missing_scope',
															'channel_not_found',
															'user_not_found',
															'no_user',
															'cant_invite_self',
															'not_in_channel',
															'already_in_channel',
															'is_archived',
															'cant_invite',
															'too_many_users',
															'ura_max_channels',
															'not_authed',
															'invalid_auth',
															'account_inactive',
															'user_is_bot',
															'user_is_restricted',
															'user_is_ultra_restricted',
															'invalid_arg_name',
															'invalid_array_arg',
															'invalid_charset',
															'invalid_form_data',
															'invalid_post_type',
															'missing_post_type',
															'invalid_json',
															'json_not_object',
															'request_timeout',
															'upgrade_required',
															'team_added_to_org',
															'missing_charset',
															'superfluous_charset',
														],
														type: 'string',
													},
													ok: {
														$ref: '#/components/schemas/defs_ok_false',
													},
													user: {
														$ref: '#/components/schemas/defs_user_id',
													},
												},
												required: ['ok', 'error'],
												type: 'object',
											},
											minItems: 1,
											title: 'errors is returned when an error associates an user',
											type: 'array',
											uniqueItems: true,
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok'],
									title: 'conversations.invite error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response when an invite is attempted on a conversation type that does not support it',
					},
				},
				security: [
					{
						slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.join': {
			post: {
				description: 'Joins an existing conversation.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.join',
				},
				operationId: 'conversations_join',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `channels:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'ID of conversation to join',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channel: {
												created: 1449252889,
												creator: 'U061F7AUR',
												id: 'C061EG9SL',
												is_archived: false,
												is_channel: true,
												is_ext_shared: false,
												is_general: true,
												is_group: false,
												is_im: false,
												is_member: true,
												is_mpim: false,
												is_org_shared: false,
												is_pending_ext_shared: false,
												is_private: false,
												is_shared: false,
												name: 'general',
												name_normalized: 'general',
												pending_shared: [],
												previous_names: [],
												purpose: {
													creator: '',
													last_set: 0,
													value: 'For widget discussion',
												},
												topic: {
													creator: '',
													last_set: 0,
													value: 'Which widget do you worry about?',
												},
												unlinked: 0,
											},
											ok: true,
											response_metadata: {
												warnings: ['already_in_channel'],
											},
											warning: 'already_in_channel',
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from conversations.join method',
									properties: {
										channel: {
											$ref: '#/components/schemas/objs_conversation',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										response_metadata: {
											properties: {
												warnings: {
													items: {
														type: 'string',
													},
													minItems: 1,
													type: 'array',
													uniqueItems: true,
												},
											},
											title: 'Response metadata',
											type: 'object',
										},
										warning: {
											type: 'string',
										},
									},
									required: ['ok', 'channel'],
									title: 'conversations.join success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'is_archived',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.join method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'method_not_supported_for_channel_type',
												'missing_scope',
												'channel_not_found',
												'is_archived',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'user_is_bot',
												'user_is_restricted',
												'user_is_ultra_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'team_added_to_org',
												'missing_charset',
												'superfluous_charset',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.join error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response if the conversation is archived and cannot be joined',
					},
				},
				security: [
					{
						slackAuth: ['channels:write'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.kick': {
			post: {
				description: 'Removes a user from a conversation.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.kick',
				},
				operationId: 'conversations_kick',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'ID of conversation to remove user from.',
										type: 'string',
									},
									user: {
										description: 'User ID to be removed.',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response conversations.kick method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'conversations.kick success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'cant_kick_self',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response conversations.kick method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'method_not_supported_for_channel_type',
												'missing_scope',
												'channel_not_found',
												'user_not_found',
												'cant_kick_self',
												'not_in_channel',
												'cant_kick_from_general',
												'restricted_action',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'user_is_bot',
												'user_is_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.kick error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response when you attempt to kick yourself from a channel',
					},
				},
				security: [
					{
						slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.leave': {
			post: {
				description: 'Leaves a conversation.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.leave',
				},
				operationId: 'conversations_leave',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'Conversation to leave',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from conversations.leave method',
									properties: {
										not_in_channel: {
											enum: [true],
											type: 'boolean',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'conversations.leave success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'cant_leave_general',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.leave method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'method_not_supported_for_channel_type',
												'last_member',
												'missing_scope',
												'channel_not_found',
												'is_archived',
												'cant_leave_general',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'user_is_bot',
												'user_is_restricted',
												'user_is_ultra_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'team_added_to_org',
												'missing_charset',
												'superfluous_charset',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.leave error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response when attempting to leave a workspace\'s "general" channel',
					},
				},
				security: [
					{
						slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.list': {
			get: {
				description: 'Lists all channels in a Slack team.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.list',
				},
				operationId: 'conversations_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Set to `true` to exclude archived channels from the list',
						in: 'query',
						name: 'exclude_archived',
						schema: {
							type: 'boolean',
						},
					},
					{
						description:
							'Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im`',
						in: 'query',
						name: 'types',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							"The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000.",
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description:
							'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channels: [
												{
													created: 1449252889,
													creator: 'U012A3CDE',
													id: 'C012AB3CD',
													is_archived: false,
													is_channel: true,
													is_ext_shared: false,
													is_general: true,
													is_group: false,
													is_im: false,
													is_member: true,
													is_mpim: false,
													is_org_shared: false,
													is_pending_ext_shared: false,
													is_private: false,
													is_shared: false,
													name: 'general',
													name_normalized: 'general',
													num_members: 4,
													pending_shared: [],
													previous_names: [],
													purpose: {
														creator: '',
														last_set: 0,
														value: 'This channel is for team-wide communication and announcements. All team members are in this channel.',
													},
													topic: {
														creator: '',
														last_set: 0,
														value: 'Company-wide announcements and work-based matters',
													},
													unlinked: 0,
												},
												{
													created: 1449252889,
													creator: 'U061F7AUR',
													id: 'C061EG9T2',
													is_archived: false,
													is_channel: true,
													is_ext_shared: false,
													is_general: false,
													is_group: false,
													is_im: false,
													is_member: true,
													is_mpim: false,
													is_org_shared: false,
													is_pending_ext_shared: false,
													is_private: false,
													is_shared: false,
													name: 'random',
													name_normalized: 'random',
													num_members: 4,
													pending_shared: [],
													previous_names: [],
													purpose: {
														creator: '',
														last_set: 0,
														value:
															"A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels.",
													},
													topic: {
														creator: '',
														last_set: 0,
														value: 'Non-work banter and water cooler conversation',
													},
													unlinked: 0,
												},
											],
											ok: true,
											response_metadata: {
												next_cursor: 'dGVhbTpDMDYxRkE1UEI=',
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from conversations.list method',
									properties: {
										channels: {
											items: {
												$ref: '#/components/schemas/objs_conversation',
											},
											type: 'array',
											uniqueItems: true,
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										response_metadata: {
											additionalProperties: false,
											properties: {
												next_cursor: {
													type: 'string',
												},
											},
											required: ['next_cursor'],
											type: 'object',
										},
									},
									required: ['ok', 'channels'],
									title: 'conversations.list success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response with only public channels',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.list method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'missing_scope',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.list error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['channels:read', 'groups:read', 'im:read', 'mpim:read'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.mark': {
			post: {
				description: 'Sets the read cursor in a channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.mark',
				},
				operationId: 'conversations_mark',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'Channel or conversation to set the read cursor for.',
										type: 'string',
									},
									ts: {
										description: 'Unique identifier of message you want marked as most recently seen in this conversation.',
										type: 'number',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response conversations.mark method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'conversations.mark success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.mark method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'method_not_supported_for_channel_type',
												'missing_scope',
												'channel_not_found',
												'invalid_timestamp',
												'not_in_channel',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'not_allowed_token_type',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.mark error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.members': {
			get: {
				description: 'Retrieve members of a conversation.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.members',
				},
				operationId: 'conversations_members',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'ID of the conversation to retrieve members for',
						in: 'query',
						name: 'channel',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							"The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.",
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description:
							'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											members: ['U023BECGF', 'U061F7AUR', 'W012A3CDE'],
											ok: true,
											response_metadata: {
												next_cursor: 'e3VzZXJfaWQ6IFcxMjM0NTY3fQ==',
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response conversations.members method',
									properties: {
										members: {
											items: {
												$ref: '#/components/schemas/defs_user_id',
											},
											minItems: 1,
											type: 'array',
											uniqueItems: true,
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										response_metadata: {
											additionalProperties: false,
											properties: {
												next_cursor: {
													type: 'string',
												},
											},
											required: ['next_cursor'],
											type: 'object',
										},
									},
									required: ['ok', 'members', 'response_metadata'],
									title: 'conversations.members success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical paginated success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_cursor',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response conversations.members method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'channel_not_found',
												'invalid_limit',
												'invalid_cursor',
												'fetch_members_failed',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.members error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response when an invalid cursor is provided',
					},
				},
				security: [
					{
						slackAuth: ['channels:read', 'groups:read', 'im:read', 'mpim:read'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.open': {
			post: {
				description: 'Opens or resumes a direct message or multi-person direct message.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.open',
				},
				operationId: 'conversations_open',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: "Resume a conversation by supplying an `im` or `mpim`'s ID. Or provide the `users` field instead.",
										type: 'string',
									},
									return_im: {
										description: 'Boolean, indicates you want the full IM channel definition in the response.',
										type: 'boolean',
									},
									users: {
										description:
											'Comma separated lists of users. If only one user is included, this creates a 1:1 DM.  The ordering of the users is preserved whenever a multi-person direct message is returned. Supply a `channel` when not supplying `users`.',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channel: {
												id: 'D069C7QFK',
											},
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from conversations.open method when opening channels, ims, mpims',
									properties: {
										already_open: {
											type: 'boolean',
										},
										channel: {
											items: {
												anyOf: [
													{
														$ref: '#/components/schemas/objs_conversation',
													},
													{
														additionalProperties: false,
														properties: {
															created: {
																type: 'string',
															},
															id: {
																$ref: '#/components/schemas/defs_dm_id',
															},
															is_im: {
																type: 'boolean',
															},
															is_open: {
																type: 'boolean',
															},
															last_read: {
																$ref: '#/components/schemas/defs_ts',
															},
															latest: {
																$ref: '#/components/schemas/objs_message',
															},
															unread_count: {
																type: 'number',
															},
															unread_count_display: {
																type: 'number',
															},
															user: {
																$ref: '#/components/schemas/defs_user_id',
															},
														},
														required: ['id'],
														type: 'object',
													},
												],
											},
										},
										no_op: {
											type: 'boolean',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'channel'],
									title: 'conversations.open success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'channel_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.open method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'method_not_supported_for_channel_type',
												'user_not_found',
												'user_not_visible',
												'user_disabled',
												'users_list_not_supplied',
												'not_enough_users',
												'too_many_users',
												'invalid_user_combination',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'channel_not_found',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.open error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.rename': {
			post: {
				description: 'Renames a conversation.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.rename',
				},
				operationId: 'conversations_rename',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'ID of conversation to rename',
										type: 'string',
									},
									name: {
										description: 'New name for conversation.',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channel: {
												created: 1449252889,
												creator: 'W012A3BCD',
												id: 'C012AB3CD',
												is_archived: false,
												is_channel: true,
												is_ext_shared: false,
												is_general: true,
												is_group: false,
												is_im: false,
												is_member: true,
												is_mpim: false,
												is_org_shared: false,
												is_pending_ext_shared: false,
												is_private: false,
												is_read_only: false,
												is_shared: false,
												last_read: '1502126650.228446',
												locale: 'en-US',
												name: 'general',
												name_normalized: 'general',
												num_members: 23,
												pending_shared: [],
												previous_names: ['specifics', 'abstractions', 'etc'],
												purpose: {
													creator: 'W012A3BCD',
													last_set: 1449709364,
													value: 'This part of the workspace is for fun. Make fun here.',
												},
												topic: {
													creator: 'W012A3BCD',
													last_set: 1449709364,
													value: 'For public discussion of generalities',
												},
												unlinked: 0,
											},
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from conversations.rename method',
									properties: {
										channel: {
											$ref: '#/components/schemas/objs_conversation',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'channel'],
									title: 'conversations.rename success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'not_in_channel',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.rename method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'user_is_restricted',
												'method_not_supported_for_channel_type',
												'missing_scope',
												'channel_not_found',
												'not_in_channel',
												'not_authorized',
												'invalid_name',
												'name_taken',
												'invalid_name_required',
												'invalid_name_punctuation',
												'invalid_name_maxlength',
												'invalid_name_specials',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.rename error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response when the calling user is not a member of the conversation',
					},
				},
				security: [
					{
						slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.replies': {
			get: {
				description: 'Retrieve a thread of messages posted to a conversation',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.replies',
				},
				operationId: 'conversations_replies',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:history`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Conversation ID to fetch thread from.',
						in: 'query',
						name: 'channel',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							"Unique identifier of a thread's parent message. `ts` must be the timestamp of an existing message with 0 or more replies. If there are no replies then just the single message referenced by `ts` will return - it is just an ordinary, unthreaded message.",
						in: 'query',
						name: 'ts',
						schema: {
							type: 'number',
						},
					},
					{
						description: 'End of time range of messages to include in results.',
						in: 'query',
						name: 'latest',
						schema: {
							type: 'number',
						},
					},
					{
						description: 'Start of time range of messages to include in results.',
						in: 'query',
						name: 'oldest',
						schema: {
							type: 'number',
						},
					},
					{
						description: 'Include messages with latest or oldest timestamp in results only when either timestamp is specified.',
						in: 'query',
						name: 'inclusive',
						schema: {
							type: 'boolean',
						},
					},
					{
						description:
							"The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.",
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description:
							'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											has_more: true,
											messages: [
												{
													last_read: '1484678597.521003',
													reply_count: 3,
													subscribed: true,
													text: 'island',
													thread_ts: '1482960137.003543',
													ts: '1482960137.003543',
													type: 'message',
													unread_count: 0,
													user: 'U061F7AUR',
												},
												{
													parent_user_id: 'U061F7AUR',
													text: 'one island',
													thread_ts: '1482960137.003543',
													ts: '1483037603.017503',
													type: 'message',
													user: 'U061F7AUR',
												},
												{
													parent_user_id: 'U061F7AUR',
													text: 'two island',
													thread_ts: '1482960137.003543',
													ts: '1483051909.018632',
													type: 'message',
													user: 'U061F7AUR',
												},
												{
													parent_user_id: 'U061F7AUR',
													text: 'three for the land',
													thread_ts: '1482960137.003543',
													ts: '1483125339.020269',
													type: 'message',
													user: 'U061F7AUR',
												},
											],
											ok: true,
											response_metadata: {
												next_cursor: 'bmV4dF90czoxNDg0Njc4MjkwNTE3MDkx',
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from conversations.replies method',
									properties: {
										has_more: {
											type: 'boolean',
										},
										messages: {
											items: {
												items: {
													anyOf: [
														{
															additionalProperties: false,
															properties: {
																last_read: {
																	$ref: '#/components/schemas/defs_ts',
																},
																latest_reply: {
																	$ref: '#/components/schemas/defs_ts',
																},
																reply_count: {
																	type: 'integer',
																},
																reply_users: {
																	items: {
																		$ref: '#/components/schemas/defs_user_id',
																	},
																	type: 'array',
																	uniqueItems: true,
																},
																reply_users_count: {
																	type: 'integer',
																},
																source_team: {
																	$ref: '#/components/schemas/defs_team',
																},
																subscribed: {
																	type: 'boolean',
																},
																team: {
																	$ref: '#/components/schemas/defs_team',
																},
																text: {
																	type: 'string',
																},
																thread_ts: {
																	$ref: '#/components/schemas/defs_ts',
																},
																ts: {
																	$ref: '#/components/schemas/defs_ts',
																},
																type: {
																	type: 'string',
																},
																unread_count: {
																	type: 'integer',
																},
																user: {
																	$ref: '#/components/schemas/defs_user_id',
																},
																user_profile: {
																	$ref: '#/components/schemas/objs_user_profile_short',
																},
																user_team: {
																	$ref: '#/components/schemas/defs_team',
																},
															},
															required: ['type', 'user', 'text', 'thread_ts', 'reply_count', 'subscribed', 'ts'],
															type: 'object',
														},
														{
															additionalProperties: false,
															properties: {
																is_starred: {
																	type: 'boolean',
																},
																parent_user_id: {
																	$ref: '#/components/schemas/defs_user_id',
																},
																source_team: {
																	$ref: '#/components/schemas/defs_team',
																},
																team: {
																	$ref: '#/components/schemas/defs_team',
																},
																text: {
																	type: 'string',
																},
																thread_ts: {
																	$ref: '#/components/schemas/defs_ts',
																},
																ts: {
																	$ref: '#/components/schemas/defs_ts',
																},
																type: {
																	type: 'string',
																},
																user: {
																	$ref: '#/components/schemas/defs_user_id',
																},
																user_profile: {
																	$ref: '#/components/schemas/objs_user_profile_short',
																},
																user_team: {
																	$ref: '#/components/schemas/defs_team',
																},
															},
															required: ['type', 'user', 'text', 'thread_ts', 'parent_user_id', 'ts'],
															type: 'object',
														},
													],
												},
											},
											type: 'array',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'messages'],
									title: 'conversations.replies success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'thread_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.replies method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'missing_scope',
												'channel_not_found',
												'thread_not_found',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.replies error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['channels:history', 'groups:history', 'im:history', 'mpim:history'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.setPurpose': {
			post: {
				description: 'Sets the purpose for a conversation.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.setPurpose',
				},
				operationId: 'conversations_setPurpose',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'Conversation to set the purpose of',
										type: 'string',
									},
									purpose: {
										description: 'A new, specialer purpose',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from conversations.setPurpose method',
									properties: {
										channel: {
											$ref: '#/components/schemas/objs_conversation',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'channel'],
									title: 'conversations.setPurpose success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.setPurpose method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'method_not_supported_for_channel_type',
												'missing_scope',
												'channel_not_found',
												'not_in_channel',
												'is_archived',
												'too_long',
												'user_is_restricted',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.setPurpose error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.setTopic': {
			post: {
				description: 'Sets the topic for a conversation.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.setTopic',
				},
				operationId: 'conversations_setTopic',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'Conversation to set the topic of',
										type: 'string',
									},
									topic: {
										description: 'The new topic string. Does not support formatting or linkification.',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from conversations.setTopic method',
									properties: {
										channel: {
											$ref: '#/components/schemas/objs_conversation',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'channel'],
									title: 'conversations.setTopic success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.setTopic method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'method_not_supported_for_channel_type',
												'missing_scope',
												'channel_not_found',
												'not_in_channel',
												'is_archived',
												'too_long',
												'user_is_restricted',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.setTopic error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/conversations.unarchive': {
			post: {
				description: 'Reverses conversation archival.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/conversations.unarchive',
				},
				operationId: 'conversations_unarchive',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'ID of conversation to unarchive',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from conversations.unarchive method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'conversations.unarchive success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'channel_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from conversations.unarchive method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'method_not_supported_for_channel_type',
												'missing_scope',
												'channel_not_found',
												'not_archived',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'user_is_bot',
												'user_is_restricted',
												'user_is_ultra_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'team_added_to_org',
												'missing_charset',
												'superfluous_charset',
											],
											type: 'string',
										},
										needed: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										provided: {
											type: 'string',
										},
									},
									required: ['ok', 'error'],
									title: 'conversations.unarchive error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'],
					},
				],
				tags: ['conversations'],
			},
		},
		'/dialog.open': {
			get: {
				description: 'Open a dialog with a user',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/dialog.open',
				},
				operationId: 'dialog_open',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The dialog definition. This must be a JSON-encoded string.',
						in: 'query',
						name: 'dialog',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Exchange a trigger to post to the user.',
						in: 'query',
						name: 'trigger_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from dialog.open method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'dialog.open schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response is quite minimal.',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'missing_trigger',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from dialog.open method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'validation_errors',
												'missing_trigger',
												'missing_dialog',
												'trigger_exchanged',
												'trigger_expired',
												'invalid_trigger',
												'app_missing_action_url',
												'cannot_create_dialog',
												'failed_sending_dialog',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'dialog.open error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response, before getting to any possible validation errors.',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['dialog'],
			},
		},
		'/dnd.endDnd': {
			post: {
				description: "Ends the current user's Do Not Disturb session immediately.",
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/dnd.endDnd',
				},
				operationId: 'dnd_endDnd',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `dnd:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from dnd.endDnd method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'dnd.endDnd schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from dnd.endDnd method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'unknown_error',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'dnd.endDnd error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['dnd:write'],
					},
				],
				tags: ['dnd'],
			},
		},
		'/dnd.endSnooze': {
			post: {
				description: "Ends the current user's snooze mode immediately.",
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/dnd.endSnooze',
				},
				operationId: 'dnd_endSnooze',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `dnd:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from dnd.endSnooze method',
									properties: {
										dnd_enabled: {
											type: 'boolean',
										},
										next_dnd_end_ts: {
											type: 'integer',
										},
										next_dnd_start_ts: {
											type: 'integer',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										snooze_enabled: {
											type: 'boolean',
										},
									},
									required: ['ok', 'dnd_enabled', 'next_dnd_start_ts', 'next_dnd_end_ts', 'snooze_enabled'],
									title: 'dnd.endSnooze schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from dnd.endSnooze method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'snooze_not_active',
												'snooze_end_failed',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'dnd.endSnooze error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['dnd:write'],
					},
				],
				tags: ['dnd'],
			},
		},
		'/dnd.info': {
			get: {
				description: "Retrieves a user's current Do Not Disturb status.",
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/dnd.info',
				},
				operationId: 'dnd_info',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `dnd:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'User to fetch status for (defaults to current user)',
						in: 'query',
						name: 'user',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from dnd.info method',
									properties: {
										dnd_enabled: {
											type: 'boolean',
										},
										next_dnd_end_ts: {
											type: 'integer',
										},
										next_dnd_start_ts: {
											type: 'integer',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										snooze_enabled: {
											type: 'boolean',
										},
										snooze_endtime: {
											type: 'integer',
										},
										snooze_remaining: {
											type: 'integer',
										},
									},
									required: ['ok', 'dnd_enabled', 'next_dnd_start_ts', 'next_dnd_end_ts'],
									title: 'dnd.info schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from dnd.info method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'user_not_found',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'dnd.info error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['dnd:read'],
					},
				],
				tags: ['dnd'],
			},
		},
		'/dnd.setSnooze': {
			post: {
				description: 'Turns on Do Not Disturb mode for the current user, or changes its duration.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/dnd.setSnooze',
				},
				operationId: 'dnd_setSnooze',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									num_minutes: {
										description: 'Number of minutes, from now, to snooze until.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `dnd:write`',
										type: 'string',
									},
								},
								required: ['token', 'num_minutes'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from dnd.setSnooze method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										snooze_enabled: {
											type: 'boolean',
										},
										snooze_endtime: {
											type: 'integer',
										},
										snooze_remaining: {
											type: 'integer',
										},
									},
									required: ['ok', 'snooze_enabled', 'snooze_endtime', 'snooze_remaining'],
									title: 'dnd.setSnooze schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from dnd.setSnooze method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'missing_duration',
												'snooze_failed',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'too_long',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'dnd.setSnooze error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['dnd:write'],
					},
				],
				tags: ['dnd'],
			},
		},
		'/dnd.teamInfo': {
			get: {
				description: 'Retrieves the Do Not Disturb status for up to 50 users on a team.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/dnd.teamInfo',
				},
				operationId: 'dnd_teamInfo',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `dnd:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Comma-separated list of users to fetch Do Not Disturb status for',
						in: 'query',
						name: 'users',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											users: {
												U023BECGF: {
													dnd_enabled: true,
													next_dnd_end_ts: 1450423800,
													next_dnd_start_ts: 1450387800,
												},
												W058CJVAA: {
													dnd_enabled: false,
													next_dnd_end_ts: 1,
													next_dnd_start_ts: 1,
												},
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['dnd:read'],
					},
				],
				tags: ['dnd'],
			},
		},
		'/emoji.list': {
			get: {
				description: 'Lists custom emoji for a team.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/emoji.list',
				},
				operationId: 'emoji_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `emoji:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['emoji:read'],
					},
				],
				tags: ['emoji'],
			},
		},
		'/files.comments.delete': {
			post: {
				description: 'Deletes an existing comment on a file.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/files.comments.delete',
				},
				operationId: 'files_comments_delete',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `files:write:user`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									file: {
										description: 'File to delete a comment from.',
										type: 'string',
									},
									id: {
										description: 'The comment to delete.',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response files.comments.delete method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'files.comments.delete schema',
									type: 'object',
								},
							},
						},
						description: 'Standard success response is very simple',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'file_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response files.comments.delete method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'cant_delete',
												'comment_not_found',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'files.comments.delete error schema',
									type: 'object',
								},
							},
						},
						description: 'Standard failure response when used with an invalid token',
					},
				},
				security: [
					{
						slackAuth: ['files:write:user'],
					},
				],
				tags: ['files.comments', 'files'],
			},
		},
		'/files.delete': {
			post: {
				description: 'Deletes a file.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/files.delete',
				},
				operationId: 'files_delete',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `files:write:user`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									file: {
										description: 'ID of file to delete.',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response files.delete method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'files.delete schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response files.delete method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'file_not_found',
												'file_deleted',
												'cant_delete_file',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'files.delete error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['files:write:user'],
					},
				],
				tags: ['files'],
			},
		},
		'/files.info': {
			get: {
				description: 'Gets information about a file.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/files.info',
				},
				operationId: 'files_info',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `files:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Specify a file by providing its ID.',
						in: 'query',
						name: 'file',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'count',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'page',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							"The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.",
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description:
							'Parameter for pagination. File comments are paginated for a single file. Set `cursor` equal to the `next_cursor` attribute returned by the previous request\'s `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection of comments. See [pagination](/docs/pagination) for more details.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											comments: [],
											file: {
												channels: ['C0T8SE4AU'],
												comments_count: 0,
												created: 1531763342,
												deanimate_gif: 'https://.../tedair_deanimate_gif.png',
												display_as_bot: false,
												editable: false,
												external_type: '',
												filetype: 'gif',
												groups: [],
												has_rich_preview: false,
												id: 'F0S43PZDF',
												image_exif_rotation: 1,
												ims: [],
												is_external: false,
												is_public: true,
												is_starred: false,
												mimetype: 'image/gif',
												mode: 'hosted',
												name: 'tedair.gif',
												original_h: 226,
												original_w: 176,
												permalink: 'https://.../tedair.gif',
												permalink_public: 'https://.../...',
												pjpeg: 'https://.../tedair_pjpeg.jpg',
												pretty_type: 'GIF',
												public_url_shared: false,
												shares: {
													public: {
														C0T8SE4AU: [
															{
																channel_name: 'file-under',
																latest_reply: '1531763348.000001',
																reply_count: 1,
																reply_users: ['U061F7AUR'],
																reply_users_count: 1,
																team_id: 'T061EG9R6',
																thread_ts: '1531763273.000015',
																ts: '1531763348.000001',
															},
														],
													},
												},
												size: 137531,
												thumb_160: 'https://.../tedair_=_160.png',
												thumb_360: 'https://.../tedair_360.png',
												thumb_360_gif: 'https://.../tedair_360.gif',
												thumb_360_h: 226,
												thumb_360_w: 176,
												thumb_64: 'https://.../tedair_64.png',
												thumb_80: 'https://.../tedair_80.png',
												timestamp: 1531763342,
												title: 'tedair.gif',
												url_private: 'https://.../tedair.gif',
												url_private_download: 'https://.../tedair.gif',
												user: 'U061F7AUR',
												username: '',
											},
											ok: true,
											response_metadata: {
												next_cursor: 'dGVhbTpDMUg5UkVTR0w=',
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from files.info method',
									properties: {
										comments: {
											$ref: '#/components/schemas/objs_comments',
										},
										content_html: {
											nullable: true,
										},
										editor: {
											$ref: '#/components/schemas/defs_user_id',
										},
										file: {
											$ref: '#/components/schemas/objs_file',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										paging: {
											$ref: '#/components/schemas/objs_paging',
										},
										response_metadata: {
											$ref: '#/components/schemas/objs_response_metadata',
										},
									},
									required: ['ok', 'file', 'comments'],
									title: 'files.info schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from files.info method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'file_not_found',
												'file_deleted',
												'timezone_count_failed',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'files.info error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['files:read'],
					},
				],
				tags: ['files'],
			},
		},
		'/files.list': {
			get: {
				description: 'List for a team, in a channel, or from a user with applied filters.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/files.list',
				},
				operationId: 'files_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `files:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Filter files created by a single user.',
						in: 'query',
						name: 'user',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Filter files appearing in a specific channel, indicated by its ID.',
						in: 'query',
						name: 'channel',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Filter files created after this timestamp (inclusive).',
						in: 'query',
						name: 'ts_from',
						schema: {
							type: 'number',
						},
					},
					{
						description: 'Filter files created before this timestamp (inclusive).',
						in: 'query',
						name: 'ts_to',
						schema: {
							type: 'number',
						},
					},
					{
						description:
							'Filter files by type ([see below](#file_types)). You can pass multiple values in the types argument, like `types=spaces,snippets`.The default value is `all`, which does not filter the list.',
						in: 'query',
						name: 'types',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'count',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'page',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'Show truncated file info for files hidden due to being too old, and the team who owns the file being over the file limit.',
						in: 'query',
						name: 'show_files_hidden_by_limit',
						schema: {
							type: 'boolean',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											files: [
												{
													channels: ['C0T8SE4AU'],
													comments_count: 0,
													created: 1531763254,
													deanimate_gif: 'https://.../billair_deanimate_gif.png',
													display_as_bot: false,
													editable: false,
													external_type: '',
													filetype: 'gif',
													groups: [],
													id: 'F0S43P1CZ',
													image_exif_rotation: 1,
													ims: [],
													is_external: false,
													is_public: true,
													mimetype: 'image/gif',
													mode: 'hosted',
													name: 'billair.gif',
													original_h: 226,
													original_w: 176,
													permalink: 'https://.../billair.gif',
													permalink_public: 'https://.../...',
													pjpeg: 'https://.../billair_pjpeg.jpg',
													pretty_type: 'GIF',
													public_url_shared: false,
													size: 144538,
													thumb_160: 'https://.../billair_=_160.png',
													thumb_360: 'https://.../billair_360.png',
													thumb_360_gif: 'https://.../billair_360.gif',
													thumb_360_h: 226,
													thumb_360_w: 176,
													thumb_64: 'https://.../billair_64.png',
													thumb_80: 'https://.../billair_80.png',
													timestamp: 1531763254,
													title: 'billair.gif',
													url_private: 'https://.../billair.gif',
													url_private_download: 'https://.../billair.gif',
													user: 'U061F7AUR',
													username: '',
												},
												{
													channels: ['C0T8SE4AU'],
													comments_count: 0,
													created: 1531763342,
													deanimate_gif: 'https://.../tedair_deanimate_gif.png',
													display_as_bot: false,
													editable: false,
													external_type: '',
													filetype: 'gif',
													groups: [],
													id: 'F0S43PZDF',
													image_exif_rotation: 1,
													ims: [],
													is_external: false,
													is_public: true,
													mimetype: 'image/gif',
													mode: 'hosted',
													name: 'tedair.gif',
													original_h: 226,
													original_w: 176,
													permalink: 'https://.../tedair.gif',
													permalink_public: 'https://.../...',
													pjpeg: 'https://.../tedair_pjpeg.jpg',
													pretty_type: 'GIF',
													public_url_shared: false,
													size: 137531,
													thumb_160: 'https://.../tedair_=_160.png',
													thumb_360: 'https://.../tedair_360.png',
													thumb_360_gif: 'https://.../tedair_360.gif',
													thumb_360_h: 226,
													thumb_360_w: 176,
													thumb_64: 'https://.../tedair_64.png',
													thumb_80: 'https://.../tedair_80.png',
													timestamp: 1531763342,
													title: 'tedair.gif',
													url_private: 'https://.../tedair.gif',
													url_private_download: 'https://.../tedair.gif',
													user: 'U061F7AUR',
													username: '',
												},
											],
											ok: true,
											paging: {
												count: 100,
												page: 1,
												pages: 1,
												total: 2,
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from files.list method',
									properties: {
										files: {
											items: {
												$ref: '#/components/schemas/objs_file',
											},
											minItems: 0,
											type: 'array',
											uniqueItems: true,
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										paging: {
											$ref: '#/components/schemas/objs_paging',
										},
									},
									required: ['ok', 'files', 'paging'],
									title: 'files.list schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from files.list method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'user_not_found',
												'unknown_type',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'files.list error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['files:read'],
					},
				],
				tags: ['files'],
			},
		},
		'/files.remote.add': {
			post: {
				description: 'Adds a file from a remote service',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/files.remote.add',
				},
				operationId: 'files_remote_add',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									external_id: {
										description: 'Creator defined GUID for the file.',
										type: 'string',
									},
									external_url: {
										description: 'URL of the remote file.',
										type: 'string',
									},
									filetype: {
										description: 'type of file',
										type: 'string',
									},
									indexable_file_contents: {
										description:
											'A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve discovery of the remote file.',
										type: 'string',
									},
									preview_image: {
										description: 'Preview of the document via `multipart/form-data`.',
										type: 'string',
									},
									title: {
										description: 'Title of the file being shared.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `remote_files:write`',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['remote_files:write'],
					},
				],
				tags: ['files.remote', 'files'],
			},
		},
		'/files.remote.info': {
			get: {
				description: 'Retrieve information about a remote file added to Slack',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/files.remote.info',
				},
				operationId: 'files_remote_info',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `remote_files:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Specify a file by providing its ID.',
						in: 'query',
						name: 'file',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Creator defined GUID for the file.',
						in: 'query',
						name: 'external_id',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['remote_files:read'],
					},
				],
				tags: ['files.remote', 'files'],
			},
		},
		'/files.remote.list': {
			get: {
				description: 'Retrieve information about a remote file added to Slack',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/files.remote.list',
				},
				operationId: 'files_remote_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `remote_files:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Filter files appearing in a specific channel, indicated by its ID.',
						in: 'query',
						name: 'channel',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Filter files created after this timestamp (inclusive).',
						in: 'query',
						name: 'ts_from',
						schema: {
							type: 'number',
						},
					},
					{
						description: 'Filter files created before this timestamp (inclusive).',
						in: 'query',
						name: 'ts_to',
						schema: {
							type: 'number',
						},
					},
					{
						description: 'The maximum number of items to return.',
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description:
							'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['remote_files:read'],
					},
				],
				tags: ['files.remote', 'files'],
			},
		},
		'/files.remote.remove': {
			post: {
				description: 'Remove a remote file.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/files.remote.remove',
				},
				operationId: 'files_remote_remove',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									external_id: {
										description: 'Creator defined GUID for the file.',
										type: 'string',
									},
									file: {
										description: 'Specify a file by providing its ID.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `remote_files:write`',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['remote_files:write'],
					},
				],
				tags: ['files.remote', 'files'],
			},
		},
		'/files.remote.share': {
			get: {
				description: 'Share a remote file into a channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/files.remote.share',
				},
				operationId: 'files_remote_share',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `remote_files:share`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'Specify a file registered with Slack by providing its ID. Either this field or `external_id` or both are required.',
						in: 'query',
						name: 'file',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'The globally unique identifier (GUID) for the file, as set by the app registering the file with Slack.  Either this field or `file` or both are required.',
						in: 'query',
						name: 'external_id',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Comma-separated list of channel IDs where the file will be shared.',
						in: 'query',
						name: 'channels',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['remote_files:share'],
					},
				],
				tags: ['files.remote', 'files'],
			},
		},
		'/files.remote.update': {
			post: {
				description: 'Updates an existing remote file.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/files.remote.update',
				},
				operationId: 'files_remote_update',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									external_id: {
										description: 'Creator defined GUID for the file.',
										type: 'string',
									},
									external_url: {
										description: 'URL of the remote file.',
										type: 'string',
									},
									file: {
										description: 'Specify a file by providing its ID.',
										type: 'string',
									},
									filetype: {
										description: 'type of file',
										type: 'string',
									},
									indexable_file_contents: {
										description: 'File containing contents that can be used to improve searchability for the remote file.',
										type: 'string',
									},
									preview_image: {
										description: 'Preview of the document via `multipart/form-data`.',
										type: 'string',
									},
									title: {
										description: 'Title of the file being shared.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `remote_files:write`',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['remote_files:write'],
					},
				],
				tags: ['files.remote', 'files'],
			},
		},
		'/files.revokePublicURL': {
			post: {
				description: 'Revokes public/external sharing access for a file',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/files.revokePublicURL',
				},
				operationId: 'files_revokePublicURL',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `files:write:user`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									file: {
										description: 'File to revoke',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from files.revokePublicURL method',
									properties: {
										file: {
											$ref: '#/components/schemas/objs_file',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'file'],
									title: 'files.revokePublicURL schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from files.revokePublicURL method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'file_not_found',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'user_is_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'files.revokePublicURL error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['files:write:user'],
					},
				],
				tags: ['files'],
			},
		},
		'/files.sharedPublicURL': {
			post: {
				description: 'Enables a file for public/external sharing.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/files.sharedPublicURL',
				},
				operationId: 'files_sharedPublicURL',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `files:write:user`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									file: {
										description: 'File to share',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from files.sharedPublicURL method',
									properties: {
										file: {
											$ref: '#/components/schemas/objs_file',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'file'],
									title: 'files.sharedPublicURL schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from files.sharedPublicURL method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'file_not_found',
												'not_allowed',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'user_is_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'files.sharedPublicURL error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['files:write:user'],
					},
				],
				tags: ['files'],
			},
		},
		'/files.upload': {
			post: {
				description: 'Uploads or creates a file.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/files.upload',
				},
				operationId: 'files_upload',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channels: {
										description: 'Comma-separated list of channel names or IDs where the file will be shared.',
										type: 'string',
									},
									content: {
										description: 'File contents via a POST variable. If omitting this parameter, you must provide a `file`.',
										type: 'string',
									},
									file: {
										description: 'File contents via `multipart/form-data`. If omitting this parameter, you must submit `content`.',
										type: 'string',
									},
									filename: {
										description: 'Filename of file.',
										type: 'string',
									},
									filetype: {
										description: 'A [file type](/types/file#file_types) identifier.',
										type: 'string',
									},
									initial_comment: {
										description: 'The message text introducing the file in specified `channels`.',
										type: 'string',
									},
									thread_ts: {
										description:
											"Provide another message's `ts` value to upload this file as a reply. Never use a reply's `ts` value; use its parent instead.",
										type: 'number',
									},
									title: {
										description: 'Title of file.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `files:write:user`',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											file: {
												channels: [],
												comments_count: 0,
												created: 1532293501,
												display_as_bot: false,
												editable: false,
												external_type: '',
												filetype: 'gif',
												groups: [],
												has_rich_preview: false,
												id: 'F0TD00400',
												image_exif_rotation: 1,
												ims: ['D0L4B9P0Q'],
												is_external: false,
												is_public: false,
												is_starred: false,
												mimetype: 'image/jpeg',
												mode: 'hosted',
												name: 'dramacat.gif',
												original_h: 366,
												original_w: 526,
												permalink: 'https://.../dramacat.gif',
												permalink_public: 'https://.../More-Path-Components',
												pretty_type: 'JPEG',
												public_url_shared: false,
												shares: {
													private: {
														D0L4B9P0Q: [
															{
																reply_count: 0,
																reply_users: [],
																reply_users_count: 0,
																ts: '1532293503.000001',
															},
														],
													},
												},
												size: 43518,
												thumb_160: 'https://.../dramacat_160.gif',
												thumb_360: 'https://.../dramacat_360.gif',
												thumb_360_h: 250,
												thumb_360_w: 360,
												thumb_480: 'https://.../dramacat_480.gif',
												thumb_480_h: 334,
												thumb_480_w: 480,
												thumb_64: 'https://.../dramacat_64.gif',
												thumb_80: 'https://.../dramacat_80.gif',
												timestamp: 1532293501,
												title: 'dramacat',
												url_private: 'https://.../dramacat.gif',
												url_private_download: 'https://.../dramacat.gif',
												user: 'U0L4B9NSU',
												username: '',
											},
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response files.upload method',
									properties: {
										file: {
											$ref: '#/components/schemas/objs_file',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok', 'file'],
									title: 'files.upload schema',
									type: 'object',
								},
							},
						},
						description: 'Success response after uploading a file to a channel with an initial message',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response files.upload method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'posting_to_general_channel_denied',
												'invalid_channel',
												'file_uploads_disabled',
												'file_uploads_except_images_disabled',
												'storage_limit_reached',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'files.upload error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['files:write:user'],
					},
				],
				tags: ['files'],
			},
		},
		'/migration.exchange': {
			get: {
				description: 'For Enterprise Grid workspaces, map local user IDs to global user IDs',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/migration.exchange',
				},
				operationId: 'migration_exchange',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `tokens.basic`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A comma-separated list of user ids, up to 400 per request',
						in: 'query',
						name: 'users',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Specify team_id starts with `T` in case of Org Token',
						in: 'query',
						name: 'team_id',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Specify `true` to convert `W` global user IDs to workspace-specific `U` IDs. Defaults to `false`.',
						in: 'query',
						name: 'to_old',
						schema: {
							type: 'boolean',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											enterprise_id: 'E1KQTNXE1',
											invalid_user_ids: ['U21ABZZXX'],
											ok: true,
											team_id: 'T1KR7PE1W',
											user_id_map: {
												U06UBSUN5: 'W06M56XJM',
												U06UBSVB3: 'W06PUUDLY',
												U06UBSVDX: 'W06PUUDMW',
												U06UEB62U: 'W06PTT6GH',
												W06UAZ65Q: 'W06UAZ65Q',
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description: 'Schema for successful response from migration.exchange method',
									properties: {
										enterprise_id: {
											title: 'The enterprise grid organization ID containing the workspace/team.',
											type: 'string',
										},
										invalid_user_ids: {
											items: {
												type: 'string',
											},
											title: 'A list of User IDs that cannot be mapped or found',
											type: 'array',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										team_id: {
											$ref: '#/components/schemas/defs_team',
										},
										user_id_map: {
											additionalProperties: true,
											title: 'A mapping of provided user IDs with mapped user IDs',
											type: 'object',
										},
									},
									required: ['ok', 'team_id', 'enterprise_id'],
									title: 'migration.exchange success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response when mappings exist for the specified user IDs',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'not_enterprise_team',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from migration.exchange method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_enterprise_team',
												'too_many_users',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'migration.exchange error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response when there are no mappings to provide',
					},
				},
				security: [
					{
						slackAuth: ['tokens.basic'],
					},
				],
				tags: ['migration'],
			},
		},
		'/oauth.access': {
			get: {
				description: 'Exchanges a temporary OAuth verifier code for an access token.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/oauth.access',
				},
				operationId: 'oauth_access',
				parameters: [
					{
						description: 'Issued when you created your application.',
						in: 'query',
						name: 'client_id',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Issued when you created your application.',
						in: 'query',
						name: 'client_secret',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The `code` param returned via the OAuth callback.',
						in: 'query',
						name: 'code',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'This must match the originally submitted URI (if one was sent).',
						in: 'query',
						name: 'redirect_uri',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps).',
						in: 'query',
						name: 'single_channel',
						schema: {
							type: 'boolean',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											access_token: 'xoxp-XXXXXXXX-XXXXXXXX-XXXXX',
											enterprise_id: null,
											scope: 'groups:write',
											team_id: 'TXXXXXXXXX',
											team_name: 'Wyld Stallyns LLC',
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Successful user token negotiation for a single scope',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_client_id',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['oauth'],
			},
		},
		'/oauth.token': {
			get: {
				description: 'Exchanges a temporary OAuth verifier code for a workspace token.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/oauth.token',
				},
				operationId: 'oauth_token',
				parameters: [
					{
						description: 'Issued when you created your application.',
						in: 'query',
						name: 'client_id',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Issued when you created your application.',
						in: 'query',
						name: 'client_secret',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The `code` param returned via the OAuth callback.',
						in: 'query',
						name: 'code',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'This must match the originally submitted URI (if one was sent).',
						in: 'query',
						name: 'redirect_uri',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Request the user to add your app only to a single channel.',
						in: 'query',
						name: 'single_channel',
						schema: {
							type: 'boolean',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											access_token: 'xoxa-access-token-string',
											app_id: 'A012345678',
											app_user_id: 'U0AB12ABC',
											authorizing_user_id: 'U0HTT3Q0G',
											installer_user_id: 'U061F7AUR',
											ok: true,
											permissions: [
												{
													resource_id: 0,
													resource_type: 'channel',
													scopes: ['channels:read', 'chat:write:user'],
												},
											],
											single_channel_id: 'C061EG9T2',
											team_id: 'T061EG9Z9',
											team_name: 'Subarachnoid Workspace',
											token_type: 'app',
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Success example using a workspace app produces a very different kind of response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_client_id',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['oauth'],
			},
		},
		'/oauth.v2.access': {
			get: {
				description: 'Exchanges a temporary OAuth verifier code for an access token.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/oauth.v2.access',
				},
				operationId: 'oauth_v2_access',
				parameters: [
					{
						description: 'Issued when you created your application.',
						in: 'query',
						name: 'client_id',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Issued when you created your application.',
						in: 'query',
						name: 'client_secret',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The `code` param returned via the OAuth callback.',
						in: 'query',
						name: 'code',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'This must match the originally submitted URI (if one was sent).',
						in: 'query',
						name: 'redirect_uri',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											access_token: 'xoxb-17653672481-19874698323-pdFZKVeTuE8sk7oOcBrzbqgy',
											app_id: 'A0KRD7HC3',
											authed_user: {
												access_token: 'xoxp-1234',
												id: 'U1234',
												scope: 'chat:write',
												token_type: 'user',
											},
											bot_user_id: 'U0KRQLJ9H',
											enterprise: {
												id: 'E12345678',
												name: 'slack-sports',
											},
											ok: true,
											scope: 'commands,incoming-webhook',
											team: {
												id: 'T9TK3CUKW',
												name: 'Slack Softball Team',
											},
											token_type: 'bot',
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Successful token request with scopes for both a bot user and a user token',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_client_id',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['oauth.v2', 'oauth'],
			},
		},
		'/pins.add': {
			post: {
				description: 'Pins an item to a channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/pins.add',
				},
				operationId: 'pins_add',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `pins:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'Channel to pin the item in.',
										type: 'string',
									},
									timestamp: {
										description: 'Timestamp of the message to pin.',
										type: 'string',
									},
								},
								required: ['channel'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from pins.add method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'pins.add schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'channel_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from pins.add method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'bad_timestamp',
												'message_not_found',
												'channel_not_found',
												'no_item_specified',
												'already_pinned',
												'permission_denied',
												'file_not_shared',
												'not_pinnable',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'pins.add error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['pins:write'],
					},
				],
				tags: ['pins'],
			},
		},
		'/pins.list': {
			get: {
				description: 'Lists items pinned to a channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/pins.list',
				},
				operationId: 'pins_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `pins:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Channel to get pinned items for.',
						in: 'query',
						name: 'channel',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											items: [
												{
													channel: 'C2U86NC6H',
													created: 1508881078,
													created_by: 'U2U85N1RZ',
													message: {
														permalink: 'https://hitchhikers.slack.com/archives/C2U86NC6H/p1508197641000151',
														pinned_to: ['C2U86NC6H'],
														text: 'What is the meaning of life?',
														ts: '1508197641.000151',
														type: 'message',
														user: 'U2U85N1RZ',
													},
													type: 'message',
												},
												{
													channel: 'C2U86NC6H',
													created: 1508880991,
													created_by: 'U2U85N1RZ',
													message: {
														permalink: 'https://hitchhikers.slack.com/archives/C2U86NC6H/p1508284197000015',
														pinned_to: ['C2U86NC6H'],
														text: 'The meaning of life, the universe, and everything is 42.',
														ts: '1503289197.000015',
														type: 'message',
														user: 'U2U85N1RZ',
													},
													type: 'message',
												},
											],
											ok: true,
										},
									},
								},
								schema: {
									description: 'Schema for successful response from pins.list method',
									items: {
										anyOf: [
											{
												additionalProperties: false,
												properties: {
													items: {
														items: {
															anyOf: [
																{
																	additionalProperties: false,
																	properties: {
																		created: {
																			type: 'integer',
																		},
																		created_by: {
																			$ref: '#/components/schemas/defs_user_id',
																		},
																		file: {
																			$ref: '#/components/schemas/objs_file',
																		},
																		type: {
																			enum: ['file'],
																			type: 'string',
																		},
																	},
																	title: 'File Pin',
																	type: 'object',
																},
																{
																	additionalProperties: false,
																	properties: {
																		channel: {
																			$ref: '#/components/schemas/defs_channel',
																		},
																		created: {
																			type: 'integer',
																		},
																		created_by: {
																			$ref: '#/components/schemas/defs_user_id',
																		},
																		message: {
																			$ref: '#/components/schemas/objs_message',
																		},
																		type: {
																			enum: ['message'],
																			type: 'string',
																		},
																	},
																	title: 'Message Pin',
																	type: 'object',
																},
															],
														},
														type: 'array',
														uniqueItems: true,
													},
													ok: {
														$ref: '#/components/schemas/defs_ok_true',
													},
												},
												required: ['ok', 'items'],
												type: 'object',
											},
											{
												additionalProperties: false,
												properties: {
													count: {
														type: 'integer',
													},
													ok: {
														$ref: '#/components/schemas/defs_ok_true',
													},
												},
												required: ['ok', 'count'],
												type: 'object',
											},
										],
									},
									title: 'pins.list success schema',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from pins.list method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'channel_not_found',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'pins.list error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['pins:read'],
					},
				],
				tags: ['pins'],
			},
		},
		'/pins.remove': {
			post: {
				description: 'Un-pins an item from a channel.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/pins.remove',
				},
				operationId: 'pins_remove',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `pins:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'Channel where the item is pinned to.',
										type: 'string',
									},
									timestamp: {
										description: 'Timestamp of the message to un-pin.',
										type: 'string',
									},
								},
								required: ['channel'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from pins.remove method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'pins.remove schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'no_pin',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from pins.remove method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'bad_timestamp',
												'file_not_found',
												'file_comment_not_found',
												'message_not_found',
												'no_item_specified',
												'not_pinned',
												'permission_denied',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_typ',
												'missing_post_typ',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeou',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'pins.remove error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['pins:write'],
					},
				],
				tags: ['pins'],
			},
		},
		'/reactions.add': {
			post: {
				description: 'Adds a reaction to an item.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/reactions.add',
				},
				operationId: 'reactions_add',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `reactions:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'Channel where the message to add reaction to was posted.',
										type: 'string',
									},
									name: {
										description: 'Reaction (emoji) name.',
										type: 'string',
									},
									timestamp: {
										description: 'Timestamp of the message to add reaction to.',
										type: 'string',
									},
								},
								required: ['channel', 'name', 'timestamp'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from reactions.add method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'reactions.add schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'already_reacted',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from reactions.add method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'bad_timestamp',
												'message_not_found',
												'no_item_specified',
												'invalid_name',
												'already_reacted',
												'too_many_emoji',
												'too_many_reactions',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'reactions.add error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['reactions:write'],
					},
				],
				tags: ['reactions'],
			},
		},
		'/reactions.get': {
			get: {
				description: 'Gets reactions for an item.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/reactions.get',
				},
				operationId: 'reactions_get',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `reactions:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Channel where the message to get reactions for was posted.',
						in: 'query',
						name: 'channel',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'File to get reactions for.',
						in: 'query',
						name: 'file',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'File comment to get reactions for.',
						in: 'query',
						name: 'file_comment',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'If true always return the complete reaction list.',
						in: 'query',
						name: 'full',
						schema: {
							type: 'boolean',
						},
					},
					{
						description: 'Timestamp of the message to get reactions for.',
						in: 'query',
						name: 'timestamp',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											file: {
												channels: ['C2U7V2YA2'],
												comments_count: 1,
												created: 1507850315,
												groups: [],
												id: 'F7H0D7ZA4',
												ims: [],
												name: 'computer.gif',
												reactions: [
													{
														count: 1,
														name: 'stuck_out_tongue_winking_eye',
														users: ['U2U85N1RV'],
													},
												],
												timestamp: 1507850315,
												title: 'computer.gif',
												user: 'U2U85N1RV',
											},
											ok: true,
											type: 'file',
										},
									},
								},
								schema: {
									description: 'Schema for successful response from reactions.get method',
									items: {
										anyOf: [
											{
												additionalProperties: false,
												properties: {
													channel: {
														$ref: '#/components/schemas/defs_channel',
													},
													message: {
														$ref: '#/components/schemas/objs_message',
													},
													ok: {
														$ref: '#/components/schemas/defs_ok_true',
													},
													type: {
														enum: ['message'],
														type: 'string',
													},
												},
												required: ['ok', 'type', 'channel', 'message'],
											},
											{
												additionalProperties: false,
												properties: {
													file: {
														$ref: '#/components/schemas/objs_file',
													},
													ok: {
														$ref: '#/components/schemas/defs_ok_true',
													},
													type: {
														enum: ['file'],
														type: 'string',
													},
												},
												required: ['ok', 'type', 'file'],
											},
											{
												additionalProperties: false,
												properties: {
													comment: {
														$ref: '#/components/schemas/objs_comment',
													},
													file: {
														$ref: '#/components/schemas/objs_file',
													},
													ok: {
														$ref: '#/components/schemas/defs_ok_true',
													},
													type: {
														enum: ['file_comment'],
														type: 'string',
													},
												},
												required: ['ok', 'type', 'file', 'comment'],
											},
										],
									},
									title: 'reactions.get success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from reactions.get method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'bad_timestamp',
												'file_not_found',
												'file_comment_not_found',
												'message_not_found',
												'no_item_specified',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'reactions.get error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['reactions:read'],
					},
				],
				tags: ['reactions'],
			},
		},
		'/reactions.list': {
			get: {
				description: 'Lists reactions made by a user.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/reactions.list',
				},
				operationId: 'reactions_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `reactions:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Show reactions made by this user. Defaults to the authed user.',
						in: 'query',
						name: 'user',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'If true always return the complete reaction list.',
						in: 'query',
						name: 'full',
						schema: {
							type: 'boolean',
						},
					},
					{
						in: 'query',
						name: 'count',
						schema: {
							type: 'integer',
						},
					},
					{
						in: 'query',
						name: 'page',
						schema: {
							type: 'integer',
						},
					},
					{
						description:
							'Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request\'s `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							"The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.",
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											items: [
												{
													channel: 'C3UKJTQAC',
													message: {
														bot_id: 'B4VLRLMKJ',
														reactions: [
															{
																count: 1,
																name: 'robot_face',
																users: ['U2U85N1RV'],
															},
														],
														subtype: 'bot_message',
														text: 'Hello from Python! :tada:',
														ts: '1507849573.000090',
														username: 'Shipit Notifications',
													},
													type: 'message',
												},
												{
													comment: {
														comment: 'This is a file comment',
														created: 1508286096,
														id: 'Fc7LP08P1U',
														reactions: [
															{
																count: 1,
																name: 'white_check_mark',
																users: ['U2U85N1RV'],
															},
														],
														timestamp: 1508286096,
														type: 'file_comment',
														user: 'U2U85N1RV',
													},
													file: {
														channels: ['C2U7V2YA2'],
														comments_count: 1,
														created: 1507850315,
														reactions: [
															{
																count: 1,
																name: 'stuck_out_tongue_winking_eye',
																users: ['U2U85N1RV'],
															},
														],
														title: 'computer.gif',
														user: 'U2U85N1RV',
														username: '',
													},
												},
												{
													file: {
														channels: ['C2U7V2YA2'],
														comments_count: 1,
														created: 1507850315,
														id: 'F7H0D7ZA4',
														name: 'computer.gif',
														reactions: [
															{
																count: 1,
																name: 'stuck_out_tongue_winking_eye',
																users: ['U2U85N1RV'],
															},
														],
														size: 1639034,
														title: 'computer.gif',
														user: 'U2U85N1RV',
														username: '',
													},
													type: 'file',
												},
											],
											ok: true,
											response_metadata: {
												next_cursor: 'dGVhbTpDMUg5UkVTR0w=',
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from reactions.list method',
									properties: {
										items: {
											items: {
												items: {
													anyOf: [
														{
															additionalProperties: false,
															properties: {
																channel: {
																	$ref: '#/components/schemas/defs_channel',
																},
																message: {
																	$ref: '#/components/schemas/objs_message',
																},
																type: {
																	enum: ['message'],
																	type: 'string',
																},
															},
															required: ['type', 'channel', 'message'],
															type: 'object',
														},
														{
															additionalProperties: false,
															properties: {
																file: {
																	$ref: '#/components/schemas/objs_file',
																},
																type: {
																	enum: ['file'],
																	type: 'string',
																},
															},
															required: ['type', 'file'],
															type: 'object',
														},
														{
															additionalProperties: false,
															properties: {
																comment: {
																	$ref: '#/components/schemas/objs_comment',
																},
																file: {
																	$ref: '#/components/schemas/objs_file',
																},
																type: {
																	enum: ['file_comment'],
																	type: 'string',
																},
															},
															required: ['type', 'file', 'comment'],
															type: 'object',
														},
													],
												},
											},
											type: 'array',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										paging: {
											$ref: '#/components/schemas/objs_paging',
										},
										response_metadata: {
											$ref: '#/components/schemas/objs_response_metadata',
										},
									},
									required: ['ok', 'items'],
									title: 'reactions.list schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from reactions.list method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'user_not_found',
												'not_authed',
												'invalid_auth',
												'account_inactiv',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'reactions.list error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['reactions:read'],
					},
				],
				tags: ['reactions'],
			},
		},
		'/reactions.remove': {
			post: {
				description: 'Removes a reaction from an item.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/reactions.remove',
				},
				operationId: 'reactions_remove',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `reactions:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'Channel where the message to remove reaction from was posted.',
										type: 'string',
									},
									file: {
										description: 'File to remove reaction from.',
										type: 'string',
									},
									file_comment: {
										description: 'File comment to remove reaction from.',
										type: 'string',
									},
									name: {
										description: 'Reaction (emoji) name.',
										type: 'string',
									},
									timestamp: {
										description: 'Timestamp of the message to remove reaction from.',
										type: 'string',
									},
								},
								required: ['name'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from reactions.remove method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'reactions.remove schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'no_reaction',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from reactions.remove method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'bad_timestamp',
												'file_not_found',
												'file_comment_not_found',
												'message_not_found',
												'no_item_specified',
												'invalid_name',
												'no_reaction',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'reactions.remove error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['reactions:write'],
					},
				],
				tags: ['reactions'],
			},
		},
		'/reminders.add': {
			post: {
				description: 'Creates a reminder.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/reminders.add',
				},
				operationId: 'reminders_add',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `reminders:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									text: {
										description: 'The content of the reminder',
										type: 'string',
									},
									time: {
										description:
											'When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday")',
										type: 'string',
									},
									user: {
										description:
											'The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.',
										type: 'string',
									},
								},
								required: ['text', 'time'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from reminders.add method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										reminder: {
											$ref: '#/components/schemas/objs_reminder',
										},
									},
									required: ['ok', 'reminder'],
									title: 'reminders.add schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from reminders.add method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'cannot_parse',
												'user_not_found',
												'cannot_add_bot',
												'cannot_add_slackbot',
												'cannot_add_others',
												'cannot_add_others_recurring',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'reminders.add error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['reminders:write'],
					},
				],
				tags: ['reminders'],
			},
		},
		'/reminders.complete': {
			post: {
				description: 'Marks a reminder as complete.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/reminders.complete',
				},
				operationId: 'reminders_complete',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `reminders:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									reminder: {
										description: 'The ID of the reminder to be marked as complete',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from reminders.complete method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'reminders.complete schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from reminders.complete method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_found',
												'cannot_complete_recurring',
												'cannot_complete_others',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'reminders.complete error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['reminders:write'],
					},
				],
				tags: ['reminders'],
			},
		},
		'/reminders.delete': {
			post: {
				description: 'Deletes a reminder.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/reminders.delete',
				},
				operationId: 'reminders_delete',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `reminders:write`',
						in: 'header',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									reminder: {
										description: 'The ID of the reminder',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from reminders.delete method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'reminders.delete schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from reminders.delete method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_found',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'reminders.delete error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['reminders:write'],
					},
				],
				tags: ['reminders'],
			},
		},
		'/reminders.info': {
			get: {
				description: 'Gets information about a reminder.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/reminders.info',
				},
				operationId: 'reminders_info',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `reminders:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'The ID of the reminder',
						in: 'query',
						name: 'reminder',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from reminders.info method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										reminder: {
											$ref: '#/components/schemas/objs_reminder',
										},
									},
									required: ['ok', 'reminder'],
									title: 'reminders.info schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from reminders.info method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_found',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'reminders.info error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['reminders:read'],
					},
				],
				tags: ['reminders'],
			},
		},
		'/reminders.list': {
			get: {
				description: 'Lists all reminders created by or for a given user.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/reminders.list',
				},
				operationId: 'reminders_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `reminders:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from reminders.list method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										reminders: {
											items: {
												$ref: '#/components/schemas/objs_reminder',
											},
											type: 'array',
										},
									},
									required: ['ok', 'reminders'],
									title: 'reminders.list schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from reminders.list method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'reminders.list error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['reminders:read'],
					},
				],
				tags: ['reminders'],
			},
		},
		'/rtm.connect': {
			get: {
				description: 'Starts a Real Time Messaging session.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/rtm.connect',
				},
				operationId: 'rtm_connect',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `rtm:stream`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'Batch presence deliveries via subscription. Enabling changes the shape of `presence_change` events. See [batch presence](/docs/presence-and-status#batching).',
						in: 'query',
						name: 'batch_presence_aware',
						schema: {
							type: 'boolean',
						},
					},
					{
						description:
							'Only deliver presence events when requested by subscription. See [presence subscriptions](/docs/presence-and-status#subscriptions).',
						in: 'query',
						name: 'presence_sub',
						schema: {
							type: 'boolean',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											self: {
												id: 'U4X318ZMZ',
												name: 'robotoverlord',
											},
											team: {
												domain: 'slackdemo',
												id: 'T2U81E2FP',
												name: 'SlackDemo',
											},
											url: 'wss://...',
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from rtm.connect method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										self: {
											additionalProperties: false,
											properties: {
												id: {
													$ref: '#/components/schemas/defs_user_id',
												},
												name: {
													type: 'string',
												},
											},
											required: ['id', 'name'],
											type: 'object',
										},
										team: {
											additionalProperties: false,
											properties: {
												domain: {
													type: 'string',
												},
												id: {
													$ref: '#/components/schemas/defs_team',
												},
												name: {
													type: 'string',
												},
											},
											required: ['id', 'name', 'domain'],
											type: 'object',
										},
										url: {
											format: 'uri',
											type: 'string',
										},
									},
									required: ['ok', 'url', 'team', 'self'],
									title: 'rtm.connect schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from rtm.connect method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'rtm.connect error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['rtm:stream'],
					},
				],
				tags: ['rtm'],
			},
		},
		'/search.messages': {
			get: {
				description: 'Searches for messages matching a query.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/search.messages',
				},
				operationId: 'search_messages',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `search:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Pass the number of results you want per "page". Maximum of `100`.',
						in: 'query',
						name: 'count',
						schema: {
							type: 'integer',
						},
					},
					{
						description: 'Pass a value of `true` to enable query highlight markers (see below).',
						in: 'query',
						name: 'highlight',
						schema: {
							type: 'boolean',
						},
					},
					{
						in: 'query',
						name: 'page',
						schema: {
							type: 'integer',
						},
					},
					{
						description: 'Search query.',
						in: 'query',
						name: 'query',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Return matches sorted by either `score` or `timestamp`.',
						in: 'query',
						name: 'sort',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Change sort direction to ascending (`asc`) or descending (`desc`).',
						in: 'query',
						name: 'sort_dir',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											messages: {
												matches: [
													{
														channel: {
															id: 'C12345678',
															is_ext_shared: false,
															is_mpim: false,
															is_org_shared: false,
															is_pending_ext_shared: false,
															is_private: false,
															is_shared: false,
															name: 'general',
															pending_shared: [],
														},
														iid: 'cb64bdaa-c1e8-4631-8a91-0f78080113e9',
														permalink: 'https://hitchhikers.slack.com/archives/C12345678/p1508284197000015',
														team: 'T12345678',
														text: 'The meaning of life the universe and everything is 42.',
														ts: '1508284197.000015',
														type: 'message',
														user: 'U2U85N1RV',
														username: 'roach',
													},
													{
														channel: {
															id: 'C12345678',
															is_ext_shared: false,
															is_mpim: false,
															is_org_shared: false,
															is_pending_ext_shared: false,
															is_private: false,
															is_shared: false,
															name: 'random',
															pending_shared: [],
														},
														iid: '9a00d3c9-bd2d-45b0-988b-6cff99ae2a90',
														permalink: 'https://hitchhikers.slack.com/archives/C12345678/p1508795665000236',
														team: 'T12345678',
														text: 'The meaning of life the universe and everything is 101010',
														ts: '1508795665.000236',
														type: 'message',
														user: '',
														username: 'robot overlord',
													},
												],
												pagination: {
													first: 1,
													last: 2,
													page: 1,
													page_count: 1,
													per_page: 20,
													total_count: 2,
												},
												paging: {
													count: 20,
													page: 1,
													pages: 1,
													total: 2,
												},
												total: 2,
											},
											ok: true,
											query: 'The meaning of life the universe and everything',
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'No query passed',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['search:read'],
					},
				],
				tags: ['search'],
			},
		},
		'/stars.add': {
			post: {
				description: 'Adds a star to an item.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/stars.add',
				},
				operationId: 'stars_add',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `stars:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description: 'Channel to add star to, or channel where the message to add star to was posted (used with `timestamp`).',
										type: 'string',
									},
									file: {
										description: 'File to add star to.',
										type: 'string',
									},
									file_comment: {
										description: 'File comment to add star to.',
										type: 'string',
									},
									timestamp: {
										description: 'Timestamp of the message to add star to.',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from stars.add method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'stars.add schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from stars.add method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'bad_timestamp',
												'message_not_found',
												'file_not_found',
												'file_comment_not_found',
												'channel_not_found',
												'no_item_specified',
												'already_starred',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'stars.add error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['stars:write'],
					},
				],
				tags: ['stars'],
			},
		},
		'/stars.list': {
			get: {
				description: 'Lists stars for a user.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/stars.list',
				},
				operationId: 'stars_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `stars:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'count',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'page',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request\'s `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							"The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.",
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from stars.list method',
									properties: {
										items: {
											items: {
												items: {
													anyOf: [
														{
															additionalProperties: false,
															properties: {
																channel: {
																	$ref: '#/components/schemas/defs_channel',
																},
																date_create: {
																	type: 'integer',
																},
																message: {
																	$ref: '#/components/schemas/objs_message',
																},
																type: {
																	enum: ['message'],
																	type: 'string',
																},
															},
															required: ['type', 'channel', 'message', 'date_create'],
															type: 'object',
														},
														{
															additionalProperties: false,
															properties: {
																date_create: {
																	type: 'integer',
																},
																file: {
																	$ref: '#/components/schemas/objs_file',
																},
																type: {
																	enum: ['file'],
																	type: 'string',
																},
															},
															required: ['type', 'file', 'date_create'],
															type: 'object',
														},
														{
															additionalProperties: false,
															properties: {
																comment: {
																	$ref: '#/components/schemas/objs_comment',
																},
																date_create: {
																	type: 'integer',
																},
																file: {
																	$ref: '#/components/schemas/objs_file',
																},
																type: {
																	enum: ['file_comment'],
																	type: 'string',
																},
															},
															required: ['type', 'file', 'comment', 'date_create'],
															type: 'object',
														},
														{
															additionalProperties: false,
															properties: {
																channel: {
																	$ref: '#/components/schemas/defs_channel',
																},
																date_create: {
																	type: 'integer',
																},
																type: {
																	enum: ['channel'],
																	type: 'string',
																},
															},
															required: ['type', 'channel', 'date_create'],
															type: 'object',
														},
														{
															additionalProperties: false,
															properties: {
																channel: {
																	$ref: '#/components/schemas/defs_dm_id',
																},
																date_create: {
																	type: 'integer',
																},
																type: {
																	enum: ['im'],
																	type: 'string',
																},
															},
															required: ['type', 'channel', 'date_create'],
															type: 'object',
														},
														{
															additionalProperties: false,
															properties: {
																channel: {
																	$ref: '#/components/schemas/defs_group_id',
																},
																date_create: {
																	type: 'integer',
																},
																type: {
																	enum: ['group'],
																	type: 'string',
																},
															},
															required: ['type', 'channel', 'date_create'],
															type: 'object',
														},
													],
												},
											},
											type: 'array',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										paging: {
											$ref: '#/components/schemas/objs_paging',
										},
									},
									required: ['ok', 'items'],
									title: 'stars.list schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from stars.list method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'stars.list error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['stars:read'],
					},
				],
				tags: ['stars'],
			},
		},
		'/stars.remove': {
			post: {
				description: 'Removes a star from an item.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/stars.remove',
				},
				operationId: 'stars_remove',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `stars:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channel: {
										description:
											'Channel to remove star from, or channel where the message to remove star from was posted (used with `timestamp`).',
										type: 'string',
									},
									file: {
										description: 'File to remove star from.',
										type: 'string',
									},
									file_comment: {
										description: 'File comment to remove star from.',
										type: 'string',
									},
									timestamp: {
										description: 'Timestamp of the message to remove star from.',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from stars.remove method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'stars.remove schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from stars.remove method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'bad_timestamp',
												'message_not_found',
												'file_not_found',
												'file_comment_not_found',
												'channel_not_found',
												'no_item_specified',
												'not_starred',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'stars.remove error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['stars:write'],
					},
				],
				tags: ['stars'],
			},
		},
		'/team.accessLogs': {
			get: {
				description: 'Gets the access logs for the current team.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/team.accessLogs',
				},
				operationId: 'team_accessLogs',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'End of time range of logs to include in results (inclusive).',
						in: 'query',
						name: 'before',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'count',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'page',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											logins: [
												{
													count: 1,
													country: 'US',
													date_first: 1422922864,
													date_last: 1422922864,
													ip: '127.0.0.1',
													isp: 'BigCo ISP',
													region: 'CA',
													user_agent:
														'SlackWeb Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.35 Safari/537.36',
													user_id: 'U45678',
													username: 'alice',
												},
												{
													count: 1,
													country: 'US',
													date_first: 1422922493,
													date_last: 1422922493,
													ip: '127.0.0.1',
													isp: 'BigCo ISP',
													region: 'CA',
													user_agent:
														'SlackWeb Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4',
													user_id: 'U12345',
													username: 'white_rabbit',
												},
											],
											ok: true,
											paging: {
												count: 100,
												page: 1,
												pages: 1,
												total: 2,
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from team.accessLogs method',
									properties: {
										logins: {
											items: {
												additionalProperties: false,
												properties: {
													count: {
														type: 'integer',
													},
													country: {
														nullable: true,
														type: 'string',
													},
													date_first: {
														type: 'integer',
													},
													date_last: {
														type: 'integer',
													},
													ip: {
														nullable: true,
														type: 'string',
													},
													isp: {
														nullable: true,
														type: 'string',
													},
													region: {
														nullable: true,
														type: 'string',
													},
													user_agent: {
														type: 'string',
													},
													user_id: {
														$ref: '#/components/schemas/defs_user_id',
													},
													username: {
														type: 'string',
													},
												},
												required: [
													'user_id',
													'username',
													'date_first',
													'date_last',
													'count',
													'ip',
													'user_agent',
													'isp',
													'country',
													'region',
												],
												type: 'object',
											},
											minItems: 1,
											type: 'array',
											uniqueItems: true,
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										paging: {
											$ref: '#/components/schemas/objs_paging',
										},
									},
									required: ['ok', 'logins', 'paging'],
									title: 'team.accessLogs schema',
									type: 'object',
								},
							},
						},
						description: 'This response demonstrates pagination and two access log entries.',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'paid_only',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from team.accessLogs method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'paid_only',
												'over_pagination_limit',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'team.accessLogs error schema',
									type: 'object',
								},
							},
						},
						description: 'A workspace must be on a paid plan to use this method, otherwise the `paid_only` error is thrown:',
					},
				},
				security: [
					{
						slackAuth: ['admin'],
					},
				],
				tags: ['team'],
			},
		},
		'/team.billableInfo': {
			get: {
				description: 'Gets billable users information for the current team.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/team.billableInfo',
				},
				operationId: 'team_billableInfo',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A user to retrieve the billable information for. Defaults to all users.',
						in: 'query',
						name: 'user',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											billable_info: {
												U02UCPE1R: {
													billing_active: true,
												},
												U02UEBSD2: {
													billing_active: true,
												},
												U0632EWRW: {
													billing_active: false,
												},
											},
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin'],
					},
				],
				tags: ['team'],
			},
		},
		'/team.info': {
			get: {
				description: 'Gets information about the current team.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/team.info',
				},
				operationId: 'team_info',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `team:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'Team to get info on, if omitted, will return information about the current team. Will only return team that the authenticated token is allowed to see through external shared channels',
						in: 'query',
						name: 'team',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											team: {
												domain: 'example',
												email_domain: 'example.com',
												enterprise_id: 'E1234A12AB',
												enterprise_name: 'Umbrella Corporation',
												icon: {
													image_102: 'https://...',
													image_132: 'https://...',
													image_34: 'https://...',
													image_44: 'https://...',
													image_68: 'https://...',
													image_88: 'https://...',
													image_default: true,
												},
												id: 'T12345',
												name: 'My Team',
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from team.info method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										team: {
											$ref: '#/components/schemas/objs_team',
										},
									},
									required: ['ok', 'team'],
									title: 'team.info schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from team.info method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'team.info error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['team:read'],
					},
				],
				tags: ['team'],
			},
		},
		'/team.integrationLogs': {
			get: {
				description: 'Gets the integration logs for the current team.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/team.integrationLogs',
				},
				operationId: 'team_integrationLogs',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `admin`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Filter logs to this Slack app. Defaults to all logs.',
						in: 'query',
						name: 'app_id',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Filter logs with this change type. Defaults to all logs.',
						in: 'query',
						name: 'change_type',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'count',
						schema: {
							type: 'string',
						},
					},
					{
						in: 'query',
						name: 'page',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Filter logs to this service. Defaults to all logs.',
						in: 'query',
						name: 'service_id',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Filter logs generated by this user’s actions. Defaults to all logs.',
						in: 'query',
						name: 'user',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from team.integrationLogs method',
									properties: {
										logs: {
											items: {
												additionalProperties: false,
												properties: {
													admin_app_id: {
														$ref: '#/components/schemas/defs_app_id',
													},
													app_id: {
														$ref: '#/components/schemas/defs_app_id',
													},
													app_type: {
														type: 'string',
													},
													change_type: {
														type: 'string',
													},
													channel: {
														$ref: '#/components/schemas/defs_channel',
													},
													date: {
														type: 'string',
													},
													scope: {
														type: 'string',
													},
													service_id: {
														type: 'string',
													},
													service_type: {
														type: 'string',
													},
													user_id: {
														$ref: '#/components/schemas/defs_user_id',
													},
													user_name: {
														type: 'string',
													},
												},
												required: ['user_id', 'user_name', 'date', 'change_type', 'app_type', 'app_id', 'scope'],
												type: 'object',
											},
											minItems: 1,
											type: 'array',
											uniqueItems: true,
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										paging: {
											$ref: '#/components/schemas/objs_paging',
										},
									},
									required: ['ok', 'logs', 'paging'],
									title: 'team.integrationLogs schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from team.integrationLogs method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'team.integrationLogs error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['admin'],
					},
				],
				tags: ['team'],
			},
		},
		'/team.profile.get': {
			get: {
				description: "Retrieve a team's profile.",
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/team.profile.get',
				},
				operationId: 'team_profile_get',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `users.profile:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Filter by visibility.',
						in: 'query',
						name: 'visibility',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											profile: {
												fields: [
													{
														hint: 'Enter the extension to reach your desk',
														id: 'Xf06054AAA',
														is_hidden: 1,
														label: 'Phone extension',
														options: null,
														ordering: 0,
														possible_values: null,
														type: 'text',
													},
													{
														hint: 'When you were born',
														id: 'Xf06054BBB',
														label: 'Date of birth',
														options: null,
														ordering: 1,
														possible_values: null,
														type: 'date',
													},
													{
														hint: 'Enter a link to your Facebook profile',
														id: 'Xf06054CCC',
														label: 'Facebook',
														options: null,
														ordering: 2,
														possible_values: null,
														type: 'link',
													},
													{
														hint: 'Hogwarts, obviously',
														id: 'Xf06054DDD',
														label: 'House',
														options: null,
														ordering: 3,
														possible_values: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'],
														type: 'options_list',
													},
													{
														hint: 'Office location (LDAP)',
														id: 'Xf06054EEE',
														label: 'Location',
														options: {
															is_protected: 1,
														},
														ordering: 4,
														possible_values: null,
														type: 'text',
													},
													{
														hint: 'The boss',
														id: 'Xf06054FFF',
														label: 'Manager',
														options: null,
														ordering: 5,
														possible_values: null,
														type: 'user',
													},
												],
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from team.profile.get method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										profile: {
											additionalProperties: false,
											properties: {
												fields: {
													items: {
														$ref: '#/components/schemas/objs_team_profile_field',
													},
													type: 'array',
													uniqueItems: true,
												},
											},
											required: ['fields'],
											type: 'object',
										},
									},
									required: ['ok', 'profile'],
									title: 'team.profile.get success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from team.profile.get method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_typ',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeou',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'team.profile.get error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['users.profile:read'],
					},
				],
				tags: ['team.profile', 'team'],
			},
		},
		'/usergroups.create': {
			post: {
				description: 'Create a User Group',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/usergroups.create',
				},
				operationId: 'usergroups_create',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `usergroups:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channels: {
										description: 'A comma separated string of encoded channel IDs for which the User Group uses as a default.',
										type: 'string',
									},
									description: {
										description: 'A short description of the User Group.',
										type: 'string',
									},
									handle: {
										description: 'A mention handle. Must be unique among channels, users and User Groups.',
										type: 'string',
									},
									include_count: {
										description: 'Include the number of users in each User Group.',
										type: 'boolean',
									},
									name: {
										description: 'A name for the User Group. Must be unique among User Groups.',
										type: 'string',
									},
								},
								required: ['name'],
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from usergroups.create method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										usergroup: {
											$ref: '#/components/schemas/objs_subteam',
										},
									},
									required: ['ok', 'usergroup'],
									title: 'usergroups.create schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from usergroups.create method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'permission_denied',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'user_is_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'usergroups.create error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['usergroups:write'],
					},
				],
				tags: ['usergroups'],
			},
		},
		'/usergroups.disable': {
			post: {
				description: 'Disable an existing User Group',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/usergroups.disable',
				},
				operationId: 'usergroups_disable',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `usergroups:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									include_count: {
										description: 'Include the number of users in the User Group.',
										type: 'boolean',
									},
									usergroup: {
										description: 'The encoded ID of the User Group to disable.',
										type: 'string',
									},
								},
								required: ['usergroup'],
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from usergroups.disable method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										usergroup: {
											$ref: '#/components/schemas/objs_subteam',
										},
									},
									required: ['ok', 'usergroup'],
									title: 'usergroups.disable schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from usergroups.disable method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'permission_denied',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'user_is_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'usergroups.disable error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['usergroups:write'],
					},
				],
				tags: ['usergroups'],
			},
		},
		'/usergroups.enable': {
			post: {
				description: 'Enable a User Group',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/usergroups.enable',
				},
				operationId: 'usergroups_enable',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `usergroups:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									include_count: {
										description: 'Include the number of users in the User Group.',
										type: 'boolean',
									},
									usergroup: {
										description: 'The encoded ID of the User Group to enable.',
										type: 'string',
									},
								},
								required: ['usergroup'],
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from usergroups.enable method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										usergroup: {
											$ref: '#/components/schemas/objs_subteam',
										},
									},
									required: ['ok', 'usergroup'],
									title: 'usergroups.enable schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from usergroups.enable method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'user_is_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_require',
												'fatal_error',
												'missing_charset',
												'superfluous_charset',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'usergroups.enable error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['usergroups:write'],
					},
				],
				tags: ['usergroups'],
			},
		},
		'/usergroups.list': {
			get: {
				description: 'List all User Groups for a team',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/usergroups.list',
				},
				operationId: 'usergroups_list',
				parameters: [
					{
						description: 'Include the list of users for each User Group.',
						in: 'query',
						name: 'include_users',
						schema: {
							type: 'boolean',
						},
					},
					{
						description: 'Authentication token. Requires scope: `usergroups:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Include the number of users in each User Group.',
						in: 'query',
						name: 'include_count',
						schema: {
							type: 'boolean',
						},
					},
					{
						description: 'Include disabled User Groups.',
						in: 'query',
						name: 'include_disabled',
						schema: {
							type: 'boolean',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											usergroups: [
												{
													auto_type: 'admin',
													created_by: 'USLACKBOT',
													date_create: 1446598059,
													date_delete: 0,
													date_update: 1446670362,
													deleted_by: null,
													description: 'A group of all Administrators on your team.',
													handle: 'admins',
													id: 'S0614TZR7',
													is_external: false,
													is_usergroup: true,
													name: 'Team Admins',
													prefs: {
														channels: [],
														groups: [],
													},
													team_id: 'T060RNRCH',
													updated_by: 'U060RNRCZ',
													user_count: '2',
												},
												{
													auto_type: 'owner',
													created_by: 'USLACKBOT',
													date_create: 1446678371,
													date_delete: 0,
													date_update: 1446678371,
													deleted_by: null,
													description: 'A group of all Owners on your team.',
													handle: 'owners',
													id: 'S06158AV7',
													is_external: false,
													is_usergroup: true,
													name: 'Team Owners',
													prefs: {
														channels: [],
														groups: [],
													},
													team_id: 'T060RNRCH',
													updated_by: 'USLACKBOT',
													user_count: '1',
												},
												{
													auto_type: null,
													created_by: 'U060RNRCZ',
													date_create: 1446746793,
													date_delete: 1446748865,
													date_update: 1446747767,
													deleted_by: null,
													description: 'Marketing gurus, PR experts and product advocates.',
													handle: 'marketing-team',
													id: 'S0615G0KT',
													is_external: false,
													is_usergroup: true,
													name: 'Marketing Team',
													prefs: {
														channels: [],
														groups: [],
													},
													team_id: 'T060RNRCH',
													updated_by: 'U060RNRCZ',
													user_count: '0',
												},
											],
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from usergroups.list method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										usergroups: {
											items: {
												$ref: '#/components/schemas/objs_subteam',
											},
											type: 'array',
										},
									},
									required: ['ok', 'usergroups'],
									title: 'usergroups.list schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from usergroups.list method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'user_is_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_require',
												'fatal_error',
												'missing_charset',
												'superfluous_charset',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'usergroups.list error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['usergroups:read'],
					},
				],
				tags: ['usergroups'],
			},
		},
		'/usergroups.update': {
			post: {
				description: 'Update an existing User Group',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/usergroups.update',
				},
				operationId: 'usergroups_update',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `usergroups:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									channels: {
										description: 'A comma separated string of encoded channel IDs for which the User Group uses as a default.',
										type: 'string',
									},
									description: {
										description: 'A short description of the User Group.',
										type: 'string',
									},
									handle: {
										description: 'A mention handle. Must be unique among channels, users and User Groups.',
										type: 'string',
									},
									include_count: {
										description: 'Include the number of users in the User Group.',
										type: 'boolean',
									},
									name: {
										description: 'A name for the User Group. Must be unique among User Groups.',
										type: 'string',
									},
									usergroup: {
										description: 'The encoded ID of the User Group to update.',
										type: 'string',
									},
								},
								required: ['usergroup'],
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											usergroup: {
												auto_type: null,
												created_by: 'U060R4BJ4',
												date_create: 1447096577,
												date_delete: 0,
												date_update: 1447102109,
												deleted_by: null,
												description: 'Marketing gurus, PR experts and product advocates.',
												handle: 'marketing-team',
												id: 'S0616NG6M',
												is_external: false,
												is_usergroup: true,
												name: 'Marketing Team',
												prefs: {
													channels: [],
													groups: [],
												},
												team_id: 'T060R4BHN',
												updated_by: 'U060R4BJ4',
												user_count: 1,
												users: ['U060R4BJ4', 'U060RNRCZ'],
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from usergroups.update method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										usergroup: {
											$ref: '#/components/schemas/objs_subteam',
										},
									},
									required: ['ok', 'usergroup'],
									title: 'usergroups.update schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from usergroups.update method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'permission_denied',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'user_is_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_require',
												'fatal_error',
												'missing_charset',
												'superfluous_charset',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'usergroups.update error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['usergroups:write'],
					},
				],
				tags: ['usergroups'],
			},
		},
		'/usergroups.users.list': {
			get: {
				description: 'List all users in a User Group',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/usergroups.users.list',
				},
				operationId: 'usergroups_users_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `usergroups:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Allow results that involve disabled User Groups.',
						in: 'query',
						name: 'include_disabled',
						schema: {
							type: 'boolean',
						},
					},
					{
						description: 'The encoded ID of the User Group to update.',
						in: 'query',
						name: 'usergroup',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											users: ['U060R4BJ4', 'W123A4BC5'],
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from usergroups.users.list method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										users: {
											items: {
												$ref: '#/components/schemas/defs_user_id',
											},
											type: 'array',
										},
									},
									required: ['ok', 'users'],
									title: 'usergroups.users.list schema',
									type: 'object',
								},
							},
						},
						description: 'Standard success response when used with a user token',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from usergroups.users.list method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'user_is_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_require',
												'fatal_error',
												'missing_charset',
												'superfluous_charset',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'usergroups.users.list error schema',
									type: 'object',
								},
							},
						},
						description: 'Standard failure response when used with an invalid token',
					},
				},
				security: [
					{
						slackAuth: ['usergroups:read'],
					},
				],
				tags: ['usergroups.users', 'usergroups'],
			},
		},
		'/usergroups.users.update': {
			post: {
				description: 'Update the list of users for a User Group',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/usergroups.users.update',
				},
				operationId: 'usergroups_users_update',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `usergroups:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									include_count: {
										description: 'Include the number of users in the User Group.',
										type: 'boolean',
									},
									usergroup: {
										description: 'The encoded ID of the User Group to update.',
										type: 'string',
									},
									users: {
										description: 'A comma separated string of encoded user IDs that represent the entire list of users for the User Group.',
										type: 'string',
									},
								},
								required: ['usergroup', 'users'],
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											usergroup: {
												auto_type: null,
												created_by: 'U060R4BJ4',
												date_create: 1447096577,
												date_delete: 0,
												date_update: 1447102109,
												deleted_by: null,
												description: 'Marketing gurus, PR experts and product advocates.',
												handle: 'marketing-team',
												id: 'S0616NG6M',
												is_external: false,
												is_usergroup: true,
												name: 'Marketing Team',
												prefs: {
													channels: [],
													groups: [],
												},
												team_id: 'T060R4BHN',
												updated_by: 'U060R4BJ4',
												user_count: 1,
												users: ['U060R4BJ4', 'U060RNRCZ'],
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from usergroups.users.update method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										usergroup: {
											$ref: '#/components/schemas/objs_subteam',
										},
									},
									required: ['ok', 'usergroup'],
									title: 'usergroups.users.update schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from usergroups.users.update method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'permission_denied',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'user_is_restricted',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_require',
												'fatal_error',
												'missing_charset',
												'superfluous_charset',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'usergroups.users.update error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['usergroups:write'],
					},
				],
				tags: ['usergroups.users', 'usergroups'],
			},
		},
		'/users.conversations': {
			get: {
				description: 'List conversations the calling user may access.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/users.conversations',
				},
				operationId: 'users_conversations',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `conversations:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							"Browse conversations by a specific user ID's membership. Non-public channels are restricted to those where the calling user shares membership.",
						in: 'query',
						name: 'user',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im`',
						in: 'query',
						name: 'types',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Set to `true` to exclude archived channels from the list',
						in: 'query',
						name: 'exclude_archived',
						schema: {
							type: 'boolean',
						},
					},
					{
						description:
							"The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000.",
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description:
							'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											channels: [
												{
													created: 1449252889,
													creator: 'U012A3CDE',
													id: 'C012AB3CD',
													is_archived: false,
													is_channel: true,
													is_ext_shared: false,
													is_general: true,
													is_group: false,
													is_im: false,
													is_mpim: false,
													is_org_shared: false,
													is_pending_ext_shared: false,
													is_private: false,
													is_shared: false,
													name: 'general',
													name_normalized: 'general',
													pending_shared: [],
													previous_names: [],
													purpose: {
														creator: '',
														last_set: 0,
														value: 'This channel is for team-wide communication and announcements. All team members are in this channel.',
													},
													topic: {
														creator: '',
														last_set: 0,
														value: 'Company-wide announcements and work-based matters',
													},
													unlinked: 0,
												},
												{
													created: 1449252889,
													creator: 'U061F7AUR',
													id: 'C061EG9T2',
													is_archived: false,
													is_channel: true,
													is_ext_shared: false,
													is_general: false,
													is_group: false,
													is_im: false,
													is_mpim: false,
													is_org_shared: false,
													is_pending_ext_shared: false,
													is_private: false,
													is_shared: false,
													name: 'random',
													name_normalized: 'random',
													pending_shared: [],
													previous_names: [],
													purpose: {
														creator: '',
														last_set: 0,
														value:
															"A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels.",
													},
													topic: {
														creator: '',
														last_set: 0,
														value: 'Non-work banter and water cooler conversation',
													},
													unlinked: 0,
												},
											],
											ok: true,
											response_metadata: {
												next_cursor: 'dGVhbTpDMDYxRkE1UEI=',
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'Schema for successful response from users.conversations method. Returned conversation objects do not include `num_members` or `is_member`',
									properties: {
										channels: {
											items: {
												$ref: '#/components/schemas/objs_conversation',
											},
											type: 'array',
											uniqueItems: true,
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										response_metadata: {
											additionalProperties: false,
											properties: {
												next_cursor: {
													type: 'string',
												},
											},
											required: ['next_cursor'],
											type: 'object',
										},
									},
									required: ['ok', 'channels'],
									title: 'users.conversations success schema',
									type: 'object',
								},
							},
						},
						description:
							'Typical success response with only public channels. Note how `num_members` and `is_member` are not returned like typical `conversations` objects.',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from users.conversations method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'method_not_supported_for_channel_type',
												'missing_scope',
												'invalid_types',
												'invalid_cursor',
												'invalid_limit',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'users.conversations error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['channels:read', 'groups:read', 'im:read', 'mpim:read'],
					},
				],
				tags: ['users'],
			},
		},
		'/users.deletePhoto': {
			post: {
				description: 'Delete the user profile photo',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/users.deletePhoto',
				},
				operationId: 'users_deletePhoto',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									token: {
										description: 'Authentication token. Requires scope: `users.profile:write`',
										type: 'string',
									},
								},
								required: ['token'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from users.deletePhoto method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'users.deletePhoto schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from users.deletePhoto method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'users.deletePhoto error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['users.profile:write'],
					},
				],
				tags: ['users'],
			},
		},
		'/users.getPresence': {
			get: {
				description: 'Gets user presence information.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/users.getPresence',
				},
				operationId: 'users_getPresence',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `users:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'User to get presence info on. Defaults to the authed user.',
						in: 'query',
						name: 'user',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											presence: 'active',
										},
									},
								},
								schema: {
									additionalProperties: true,
									description: 'Generated from users.getPresence with shasum e7251aec575d8863f9e0eb38663ae9dc26655f65',
									properties: {
										auto_away: {
											type: 'boolean',
										},
										connection_count: {
											type: 'integer',
										},
										last_activity: {
											type: 'integer',
										},
										manual_away: {
											type: 'boolean',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										online: {
											type: 'boolean',
										},
										presence: {
											type: 'string',
										},
									},
									required: ['ok', 'presence'],
									title: 'API method: users.getPresence',
									type: 'object',
								},
							},
						},
						description:
							'When requesting information for a different user, this method just returns the current presence (either `active` or `away`).',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: {
										type: 'object',
									},
									description: 'Schema for error response users.getPresence method',
									properties: {
										error: {
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'users.counts error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['users:read'],
					},
				],
				tags: ['users'],
			},
		},
		'/users.identity': {
			get: {
				description: "Get a user's identity.",
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/users.identity',
				},
				operationId: 'users_identity',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `identity.basic`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											team: {
												id: 'T0G9PQBBK',
											},
											user: {
												id: 'U0G9QF9C6',
												name: 'Sonny Whether',
											},
										},
									},
								},
								schema: {
									description: 'Schema for successful response from users.identity method',
									items: {
										anyOf: [
											{
												additionalProperties: false,
												description: "Schema for 'identity.basic' scope",
												properties: {
													ok: {
														$ref: '#/components/schemas/defs_ok_true',
													},
													team: {
														additionalProperties: false,
														properties: {
															id: {
																$ref: '#/components/schemas/defs_team',
															},
														},
														required: ['id'],
														type: 'object',
													},
													user: {
														additionalProperties: false,
														properties: {
															id: {
																$ref: '#/components/schemas/defs_user_id',
															},
															name: {
																type: 'string',
															},
														},
														required: ['name', 'id'],
														type: 'object',
													},
												},
												required: ['ok', 'user', 'team'],
												type: 'object',
											},
											{
												additionalProperties: false,
												description: "Schema for 'identity.basic,identity.email' scopes",
												properties: {
													ok: {
														$ref: '#/components/schemas/defs_ok_true',
													},
													team: {
														additionalProperties: false,
														properties: {
															id: {
																$ref: '#/components/schemas/defs_team',
															},
														},
														required: ['id'],
														type: 'object',
													},
													user: {
														additionalProperties: false,
														properties: {
															email: {
																format: 'email',
																type: 'string',
															},
															id: {
																$ref: '#/components/schemas/defs_user_id',
															},
															name: {
																type: 'string',
															},
														},
														required: ['name', 'id', 'email'],
														type: 'object',
													},
												},
												required: ['ok', 'user', 'team'],
												type: 'object',
											},
											{
												additionalProperties: false,
												description: "Schema for 'identity.basic,identity.avatar' scopes",
												properties: {
													ok: {
														$ref: '#/components/schemas/defs_ok_true',
													},
													team: {
														additionalProperties: false,
														properties: {
															id: {
																$ref: '#/components/schemas/defs_team',
															},
														},
														required: ['id'],
														type: 'object',
													},
													user: {
														additionalProperties: false,
														properties: {
															id: {
																$ref: '#/components/schemas/defs_user_id',
															},
															image_192: {
																format: 'url',
																type: 'string',
															},
															image_24: {
																format: 'url',
																type: 'string',
															},
															image_32: {
																format: 'url',
																type: 'string',
															},
															image_48: {
																format: 'url',
																type: 'string',
															},
															image_512: {
																format: 'url',
																type: 'string',
															},
															image_72: {
																format: 'url',
																type: 'string',
															},
															name: {
																type: 'string',
															},
														},
														required: ['name', 'id', 'image_24', 'image_32', 'image_48', 'image_72', 'image_192', 'image_512'],
														type: 'object',
													},
												},
												required: ['ok', 'user', 'team'],
												type: 'object',
											},
											{
												additionalProperties: false,
												description: "Schema for 'identity.basic,identity.team' scopes",
												properties: {
													ok: {
														$ref: '#/components/schemas/defs_ok_true',
													},
													team: {
														additionalProperties: false,
														properties: {
															domain: {
																type: 'string',
															},
															id: {
																$ref: '#/components/schemas/defs_team',
															},
															image_102: {
																format: 'url',
																type: 'string',
															},
															image_132: {
																format: 'url',
																type: 'string',
															},
															image_230: {
																format: 'url',
																type: 'string',
															},
															image_34: {
																format: 'url',
																type: 'string',
															},
															image_44: {
																format: 'url',
																type: 'string',
															},
															image_68: {
																format: 'url',
																type: 'string',
															},
															image_88: {
																format: 'url',
																type: 'string',
															},
															image_default: {
																type: 'boolean',
															},
															name: {
																type: 'string',
															},
														},
														required: [
															'id',
															'name',
															'domain',
															'image_34',
															'image_44',
															'image_68',
															'image_88',
															'image_102',
															'image_132',
															'image_230',
															'image_default',
														],
														type: 'object',
													},
													user: {
														additionalProperties: false,
														properties: {
															id: {
																$ref: '#/components/schemas/defs_user_id',
															},
															name: {
																type: 'string',
															},
														},
														required: ['name', 'id'],
														type: 'object',
													},
												},
												required: ['ok', 'user', 'team'],
												type: 'object',
											},
										],
									},
									title: 'users.identity schema',
								},
							},
						},
						description: 'You will receive at a minimum the following information:',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'account_inactive',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from users.identity method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'users.identity error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['identity.basic'],
					},
				],
				tags: ['users'],
			},
		},
		'/users.info': {
			get: {
				description: 'Gets information about a user.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/users.info',
				},
				operationId: 'users_info',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `users:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Set this to `true` to receive the locale for this user. Defaults to `false`',
						in: 'query',
						name: 'include_locale',
						schema: {
							type: 'boolean',
						},
					},
					{
						description: 'User to get info on',
						in: 'query',
						name: 'user',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											user: {
												color: '9f69e7',
												deleted: false,
												has_2fa: false,
												id: 'W012A3CDE',
												is_admin: true,
												is_app_user: false,
												is_bot: false,
												is_owner: false,
												is_primary_owner: false,
												is_restricted: false,
												is_ultra_restricted: false,
												name: 'spengler',
												profile: {
													avatar_hash: 'ge3b51ca72de',
													display_name: 'spengler',
													display_name_normalized: 'spengler',
													email: 'spengler@ghostbusters.example.com',
													image_192: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
													image_24: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
													image_32: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
													image_48: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
													image_512: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
													image_72: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
													image_original: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
													real_name: 'Egon Spengler',
													real_name_normalized: 'Egon Spengler',
													status_emoji: ':books:',
													status_text: 'Print is dead',
													team: 'T012AB3C4',
												},
												real_name: 'Egon Spengler',
												team_id: 'T012AB3C4',
												tz: 'America/Los_Angeles',
												tz_label: 'Pacific Daylight Time',
												tz_offset: -25200,
												updated: 1502138686,
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description: 'Schema for successful response from users.info method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										user: {
											$ref: '#/components/schemas/objs_user',
										},
									},
									required: ['ok', 'user'],
									title: 'users.info success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'user_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from users.info method',
									properties: {
										callstack: {
											type: 'string',
										},
										error: {
											enum: [
												'user_not_found',
												'user_not_visible',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'users.info error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['users:read'],
					},
				],
				tags: ['users'],
			},
		},
		'/users.list': {
			get: {
				description: 'Lists all users in a Slack team.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/users.list',
				},
				operationId: 'users_list',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `users:read`',
						in: 'query',
						name: 'token',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							"The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. Providing no `limit` value will result in Slack attempting to deliver you the entire result set. If the collection is too large you may experience `limit_required` or HTTP 500 errors.",
						in: 'query',
						name: 'limit',
						schema: {
							type: 'integer',
						},
					},
					{
						description:
							'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
						in: 'query',
						name: 'cursor',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Set this to `true` to receive the locale for users. Defaults to `false`',
						in: 'query',
						name: 'include_locale',
						schema: {
							type: 'boolean',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											cache_ts: 1498777272,
											members: [
												{
													color: '9f69e7',
													deleted: false,
													has_2fa: false,
													id: 'W012A3CDE',
													is_admin: true,
													is_app_user: false,
													is_bot: false,
													is_owner: false,
													is_primary_owner: false,
													is_restricted: false,
													is_ultra_restricted: false,
													name: 'spengler',
													profile: {
														avatar_hash: 'ge3b51ca72de',
														display_name: 'spengler',
														display_name_normalized: 'spengler',
														email: 'spengler@ghostbusters.example.com',
														image_192: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
														image_24: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
														image_32: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
														image_48: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
														image_512: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
														image_72: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
														real_name: 'Egon Spengler',
														real_name_normalized: 'Egon Spengler',
														status_emoji: ':books:',
														status_text: 'Print is dead',
														team: 'T012AB3C4',
													},
													real_name: 'spengler',
													team_id: 'T012AB3C4',
													tz: 'America/Los_Angeles',
													tz_label: 'Pacific Daylight Time',
													tz_offset: -25200,
													updated: 1502138686,
												},
												{
													color: '9f69e7',
													deleted: false,
													has_2fa: false,
													id: 'W07QCRPA4',
													is_admin: true,
													is_bot: false,
													is_owner: false,
													is_primary_owner: false,
													is_restricted: false,
													is_ultra_restricted: false,
													name: 'glinda',
													profile: {
														avatar_hash: '8fbdd10b41c6',
														display_name: 'Glinda the Fairly Good',
														display_name_normalized: 'Glinda the Fairly Good',
														email: 'glenda@south.oz.coven',
														first_name: 'Glinda',
														image_1024: 'https://a.slack-edge.com...png',
														image_192: 'https://a.slack-edge.com...png',
														image_24: 'https://a.slack-edge.com...png',
														image_32: 'https://a.slack-edge.com...png',
														image_48: 'https://a.slack-edge.com...png',
														image_512: 'https://a.slack-edge.com...png',
														image_72: 'https://a.slack-edge.com...png',
														image_original: 'https://a.slack-edge.com...png',
														last_name: 'Southgood',
														phone: '',
														real_name: 'Glinda Southgood',
														real_name_normalized: 'Glinda Southgood',
														skype: '',
														title: 'Glinda the Good',
													},
													real_name: 'Glinda Southgood',
													team_id: 'T0G9PQBBK',
													tz: 'America/Los_Angeles',
													tz_label: 'Pacific Daylight Time',
													tz_offset: -25200,
													updated: 1480527098,
												},
											],
											ok: true,
											response_metadata: {
												next_cursor: 'dXNlcjpVMEc5V0ZYTlo=',
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from users.list method',
									properties: {
										cache_ts: {
											type: 'integer',
										},
										members: {
											items: {
												$ref: '#/components/schemas/objs_user',
											},
											minItems: 1,
											type: 'array',
											uniqueItems: true,
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										response_metadata: {
											$ref: '#/components/schemas/objs_response_metadata',
										},
									},
									required: ['ok', 'members', 'cache_ts'],
									title: 'users.list schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_cursor',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from users.list method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'limit_required',
												'invalid_cursor',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'users.list error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['users:read'],
					},
				],
				tags: ['users'],
			},
		},
		'/users.lookupByEmail': {
			get: {
				description: 'Find a user with an email address.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/users.lookupByEmail',
				},
				operationId: 'users_lookupByEmail',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `users:read.email`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'An email address belonging to a user in the workspace',
						in: 'query',
						name: 'email',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											user: {
												color: '9f69e7',
												deleted: false,
												has_2fa: false,
												id: 'W012A3CDE',
												is_admin: true,
												is_app_user: false,
												is_bot: false,
												is_owner: false,
												is_primary_owner: false,
												is_restricted: false,
												is_ultra_restricted: false,
												name: 'spengler',
												profile: {
													avatar_hash: 'ge3b51ca72de',
													display_name: 'spengler',
													display_name_normalized: 'spengler',
													email: 'spengler@ghostbusters.example.com',
													image_192: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
													image_24: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
													image_32: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
													image_48: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
													image_512: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
													image_72: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
													real_name: 'Egon Spengler',
													real_name_normalized: 'Egon Spengler',
													status_emoji: ':books:',
													status_text: 'Print is dead',
													team: 'T012AB3C4',
												},
												real_name: 'Egon Spengler',
												team_id: 'T012AB3C4',
												tz: 'America/Los_Angeles',
												tz_label: 'Pacific Daylight Time',
												tz_offset: -25200,
												updated: 1502138686,
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description: 'Schema for successful response from users.lookupByEmail method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										user: {
											$ref: '#/components/schemas/objs_user',
										},
									},
									required: ['ok', 'user'],
									title: 'users.lookupByEmail success schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'users_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from users.lookupByEmail method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'users_not_found',
												'enterprise_is_restricted',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'no_permission',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'users.lookupByEmail error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['users:read.email'],
					},
				],
				tags: ['users'],
			},
		},
		'/users.profile.get': {
			get: {
				description: "Retrieves a user's profile information.",
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/users.profile.get',
				},
				operationId: 'users_profile_get',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `users.profile:read`',
						in: 'query',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Include labels for each ID in custom profile fields',
						in: 'query',
						name: 'include_labels',
						schema: {
							type: 'boolean',
						},
					},
					{
						description: 'User to retrieve profile info for',
						in: 'query',
						name: 'user',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											profile: {
												avatar_hash: 'ge3b51ca72de',
												display_name: 'spengler',
												display_name_normalized: 'spengler',
												email: 'spengler@ghostbusters.example.com',
												image_192: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
												image_24: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
												image_32: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
												image_48: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
												image_512: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
												image_72: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
												image_original: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
												real_name: 'Egon Spengler',
												real_name_normalized: 'Egon Spengler',
												status_emoji: ':books:',
												status_expiration: 0,
												status_text: 'Print is dead',
												team: 'T012AB3C4',
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from users.profile.get method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										profile: {
											$ref: '#/components/schemas/objs_user_profile',
										},
									},
									required: ['ok', 'profile'],
									title: 'users.profile.get schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'user_not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from users.profile.get method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'user_not_found',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'users.profile.get error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['users.profile:read'],
					},
				],
				tags: ['users.profile', 'users'],
			},
		},
		'/users.profile.set': {
			post: {
				description: 'Set the profile information for a user.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/users.profile.set',
				},
				operationId: 'users_profile_set',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `users.profile:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									name: {
										description: 'Name of a single key to set. Usable only if `profile` is not passed.',
										type: 'string',
									},
									profile: {
										description:
											'Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters.',
										type: 'string',
									},
									user: {
										description: 'ID of user to change. This argument may only be specified by team admins on paid teams.',
										type: 'string',
									},
									value: {
										description: 'Value to set a single key to. Usable only if `profile` is not passed.',
										type: 'string',
									},
								},
								type: 'object',
							},
						},
					},
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											profile: {
												avatar_hash: 'ge3b51ca72de',
												display_name: 'spengler',
												display_name_normalized: 'spengler',
												email: 'spengler@ghostbusters.example.com',
												image_192: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
												image_24: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
												image_32: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
												image_48: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
												image_512: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
												image_72: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
												real_name: 'Egon Spengler',
												real_name_normalized: 'Egon Spengler',
												status_emoji: ':books:',
												status_expiration: 0,
												status_text: 'Print is dead',
												team: 'T012AB3C4',
											},
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from users.profile.set method',
									properties: {
										email_pending: {
											format: 'email',
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										profile: {
											$ref: '#/components/schemas/objs_user_profile',
										},
										username: {
											type: 'string',
										},
									},
									required: ['ok', 'username', 'profile'],
									title: 'users.profile.set schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_profile',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from users.profile.set method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'reserved_name',
												'invalid_profile',
												'profile_set_failed',
												'not_admin',
												'not_app_admin',
												'cannot_update_admin_user',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'users.profile.set error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['users.profile:write'],
					},
				],
				tags: ['users.profile', 'users'],
			},
		},
		'/users.setActive': {
			post: {
				description: 'Marked a user as active. Deprecated and non-functional.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/users.setActive',
				},
				operationId: 'users_setActive',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `users:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from users.setActive method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'users.setActive schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from users.setActive method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'ekm_access_denied',
												'missing_scope',
												'invalid_arguments',
												'invalid_arg_name',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'request_timeout',
												'fatal_error',
												'internal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'users.setActive error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['users:write'],
					},
				],
				tags: ['users'],
			},
		},
		'/users.setPhoto': {
			post: {
				description: 'Set the user profile photo',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/users.setPhoto',
				},
				operationId: 'users_setPhoto',
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									crop_w: {
										description: 'Width/height of crop box (always square)',
										type: 'string',
									},
									crop_x: {
										description: 'X coordinate of top-left corner of crop box',
										type: 'string',
									},
									crop_y: {
										description: 'Y coordinate of top-left corner of crop box',
										type: 'string',
									},
									image: {
										description: 'File contents via `multipart/form-data`.',
										type: 'string',
									},
									token: {
										description: 'Authentication token. Requires scope: `users.profile:write`',
										type: 'string',
									},
								},
								required: ['token'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from users.setPhoto method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
										profile: {
											additionalProperties: false,
											properties: {
												avatar_hash: {
													pattern: '^[0-9a-f]{12}$',
													type: 'string',
												},
												image_1024: {
													format: 'uri',
													type: 'string',
												},
												image_192: {
													format: 'uri',
													type: 'string',
												},
												image_24: {
													format: 'uri',
													type: 'string',
												},
												image_32: {
													format: 'uri',
													type: 'string',
												},
												image_48: {
													format: 'uri',
													type: 'string',
												},
												image_512: {
													format: 'uri',
													type: 'string',
												},
												image_72: {
													format: 'uri',
													type: 'string',
												},
												image_original: {
													format: 'uri',
													type: 'string',
												},
											},
											required: [
												'image_24',
												'image_32',
												'image_48',
												'image_72',
												'image_192',
												'image_512',
												'image_1024',
												'image_original',
												'avatar_hash',
											],
											type: 'object',
										},
									},
									required: ['ok', 'profile'],
									title: 'users.setPhoto schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from users.setPhoto method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										debug_step: {
											description: 'possibly DEV/QA only',
											type: 'string',
										},
										dims: {
											description: 'possibly DEV/QA only',
											type: 'string',
										},
										error: {
											enum: [
												'bad_image',
												'too_large',
												'too_many_frames',
												'not_found',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'user_is_bot',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
										time_ident: {
											description: 'possibly DEV/QA only',
											type: 'integer',
										},
									},
									required: ['ok', 'error'],
									title: 'users.setPhoto error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['users.profile:write'],
					},
				],
				tags: ['users'],
			},
		},
		'/users.setPresence': {
			post: {
				description: 'Manually sets user presence.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/users.setPresence',
				},
				operationId: 'users_setPresence',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `users:write`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				requestBody: {
					content: {
						'application/x-www-form-urlencoded': {
							schema: {
								properties: {
									presence: {
										description: 'Either `auto` or `away`',
										type: 'string',
									},
								},
								required: ['presence'],
								type: 'object',
							},
						},
					},
					required: true,
				},
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for successful response from users.setPresence method',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'users.setPresence schema',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: false,
									description: 'Schema for error response from users.setPresence method',
									properties: {
										callstack: {
											description: 'Note: PHP callstack is only visible in dev/qa',
											type: 'string',
										},
										error: {
											enum: [
												'invalid_presence',
												'not_authed',
												'invalid_auth',
												'account_inactive',
												'token_revoked',
												'no_permission',
												'org_login_required',
												'invalid_arg_name',
												'invalid_array_arg',
												'invalid_charset',
												'invalid_form_data',
												'invalid_post_type',
												'missing_post_type',
												'team_added_to_org',
												'invalid_json',
												'json_not_object',
												'request_timeout',
												'upgrade_required',
												'fatal_error',
											],
											type: 'string',
										},
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok', 'error'],
									title: 'users.setPresence error schema',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['users:write'],
					},
				],
				tags: ['users'],
			},
		},
		'/views.open': {
			get: {
				description: 'Open a view for a user.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/views.open',
				},
				operationId: 'views_open',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Exchange a trigger to post to the user.',
						in: 'query',
						name: 'trigger_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.',
						in: 'query',
						name: 'view',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											view: {
												app_id: 'AA4928AQ',
												blocks: [
													{
														block_id: 'a_block_id',
														element: {
															action_id: 'an_action_id',
															type: 'plain_text_input',
														},
														label: {
															emoji: true,
															text: 'A simple label',
															type: 'plain_text',
														},
														optional: false,
														type: 'input',
													},
												],
												bot_id: 'BA13894H',
												callback_id: 'identify_your_modals',
												clear_on_close: false,
												external_id: '',
												hash: '156772938.1827394',
												id: 'VMHU10V25',
												notify_on_close: false,
												private_metadata: 'Shh it is a secret',
												root_view_id: 'VMHU10V25',
												state: {
													values: {},
												},
												submit: {
													text: 'Create',
													type: 'plain_text',
												},
												team_id: 'T8N4K1JN',
												title: {
													text: 'Quite a plain modal',
													type: 'plain_text',
												},
												type: 'modal',
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response includes the opened view payload.',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_arguments',
											ok: false,
											response_metadata: {
												messages: ['invalid `trigger_id`'],
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response, before getting to any possible validation errors.',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['views'],
			},
		},
		'/views.publish': {
			get: {
				description: 'Publish a static view for a User.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/views.publish',
				},
				operationId: 'views_publish',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: '`id` of the user you want publish a view to.',
						in: 'query',
						name: 'user_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.',
						in: 'query',
						name: 'view',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A string that represents view state to protect against possible race conditions.',
						in: 'query',
						name: 'hash',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											view: {
												app_id: 'AA4928AQ',
												blocks: [
													{
														block_id: '2WGp9',
														text: {
															text: 'A simple section with some sample sentence.',
															type: 'mrkdwn',
															verbatim: false,
														},
														type: 'section',
													},
												],
												bot_id: 'BA13894H',
												callback_id: 'identify_your_home_tab',
												clear_on_close: false,
												close: null,
												external_id: '',
												hash: '156772938.1827394',
												id: 'VMHU10V25',
												notify_on_close: false,
												previous_view_id: null,
												private_metadata: 'Shh it is a secret',
												root_view_id: 'VMHU10V25',
												state: {
													values: {},
												},
												submit: null,
												team_id: 'T8N4K1JN',
												type: 'home',
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response includes the published view payload.',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_arguments',
											ok: false,
											response_metadata: {
												messages: ['invalid `user_id`'],
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response, before getting to any possible validation errors.',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['views'],
			},
		},
		'/views.push': {
			get: {
				description: 'Push a view onto the stack of a root view.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/views.push',
				},
				operationId: 'views_push',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Exchange a trigger to post to the user.',
						in: 'query',
						name: 'trigger_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.',
						in: 'query',
						name: 'view',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											view: {
												app_id: 'AAD3351BQ',
												blocks: [
													{
														block_id: 'edit_details',
														element: {
															action_id: 'detail_input',
															type: 'plain_text_input',
														},
														label: {
															text: 'Edit details',
															type: 'plain_text',
														},
														type: 'input',
													},
												],
												bot_id: 'BADF7A34H',
												callback_id: 'view_4',
												clear_on_close: true,
												close: {
													emoji: true,
													text: 'Back',
													type: 'plain_text',
												},
												external_id: '',
												hash: '1569362015.55b5e41b',
												id: 'VNM522E2U',
												notify_on_close: false,
												previous_view_id: null,
												private_metadata: '',
												root_view_id: 'VNN729E3U',
												state: {
													values: {},
												},
												submit: {
													emoji: true,
													text: 'Save',
													type: 'plain_text',
												},
												team_id: 'T9M4RL1JM',
												title: {
													emoji: true,
													text: 'Pushed Modal',
													type: 'plain_text',
												},
												type: 'modal',
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response includes the pushed view payload.',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_arguments',
											ok: false,
											response_metadata: {
												messages: ['missing required field: title'],
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response.',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['views'],
			},
		},
		'/views.update': {
			get: {
				description: 'Update an existing view.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/views.update',
				},
				operationId: 'views_update',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `none`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A unique identifier of the view to be updated. Either `view_id` or `external_id` is required.',
						in: 'query',
						name: 'view_id',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'A unique identifier of the view set by the developer. Must be unique for all views on a team. Max length of 255 characters. Either `view_id` or `external_id` is required.',
						in: 'query',
						name: 'external_id',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A [view object](/reference/surfaces/views). This must be a JSON-encoded string.',
						in: 'query',
						name: 'view',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A string that represents view state to protect against possible race conditions.',
						in: 'query',
						name: 'hash',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
											view: {
												app_id: 'AAD3351BQ',
												blocks: [
													{
														accessory: {
															action_id: 'button_4',
															text: {
																text: 'Click me',
																type: 'plain_text',
															},
															type: 'button',
														},
														block_id: 's_block',
														text: {
															emoji: true,
															text: 'I am but an updated modal',
															type: 'plain_text',
														},
														type: 'section',
													},
												],
												bot_id: 'BADF7A34H',
												callback_id: 'view_2',
												clear_on_close: true,
												close: {
													emoji: true,
													text: 'Close',
													type: 'plain_text',
												},
												external_id: '',
												hash: '1569262015.55b5e41b',
												id: 'VNM522E2U',
												notify_on_close: false,
												previous_view_id: null,
												private_metadata: '',
												root_view_id: 'VNN729E3U',
												state: {
													values: {},
												},
												submit: null,
												team_id: 'T9M4RL1JM',
												title: {
													emoji: true,
													text: 'Updated Modal',
													type: 'plain_text',
												},
												type: 'modal',
											},
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response includes the updated view payload.',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'not_found',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response.',
					},
				},
				security: [
					{
						slackAuth: ['none'],
					},
				],
				tags: ['views'],
			},
		},
		'/workflows.stepCompleted': {
			get: {
				description: "Indicate that an app's step in a workflow completed execution.",
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/workflows.stepCompleted',
				},
				operationId: 'workflows_stepCompleted',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `workflow.steps:execute`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Context identifier that maps to the correct workflow step execution.',
						in: 'query',
						name: 'workflow_step_execute_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'Key-value object of outputs from your step. Keys of this object reflect the configured `key` properties of your [`outputs`](/reference/workflows/workflow_step#output) array from your `workflow_step` object.',
						in: 'query',
						name: 'outputs',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['workflow.steps:execute'],
					},
				],
				tags: ['workflows'],
			},
		},
		'/workflows.stepFailed': {
			get: {
				description: "Indicate that an app's step in a workflow failed to execute.",
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/workflows.stepFailed',
				},
				operationId: 'workflows_stepFailed',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `workflow.steps:execute`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'Context identifier that maps to the correct workflow step execution.',
						in: 'query',
						name: 'workflow_step_execute_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A JSON-based object with a `message` property that should contain a human readable error message.',
						in: 'query',
						name: 'error',
						required: true,
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['workflow.steps:execute'],
					},
				],
				tags: ['workflows'],
			},
		},
		'/workflows.updateStep': {
			get: {
				description: 'Update the configuration for a workflow extension step.',
				externalDocs: {
					description: 'API method documentation',
					url: 'https://api.slack.com/methods/workflows.updateStep',
				},
				operationId: 'workflows_updateStep',
				parameters: [
					{
						description: 'Authentication token. Requires scope: `workflow.steps:execute`',
						in: 'header',
						name: 'token',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description: 'A context identifier provided with `view_submission` payloads used to call back to `workflows.updateStep`.',
						in: 'query',
						name: 'workflow_step_edit_id',
						required: true,
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'A JSON key-value map of inputs required from a user during configuration. This is the data your app expects to receive when the workflow step starts. **Please note**: the embedded variable format is set and replaced by the workflow system. You cannot create custom variables that will be replaced at runtime. [Read more about variables in workflow steps here](/workflows/steps#variables).',
						in: 'query',
						name: 'inputs',
						schema: {
							type: 'string',
						},
					},
					{
						description:
							'An JSON array of output objects used during step execution. This is the data your app agrees to provide when your workflow step was executed.',
						in: 'query',
						name: 'outputs',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'An optional field that can be used to override the step name that is shown in the Workflow Builder.',
						in: 'query',
						name: 'step_name',
						schema: {
							type: 'string',
						},
					},
					{
						description: 'An optional field that can be used to override app image that is shown in the Workflow Builder.',
						in: 'query',
						name: 'step_image_url',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											ok: true,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_true',
										},
									},
									required: ['ok'],
									title: 'Default success template',
									type: 'object',
								},
							},
						},
						description: 'Typical success response',
					},
					default: {
						content: {
							'application/json': {
								examples: {
									response: {
										value: {
											error: 'invalid_auth',
											ok: false,
										},
									},
								},
								schema: {
									additionalProperties: true,
									description:
										'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
									properties: {
										ok: {
											$ref: '#/components/schemas/defs_ok_false',
										},
									},
									required: ['ok'],
									title: 'Default error template',
									type: 'object',
								},
							},
						},
						description: 'Typical error response',
					},
				},
				security: [
					{
						slackAuth: ['workflow.steps:execute'],
					},
				],
				tags: ['workflows'],
			},
		},
	},
	components: {
		requestBodies: {
			admin_inviteRequests_approve: {
				content: {
					'application/x-www-form-urlencoded': {
						schema: {
							properties: {
								invite_request_id: {
									description: 'ID of the request to invite.',
									type: 'string',
								},
								team_id: {
									description: 'ID for the workspace where the invite request was made.',
									type: 'string',
								},
							},
							required: ['invite_request_id'],
							type: 'object',
						},
					},
				},
			},
		},
		schemas: {
			blocks: {
				description: "This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace.",
				items: {
					additionalProperties: true,
					properties: {
						type: {
							type: 'string',
						},
					},
					required: ['type'],
					type: 'object',
				},
				title: 'Block Kit blocks',
				type: 'array',
			},
			defs_app_id: {
				pattern: '^A[A-Z0-9]{1,}$',
				title: 'App ID',
				type: 'string',
			},
			defs_bot_id: {
				pattern: '^B[A-Z0-9]{8,}$',
				title: 'Bot User ID',
				type: 'string',
			},
			defs_channel: {
				pattern: '^[CGD][A-Z0-9]{8,}$',
				title: 'Channel-like conversation ID',
				type: 'string',
			},
			defs_channel_id: {
				pattern: '^[C][A-Z0-9]{2,}$',
				title: 'Channel ID',
				type: 'string',
			},
			defs_channel_name: {
				title: 'Name of a channel',
				type: 'string',
			},
			defs_comment_id: {
				pattern: '^Fc[A-Z0-9]{8,}$',
				title: 'File Comment ID',
				type: 'string',
			},
			defs_dm_id: {
				pattern: '^[D][A-Z0-9]{8,}$',
				title: 'Direct Message Channel ID',
				type: 'string',
			},
			defs_enterprise_id: {
				pattern: '^[E][A-Z0-9]{8,}$',
				title: 'Enterprise ID',
				type: 'string',
			},
			defs_enterprise_name: {
				title: 'Name of the enterprise org',
				type: 'string',
			},
			defs_enterprise_user_id: {
				pattern: '^[WU][A-Z0-9]{8,}$',
				title: 'Enterprise User ID',
				type: 'string',
			},
			defs_file_id: {
				pattern: '^[F][A-Z0-9]{8,}$',
				title: 'File ID',
				type: 'string',
			},
			defs_group_id: {
				pattern: '^[G][A-Z0-9]{8,}$',
				title: 'Private Channel ID',
				type: 'string',
			},
			defs_ok_false: {
				enum: [false],
				title: 'default failure response',
				type: 'boolean',
			},
			defs_ok_true: {
				enum: [true],
				title: 'default success response',
				type: 'boolean',
			},
			defs_optional_app_id: {
				pattern: '^(A[A-Z0-9]{1,})?$',
				title: 'App ID or empty string',
				type: 'string',
			},
			defs_pinned_info: {
				additionalProperties: false,
				title: 'Info for a pinned item',
				type: 'object',
			},
			defs_reminder_id: {
				pattern: '^Rm[A-Z0-9]{8,}$',
				title: 'Reminder ID',
				type: 'string',
			},
			defs_subteam_id: {
				pattern: '^S[A-Z0-9]{2,}$',
				title: 'Subteam ID',
				type: 'string',
			},
			defs_team: {
				pattern: '^[T][A-Z0-9]{2,}$',
				title: 'Team ID',
				type: 'string',
			},
			defs_topic_purpose_creator: {
				pattern: '^[UW][A-Z0-9]{8,}$|^$',
				title: 'User ID or empty string, used for topic and purpose creation',
				type: 'string',
			},
			defs_ts: {
				pattern: '^\\d{10}\\.\\d{6}$',
				title: 'Timestamp in format 0123456789.012345',
				type: 'string',
			},
			defs_user_id: {
				pattern: '^[UW][A-Z0-9]{2,}$',
				title: 'User ID',
				type: 'string',
			},
			defs_workspace_id: {
				pattern: '^[TE][A-Z0-9]{8,}$',
				title: 'Team or Enterprise ID',
				type: 'string',
			},
			objs_bot_profile: {
				additionalProperties: false,
				properties: {
					app_id: {
						$ref: '#/components/schemas/defs_app_id',
					},
					deleted: {
						type: 'boolean',
					},
					icons: {
						additionalProperties: false,
						properties: {
							image_36: {
								format: 'uri',
								type: 'string',
							},
							image_48: {
								format: 'uri',
								type: 'string',
							},
							image_72: {
								format: 'uri',
								type: 'string',
							},
						},
						required: ['image_36', 'image_48', 'image_72'],
						type: 'object',
					},
					id: {
						$ref: '#/components/schemas/defs_bot_id',
					},
					name: {
						type: 'string',
					},
					team_id: {
						$ref: '#/components/schemas/defs_team',
					},
					updated: {
						type: 'integer',
					},
				},
				required: ['id', 'deleted', 'name', 'updated', 'app_id', 'icons', 'team_id'],
				title: 'Bot Profile Object',
				type: 'object',
			},
			objs_channel: {
				additionalProperties: false,
				properties: {
					accepted_user: {
						$ref: '#/components/schemas/defs_user_id',
					},
					created: {
						type: 'integer',
					},
					creator: {
						$ref: '#/components/schemas/defs_user_id',
					},
					id: {
						$ref: '#/components/schemas/defs_channel_id',
					},
					is_archived: {
						type: 'boolean',
					},
					is_channel: {
						type: 'boolean',
					},
					is_frozen: {
						type: 'boolean',
					},
					is_general: {
						type: 'boolean',
					},
					is_member: {
						type: 'boolean',
					},
					is_moved: {
						type: 'integer',
					},
					is_mpim: {
						type: 'boolean',
					},
					is_non_threadable: {
						type: 'boolean',
					},
					is_org_shared: {
						type: 'boolean',
					},
					is_pending_ext_shared: {
						type: 'boolean',
					},
					is_private: {
						type: 'boolean',
					},
					is_read_only: {
						type: 'boolean',
					},
					is_shared: {
						type: 'boolean',
					},
					is_thread_only: {
						type: 'boolean',
					},
					last_read: {
						$ref: '#/components/schemas/defs_ts',
					},
					latest: {
						items: {
							anyOf: [
								{
									$ref: '#/components/schemas/objs_message',
								},
								{
									nullable: true,
								},
							],
						},
					},
					members: {
						items: {
							$ref: '#/components/schemas/defs_user_id',
						},
						minItems: 0,
						type: 'array',
						uniqueItems: true,
					},
					name: {
						type: 'string',
					},
					name_normalized: {
						type: 'string',
					},
					num_members: {
						type: 'integer',
					},
					pending_shared: {
						items: {
							$ref: '#/components/schemas/defs_team',
						},
						minItems: 0,
						type: 'array',
						uniqueItems: true,
					},
					previous_names: {
						items: {
							$ref: '#/components/schemas/defs_channel_name',
						},
						minItems: 0,
						type: 'array',
						uniqueItems: true,
					},
					priority: {
						type: 'number',
					},
					purpose: {
						additionalProperties: false,
						properties: {
							creator: {
								$ref: '#/components/schemas/defs_topic_purpose_creator',
							},
							last_set: {
								type: 'integer',
							},
							value: {
								type: 'string',
							},
						},
						required: ['value', 'creator', 'last_set'],
						type: 'object',
					},
					topic: {
						additionalProperties: false,
						properties: {
							creator: {
								$ref: '#/components/schemas/defs_topic_purpose_creator',
							},
							last_set: {
								type: 'integer',
							},
							value: {
								type: 'string',
							},
						},
						required: ['value', 'creator', 'last_set'],
						type: 'object',
					},
					unlinked: {
						title: 'Field to determine whether a channel has ever been shared/disconnected in the past',
						type: 'integer',
					},
					unread_count: {
						type: 'integer',
					},
					unread_count_display: {
						type: 'integer',
					},
				},
				required: [
					'id',
					'name',
					'created',
					'creator',
					'is_channel',
					'is_org_shared',
					'is_private',
					'is_mpim',
					'is_shared',
					'name_normalized',
					'members',
					'topic',
					'purpose',
				],
				title: 'Channel Object',
				type: 'object',
			},
			objs_comment: {
				additionalProperties: false,
				properties: {
					comment: {
						type: 'string',
					},
					created: {
						type: 'integer',
					},
					id: {
						$ref: '#/components/schemas/defs_comment_id',
					},
					is_intro: {
						type: 'boolean',
					},
					is_starred: {
						type: 'boolean',
					},
					num_stars: {
						type: 'integer',
					},
					pinned_info: {
						$ref: '#/components/schemas/defs_pinned_info',
					},
					pinned_to: {
						items: {
							$ref: '#/components/schemas/defs_channel',
						},
						type: 'array',
					},
					reactions: {
						items: {
							$ref: '#/components/schemas/objs_reaction',
						},
						type: 'array',
					},
					timestamp: {
						type: 'integer',
					},
					user: {
						$ref: '#/components/schemas/defs_user_id',
					},
				},
				required: ['id', 'created', 'timestamp', 'user', 'is_intro', 'comment'],
				title: 'File Comment Object',
				type: 'object',
			},
			objs_comments: {
				items: {},
				title: 'file comments object',
				type: 'array',
			},
			objs_conversation: {
				items: {
					anyOf: [
						{
							additionalProperties: false,
							properties: {
								accepted_user: {
									$ref: '#/components/schemas/defs_user_id',
								},
								connected_team_ids: {
									items: {
										$ref: '#/components/schemas/defs_workspace_id',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								conversation_host_id: {
									$ref: '#/components/schemas/defs_workspace_id',
								},
								created: {
									type: 'integer',
								},
								creator: {
									$ref: '#/components/schemas/defs_user_id',
								},
								display_counts: {
									additionalProperties: false,
									properties: {
										display_counts: {
											type: 'integer',
										},
										guest_counts: {
											type: 'integer',
										},
									},
									required: ['display_counts', 'guest_counts'],
									type: 'object',
								},
								enterprise_id: {
									$ref: '#/components/schemas/defs_enterprise_id',
								},
								has_pins: {
									type: 'boolean',
								},
								id: {
									$ref: '#/components/schemas/defs_channel',
								},
								internal_team_ids: {
									items: {
										$ref: '#/components/schemas/defs_team',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								is_archived: {
									type: 'boolean',
								},
								is_channel: {
									type: 'boolean',
								},
								is_ext_shared: {
									type: 'boolean',
								},
								is_frozen: {
									type: 'boolean',
								},
								is_general: {
									type: 'boolean',
								},
								is_global_shared: {
									type: 'boolean',
								},
								is_group: {
									type: 'boolean',
								},
								is_im: {
									type: 'boolean',
								},
								is_member: {
									type: 'boolean',
								},
								is_moved: {
									type: 'integer',
								},
								is_mpim: {
									enum: [false],
									type: 'boolean',
								},
								is_non_threadable: {
									type: 'boolean',
								},
								is_open: {
									type: 'boolean',
								},
								is_org_default: {
									type: 'boolean',
								},
								is_org_mandatory: {
									type: 'boolean',
								},
								is_org_shared: {
									type: 'boolean',
								},
								is_pending_ext_shared: {
									type: 'boolean',
								},
								is_private: {
									type: 'boolean',
								},
								is_read_only: {
									type: 'boolean',
								},
								is_shared: {
									type: 'boolean',
								},
								is_starred: {
									type: 'boolean',
								},
								is_thread_only: {
									type: 'boolean',
								},
								last_read: {
									$ref: '#/components/schemas/defs_ts',
								},
								latest: {
									items: {
										anyOf: [
											{
												$ref: '#/components/schemas/objs_message',
											},
											{
												nullable: true,
											},
										],
									},
								},
								members: {
									items: {
										$ref: '#/components/schemas/defs_user_id',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								name: {
									type: 'string',
								},
								name_normalized: {
									type: 'string',
								},
								num_members: {
									type: 'integer',
								},
								parent_conversation: {
									items: {
										anyOf: [
											{
												$ref: '#/components/schemas/defs_channel',
											},
											{
												nullable: true,
											},
										],
									},
								},
								pending_connected_team_ids: {
									items: {
										$ref: '#/components/schemas/defs_team',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								pending_shared: {
									items: {
										$ref: '#/components/schemas/defs_team',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								pin_count: {
									type: 'integer',
								},
								previous_names: {
									items: {
										$ref: '#/components/schemas/defs_channel_name',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								priority: {
									type: 'number',
								},
								purpose: {
									additionalProperties: false,
									properties: {
										creator: {
											$ref: '#/components/schemas/defs_topic_purpose_creator',
										},
										last_set: {
											type: 'integer',
										},
										value: {
											type: 'string',
										},
									},
									required: ['value', 'creator', 'last_set'],
									type: 'object',
								},
								shared_team_ids: {
									items: {
										$ref: '#/components/schemas/defs_team',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								shares: {
									items: {
										additionalProperties: false,
										properties: {
											accepted_user: {
												$ref: '#/components/schemas/defs_user_id',
											},
											is_active: {
												type: 'boolean',
											},
											team: {
												$ref: '#/components/schemas/objs_team',
											},
											user: {
												$ref: '#/components/schemas/defs_user_id',
											},
										},
										required: ['team', 'user', 'is_active'],
										type: 'object',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								timezone_count: {
									type: 'integer',
								},
								topic: {
									additionalProperties: false,
									properties: {
										creator: {
											$ref: '#/components/schemas/defs_topic_purpose_creator',
										},
										last_set: {
											type: 'integer',
										},
										value: {
											type: 'string',
										},
									},
									required: ['value', 'creator', 'last_set'],
									type: 'object',
								},
								unlinked: {
									title: 'Field to determine whether a channel has ever been shared/disconnected in the past',
									type: 'integer',
								},
								unread_count: {
									type: 'integer',
								},
								unread_count_display: {
									type: 'integer',
								},
								use_case: {
									type: 'string',
								},
								user: {
									$ref: '#/components/schemas/defs_user_id',
								},
								version: {
									type: 'integer',
								},
							},
							required: [
								'id',
								'name',
								'created',
								'creator',
								'is_archived',
								'is_channel',
								'is_general',
								'is_mpim',
								'is_group',
								'is_org_shared',
								'is_im',
								'is_shared',
								'is_private',
								'name_normalized',
								'topic',
								'purpose',
							],
							title: 'Conversation object',
							type: 'object',
						},
						{
							additionalProperties: false,
							properties: {
								accepted_user: {
									$ref: '#/components/schemas/defs_user_id',
								},
								connected_team_ids: {
									items: {
										$ref: '#/components/schemas/defs_team',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								conversation_host_id: {
									$ref: '#/components/schemas/defs_workspace_id',
								},
								created: {
									type: 'integer',
								},
								creator: {
									$ref: '#/components/schemas/defs_user_id',
								},
								display_counts: {
									additionalProperties: false,
									properties: {
										display_counts: {
											type: 'integer',
										},
										guest_counts: {
											type: 'integer',
										},
									},
									required: ['display_counts', 'guest_counts'],
									type: 'object',
								},
								id: {
									$ref: '#/components/schemas/defs_channel',
								},
								internal_team_ids: {
									items: {
										$ref: '#/components/schemas/defs_team',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								is_archived: {
									type: 'boolean',
								},
								is_channel: {
									type: 'boolean',
								},
								is_ext_shared: {
									type: 'boolean',
								},
								is_frozen: {
									type: 'boolean',
								},
								is_general: {
									type: 'boolean',
								},
								is_group: {
									type: 'boolean',
								},
								is_im: {
									type: 'boolean',
								},
								is_member: {
									type: 'boolean',
								},
								is_moved: {
									type: 'integer',
								},
								is_mpim: {
									enum: [true],
									type: 'boolean',
								},
								is_non_threadable: {
									type: 'boolean',
								},
								is_open: {
									type: 'boolean',
								},
								is_org_shared: {
									type: 'boolean',
								},
								is_pending_ext_shared: {
									type: 'boolean',
								},
								is_private: {
									type: 'boolean',
								},
								is_read_only: {
									type: 'boolean',
								},
								is_shared: {
									type: 'boolean',
								},
								is_starred: {
									type: 'boolean',
								},
								is_thread_only: {
									type: 'boolean',
								},
								last_read: {
									$ref: '#/components/schemas/defs_ts',
								},
								latest: {
									items: {
										anyOf: [
											{
												$ref: '#/components/schemas/objs_message',
											},
											{
												nullable: true,
											},
										],
									},
								},
								members: {
									items: {
										$ref: '#/components/schemas/defs_user_id',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								name: {
									type: 'string',
								},
								name_normalized: {
									type: 'string',
								},
								num_members: {
									type: 'integer',
								},
								parent_conversation: {
									items: {
										anyOf: [
											{
												$ref: '#/components/schemas/defs_channel',
											},
											{
												nullable: true,
											},
										],
									},
								},
								pending_connected_team_ids: {
									items: {
										$ref: '#/components/schemas/defs_team',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								pending_shared: {
									items: {
										$ref: '#/components/schemas/defs_team',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								pin_count: {
									type: 'integer',
								},
								previous_names: {
									items: {
										$ref: '#/components/schemas/defs_channel_name',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								priority: {
									type: 'number',
								},
								purpose: {
									additionalProperties: false,
									properties: {
										creator: {
											$ref: '#/components/schemas/defs_topic_purpose_creator',
										},
										last_set: {
											type: 'integer',
										},
										value: {
											type: 'string',
										},
									},
									required: ['value', 'creator', 'last_set'],
									type: 'object',
								},
								shared_team_ids: {
									items: {
										$ref: '#/components/schemas/defs_team',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								shares: {
									items: {
										additionalProperties: false,
										properties: {
											accepted_user: {
												$ref: '#/components/schemas/defs_user_id',
											},
											is_active: {
												type: 'boolean',
											},
											team: {
												$ref: '#/components/schemas/objs_team',
											},
											user: {
												$ref: '#/components/schemas/defs_user_id',
											},
										},
										required: ['team', 'user', 'is_active'],
										type: 'object',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								timezone_count: {
									type: 'integer',
								},
								topic: {
									additionalProperties: false,
									properties: {
										creator: {
											$ref: '#/components/schemas/defs_topic_purpose_creator',
										},
										last_set: {
											type: 'integer',
										},
										value: {
											type: 'string',
										},
									},
									required: ['value', 'creator', 'last_set'],
									type: 'object',
								},
								unlinked: {
									title: 'Field to determine whether a channel has ever been shared/disconnected in the past',
									type: 'integer',
								},
								unread_count: {
									type: 'integer',
								},
								unread_count_display: {
									type: 'integer',
								},
								user: {
									$ref: '#/components/schemas/defs_user_id',
								},
								version: {
									type: 'integer',
								},
							},
							required: [
								'id',
								'name',
								'created',
								'creator',
								'is_archived',
								'is_channel',
								'is_general',
								'is_mpim',
								'is_group',
								'is_org_shared',
								'is_im',
								'is_shared',
								'is_private',
								'name_normalized',
								'topic',
								'purpose',
							],
							title: 'Conversation MPIM Object',
							type: 'object',
						},
						{
							additionalProperties: false,
							properties: {
								created: {
									type: 'integer',
								},
								has_pins: {
									type: 'boolean',
								},
								id: {
									$ref: '#/components/schemas/defs_dm_id',
								},
								is_archived: {
									type: 'boolean',
								},
								is_ext_shared: {
									type: 'boolean',
								},
								is_frozen: {
									type: 'boolean',
								},
								is_im: {
									type: 'boolean',
								},
								is_open: {
									type: 'boolean',
								},
								is_org_shared: {
									type: 'boolean',
								},
								is_shared: {
									type: 'boolean',
								},
								is_starred: {
									type: 'boolean',
								},
								is_user_deleted: {
									type: 'boolean',
								},
								last_read: {
									$ref: '#/components/schemas/defs_ts',
								},
								latest: {
									items: {
										anyOf: [
											{
												$ref: '#/components/schemas/objs_message',
											},
											{
												nullable: true,
											},
										],
									},
								},
								parent_conversation: {
									items: {
										anyOf: [
											{
												$ref: '#/components/schemas/defs_channel',
											},
											{
												nullable: true,
											},
										],
									},
								},
								pin_count: {
									type: 'integer',
								},
								priority: {
									type: 'number',
								},
								shares: {
									items: {
										additionalProperties: false,
										properties: {
											date_create: {
												type: 'integer',
											},
											id: {
												$ref: '#/components/schemas/defs_team',
											},
											is_active: {
												type: 'boolean',
											},
											name: {
												type: 'string',
											},
											team: {
												$ref: '#/components/schemas/objs_team',
											},
										},
										required: ['id', 'name', 'team', 'date_create', 'is_active'],
										type: 'object',
									},
									minItems: 0,
									type: 'array',
									uniqueItems: true,
								},
								unread_count: {
									type: 'integer',
								},
								unread_count_display: {
									type: 'integer',
								},
								user: {
									$ref: '#/components/schemas/defs_user_id',
								},
								version: {
									type: 'integer',
								},
							},
							required: ['id', 'created', 'is_im', 'is_org_shared', 'user', 'priority'],
							title: 'Conversation IM Channel Object from conversations.* methods',
							type: 'object',
						},
					],
				},
			},
			objs_enterprise_user: {
				additionalProperties: false,
				properties: {
					enterprise_id: {
						$ref: '#/components/schemas/defs_enterprise_id',
					},
					enterprise_name: {
						$ref: '#/components/schemas/defs_enterprise_name',
					},
					id: {
						$ref: '#/components/schemas/defs_enterprise_user_id',
					},
					is_admin: {
						type: 'boolean',
					},
					is_owner: {
						type: 'boolean',
					},
					teams: {
						items: {
							$ref: '#/components/schemas/defs_team',
						},
						type: 'array',
						uniqueItems: true,
					},
				},
				required: ['id', 'enterprise_id', 'enterprise_name', 'is_admin', 'is_owner', 'teams'],
				type: 'object',
			},
			objs_external_org_migrations: {
				properties: {
					current: {
						items: {
							properties: {
								date_started: {
									type: 'integer',
								},
								team_id: {
									type: 'string',
								},
							},
							required: ['team_id', 'date_started'],
							type: 'object',
						},
						type: 'array',
					},
					date_updated: {
						type: 'integer',
					},
				},
				required: ['date_updated', 'current'],
				title: 'External Org Migrations',
				type: 'object',
			},
			objs_file: {
				additionalProperties: false,
				properties: {
					channels: {
						items: {
							$ref: '#/components/schemas/defs_channel_id',
						},
						type: 'array',
						uniqueItems: true,
					},
					comments_count: {
						type: 'integer',
					},
					created: {
						type: 'integer',
					},
					date_delete: {
						type: 'integer',
					},
					display_as_bot: {
						type: 'boolean',
					},
					editable: {
						type: 'boolean',
					},
					editor: {
						$ref: '#/components/schemas/defs_user_id',
					},
					external_id: {
						type: 'string',
					},
					external_type: {
						type: 'string',
					},
					external_url: {
						format: 'uri',
						type: 'string',
					},
					filetype: {
						type: 'string',
					},
					groups: {
						items: {
							$ref: '#/components/schemas/defs_group_id',
						},
						type: 'array',
						uniqueItems: true,
					},
					has_rich_preview: {
						type: 'boolean',
					},
					id: {
						$ref: '#/components/schemas/defs_file_id',
					},
					image_exif_rotation: {
						type: 'integer',
					},
					ims: {
						items: {
							$ref: '#/components/schemas/defs_dm_id',
						},
						type: 'array',
						uniqueItems: true,
					},
					is_external: {
						type: 'boolean',
					},
					is_public: {
						type: 'boolean',
					},
					is_starred: {
						type: 'boolean',
					},
					is_tombstoned: {
						type: 'boolean',
					},
					last_editor: {
						$ref: '#/components/schemas/defs_user_id',
					},
					mimetype: {
						type: 'string',
					},
					mode: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					non_owner_editable: {
						type: 'boolean',
					},
					num_stars: {
						type: 'integer',
					},
					original_h: {
						type: 'integer',
					},
					original_w: {
						type: 'integer',
					},
					permalink: {
						format: 'uri',
						type: 'string',
					},
					permalink_public: {
						format: 'uri',
						type: 'string',
					},
					pinned_info: {
						$ref: '#/components/schemas/defs_pinned_info',
					},
					pinned_to: {
						items: {
							$ref: '#/components/schemas/defs_channel',
						},
						type: 'array',
					},
					pretty_type: {
						type: 'string',
					},
					preview: {
						type: 'string',
					},
					public_url_shared: {
						type: 'boolean',
					},
					reactions: {
						items: {
							$ref: '#/components/schemas/objs_reaction',
						},
						type: 'array',
					},
					shares: {
						additionalProperties: false,
						properties: {
							private: {
								additionalProperties: false,
							},
							public: {
								additionalProperties: false,
							},
						},
						type: 'object',
					},
					size: {
						type: 'integer',
					},
					source_team: {
						$ref: '#/components/schemas/defs_team',
					},
					state: {
						type: 'string',
					},
					thumb_1024: {
						format: 'uri',
						type: 'string',
					},
					thumb_1024_h: {
						type: 'integer',
					},
					thumb_1024_w: {
						type: 'integer',
					},
					thumb_160: {
						format: 'uri',
						type: 'string',
					},
					thumb_360: {
						format: 'uri',
						type: 'string',
					},
					thumb_360_h: {
						type: 'integer',
					},
					thumb_360_w: {
						type: 'integer',
					},
					thumb_480: {
						format: 'uri',
						type: 'string',
					},
					thumb_480_h: {
						type: 'integer',
					},
					thumb_480_w: {
						type: 'integer',
					},
					thumb_64: {
						format: 'uri',
						type: 'string',
					},
					thumb_720: {
						format: 'uri',
						type: 'string',
					},
					thumb_720_h: {
						type: 'integer',
					},
					thumb_720_w: {
						type: 'integer',
					},
					thumb_80: {
						format: 'uri',
						type: 'string',
					},
					thumb_800: {
						format: 'uri',
						type: 'string',
					},
					thumb_800_h: {
						type: 'integer',
					},
					thumb_800_w: {
						type: 'integer',
					},
					thumb_960: {
						format: 'uri',
						type: 'string',
					},
					thumb_960_h: {
						type: 'integer',
					},
					thumb_960_w: {
						type: 'integer',
					},
					thumb_tiny: {
						type: 'string',
					},
					timestamp: {
						type: 'integer',
					},
					title: {
						type: 'string',
					},
					updated: {
						type: 'integer',
					},
					url_private: {
						format: 'uri',
						type: 'string',
					},
					url_private_download: {
						format: 'uri',
						type: 'string',
					},
					user: {
						type: 'string',
					},
					user_team: {
						$ref: '#/components/schemas/defs_team',
					},
					username: {
						type: 'string',
					},
				},
				title: 'file object',
				type: 'object',
			},
			objs_icon: {
				properties: {
					image_102: {
						type: 'string',
					},
					image_132: {
						type: 'string',
					},
					image_230: {
						type: 'string',
					},
					image_34: {
						type: 'string',
					},
					image_44: {
						type: 'string',
					},
					image_68: {
						type: 'string',
					},
					image_88: {
						type: 'string',
					},
					image_default: {
						type: 'boolean',
					},
				},
				type: 'object',
			},
			objs_message: {
				additionalProperties: false,
				properties: {
					attachments: {
						items: {
							additionalProperties: false,
							properties: {
								fallback: {
									type: 'string',
								},
								id: {
									type: 'integer',
								},
								image_bytes: {
									type: 'integer',
								},
								image_height: {
									type: 'integer',
								},
								image_url: {
									type: 'string',
								},
								image_width: {
									type: 'integer',
								},
							},
							required: ['id'],
							type: 'object',
						},
						minItems: 1,
						type: 'array',
						uniqueItems: true,
					},
					blocks: {
						$ref: '#/components/schemas/blocks',
					},
					bot_id: {
						items: {
							anyOf: [
								{
									$ref: '#/components/schemas/defs_bot_id',
								},
								{
									nullable: true,
									title: 'Nil bot_id set when display_as_bot is false',
								},
							],
						},
					},
					bot_profile: {
						$ref: '#/components/schemas/objs_bot_profile',
					},
					client_msg_id: {
						type: 'string',
					},
					comment: {
						$ref: '#/components/schemas/objs_comment',
					},
					display_as_bot: {
						type: 'boolean',
					},
					file: {
						$ref: '#/components/schemas/objs_file',
					},
					files: {
						items: {
							$ref: '#/components/schemas/objs_file',
						},
						minItems: 1,
						type: 'array',
						uniqueItems: true,
					},
					icons: {
						additionalProperties: false,
						properties: {
							emoji: {
								type: 'string',
							},
							image_64: {
								format: 'uri',
								type: 'string',
							},
						},
						type: 'object',
					},
					inviter: {
						$ref: '#/components/schemas/defs_user_id',
					},
					is_delayed_message: {
						type: 'boolean',
					},
					is_intro: {
						type: 'boolean',
					},
					is_starred: {
						type: 'boolean',
					},
					last_read: {
						$ref: '#/components/schemas/defs_ts',
					},
					latest_reply: {
						$ref: '#/components/schemas/defs_ts',
					},
					name: {
						type: 'string',
					},
					old_name: {
						type: 'string',
					},
					parent_user_id: {
						$ref: '#/components/schemas/defs_user_id',
					},
					permalink: {
						format: 'uri',
						type: 'string',
					},
					pinned_to: {
						items: {
							$ref: '#/components/schemas/defs_channel',
						},
						type: 'array',
					},
					purpose: {
						type: 'string',
					},
					reactions: {
						items: {
							$ref: '#/components/schemas/objs_reaction',
						},
						type: 'array',
					},
					reply_count: {
						type: 'integer',
					},
					reply_users: {
						items: {
							$ref: '#/components/schemas/defs_user_id',
						},
						minItems: 1,
						type: 'array',
						uniqueItems: true,
					},
					reply_users_count: {
						type: 'integer',
					},
					source_team: {
						$ref: '#/components/schemas/defs_workspace_id',
					},
					subscribed: {
						type: 'boolean',
					},
					subtype: {
						type: 'string',
					},
					team: {
						$ref: '#/components/schemas/defs_workspace_id',
					},
					text: {
						type: 'string',
					},
					thread_ts: {
						$ref: '#/components/schemas/defs_ts',
					},
					topic: {
						type: 'string',
					},
					ts: {
						$ref: '#/components/schemas/defs_ts',
					},
					type: {
						type: 'string',
					},
					unread_count: {
						type: 'integer',
					},
					upload: {
						type: 'boolean',
					},
					user: {
						$ref: '#/components/schemas/defs_user_id',
					},
					user_profile: {
						$ref: '#/components/schemas/objs_user_profile_short',
					},
					user_team: {
						$ref: '#/components/schemas/defs_workspace_id',
					},
					username: {
						type: 'string',
					},
				},
				required: ['text', 'type', 'ts'],
				title: 'Message object',
				type: 'object',
			},
			objs_paging: {
				additionalProperties: false,
				properties: {
					count: {
						type: 'integer',
					},
					page: {
						type: 'integer',
					},
					pages: {
						type: 'integer',
					},
					per_page: {
						type: 'integer',
					},
					spill: {
						type: 'integer',
					},
					total: {
						type: 'integer',
					},
				},
				required: ['page', 'total'],
				title: 'paging object',
				type: 'object',
			},
			objs_primary_owner: {
				properties: {
					email: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
				},
				required: ['id', 'email'],
				type: 'object',
			},
			objs_reaction: {
				additionalProperties: true,
				properties: {
					count: {
						type: 'integer',
					},
					name: {
						type: 'string',
					},
					users: {
						items: {
							$ref: '#/components/schemas/defs_user_id',
						},
						type: 'array',
					},
				},
				required: ['name', 'users', 'count'],
				title: 'Reaction object',
				type: 'object',
			},
			objs_reminder: {
				additionalProperties: false,
				properties: {
					complete_ts: {
						type: 'integer',
					},
					creator: {
						$ref: '#/components/schemas/defs_user_id',
					},
					id: {
						$ref: '#/components/schemas/defs_reminder_id',
					},
					recurring: {
						type: 'boolean',
					},
					text: {
						type: 'string',
					},
					time: {
						type: 'integer',
					},
					user: {
						$ref: '#/components/schemas/defs_user_id',
					},
				},
				required: ['id', 'creator', 'user', 'text', 'recurring'],
				type: 'object',
			},
			objs_resources: {
				additionalProperties: false,
				properties: {
					excluded_ids: {
						items: {
							items: {
								anyOf: [
									{
										$ref: '#/components/schemas/defs_channel',
									},
									{
										$ref: '#/components/schemas/defs_team',
									},
								],
							},
						},
						type: 'array',
					},
					ids: {
						items: {
							items: {
								anyOf: [
									{
										$ref: '#/components/schemas/defs_channel',
									},
									{
										$ref: '#/components/schemas/defs_team',
									},
								],
							},
						},
						type: 'array',
					},
					wildcard: {
						type: 'boolean',
					},
				},
				required: ['ids'],
				title: 'resources in info from apps.permissions.info',
				type: 'object',
			},
			objs_response_metadata: {
				items: {
					anyOf: [
						{
							additionalProperties: false,
							properties: {
								next_cursor: {
									type: 'string',
								},
							},
							required: ['next_cursor'],
							title: 'new paging style',
							type: 'object',
						},
						{
							additionalProperties: false,
							properties: {
								messages: {
									items: {
										type: 'string',
									},
									type: 'array',
								},
								warnings: {
									items: {
										enum: ['method_deprecated'],
										type: 'string',
									},
									type: 'array',
								},
							},
							required: ['messages', 'warnings'],
							title: 'deprecation_warning',
							type: 'object',
						},
						{
							additionalProperties: false,
							properties: {
								messages: {
									items: {
										type: 'string',
									},
									type: 'array',
								},
								next_cursor: {
									type: 'string',
								},
								warnings: {
									items: {
										enum: ['method_deprecated'],
										type: 'string',
									},
									type: 'array',
								},
							},
							required: ['messages', 'warnings', 'next_cursor'],
							title: 'deprecation_warning and paging style together',
							type: 'object',
						},
					],
				},
			},
			objs_scopes: {
				items: {
					title: 'Named OAuth scopes',
					type: 'string',
					'x-examples': ['chat:write', 'im:history', 'im:read'],
				},
				type: 'array',
			},
			objs_subteam: {
				additionalProperties: false,
				properties: {
					auto_provision: {
						type: 'boolean',
					},
					auto_type: {
						items: {
							anyOf: [
								{
									nullable: true,
								},
								{
									enum: ['owner', 'admin'],
									type: 'string',
								},
							],
						},
					},
					channel_count: {
						type: 'integer',
					},
					created_by: {
						$ref: '#/components/schemas/defs_user_id',
					},
					date_create: {
						type: 'integer',
					},
					date_delete: {
						type: 'integer',
					},
					date_update: {
						type: 'integer',
					},
					deleted_by: {
						items: {
							anyOf: [
								{
									nullable: true,
								},
								{
									$ref: '#/components/schemas/defs_user_id',
								},
							],
						},
					},
					description: {
						type: 'string',
					},
					enterprise_subteam_id: {
						type: 'string',
					},
					handle: {
						type: 'string',
					},
					id: {
						$ref: '#/components/schemas/defs_subteam_id',
					},
					is_external: {
						type: 'boolean',
					},
					is_subteam: {
						type: 'boolean',
					},
					is_usergroup: {
						type: 'boolean',
					},
					name: {
						type: 'string',
					},
					prefs: {
						additionalProperties: false,
						properties: {
							channels: {
								items: {
									$ref: '#/components/schemas/defs_channel_id',
								},
								type: 'array',
							},
							groups: {
								items: {
									$ref: '#/components/schemas/defs_group_id',
								},
								type: 'array',
							},
						},
						required: ['channels', 'groups'],
						type: 'object',
					},
					team_id: {
						$ref: '#/components/schemas/defs_team',
					},
					updated_by: {
						$ref: '#/components/schemas/defs_user_id',
					},
					user_count: {
						type: 'integer',
					},
					users: {
						items: {
							$ref: '#/components/schemas/defs_user_id',
						},
						type: 'array',
					},
				},
				required: [
					'id',
					'team_id',
					'is_usergroup',
					'is_subteam',
					'name',
					'description',
					'handle',
					'is_external',
					'date_create',
					'date_update',
					'date_delete',
					'auto_type',
					'auto_provision',
					'enterprise_subteam_id',
					'created_by',
					'updated_by',
					'deleted_by',
					'prefs',
				],
				title: 'Subteam/Usergroup Object',
				type: 'object',
			},
			objs_team: {
				additionalProperties: false,
				properties: {
					archived: {
						type: 'boolean',
					},
					avatar_base_url: {
						format: 'uri',
						type: 'string',
					},
					created: {
						type: 'integer',
					},
					date_create: {
						type: 'integer',
					},
					deleted: {
						type: 'boolean',
					},
					description: {
						nullable: true,
						type: 'string',
					},
					discoverable: {
						items: {
							anyOf: [
								{
									nullable: true,
								},
								{
									type: 'string',
								},
							],
						},
					},
					domain: {
						type: 'string',
					},
					email_domain: {
						type: 'string',
					},
					enterprise_id: {
						$ref: '#/components/schemas/defs_enterprise_id',
					},
					enterprise_name: {
						$ref: '#/components/schemas/defs_enterprise_name',
					},
					external_org_migrations: {
						$ref: '#/components/schemas/objs_external_org_migrations',
					},
					has_compliance_export: {
						type: 'boolean',
					},
					icon: {
						$ref: '#/components/schemas/objs_icon',
					},
					id: {
						$ref: '#/components/schemas/defs_workspace_id',
					},
					is_assigned: {
						type: 'boolean',
					},
					is_enterprise: {
						type: 'integer',
					},
					is_over_storage_limit: {
						type: 'boolean',
					},
					limit_ts: {
						type: 'integer',
					},
					locale: {
						type: 'string',
					},
					messages_count: {
						type: 'integer',
					},
					msg_edit_window_mins: {
						type: 'integer',
					},
					name: {
						type: 'string',
					},
					over_integrations_limit: {
						type: 'boolean',
					},
					over_storage_limit: {
						type: 'boolean',
					},
					pay_prod_cur: {
						type: 'string',
					},
					plan: {
						enum: ['', 'std', 'plus', 'compliance', 'enterprise'],
						type: 'string',
					},
					primary_owner: {
						$ref: '#/components/schemas/objs_primary_owner',
					},
					sso_provider: {
						properties: {
							label: {
								type: 'string',
							},
							name: {
								type: 'string',
							},
							type: {
								type: 'string',
							},
						},
						type: 'object',
					},
				},
				required: ['id', 'name', 'domain', 'email_domain', 'icon'],
				title: 'Team Object',
				type: 'object',
			},
			objs_team_profile_field: {
				additionalProperties: false,
				properties: {
					field_name: {
						nullable: true,
						type: 'string',
					},
					hint: {
						type: 'string',
					},
					id: {
						pattern: '^X[a-zA-Z0-9]{9,}$',
						type: 'string',
					},
					is_hidden: {
						type: 'boolean',
					},
					label: {
						type: 'string',
					},
					options: {
						items: {
							anyOf: [
								{
									nullable: true,
								},
								{
									$ref: '#/components/schemas/objs_team_profile_field_option',
								},
							],
						},
					},
					ordering: {
						type: 'number',
					},
					possible_values: {
						items: {
							type: 'string',
						},
						nullable: true,
						type: 'array',
					},
					type: {
						enum: ['text', 'date', 'link', 'mailto', 'options_list', 'user'],
						type: 'string',
					},
				},
				required: ['id', 'ordering', 'label', 'hint', 'type'],
				type: 'object',
			},
			objs_team_profile_field_option: {
				additionalProperties: false,
				properties: {
					is_custom: {
						nullable: true,
						type: 'boolean',
					},
					is_multiple_entry: {
						nullable: true,
						type: 'boolean',
					},
					is_protected: {
						nullable: true,
						type: 'boolean',
					},
					is_scim: {
						nullable: true,
						type: 'boolean',
					},
				},
				type: 'object',
			},
			objs_user: {
				items: {
					anyOf: [
						{
							additionalProperties: false,
							description: 'user object for non enterprise type',
							properties: {
								color: {
									pattern: '^[a-fA-F0-9]{6}$',
									type: 'string',
								},
								deleted: {
									type: 'boolean',
								},
								enterprise_user: {
									$ref: '#/components/schemas/objs_enterprise_user',
								},
								has_2fa: {
									type: 'boolean',
								},
								id: {
									$ref: '#/components/schemas/defs_user_id',
								},
								is_admin: {
									type: 'boolean',
								},
								is_app_user: {
									type: 'boolean',
								},
								is_bot: {
									type: 'boolean',
								},
								is_external: {
									type: 'boolean',
								},
								is_forgotten: {
									type: 'boolean',
								},
								is_invited_user: {
									type: 'boolean',
								},
								is_owner: {
									type: 'boolean',
								},
								is_primary_owner: {
									type: 'boolean',
								},
								is_restricted: {
									type: 'boolean',
								},
								is_stranger: {
									type: 'boolean',
								},
								is_ultra_restricted: {
									type: 'boolean',
								},
								locale: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								presence: {
									type: 'string',
								},
								profile: {
									$ref: '#/components/schemas/objs_user_profile',
								},
								real_name: {
									type: 'string',
								},
								team: {
									$ref: '#/components/schemas/defs_workspace_id',
								},
								team_id: {
									$ref: '#/components/schemas/defs_workspace_id',
								},
								team_profile: {
									additionalProperties: false,
									properties: {
										fields: {
											items: {
												$ref: '#/components/schemas/objs_team_profile_field',
											},
											minItems: 1,
											type: 'array',
											uniqueItems: true,
										},
									},
									required: ['fields'],
									type: 'object',
								},
								two_factor_type: {
									type: 'string',
								},
								tz: {
									items: {
										anyOf: [
											{
												nullable: true,
											},
											{
												type: 'string',
											},
										],
									},
								},
								tz_label: {
									type: 'string',
								},
								tz_offset: {
									type: 'number',
								},
								updated: {
									type: 'number',
								},
							},
							required: ['id', 'name', 'profile', 'is_bot', 'updated', 'is_app_user'],
							type: 'object',
						},
						{
							additionalProperties: false,
							description: 'enterprise user',
							properties: {
								color: {
									description: 'refercing to bug: https://jira.tinyspeck.com/browse/EVALUE-1559',
									pattern: '^([a-fA-F0-9]{6})?$',
									type: 'string',
								},
								deleted: {
									type: 'boolean',
								},
								enterprise_user: {
									$ref: '#/components/schemas/objs_enterprise_user',
								},
								has_2fa: {
									type: 'boolean',
								},
								id: {
									$ref: '#/components/schemas/defs_user_id',
								},
								is_admin: {
									type: 'boolean',
								},
								is_app_user: {
									type: 'boolean',
								},
								is_bot: {
									type: 'boolean',
								},
								is_external: {
									type: 'boolean',
								},
								is_forgotten: {
									type: 'boolean',
								},
								is_owner: {
									type: 'boolean',
								},
								is_primary_owner: {
									type: 'boolean',
								},
								is_restricted: {
									type: 'boolean',
								},
								is_stranger: {
									type: 'boolean',
								},
								is_ultra_restricted: {
									type: 'boolean',
								},
								locale: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								presence: {
									type: 'string',
								},
								profile: {
									$ref: '#/components/schemas/objs_user_profile',
								},
								real_name: {
									type: 'string',
								},
								team_id: {
									$ref: '#/components/schemas/defs_workspace_id',
								},
								team_profile: {
									additionalProperties: false,
									properties: {
										fields: {
											items: {
												$ref: '#/components/schemas/objs_team_profile_field',
											},
											minItems: 1,
											type: 'array',
											uniqueItems: true,
										},
									},
									required: ['fields'],
									type: 'object',
								},
								teams: {
									items: {
										$ref: '#/components/schemas/defs_workspace_id',
									},
									minItems: 1,
									type: 'array',
									uniqueItems: true,
								},
								two_factor_type: {
									type: 'string',
								},
								tz: {
									items: {
										anyOf: [
											{
												nullable: true,
											},
											{
												type: 'string',
											},
										],
									},
								},
								tz_label: {
									type: 'string',
								},
								tz_offset: {
									type: 'number',
								},
								updated: {
									type: 'number',
								},
							},
							required: ['id', 'name', 'profile', 'is_bot', 'updated', 'is_app_user'],
							type: 'object',
						},
					],
				},
			},
			objs_user_profile: {
				additionalProperties: false,
				properties: {
					always_active: {
						type: 'boolean',
					},
					api_app_id: {
						$ref: '#/components/schemas/defs_optional_app_id',
					},
					avatar_hash: {
						type: 'string',
					},
					bot_id: {
						$ref: '#/components/schemas/defs_bot_id',
					},
					display_name: {
						type: 'string',
					},
					display_name_normalized: {
						type: 'string',
					},
					email: {
						format: 'email',
						nullable: true,
						type: 'string',
					},
					fields: {
						items: {
							type: 'object',
						},
						nullable: true,
						oneOf: [
							{
								type: 'object',
							},
							{
								items: {},
								type: 'array',
							},
						],
					},
					first_name: {
						nullable: true,
						type: 'string',
					},
					guest_expiration_ts: {
						nullable: true,
						type: 'integer',
					},
					guest_invited_by: {
						nullable: true,
						type: 'string',
					},
					image_1024: {
						format: 'uri',
						nullable: true,
						type: 'string',
					},
					image_192: {
						format: 'uri',
						nullable: true,
						type: 'string',
					},
					image_24: {
						format: 'uri',
						nullable: true,
						type: 'string',
					},
					image_32: {
						format: 'uri',
						nullable: true,
						type: 'string',
					},
					image_48: {
						format: 'uri',
						nullable: true,
						type: 'string',
					},
					image_512: {
						format: 'uri',
						nullable: true,
						type: 'string',
					},
					image_72: {
						format: 'uri',
						nullable: true,
						type: 'string',
					},
					image_original: {
						format: 'uri',
						nullable: true,
						type: 'string',
					},
					is_app_user: {
						type: 'boolean',
					},
					is_custom_image: {
						type: 'boolean',
					},
					is_restricted: {
						nullable: true,
						type: 'boolean',
					},
					is_ultra_restricted: {
						nullable: true,
						type: 'boolean',
					},
					last_avatar_image_hash: {
						type: 'string',
					},
					last_name: {
						nullable: true,
						type: 'string',
					},
					memberships_count: {
						type: 'integer',
					},
					name: {
						nullable: true,
						type: 'string',
					},
					phone: {
						type: 'string',
					},
					pronouns: {
						type: 'string',
					},
					real_name: {
						type: 'string',
					},
					real_name_normalized: {
						type: 'string',
					},
					skype: {
						type: 'string',
					},
					status_default_emoji: {
						type: 'string',
					},
					status_default_text: {
						type: 'string',
					},
					status_default_text_canonical: {
						nullable: true,
						type: 'string',
					},
					status_emoji: {
						type: 'string',
					},
					status_expiration: {
						type: 'integer',
					},
					status_text: {
						type: 'string',
					},
					status_text_canonical: {
						nullable: true,
						type: 'string',
					},
					team: {
						$ref: '#/components/schemas/defs_workspace_id',
					},
					title: {
						type: 'string',
					},
					updated: {
						type: 'integer',
					},
					user_id: {
						type: 'string',
					},
					username: {
						nullable: true,
						type: 'string',
					},
				},
				required: [
					'real_name',
					'display_name',
					'avatar_hash',
					'real_name_normalized',
					'display_name_normalized',
					'title',
					'phone',
					'skype',
					'status_text',
					'status_emoji',
					'fields',
				],
				title: 'User profile object',
				type: 'object',
			},
			objs_user_profile_short: {
				additionalProperties: false,
				properties: {
					avatar_hash: {
						type: 'string',
					},
					display_name: {
						type: 'string',
					},
					display_name_normalized: {
						type: 'string',
					},
					first_name: {
						nullable: true,
						type: 'string',
					},
					image_72: {
						format: 'uri',
						type: 'string',
					},
					is_restricted: {
						type: 'boolean',
					},
					is_ultra_restricted: {
						type: 'boolean',
					},
					name: {
						type: 'string',
					},
					real_name: {
						type: 'string',
					},
					real_name_normalized: {
						type: 'string',
					},
					team: {
						$ref: '#/components/schemas/defs_workspace_id',
					},
				},
				required: [
					'avatar_hash',
					'image_72',
					'first_name',
					'real_name',
					'display_name',
					'team',
					'name',
					'is_restricted',
					'is_ultra_restricted',
				],
				type: 'object',
			},
		},
		securitySchemes: {
			slackAuth: {
				flows: {
					authorizationCode: {
						authorizationUrl: 'https://slack.com/oauth/authorize',
						scopes: {
							admin: 'admin',
							'admin.apps:read': 'admin.apps:read',
							'admin.apps:write': 'admin.apps:write',
							'admin.conversations:read': 'admin.conversations:read',
							'admin.conversations:write': 'admin.conversations:write',
							'admin.invites:read': 'admin.invites:read',
							'admin.invites:write': 'admin.invites:write',
							'admin.teams:read': 'admin.teams:read',
							'admin.teams:write': 'admin.teams:write',
							'admin.usergroups:read': 'admin.usergroups:read',
							'admin.usergroups:write': 'admin.usergroups:write',
							'admin.users:read': 'admin.users:read',
							'admin.users:write': 'admin.users:write',
							'authorizations:read': 'authorizations:read',
							bot: 'Bot user scope',
							'calls:read': 'calls:read',
							'calls:write': 'calls:write',
							'channels:history': 'channels:history',
							'channels:manage': 'channels:manage',
							'channels:read': 'channels:read',
							'channels:write': 'channels:write',
							'chat:write': 'chat:write',
							'chat:write:bot': 'Author messages as a bot',
							'chat:write:user': 'Author messages as a user',
							'conversations:history': 'conversations:history',
							'conversations:read': 'conversations:read',
							'conversations:write': 'conversations:write',
							'dnd:read': 'dnd:read',
							'dnd:write': 'dnd:write',
							'emoji:read': 'emoji:read',
							'files:read': 'files:read',
							'files:write:user': 'files:write:user',
							'groups:history': 'groups:history',
							'groups:read': 'groups:read',
							'groups:write': 'groups:write',
							'identity.basic': 'identity.basic',
							'im:history': 'im:history',
							'im:read': 'im:read',
							'im:write': 'im:write',
							'links:write': 'links:write',
							'mpim:history': 'mpim:history',
							'mpim:read': 'mpim:read',
							'mpim:write': 'mpim:write',
							none: 'No scope required',
							'pins:read': 'pins:read',
							'pins:write': 'pins:write',
							'reactions:read': 'reactions:read',
							'reactions:write': 'reactions:write',
							'reminders:read': 'reminders:read',
							'reminders:write': 'reminders:write',
							'remote_files:read': 'remote_files:read',
							'remote_files:share': 'remote_files:share',
							'remote_files:write': 'remote_files:write',
							'rtm:stream': 'rtm:stream',
							'search:read': 'search:read',
							'stars:read': 'stars:read',
							'stars:write': 'stars:write',
							'team:read': 'team:read',
							'tokens.basic': 'tokens.basic',
							'usergroups:read': 'usergroups:read',
							'usergroups:write': 'usergroups:write',
							'users.profile:read': 'users.profile:read',
							'users.profile:write': 'users.profile:write',
							'users:read': 'users:read',
							'users:read.email': 'users:read.email',
							'users:write': 'users:write',
							'workflow.steps:execute': 'workflow.steps:execute',
						},
						tokenUrl: 'https://slack.com/api/oauth.access',
					},
				},
				type: 'oauth2',
			},
		},
	},
} as const;
