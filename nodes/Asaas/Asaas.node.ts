import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
} from 'n8n-workflow';
import { NodeConnectionType, NodeOperationError } from 'n8n-workflow';
import { Buffer } from 'buffer';

import { customerOperations, customerFields } from './CustomerDescription';
import { paymentLinkOperations, paymentLinkFields } from './PaymentLinkDescription';

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
					{
						name: 'Link De Pagamento',
						value: 'paymentLink',
						description: 'Gerenciar links de pagamento',
					},
				],
				default: 'customer',
			},
			...customerOperations,
			...customerFields,
			...paymentLinkOperations,
			...paymentLinkFields,
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
					if (operation === 'create') {
						// Get required parameters
						const name = this.getNodeParameter('name', i) as string;
						const cpfCnpj = this.getNodeParameter('cpfCnpj', i) as string;
						const email = this.getNodeParameter('email', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i, {}) as {
							phone?: string;
							mobilePhone?: string;
							address?: string;
							addressNumber?: string;
							complement?: string;
							province?: string;
							postalCode?: string;
							externalReference?: string;
							notificationDisabled?: boolean;
							additionalEmails?: string;
							municipalInscription?: string;
							stateInscription?: string;
							observations?: string;
							groupName?: string;
							company?: string;
							foreignCustomer?: boolean;
						};

						// Build request body
						const body: { [key: string]: any } = {
							name,
							cpfCnpj,
						};

						// Add email if provided
						if (email) body.email = email;

						// Add additional fields to body
// Add additional fields to body
Object.entries(additionalFields).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
        body[key] = value;
    }
});

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'POST' as const,
							url: `${baseURL}/customers`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							body,
							json: true,
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});

					} else if (operation === 'get') {
						// Get required parameters
						const customerId = this.getNodeParameter('customerId', i) as string;

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'GET' as const,
							url: `${baseURL}/customers/${customerId}`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							json: true,
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});

					} else if (operation === 'update') {
						// Get required parameters
						const customerId = this.getNodeParameter('customerId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i, {}) as IDataObject;

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'PUT' as const,
							url: `${baseURL}/customers/${customerId}`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							body: updateFields,
							json: true,
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});

					} else if (operation === 'delete') {
						// Get required parameters
						const customerId = this.getNodeParameter('customerId', i) as string;

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'DELETE' as const,
							url: `${baseURL}/customers/${customerId}`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							json: true,
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});

					} else if (operation === 'restore') {
						// Get required parameters
						const customerId = this.getNodeParameter('customerId', i) as string;

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'POST' as const,
							url: `${baseURL}/customers/${customerId}/restore`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							body: {},
							json: true,
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});

					} else if (operation === 'list') {
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
				} else if (resource === 'paymentLink') {
					if (operation === 'create') {
						// Get required parameters
						const name = this.getNodeParameter('name', i) as string;
						const value = this.getNodeParameter('value', i) as number;
						const chargeType = this.getNodeParameter('chargeType', i) as string;
						const billingType = this.getNodeParameter('billingType', i) as string;
						const dueDateLimitDays = this.getNodeParameter('dueDateLimitDays', i) as number;
						const additionalFields = this.getNodeParameter('additionalFields', i, {}) as {
							description?: string;
							endDate?: string;
							endDateString?: string;
							maxInstallmentCount?: number;
							successUrl?: string;
							notificationUrl?: string;
							minimumValue?: number;
							maximumValue?: number;
							observations?: string;
							discount?: {
								discountSettings?: {
									value?: number;
									type?: string;
									dueDateLimitDays?: number;
								};
							};
							interest?: {
								interestSettings?: {
									value?: number;
									type?: string;
								};
							};
							fine?: {
								fineSettings?: {
									value?: number;
									type?: string;
								};
							};
						};

						// Build request body
						const body: { [key: string]: any } = {
							name,
							chargeType,
							billingType,
							dueDateLimitDays,
						};

						// Add value if chargeType is DETACHED
						if (chargeType === 'DETACHED' && value) {
							body.value = value;
						}

						// Add additional fields to body
						Object.entries(additionalFields).forEach(([key, value]) => {
							if (value !== undefined && value !== '') {
								if (key === 'discount' && typeof value === 'object' && value && 'discountSettings' in value) {
									body.discount = value.discountSettings;
								} else if (key === 'interest' && typeof value === 'object' && value && 'interestSettings' in value) {
									body.interest = value.interestSettings;
								} else if (key === 'fine' && typeof value === 'object' && value && 'fineSettings' in value) {
									body.fine = value.fineSettings;
								} else {
									body[key] = value;
								}
							}
						});

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'POST' as const,
							url: `${baseURL}/paymentLinks`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							body,
							json: true,
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});

					} else if (operation === 'list') {
						// Get parameters
						const limit = this.getNodeParameter('limit', i, 50) as number;
						const offset = this.getNodeParameter('offset', i, 0) as number;
						const additionalFilters = this.getNodeParameter('additionalFilters', i, {}) as {
							name?: string;
							active?: boolean;
							dateCreatedGe?: string;
							dateCreatedLe?: string;
						};

						// Build query parameters
						const qs: { [key: string]: any } = {
							limit,
							offset,
						};

						// Add additional fields to query
						Object.entries(additionalFilters).forEach(([key, value]) => {
							if (value !== undefined && value !== '') {
								qs[key] = value;
							}
						});

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'GET' as const,
							url: `${baseURL}/paymentLinks`,
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
							for (const paymentLink of responseData.data) {
								returnData.push({
									json: paymentLink,
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

					} else if (operation === 'get') {
						// Get required parameters
						const paymentLinkId = this.getNodeParameter('paymentLinkId', i) as string;

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'GET' as const,
							url: `${baseURL}/paymentLinks/${paymentLinkId}`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							json: true,
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});

					} else if (operation === 'update') {
						// Get required parameters
						const paymentLinkId = this.getNodeParameter('paymentLinkId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i, {}) as IDataObject;

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'PUT' as const,
							url: `${baseURL}/paymentLinks/${paymentLinkId}`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							body: updateFields,
							json: true,
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});

					} else if (operation === 'delete') {
						// Get required parameters
						const paymentLinkId = this.getNodeParameter('paymentLinkId', i) as string;

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'DELETE' as const,
							url: `${baseURL}/paymentLinks/${paymentLinkId}`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							json: true,
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});

					} else if (operation === 'restore') {
						// Get required parameters
						const paymentLinkId = this.getNodeParameter('paymentLinkId', i) as string;

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'POST' as const,
							url: `${baseURL}/paymentLinks/${paymentLinkId}/restore`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							body: {},
							json: true,
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});

					} else if (operation === 'addImage') {
						// Get required parameters
						const paymentLinkId = this.getNodeParameter('paymentLinkId', i) as string;
						const binaryPropertyName = this.getNodeParameter('binaryPropertyName', i) as string;
						const setAsMain = this.getNodeParameter('setAsMain', i, false) as boolean;

						// Get binary data
						const binaryData = items[i].binary;
						if (!binaryData || !binaryData[binaryPropertyName]) {
							throw new NodeOperationError(this.getNode(), `No binary data found for property "${binaryPropertyName}"`, { itemIndex: i });
						}

						const binaryFile = binaryData[binaryPropertyName];
						
						// Get credentials and base URL
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						// Convert base64 data to buffer for proper multipart upload
						const buffer = Buffer.from(binaryFile.data, 'base64');

						// Prepare form data exactly as required by Asaas API
						const formData = {
							image: {
								value: buffer,
								options: {
									filename: binaryFile.fileName || 'image.jpg',
									contentType: binaryFile.mimeType || 'image/jpeg',
								},
							},
							main: setAsMain,
						};

						const options = {
							method: 'POST' as const,
							url: `${baseURL}/paymentLinks/${paymentLinkId}/images`,
							headers: {
								'access_token': credentials.apiKey,
								'User-Agent': 'n8n-asaas-integration',
								// Note: Content-Type will be set automatically by request library with proper boundary
							},
							formData,
							json: false, // Important: set to false for multipart uploads
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});

					} else if (operation === 'listImages') {
						// Get required parameters
						const paymentLinkId = this.getNodeParameter('paymentLinkId', i) as string;

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'GET' as const,
							url: `${baseURL}/paymentLinks/${paymentLinkId}/images`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							json: true,
						};

						responseData = await this.helpers.request(options);

						// Handle response
						if (responseData.data && Array.isArray(responseData.data)) {
							for (const image of responseData.data) {
								returnData.push({
									json: image,
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

					} else if (operation === 'getImage') {
						// Get required parameters
						const paymentLinkId = this.getNodeParameter('paymentLinkId', i) as string;
						const imageId = this.getNodeParameter('imageId', i) as string;

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'GET' as const,
							url: `${baseURL}/paymentLinks/${paymentLinkId}/images/${imageId}`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							json: true,
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});

					} else if (operation === 'removeImage') {
						// Get required parameters
						const paymentLinkId = this.getNodeParameter('paymentLinkId', i) as string;
						const imageId = this.getNodeParameter('imageId', i) as string;

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'DELETE' as const,
							url: `${baseURL}/paymentLinks/${paymentLinkId}/images/${imageId}`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							json: true,
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});

					} else if (operation === 'setMainImage') {
						// Get required parameters
						const paymentLinkId = this.getNodeParameter('paymentLinkId', i) as string;
						const imageId = this.getNodeParameter('imageId', i) as string;

						// Make API request
						const credentials = await this.getCredentials('asaasCredentialsApi');
						const baseURL = credentials.environment === 'production'
							? 'https://api.asaas.com/v3'
							: 'https://api-sandbox.asaas.com/v3';

						const options = {
							method: 'POST' as const,
							url: `${baseURL}/paymentLinks/${paymentLinkId}/images/${imageId}/setAsMain`,
							headers: {
								'access_token': credentials.apiKey,
								'Content-Type': 'application/json',
								'User-Agent': 'n8n-asaas-integration',
							},
							body: {},
							json: true,
						};

						responseData = await this.helpers.request(options);

						returnData.push({
							json: responseData,
							pairedItem: { item: i },
						});
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
