# n8n-nodes-asaas-pagamentos

![Asaas Logo](logo.png)

Este é um nó da comunidade n8n. Ele permite que você use o Asaas em seus fluxos de trabalho n8n.

O Asaas é uma plataforma de pagamentos brasileira que oferece soluções completas para cobrança, recebimento e pagamento, incluindo PIX, boleto bancário, cartão de crédito e débito, TED, além de funcionalidades como gestão de assinaturas, split de pagamentos, antecipação de recebíveis e muito mais.

[n8n](https://n8n.io/) é uma plataforma de automação de fluxo de trabalho [licenciada fair-code](https://docs.n8n.io/reference/license/).

## Instalação

Siga o [guia de instalação](https://docs.n8n.io/integrations/community-nodes/installation/) na documentação de nós da comunidade n8n.

```bash
npm install n8n-nodes-asaas-pagamentos
```

## Operações

### Recursos Implementados da API Asaas

#### ✅ Clientes

- [x] **Listar clientes** - Recuperar lista de clientes com filtros opcionais
- [x] **Criar novo cliente** - Criar um novo cliente com dados pessoais, de contato e endereço
- [x] **Recuperar cliente específico** - Obter detalhes completos de um cliente pelo ID
- [x] **Atualizar cliente existente** - Modificar dados de um cliente já cadastrado
- [x] **Deletar cliente** - Remover cliente do sistema permanentemente
- [x] **Restaurar cliente removido** - Reativar cliente que foi deletado anteriormente

#### ⏳ Cobranças (Payments)

- [ ] **Criar nova cobrança** - Criar cobrança com diversas formas de pagamento
- [ ] **Listar cobranças** - Recuperar lista de cobranças com filtros avançados
- [ ] **Criar cobrança com cartão de crédito** - Cobrança direta com cartão
- [ ] **Capturar cobrança com Pré-Autorização** - Finalizar pagamento pré-autorizado
- [ ] **Pagar cobrança com cartão de crédito** - Processar pagamento de cobrança existente
- [ ] **Recuperar informações de pagamento** - Obter dados de billing de uma cobrança
- [ ] **Informações sobre visualização** - Dados de quando a cobrança foi visualizada
- [ ] **Recuperar cobrança específica** - Obter detalhes de uma cobrança
- [ ] **Atualizar cobrança existente** - Modificar dados de cobrança pendente
- [ ] **Excluir cobrança** - Remover cobrança do sistema
- [ ] **Restaurar cobrança removida** - Reativar cobrança excluída
- [ ] **Recuperar status de cobrança** - Verificar status atual da cobrança
- [ ] **Estornar cobrança** - Realizar estorno total ou parcial
- [ ] **Obter linha digitável do boleto** - Código de barras para pagamento
- [ ] **Obter QR Code PIX** - Gerar QR Code para pagamento via PIX
- [ ] **Confirmar recebimento em dinheiro** - Marcar como pago em dinheiro
- [ ] **Desfazer confirmação em dinheiro** - Cancelar confirmação de pagamento em dinheiro
- [ ] **Simulador de vendas** - Simular cenários de pagamento

#### ⏳ Ações em Sandbox

- [ ] **Confirmar pagamento** - Simular confirmação de pagamento no ambiente de teste
- [ ] **Adicionar saldo** - Adicionar crédito para testes na conta sandbox

#### ⏳ Cobranças com Dados Resumidos

- [ ] **Criar cobrança com dados resumidos** - Retorna resposta simplificada para performance

#### ⏳ Cartão de Crédito

- [ ] **Tokenização de cartão de crédito** - Gerar token seguro para cartão
- [ ] **Criar cobrança com cartão tokenizado** - Usar token para criar cobrança
- [ ] **Validar dados do cartão** - Verificar se cartão é válido
- [ ] **Listar cartões tokenizados** - Recuperar cartões salvos do cliente

#### ⏳ Estornos

- [ ] **Listar estornos de uma cobrança** - Histórico de estornos
- [ ] **Criar estorno total** - Estornar valor completo da cobrança
- [ ] **Criar estorno parcial** - Estornar parte do valor da cobrança
- [ ] **Recuperar detalhes do estorno** - Informações específicas do estorno

#### ⏳ Splits de Pagamento

- [ ] **Recuperar split pago** - Informações de divisão de pagamento realizada
- [ ] **Configurar splits** - Definir divisão de valores entre contas
- [ ] **Listar splits** - Histórico de divisões de pagamento
- [ ] **Cancelar split** - Desfazer divisão configurada

#### ⏳ Conta Escrow

- [ ] **Encerrar garantia da cobrança** - Finalizar processo de garantia
- [ ] **Configurar conta escrow** - Ativar sistema de garantia
- [ ] **Consultar status escrow** - Verificar situação da garantia

#### ⏳ Documentos de Cobranças

- [ ] **Upload de documentos da cobrança** - Anexar arquivos à cobrança
- [ ] **Listar documentos** - Recuperar arquivos anexados
- [ ] **Deletar documento** - Remover arquivo anexado
- [ ] **Download de documento** - Baixar arquivo específico

#### ⏳ Notificações

- [ ] **Atualizar notificação existente** - Modificar configurações de notificação
- [ ] **Configurar notificações** - Definir tipos de notificações ativas
- [ ] **Listar notificações** - Recuperar histórico de notificações enviadas
- [ ] **Criar nova notificação** - Configurar nova regra de notificação
- [ ] **Deletar notificação** - Remover configuração de notificação

#### ⏳ Parcelamentos

- [ ] **Criar parcelamento** - Dividir cobrança em múltiplas parcelas
- [ ] **Listar parcelamentos** - Recuperar parcelamentos criados
- [ ] **Recuperar parcelamento específico** - Detalhes de um parcelamento
- [ ] **Atualizar parcelamento** - Modificar parcelamento existente
- [ ] **Deletar parcelamento** - Cancelar parcelamento

#### ⏳ Assinaturas (Recorrência)

- [ ] **Criar nova assinatura** - Configurar cobrança recorrente
- [ ] **Listar assinaturas** - Recuperar assinaturas ativas e inativas
- [ ] **Recuperar assinatura específica** - Detalhes de uma assinatura
- [ ] **Atualizar assinatura** - Modificar dados da assinatura
- [ ] **Cancelar assinatura** - Encerrar cobrança recorrente
- [ ] **Listar cobranças da assinatura** - Histórico de cobranças geradas
- [ ] **Listar faturas da assinatura** - Faturas relacionadas à assinatura

#### ⏳ PIX

- [ ] **Criar chave PIX** - Registrar nova chave PIX na conta
- [ ] **Listar chaves PIX** - Recuperar chaves PIX cadastradas
- [ ] **Deletar chave PIX** - Remover chave PIX da conta
- [ ] **Criar cobrança PIX** - Gerar cobrança específica para PIX
- [ ] **Gerar QR Code estático** - QR Code reutilizável para recebimentos
- [ ] **Gerar QR Code dinâmico** - QR Code para valor específico
- [ ] **Decodificar QR Code** - Extrair informações de QR Code PIX

#### ⏳ Transações PIX

- [ ] **Pagar QR Code** - Efetuar pagamento via QR Code PIX
- [ ] **Listar transações PIX** - Histórico de transações PIX
- [ ] **Cancelar transação PIX** - Estornar transação PIX quando possível
- [ ] **Recuperar comprovante PIX** - Obter comprovante da transação
- [ ] **Consultar status transação** - Verificar situação da transação PIX

#### ⏳ PIX Recorrente

- [ ] **Listar recorrências PIX** - Recuperar PIX programados
- [ ] **Criar recorrência PIX** - Agendar PIX recorrente
- [ ] **Cancelar recorrência PIX** - Interromper PIX programado
- [ ] **Atualizar recorrência PIX** - Modificar agendamento PIX

#### ✅ Link de Pagamentos

- [x] **Criar link de pagamentos** - Gerar link para recebimento online
- [x] **Listar links de pagamentos** - Recuperar links criados
- [x] **Atualizar link de pagamentos** - Modificar configurações do link
- [x] **Recuperar link específico** - Detalhes de um link de pagamento
- [x] **Deletar link de pagamentos** - Remover link criado
- [x] **Recuperar QR Code do link** - QR Code para compartilhamento

#### ⏳ Checkout

- [ ] **Criar novo checkout** - Página de checkout personalizada
- [ ] **Configurar checkout** - Definir aparência e comportamento
- [ ] **Recuperar configurações** - Obter configurações do checkout
- [ ] **Atualizar configurações** - Modificar checkout existente

#### ⏳ Transferências

- [ ] **Transferir para conta de outra instituição** - TED/DOC para outros bancos
- [ ] **Transferir via chave PIX** - Transferência instantânea via PIX
- [ ] **Listar transferências** - Histórico de transferências realizadas
- [ ] **Recuperar transferência específica** - Detalhes de uma transferência
- [ ] **Cancelar transferência** - Cancelar transferência agendada
- [ ] **Transferir para conta Asaas** - Transferência entre contas Asaas

#### ⏳ Antecipações

- [ ] **Recuperar antecipação** - Informações sobre antecipação específica
- [ ] **Solicitar antecipação** - Antecipar recebíveis disponíveis
- [ ] **Listar antecipações** - Histórico de antecipações
- [ ] **Simular antecipação** - Calcular valores de antecipação
- [ ] **Cancelar antecipação** - Cancelar solicitação pendente

#### ⏳ Negativações

- [ ] **Criar negativação** - Registrar negativação de cliente
- [ ] **Listar negativações** - Recuperar negativações realizadas
- [ ] **Recuperar negativação específica** - Detalhes de uma negativação
- [ ] **Cancelar negativação** - Remover negativação ativa
- [ ] **Consultar situação CPF/CNPJ** - Verificar restrições existentes

#### ⏳ Pagamento de Contas

- [ ] **Criar pagamento de conta** - Pagar boletos e contas
- [ ] **Listar pagamentos de contas** - Histórico de pagamentos
- [ ] **Recuperar pagamento específico** - Detalhes de um pagamento
- [ ] **Cancelar pagamento** - Cancelar pagamento agendado
- [ ] **Consultar código de barras** - Verificar dados do boleto
- [ ] **Simular pagamento** - Calcular taxas e prazos

#### ⏳ Recargas de Celular

- [ ] **Solicitar recarga** - Fazer recarga de celular pré-pago
- [ ] **Listar recargas** - Histórico de recargas realizadas
- [ ] **Recuperar recarga específica** - Detalhes de uma recarga
- [ ] **Consultar operadoras** - Listar operadoras disponíveis
- [ ] **Consultar valores** - Valores de recarga disponíveis

#### ⏳ Consulta Serasa

- [ ] **Realizar consulta Serasa** - Consultar CPF/CNPJ no Serasa
- [ ] **Listar consultas** - Histórico de consultas realizadas
- [ ] **Recuperar consulta específica** - Resultado de uma consulta
- [ ] **Consultar score** - Verificar score de crédito

#### ⏳ Extrato

- [ ] **Recuperar extrato** - Extrato financeiro da conta
- [ ] **Filtrar por período** - Extrato de período específico
- [ ] **Exportar extrato** - Download do extrato em PDF/Excel
- [ ] **Extrato detalhado** - Informações completas das transações

#### ⏳ Informações Financeiras

- [ ] **Recuperar saldo da conta** - Saldo atual e disponível
- [ ] **Obter informações financeiras** - Dados financeiros consolidados
- [ ] **Estatísticas de faturamento** - Métricas de recebimento
- [ ] **Previsão de recebimentos** - Valores a receber por período

#### ⏳ Informações da Conta

- [ ] **Recuperar dados comerciais** - Informações da empresa
- [ ] **Atualizar informações da conta** - Modificar dados cadastrais
- [ ] **Configurar personalização** - White label e customizações
- [ ] **Recuperar configurações** - Configurações atuais da conta
- [ ] **Upload de logo** - Personalizar logotipo da conta

#### ⏳ Notas Fiscais

- [ ] **Agendar nota fiscal** - Programar emissão de NF
- [ ] **Listar notas fiscais** - Histórico de notas emitidas
- [ ] **Recuperar nota específica** - Detalhes de uma nota fiscal
- [ ] **Cancelar nota fiscal** - Cancelar nota já emitida
- [ ] **Download de XML** - Baixar arquivo XML da nota
- [ ] **Enviar por email** - Enviar nota fiscal por email

#### ⏳ Informações Fiscais

- [ ] **Listar configurações municipais** - Configurações fiscais por cidade
- [ ] **Configurar informações fiscais** - Definir dados para emissão de NF
- [ ] **Atualizar configurações** - Modificar configurações fiscais
- [ ] **Consultar alíquotas** - Verificar alíquotas municipais

#### ⏳ Webhooks

- [ ] **Criar novo webhook** - Configurar notificação via HTTP
- [ ] **Listar webhooks** - Recuperar webhooks configurados
- [ ] **Atualizar webhook** - Modificar configurações de webhook
- [ ] **Deletar webhook** - Remover webhook configurado
- [ ] **Testar webhook** - Enviar evento de teste
- [ ] **Reenviar evento** - Reprocessar evento específico
- [ ] **Listar eventos** - Histórico de eventos enviados

#### ⏳ Subcontas

- [ ] **Criar subconta** - Criar conta filha
- [ ] **Listar subcontas** - Recuperar subcontas criadas
- [ ] **Configurar subconta** - Definir permissões e limites
- [ ] **Atualizar subconta** - Modificar configurações
- [ ] **Desativar subconta** - Suspender acesso da subconta
- [ ] **Transferir entre subcontas** - Movimentar valores

#### ⏳ Documentos White Label

- [ ] **Verificar documentos pendentes** - Documentos aguardando aprovação
- [ ] **Enviar documentos** - Upload de documentos para análise
- [ ] **Consultar status** - Situação da análise de documentos
- [ ] **Reenviar documentos** - Submeter novamente após rejeição

#### ⏳ Chargeback

- [ ] **Criar disputa de chargeback** - Contestar chargeback recebido
- [ ] **Listar chargebacks** - Histórico de chargebacks
- [ ] **Recuperar chargeback específico** - Detalhes de uma disputa
- [ ] **Anexar documentos** - Adicionar evidências à disputa
- [ ] **Acompanhar processo** - Status da contestação

#### ⏳ Cidades e Localização

- [ ] **Listar estados** - Estados brasileiros disponíveis
- [ ] **Listar cidades por estado** - Cidades de um estado específico
- [ ] **Consultar CEP** - Buscar endereço por CEP
- [ ] **Validar endereço** - Verificar validade de endereço

#### ⏳ Relatórios e Analytics

- [ ] **Relatório de vendas** - Análise de faturamento por período
- [ ] **Relatório de inadimplência** - Cobranças em atraso
- [ ] **Métricas de conversão** - Taxa de conversão de pagamentos
- [ ] **Dashboard financeiro** - Visão geral dos indicadores

## Credenciais

Para usar este nó, você precisa se autenticar com o Asaas. Você deve incluir os pré-requisitos (como criar uma conta no serviço), métodos de autenticação disponíveis e como configurá-los.

### Pré-requisitos

1. Crie uma conta no [Asaas](https://asaas.com) ou no [Sandbox do Asaas](https://sandbox.asaas.com) para testes
2. Gere sua chave de API no painel do Asaas

### Configuração de Autenticação

1. No n8n, vá para **Credenciais** > **Criar Nova Credencial**
2. Selecione **Asaas API**
3. Configure os seguintes campos:
   - **Chave de API**: Sua chave de API do Asaas
   - **Ambiente**: Escolha entre Produção ou Sandbox
4. Teste a conexão e salve

## Compatibilidade

- **Versão mínima do n8n**: 1.0.0
- **Versões testadas**: 1.0.0+
- **Node.js**: >=20.15

## Uso

Este nó permite integrar facilmente o Asaas aos seus fluxos de trabalho n8n. Comece criando clientes e depois avance para criação de cobranças e outras operações conforme suas necessidades.

Para usuários iniciantes no n8n, consulte a documentação [Experimente](https://docs.n8n.io/try-it-out/) para começar.

## Recursos

- [Documentação dos nós da comunidade n8n](https://docs.n8n.io/integrations/#community-nodes)
- [Documentação da API do Asaas](https://docs.asaas.com/docs)
- [Referência da API do Asaas](https://docs.asaas.com/reference)
- [Portal de desenvolvedores Asaas](https://asaas.com/developers)
- [Comunidade Discord Asaas](https://discord.gg/invite/X2kgZm69HV)

## Licença

[MIT](LICENSE.md)
