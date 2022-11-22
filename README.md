# Integração via script com Identity Platform

## Requisitos

- Versão do Node deve ser no mínimo 16
- Instalar as deeps `npm i`
- Para verificar o token é preciso ter o GCloud instalado e configurado: [Link da Doc](https://cloud.google.com/sdk/docs/install?hl=pt-br)

## Login via Firebase

Ao realizar o login o token será copiado para a área de transferência, basta executar o seguinte comando

```bash
$ node src/login.mjs email senha

Exemplo:
$ node src/login.mjs dev.vinicius@player1.com.br password123
```

## Verificar token via SDK Admin Firebase

Para verificar se o token é válido no Identity Platform é a seguinte função:

```bash
node src/verify-token.mjs token

Exemplo
node src/verify-token.mjs cola-resultado-do-login
```
