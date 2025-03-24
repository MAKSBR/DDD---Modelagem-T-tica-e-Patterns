# Order Repository - TypeScript

Este é um projeto que atende o desafio do modulo DDD da Full Cycle, o desafio é:

Nesse desafio você deverá fazer com que a classe OrderRepository implemente totalmente os métodos definidos pelo OrderRepositoryInterface. 
Toda essa implementação deverá ser reproduzida através de testes.

* A linguagem de programação para este desafio é TypeScript

## 🚀 Tecnologias Utilizadas

- TypeScript
- Node.js
- Jest (para testes)
- Repositório em Memória

## 📁 Estrutura do Projeto

```
src/
├── domain/
│   ├── entities/
│   │   └── Order.ts
│   └── repositories/
│       └── OrderRepositoryInterface.ts
├── application/
│   └── use-cases/
│       ├── CreateOrderUseCase.ts
│       ├── DeleteOrderUseCase.ts
│       ├── GetAllOrdersUseCase.ts
│       ├── GetOrderByIdUseCase.ts
│       └── UpdateOrderUseCase.ts
└── infrastructure/
    └── repositories/
        └── OrderRepositoryMemory.ts
```

## 🛠️ Casos de Uso

1. **CreateOrderUseCase**: Criar um novo pedido
2. **GetOrderByIdUseCase**: Buscar um pedido por ID
3. **GetAllOrdersUseCase**: Listar todos os pedidos
4. **UpdateOrderUseCase**: Atualizar um pedido existente
5. **DeleteOrderUseCase**: Remover um pedido

### Cobertura de Testes

O projeto possui testes para todos os casos de uso:

- ✅ Criação de pedidos
- ✅ Busca de pedidos por ID
- ✅ Listagem de todos os pedidos
- ✅ Atualização de pedidos
- ✅ Remoção de pedidos

## 📝 Funcionalidades

### Order (Pedido)
- ID (identificador único)
- Produto
- Quantidade
- Preço
- Total (calculado automaticamente)

### Operações Disponíveis
- Criar novo pedido
- Buscar pedido por ID
- Listar todos os pedidos
- Atualizar pedido existente
- Remover pedido

## 🏗️ Arquitetura

O projeto segue os princípios do DDD e Clean Architecture:

- **Domain**: Contém as entidades e interfaces do domínio
- **Application**: Implementa os casos de uso da aplicação
- **Infrastructure**: Contém implementações técnicas (repositório em memória)

## 🔍 Validações

- Verificação de existência de pedido antes de atualizar
- Verificação de existência de pedido antes de deletar
- Validações de dados na criação de pedidos
- Verificação de IDs duplicados

## Desenvolvido por Gilson Moreira dos Santos
