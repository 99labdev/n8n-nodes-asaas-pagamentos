import { INodeProperties } from 'n8n-workflow';

// Payment Link operations for Asaas API
export const paymentLinkOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['paymentLink'],
			},
		},
		options: [
			{
				name: 'Adicionar Imagem',
				value: 'addImage',
				description: 'Adicionar uma imagem a um link de pagamento',
				action: 'Adicionar imagem ao link',
			},
			{
				name: 'Atualizar',
				value: 'update',
				description: 'Atualizar um link de pagamento existente',
				action: 'Atualizar link de pagamento',
			},
			{
				name: 'Criar',
				value: 'create',
				description: 'Criar um novo link de pagamento',
				action: 'Criar link de pagamento',
			},
			{
				name: 'Definir Imagem Principal',
				value: 'setMainImage',
				description: 'Definir imagem principal do link de pagamento',
				action: 'Definir imagem principal',
			},
			{
				name: 'Deletar',
				value: 'delete',
				description: 'Deletar um link de pagamento',
				action: 'Deletar link de pagamento',
			},
			{
				name: 'Listar',
				value: 'list',
				description: 'Listar todos os links de pagamento',
				action: 'Listar links de pagamento',
			},
			{
				name: 'Listar Imagens',
				value: 'listImages',
				description: 'Listar imagens de um link de pagamento',
				action: 'Listar imagens do link',
			},
			{
				name: 'Obter Imagem',
				value: 'getImage',
				description: 'Recuperar uma única imagem do link de pagamento',
				action: 'Recuperar imagem do link',
			},
			{
				name: 'Recuperar',
				value: 'get',
				description: 'Recuperar um link de pagamento específico',
				action: 'Recuperar link de pagamento',
			},
			{
				name: 'Remover Imagem',
				value: 'removeImage',
				description: 'Remover uma imagem do link de pagamento',
				action: 'Remover imagem do link',
			},
			{
				name: 'Restaurar',
				value: 'restore',
				description: 'Restaurar um link de pagamento removido',
				action: 'Restaurar link de pagamento',
			},
		],
		default: 'create',
	},
];

// Payment Link fields for Asaas API
export const paymentLinkFields: INodeProperties[] = [
	// Common fields
	{
		displayName: 'ID Do Link De Pagamento',
		name: 'paymentLinkId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['get', 'update', 'delete', 'restore', 'addImage', 'listImages', 'getImage', 'removeImage', 'setMainImage'],
			},
		},
		default: '',
		placeholder: 'pay_123456789',
		description: 'ID único do link de pagamento',
		required: true,
	},

	// Create operation fields
	{
		displayName: 'Nome',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['create'],
			},
		},
		default: '',
		placeholder: 'Link para pagamento de serviços',
		description: 'Nome identificador do link de pagamento',
		required: true,
	},
	{
		displayName: 'Valor',
		name: 'value',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['create'],
			},
		},
		default: 0,
		placeholder: '100.00',
		description: 'Valor do pagamento em reais',
	},
	{
		displayName: 'Tipo De Cobrança',
		name: 'chargeType',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Valor Fixo',
				value: 'DETACHED',
				description: 'Valor fixo definido no link',
			},
			{
				name: 'Valor Livre',
				value: 'UNDEFINED',
				description: 'Cliente pode escolher o valor',
			},
		],
		default: 'DETACHED',
		description: 'Tipo de cobrança do link',
	},
	{
		displayName: 'Forma De Pagamento',
		name: 'billingType',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Boleto Bancário',
				value: 'BOLETO',
			},
			{
				name: 'Cartão De Crédito',
				value: 'CREDIT_CARD',
			},
			{
				name: 'PIX',
				value: 'PIX',
			},
			{
				name: 'Débito Em Conta',
				value: 'DEBIT_CARD',
			},
		],
		default: 'BOLETO',
		description: 'Forma de pagamento aceita para o link',
		required: true,
	},
	{
		displayName: 'Dias Para Vencimento',
		name: 'dueDateLimitDays',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['create'],
			},
		},
		default: 7,
		typeOptions: {
			minValue: 1,
			maxValue: 365,
		},
		description: 'Quantidade de dias úteis para vencimento da cobrança',
		required: true,
	},
	{
		displayName: 'Campos Adicionais',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['create'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Configurações De Juros',
				name: 'interest',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {},
				options: [
					{
						displayName: 'Configurações De Juros',
						name: 'interestSettings',
						values: [
							{
								displayName: 'Valor',
								name: 'value',
								type: 'number',
								default: 0,
								description: 'Valor dos juros',
							},
							{
								displayName: 'Tipo',
								name: 'type',
								type: 'options',
								options: [
									{
										name: 'Valor Fixo',
										value: 'FIXED',
									},
									{
										name: 'Percentual',
										value: 'PERCENTAGE',
									},
								],
								default: 'PERCENTAGE',
								description: 'Tipo dos juros',
							},
						],
					},
				],
			},
			{
				displayName: 'Configurações De Multa',
				name: 'fine',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {},
				options: [
					{
						displayName: 'Configurações De Multa',
						name: 'fineSettings',
						values: [
							{
								displayName: 'Valor',
								name: 'value',
								type: 'number',
								default: 0,
								description: 'Valor da multa',
							},
							{
								displayName: 'Tipo',
								name: 'type',
								type: 'options',
								options: [
									{
										name: 'Valor Fixo',
										value: 'FIXED',
									},
									{
										name: 'Percentual',
										value: 'PERCENTAGE',
									},
								],
								default: 'PERCENTAGE',
								description: 'Tipo da multa',
							},
						],
					},
				],
			},
			{
				displayName: 'Dados De Desconto',
				name: 'discount',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {},
				options: [
					{
						displayName: 'Configurações De Desconto',
						name: 'discountSettings',
						values: [
							{
								displayName: 'Valor',
								name: 'value',
								type: 'number',
								default: 0,
								description: 'Valor do desconto',
							},
							{
								displayName: 'Tipo',
								name: 'type',
								type: 'options',
								options: [
									{
										name: 'Valor Fixo',
										value: 'FIXED',
									},
									{
										name: 'Percentual',
										value: 'PERCENTAGE',
									},
								],
								default: 'FIXED',
								description: 'Tipo do desconto',
							},
							{
								displayName: 'Dias De Duração',
								name: 'dueDateLimitDays',
								type: 'number',
								default: 0,
								description: 'Dias para aplicação do desconto antes do vencimento',
							},
						],
					},
				],
			},
			{
				displayName: 'Data De Vencimento',
				name: 'endDate',
				type: 'dateTime',
				default: '',
				description: 'Data limite para pagamentos através do link',
			},
			{
				displayName: 'Data De Vencimento (String)',
				name: 'endDateString',
				type: 'string',
				default: '',
				placeholder: '2024-12-31',
				description: 'Data limite no formato YYYY-MM-DD',
			},
			{
				displayName: 'Descrição',
				name: 'description',
				type: 'string',
				default: '',
				placeholder: 'Descrição do produto/serviço',
				description: 'Descrição do que está sendo cobrado',
			},
			{
				displayName: 'Limite De Usos',
				name: 'maxInstallmentCount',
				type: 'number',
				default: 1,
				description: 'Número máximo de vezes que o link pode ser usado',
			},
			{
				displayName: 'Observações',
				name: 'observations',
				type: 'string',
				typeOptions: {
					rows: 3,
				},
				default: '',
				description: 'Observações adicionais sobre o pagamento',
			},
			{
				displayName: 'URL De Sucesso',
				name: 'successUrl',
				type: 'string',
				default: '',
				placeholder: 'https://meusite.com/sucesso',
				description: 'URL para redirecionamento após pagamento bem-sucedido',
			},
			{
				displayName: 'Valor Máximo',
				name: 'maximumValue',
				type: 'number',
				default: 0,
				description: 'Valor máximo quando chargeType for UNDEFINED',
			},
			{
				displayName: 'Valor Mínimo',
				name: 'minimumValue',
				type: 'number',
				default: 0,
				description: 'Valor mínimo quando chargeType for UNDEFINED',
			},
			{
				displayName: 'Webhook De Notificação',
				name: 'notificationUrl',
				type: 'string',
				default: '',
				placeholder: 'https://meusite.com/webhook',
				description: 'URL para receber notificações sobre o pagamento',
			},
		],
	},

	// Update operation fields
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Ativo',
				name: 'active',
				type: 'boolean',
				default: true,
				description: 'Whether the link is active or not',
			},
			{
				displayName: 'Data De Vencimento',
				name: 'endDate',
				type: 'dateTime',
				default: '',
				description: 'Data limite para pagamentos através do link',
			},
			{
				displayName: 'Data De Vencimento (String)',
				name: 'endDateString',
				type: 'string',
				default: '',
				placeholder: '2024-12-31',
				description: 'Data limite no formato YYYY-MM-DD',
			},
			{
				displayName: 'Descrição',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Descrição do que está sendo cobrado',
			},
			{
				displayName: 'Limite De Usos',
				name: 'maxInstallmentCount',
				type: 'number',
				default: 1,
				description: 'Número máximo de vezes que o link pode ser usado',
			},
			{
				displayName: 'Nome',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Nome identificador do link de pagamento',
			},
			{
				displayName: 'Observações',
				name: 'observations',
				type: 'string',
				typeOptions: {
					rows: 3,
				},
				default: '',
				description: 'Observações adicionais sobre o pagamento',
			},
			{
				displayName: 'URL De Sucesso',
				name: 'successUrl',
				type: 'string',
				default: '',
				description: 'URL para redirecionamento após pagamento bem-sucedido',
			},
			{
				displayName: 'Valor',
				name: 'value',
				type: 'number',
				default: 0,
				description: 'Valor do pagamento em reais',
			},
			{
				displayName: 'Webhook De Notificação',
				name: 'notificationUrl',
				type: 'string',
				default: '',
				description: 'URL para receber notificações sobre o pagamento',
			},
		],
	},

	// List operation fields
	{
		displayName: 'Limite',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['list'],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['list'],
			},
		},
		default: 0,
		description: 'Número de registros para pular',
	},
	{
		displayName: 'Filtros Adicionais',
		name: 'additionalFilters',
		type: 'collection',
		placeholder: 'Adicionar Filtro',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['list'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Nome',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filtrar por nome do link',
			},
			{
				displayName: 'Ativo',
				name: 'active',
				type: 'boolean',
				default: true,
				description: 'Whether to filter by active status',
			},
			{
				displayName: 'Data De Criação (Início)',
				name: 'dateCreatedGe',
				type: 'dateTime',
				default: '',
				description: 'Filtrar links criados a partir desta data',
			},
			{
				displayName: 'Data De Criação (Fim)',
				name: 'dateCreatedLe',
				type: 'dateTime',
				default: '',
				description: 'Filtrar links criados até esta data',
			},
		],
	},

	// Image operation fields
	{
		displayName: 'ID Da Imagem',
		name: 'imageId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['getImage', 'removeImage', 'setMainImage'],
			},
		},
		default: '',
		placeholder: 'img_123456789',
		description: 'ID único da imagem',
		required: true,
	},
	{
		displayName: 'Propriedade Do Arquivo De Entrada',
		name: 'binaryPropertyName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['addImage'],
			},
		},
		default: 'data',
		placeholder: 'data',
		description: 'Nome da propriedade que contém os dados binários do arquivo',
		required: true,
	},
	{
		displayName: 'Definir Como Principal',
		name: 'setAsMain',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['paymentLink'],
				operation: ['addImage'],
			},
		},
		default: false,
		description: 'Whether to set this image as the main image of the link',
	},
];
