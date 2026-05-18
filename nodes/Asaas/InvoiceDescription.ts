import type { INodeProperties } from 'n8n-workflow'

// Invoice operations for Asaas API
export const invoiceOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
			},
		},
		options: [
			{
				name: 'Agendar',
				value: 'create',
				description: 'Agendar emissão de uma nova nota fiscal',
				action: 'Agendar nota fiscal',
			},
			{
				name: 'Cancelar',
				value: 'cancel',
				description: 'Cancelar uma nota fiscal já emitida',
				action: 'Cancelar nota fiscal',
			},
			{
				name: 'Download XML',
				value: 'downloadXml',
				description: 'Download do arquivo XML da nota fiscal',
				action: 'Fazer download do XML',
			},
			{
				name: 'Enviar Por Email',
				value: 'sendEmail',
				description: 'Enviar nota fiscal por email',
				action: 'Enviar nota fiscal por email',
			},
			{
				name: 'Listar',
				value: 'list',
				description: 'Listar todas as notas fiscais',
				action: 'Listar notas fiscais',
			},
			{
				name: 'Recuperar',
				value: 'get',
				description: 'Recuperar uma nota fiscal específica',
				action: 'Recuperar nota fiscal',
			},
		],
		default: 'list',
	},
]

// Invoice fields for Asaas API
export const invoiceFields: INodeProperties[] = [
	// List operation fields
	{
		displayName: 'Limite',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['invoice'],
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
		description: 'Número de registros para pular',
		displayOptions: {
			show: {
				resource: ['invoice'],
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
				resource: ['invoice'],
				operation: ['list'],
			},
		},
		options: [
			{
				displayName: 'Data De Criação (Início)',
				name: 'dateCreatedGe',
				type: 'dateTime',
				default: '',
				description: 'Filtrar notas criadas a partir desta data',
			},
			{
				displayName: 'Data De Criação (Fim)',
				name: 'dateCreatedLe',
				type: 'dateTime',
				default: '',
				description: 'Filtrar notas criadas até esta data',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Emitida',
						value: 'ISSUED',
					},
					{
						name: 'Pendente',
						value: 'PENDING',
					},
					{
						name: 'Cancelada',
						value: 'CANCELLED',
					},
					{
						name: 'Rejeitada',
						value: 'REJECTED',
					},
				],
				default: 'PENDING',
				description: 'Filtrar por status da nota fiscal',
			},
			{
				displayName: 'ID Da Cobrança',
				name: 'paymentId',
				type: 'string',
				default: '',
				description: 'Filtrar notas por ID da cobrança',
			},
		],
	},

	// Create operation fields
	{
		displayName: 'Tipo De Serviço Municipal',
		name: 'municipalServiceCode',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Código do serviço municipal (ex: 0109, 0201)',
		required: true,
	},
	{
		displayName: 'ID Da Cobrança',
		name: 'chargeId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'ID da cobrança (payment) para vincular a nota fiscal',
	},
	{
		displayName: 'Campos Adicionais',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Data De Competência',
				name: 'competenceDate',
				type: 'dateTime',
				default: '',
				description: 'Data de realização do serviço',
			},
			{
				displayName: 'Descrição Do Serviço',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Descrição detalhada do serviço prestado',
			},
			{
				displayName: 'Email Do Cliente',
				name: 'customerEmail',
				type: 'string',
				placeholder: 'email@cliente.com',
				default: '',
				description: 'Email para enviar a nota fiscal automaticamente',
			},
			{
				displayName: 'ID Do Cliente',
				name: 'customerId',
				type: 'string',
				default: '',
				description: 'ID do cliente que receberá a nota fiscal',
			},
			{
				displayName: 'Referência Externa',
				name: 'externalReference',
				type: 'string',
				default: '',
				description: 'Identificador externo da nota fiscal',
			},
			{
				displayName: 'Valor De Desconto',
				name: 'discountValue',
				type: 'number',
				default: 0,
				description: 'Valor do desconto concedido',
			},
			{
				displayName: 'Valor Do Serviço',
				name: 'serviceValue',
				type: 'number',
				default: 0,
				description: 'Valor do serviço em reais',
			},
		],
	},

	// Get operation fields
	{
		displayName: 'ID Da Nota Fiscal',
		name: 'invoiceId',
		type: 'string',
		required: true,
		default: '',
		description: 'Identificador único da nota fiscal',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['get', 'cancel', 'downloadXml', 'sendEmail'],
			},
		},
	},

	// Send Email operation fields
	{
		displayName: 'Email Destinatário',
		name: 'email',
		type: 'string',
		placeholder: 'email@cliente.com',
		default: '',
		description: 'Email para onde enviar a nota fiscal',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['sendEmail'],
			},
		},
		required: true,
	},
	{
		displayName: 'Campos Adicionais',
		name: 'sendEmailAdditionalFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['sendEmail'],
			},
		},
		options: [
			{
				displayName: 'Mensagem Personalizada',
				name: 'message',
				type: 'string',
				default: '',
				description: 'Mensagem adicional a ser incluída no email',
				typeOptions: {
					rows: 3,
				},
			},
		],
	},

	// Cancel operation fields
	{
		displayName: 'Motivo Do Cancelamento',
		name: 'reason',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['cancel'],
			},
		},
		default: '',
		description: 'Motivo pelo qual a nota fiscal está sendo cancelada',
	},
]
