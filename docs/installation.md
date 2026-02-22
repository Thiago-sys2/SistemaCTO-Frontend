# SistemaCTO - Guia Completo de Instalação

## Sumario
- [Visão Geral](#1-sistemacto---visão-geral)
- [Ferramentas Necessários](#2-ferramentas-necessárias)
    - [Node](#21-node)
    - [NPM](#22-npm)
    - [Backend](#23-backend)
- [Clonando o Repositótio](#3-clonando-o-repositótio)
    - [Acessando a pasta](#31-acessar-a-pasta)
    - [Instalando as dependências](#32-instale-as-dependências)
    - [Iniciando a aplicação](#33-inicie-a-aplicação)
    - [Acessando o navegador](#34-acesse-no-navegador)

## 1. SistemaCTO - Visão Geral

Este documento descreve **passo a passo** como instalar, configurar e executar o frontend do **Sistema CTO** em um ambiente local, desde o clone do repositório até a execução da página web.

---

## 2. Ferramentas Necessárias

Instale **antes de tudo**:

### 2.1 Node
- Verificar instalação:
```
node --version
```

### 2.2 NPM
```
npm --version
```

### 2.3 Backend

É necessário ter o **backend do Sistema CTO** clonado e em execução, pois o frontend consome a API REST exposta pelo backend.

Por padrão, o backend deve estar disponível em:
```
http://localhost:8080
```

---

## 3. Clonando o repositótio
Primeiro, clone o repositório do projeto para sua máquina local:


```
git clone https://github.com/Thiago-sys2/SistemaCTO-Frontend.git
```

### 3.1 Acessar a pasta

```
cd sistema-cto-front
```

### 3.2 Instale as dependências

```
npm install
```

### 3.3 Inicie a aplicação

```
npm run start
```

### 3.4 Acesse no navegador

```
http://localhost:4200
```