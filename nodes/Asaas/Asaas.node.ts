import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';

import { customerOperations, customerFields } from './CustomerDescription';

export class Asaas implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Asaas',
		name: 'asaas',
		icon: 'file:asaas.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Asaas API',
		defaults: {
			name: 'Asaas',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'asaasCredentialsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.environment === "production" ? "https://api.asaas.com/v3" : "https://api-sandbox.asaas.com/v3"}}',
			headers: {
				'access_token': '={{$credentials.apiKey}}',
				'Content-Type': 'application/json',
				'User-Agent': 'n8n-asaas-integration',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Customer',
						value: 'customer',
						description: 'Manage customers',
					},
				],
				default: 'customer',
			},
			...customerOperations,
			...customerFields,
		],
	};

	// The execute function is handled by n8n's routing system
	// All the routing configuration is defined in the node properties above
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		// This is handled automatically by n8n's routing system
		// The routing configuration in the node properties will handle the API calls
		return [[]];
	}
}
