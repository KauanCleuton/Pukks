<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
    <title>Pukks</title>
    <?php include '../php/consultaProduto.php' ?>
</head>

<body>
    <header class="c-header">
        <nav class="c-header__menu">
            <ul class="e-menu__list" data-js="menu-list">
                <li class="menu__list__item"><a href="#">MASCULINO</a></li>
                <li class="menu__list__item"><a href="#">FEMININO</a></li>
                <li class="menu__list__item"><a href="#">ESPORTES</a></li>
            </ul>
            <h1 class="e-menu__title"><a href="">PUKKS</a></h1>
            <ul class="e-menu__imgs">
                <li>
                    <a href="#"><img src="../img/icon/carrinho-carrinho 1.png" alt="carrinho de compras" width="30" height="30"></a>
                </li>
                <li class="e-menu__imgs__item" data-js="dropdown-button">
                    <a href="#"><img src="../img/icon//conta 1.png" alt="fazer login na conta" width="30" height="30"></a>
                    <ul class="e-menu__conta__dropdown" data-js="dropdown-menu">
                        <li class="e-menu__conta__dropdown__item"><a href="./login.html">login</a></li>
                        <li class="e-menu__conta__dropdown__item"><a href="./cadastro.html">registrar</a></li>
                    </ul>
                </li>
                <button class="e-menu__btn-hambuger" data-js="btn-hambuger">
                    <span class="e-btn-hambuger__icon"></span>
                </button>
            </ul>
        </nav>
    </header>


    <main class="c-principal">
        <section class="c-card-produtos">
            <div class="e-card-assets">
                <div class="e-small-card">
                    <img data-js="e-small-card" class="e-small-assets" src="<?php echo '../' . $produto['url']?>" alt="Imagem da Frente">
                    <img data-js="e-small-card" class="e-small-assets" src="<?php echo '../' . $produto['url']?>" alt="Imagem das Costas">
                    <img data-js="e-small-card" class="e-small-assets" src="<?php echo '../' . $produto['url']?>" alt="Imagem da Manga">
                    <img data-js="e-small-card" class="e-small-assets" src="<?php echo '../' . $produto['url']?>" alt="Imagem do Botão">
                </div>
                <img class="e-assets-main" src="<?php echo '../' . $produto['url']?>" alt="">
            </div>
            <div class="e-card-texts">
                <div class="e-text">
                    <span class="e-span-title"><?php echo $produto['nomeProduto']?></span>
                    <span class="e-span-price"><?php echo $produto['preco']?></span>
                    <div class="e-cor-assets">
                        <span class="e-text-cor">COR (ES):</span>
                        <span class="e-cor">COR ÚNICA</span>
                    </div>
                    <p class="e-span-title">Todos os tamanhos disponiveis</p>
                </div>

                <!-- <div class="e-card-tamanhos">
                    <span data-js="button-span" class="e-span__tamanhos_text">Tamanho</span>
                    <div class="e-dropdown-content" data-js="e-tamanhos-option">
                        <a data-js="e-tamanhos" href="#">PP</a>
                        <a data-js="e-tamanhos" href="#">P</a>
                        <a data-js="e-tamanhos" href="#">M</a>
                        <a data-js="e-tamanhos" href="#">G</a>
                        <a data-js="e-tamanhos" href="#">GG</a>
                        <a data-js="e-tamanhos" href="#">XG</a>
                    </div>
                </div> -->
                <button class="e-btn-add-carrinho u-button_type-1">ADICIONAR AO CARRINHO</button>
            </div>
        </section>
    </main>

    <footer class="c-rodape " id="u-margin">
        <h2 class="e-rodape__title">PUKKS</h2>
        <nav class="e-rodape__nav">

            <h3 class="e-rodape__nav__social__title">siga-nos</h3>
            <ul class="e-rodape__nav__social">
                <li class="e-nav__social__item"><a href=""><img src="../img/redes_sociais/twitter.png" alt="twitter"></a>
                </li>
                <li class="e-nav__social__item"><a href=""><img src="../img/redes_sociais/instagram.png" alt="instagram"></a></li>
                <li class="e-nav__social__item"><a href=""><img src="../img/redes_sociais/facebook.png" alt="facebook"></a></li>
            </ul>

            <h3 class="e-rodape__nav__about__title">sobre a pukks</h3>
            <ul class="e-rodape__nav__about">
                <li class="e-nav__about__item"><a href="">quem somos</a></li>
                <li class="e-nav__about__item"><a href="">contato</a></li>
                <li class="e-nav__about__item"><a href="">termos de uso</a></li>
            </ul>
        </nav>
        <p class="e-rodape__terms">Todos os direitos reservados. PUKKS © 2023. Todos os preços incluem taxas sobre
            as
            vendas. Nenhum direito pode derivar de uma informação contida neste site.</p>
    </footer>

</body>
<script src="../js/card_produtos.js" type="module"></script>

</html>