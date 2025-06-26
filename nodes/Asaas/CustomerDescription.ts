import { INodeProperties } from 'n8n-workflow';

// Customer operations for Asaas API
export const customerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['customer'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'List all customers',
				action: 'List customers',
				routing: {
					request: {
						method: 'GET',
						url: '/customers',
					},
				},
			},
		],
		default: 'list',
	},
];

// Customer list operation fields
const listOperation: INodeProperties[] = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['list'],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		default: 0,
		description: 'Number of customers to skip',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['list'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'offset',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['list'],
			},
		},
		options: [
			{
				displayName: 'CPF/CNPJ',
				name: 'cpfCnpj',
				type: 'string',
				default: '',
				description: 'Filter customers by CPF or CNPJ',
				routing: {
					send: {
						type: 'query',
						property: 'cpfCnpj',
					},
				},
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'Filter customers by email',
				routing: {
					send: {
						type: 'query',
						property: 'email',
					},
				},
			},
			{
				displayName: 'External Reference',
				name: 'externalReference',
				type: 'string',
				default: '',
				description: 'Filter customers by external reference',
				routing: {
					send: {
						type: 'query',
						property: 'externalReference',
					},
				},
			},
			{
				displayName: 'Group Name',
				name: 'groupName',
				type: 'string',
				default: '',
				description: 'Filter customers by group name',
				routing: {
					send: {
						type: 'query',
						property: 'groupName',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter customers by name',
				routing: {
					send: {
						type: 'query',
						property: 'name',
					},
				},
			},
		],
	},
];

export const customerFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                               customer:list                                */
	/* -------------------------------------------------------------------------- */
	...listOperation,
];
