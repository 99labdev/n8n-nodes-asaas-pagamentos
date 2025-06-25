import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AsaasCredentialsApi implements ICredentialType {
	name = 'asaasCredentialsApi';
	displayName = 'Asaas Credentials API';

	documentationUrl = 'https://docs.asaas.com/docs/autentica%C3%A7%C3%A3o-1';

	properties: INodeProperties[] = [
		{
			displayName: 'Environment',
			name: 'environment',
			type: 'options',
			options: [
				{
					name: 'Sandbox',
					value: 'sandbox',
				},
				{
					name: 'Production',
					value: 'production',
				},
			],
			default: 'sandbox',
			description: 'The environment to use for API requests',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'The API key for authenticating with Asaas API. Get it from your Asaas account integrations section.',
		},
	];

	// Authentication configuration for Asaas API
	// The API uses the access_token header for authentication
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'access_token': '={{ $credentials.apiKey }}',
				'Content-Type': 'application/json',
				'User-Agent': 'n8n-asaas-integration',
			},
		},
	};

	// Test credential validity by making a request to Asaas API
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.environment === "production" ? "https://api.asaas.com/v3" : "https://api-sandbox.asaas.com/v3"}}',
			url: '/myAccount',
			method: 'GET',
		},
	};
}
