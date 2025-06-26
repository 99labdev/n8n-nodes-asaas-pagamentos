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
		description: 'Interagir com a API do Asaas',
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
		properties: [
			{
				displayName: 'Recurso',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Cliente',
						value: 'customer',
						description: 'Gerenciar clientes',
					},
				],
				default: 'customer',
			},
			...customerOperations,
			...customerFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		let responseData;
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			try {
				if (resource === 'customer') {
					if (operation === 'list') {
						// Get parameters
						const limit = this.getNodeParameter('limit', i, 50) as number;
						const offset = this.getNodeParameter('offset', i, 0) as number;
						const additionalFilters = this.getNodeParameter('additionalFilters', i, {}) as {
							name?: string;
							email?: string;
							cpfCnpj?: string;
							groupName?: string;
							externalReference?: string;
						};

						// Build query parameters
						const qs: { [key: string]: any } = {
							limit,
							offset,
						};

						// Add additional fields to query
						if (additionalFilters.name) qs.name = additionalFilters.name;
						if (additionalFilters.email) qs.email = additionalFilters.email;
						if (additionalFilters.cpfCnpj) qs.cpfCnpj = additionalFilters.cpfCnpj;
						if (additionalFilters.groupName) qs.groupName = additionalFilters.groupName;
						if (additionalFilters.externalReference) qs.externalReference = additionalFilters.externalReference;

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production' 
							? 'https://api.asaas.com/v3' 
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'GET' as const,
							url: `${baseURL}/customers`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							qs,
							json: true,
						};

						responseData = await this.helpers.request(options);

						// Handle response
						if (responseData.data && Array.isArray(responseData.data)) {
							for (const customer of responseData.data) {
								returnData.push({
									json: customer,
									pairedItem: { item: i },
								});
							}
						} else if (responseData.data) {
							returnData.push({
								json: responseData.data,
								pairedItem: { item: i },
							});
						} else {
							returnData.push({
								json: responseData,
								pairedItem: { item: i },
							});
						}
					}
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: error.message },
						pairedItem: { item: i },
					});
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
