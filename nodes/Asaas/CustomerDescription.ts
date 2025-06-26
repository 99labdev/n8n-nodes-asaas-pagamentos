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
				name: 'Criar',
				value: 'create',
				description: 'Criar um novo cliente',
				action: 'Criar cliente',
			},
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

// Customer create operation fields
const createOperation: INodeProperties[] = [
	{
		displayName: 'Nome',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		description: 'Nome do cliente',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'CPF/CNPJ',
		name: 'cpfCnpj',
		type: 'string',
		required: true,
		default: '',
		description: 'CPF ou CNPJ do cliente',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		default: '',
		description: 'Email do cliente',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Campos Adicionais',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Bairro',
				name: 'province',
				type: 'string',
				default: '',
				description: 'Bairro do cliente',
			},
			{
				displayName: 'Celular',
				name: 'mobilePhone',
				type: 'string',
				default: '',
				description: 'Telefone celular do cliente',
			},
			{
				displayName: 'CEP',
				name: 'postalCode',
				type: 'string',
				default: '',
				description: 'CEP do cliente',
			},
			{
				displayName: 'Cliente Estrangeiro',
				name: 'foreignCustomer',
				type: 'boolean',
				default: false,
				description: 'Whether the customer is foreign',
			},
			{
				displayName: 'Complemento',
				name: 'complement',
				type: 'string',
				default: '',
				description: 'Complemento do endereço',
			},
			{
				displayName: 'Emails Adicionais',
				name: 'additionalEmails',
				type: 'string',
				default: '',
				description: 'Emails adicionais separados por vírgula',
			},
			{
				displayName: 'Empresa',
				name: 'company',
				type: 'string',
				default: '',
				description: 'Empresa do cliente',
			},
			{
				displayName: 'Endereço',
				name: 'address',
				type: 'string',
				default: '',
				description: 'Endereço do cliente',
			},
			{
				displayName: 'Inscrição Estadual',
				name: 'stateInscription',
				type: 'string',
				default: '',
				description: 'Inscrição estadual do cliente',
			},
			{
				displayName: 'Inscrição Municipal',
				name: 'municipalInscription',
				type: 'string',
				default: '',
				description: 'Inscrição municipal do cliente',
			},
			{
				displayName: 'Nome Do Grupo',
				name: 'groupName',
				type: 'string',
				default: '',
				description: 'Nome do grupo do cliente',
			},
			{
				displayName: 'Notificação Desabilitada',
				name: 'notificationDisabled',
				type: 'boolean',
				default: false,
				description: 'Whether notifications should be disabled for this customer',
			},
			{
				displayName: 'Número',
				name: 'addressNumber',
				type: 'string',
				default: '',
				description: 'Número do endereço',
			},
			{
				displayName: 'Observações',
				name: 'observations',
				type: 'string',
				default: '',
				description: 'Observações sobre o cliente',
			},
			{
				displayName: 'Referência Externa',
				name: 'externalReference',
				type: 'string',
				default: '',
				description: 'Referência externa do cliente',
			},
			{
				displayName: 'Telefone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Telefone do cliente',
			},
		],
	},
];

export const customerFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                               customer:create                              */
	/* -------------------------------------------------------------------------- */
	...createOperation,
	/* -------------------------------------------------------------------------- */
	/*                               customer:list                                */
	/* -------------------------------------------------------------------------- */
	...listOperation,
];
