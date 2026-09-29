# Flexiparabola II – Industrial Services

Website institucional da Flexiparabola II, em português de Portugal.

## Desenvolvimento

```bash
npm install
npm run dev
```

Copie `.env.example` para `.env.local`. O formulário de contacto envia email quando `SMTP_PASS` tem a palavra-passe de aplicação da conta Gmail. Sem esse valor, o pedido não sai do site.

## Verificação

```bash
npm run lint
npm run typecheck
npm run build
```

As fotografias em `public/images` são temporárias. Para as substituir, mantenha os nomes dos ficheiros ou atualize `content/images.ts`.
