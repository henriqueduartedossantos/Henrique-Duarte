let inventario = [
    { nome: 'Teclado', preco: 100, emEstoque: true },
    { nome: 'Mouse', preco: 50, emEstoque: false },
    { nome: 'Monitor', preco: 600, emEstoque: true },
    { nome: 'Impressora', preco: 450, emEstoque: true },
    { nome: 'Cadeira', preco: 300, emEstoque: true },
    { nome: 'Mesa', preco: 700, emEstoque: false },
    { nome: 'Webcam', preco: 200, emEstoque: true },
    { nome: 'Fone de Ouvido', preco: 150, emEstoque: true },
    { nome: 'Microfone', preco: 180, emEstoque: true },
    { nome: 'Notebook', preco: 2500, emEstoque: true },
    { nome: 'Smartphone', preco: 1200, emEstoque: true },
    { nome: 'Tablet', preco: 800, emEstoque: false },
    { nome: 'Carregador', preco: 50, emEstoque: true },
    { nome: 'Cabo USB', preco: 20, emEstoque: true },
    { nome: 'HD Externo', preco: 400, emEstoque: false },
    { nome: 'Pendrive', preco: 30, emEstoque: true },
    { nome: 'Roteador', preco: 220, emEstoque: true },
    { nome: 'Fonte', preco: 120, emEstoque: true },
    { nome: 'Caixa de Som', preco: 300, emEstoque: false },
    { nome: 'Teclado Mecânico', preco: 500, emEstoque: true }
];

for (let i = 0; i < inventario.length; i++) 
    if (inventario[i].emEstoque) {
    console.log(inventario[i].nome + ' está em estoque.');
    }
    
    let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
    console.log(produtosEmEstoque);