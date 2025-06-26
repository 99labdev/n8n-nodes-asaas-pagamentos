import { INodeProperties } from 'n8n-workflow';

// Customer operations for Asaas API
export const customerOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
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
				name: 'Listar',
				value: 'list',
				description: 'Listar todos os clientes',
				action: 'Listar clientes',
			},
		],
		default: 'list',
	},
];

// Customer list operation fields
const listOperation: INodeProperties[] = [
	{
		displayName: 'Limite',
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
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		default: 0,
		description: 'Número de clientes para pular',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Filtros Adicionais',
		name: 'additionalFilters',
		type: 'collection',
		placeholder: 'Adicionar Filtro',
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
				description: 'Filtrar clientes por CPF ou CNPJ',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'Filtrar clientes por email',
			},
			{
				displayName: 'Nome',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filtrar clientes por nome',
			},
			{
				displayName: 'Nome Do Grupo',
				name: 'groupName',
				type: 'string',
				default: '',
				description: 'Filtrar clientes por nome do grupo',
			},
			{
				displayName: 'Referência Externa',
				name: 'externalReference',
				type: 'string',
				default: '',
				description: 'Filtrar clientes por referência externa',
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
