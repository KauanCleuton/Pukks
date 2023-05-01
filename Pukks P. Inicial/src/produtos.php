<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/style.css">
  <title>Pukks</title>
  <?php include 'php/consultaProdutos.php'?>
  <?php include 'php/paginacaoProdutos.php'?>
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
          <a href="#"><img src="./img/icon/carrinho-carrinho 1.png" alt="carrinho de compras" width="30" height="30"></a>
        </li>
        <li class="e-menu__imgs__item" data-js="dropdown-button" >
          <a href="#"><img src="./img/icon//conta 1.png" alt="fazer login na conta" width="30" height="30"></a>
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

  <main class="c-produtos_principal">
    <section class="e-produtos_principal__marcas u-container">
      <div class="e-marcas__container ">
        <ul class="e-marcas__container__list">
          <li><img src="./img/logos_marcas/adidas-9.svg" alt="" width="120" height="120"></li>
          <li><img src="./img/logos_marcas/calvin-klein-2017-logo.svg" alt=""width="120" height="120"></li>
          <li><img src="./img/logos_marcas/ducam.svg" alt=""width="120" height="120"></li>
          <li><img src="./img/logos_marcas/everlast.svg" alt=""width="120" height="120"></li>
          <li><img src="./img/logos_marcas/jordan-2.svg" alt=""width="120" height="120"></li>
          <li><img src="./img/logos_marcas/lacoste-logo.svg" alt=""width="120" height="120"></li>
          <li><img src="./img/logos_marcas/nike-11.svg" alt=""width="120" height="120"></li>
          <li><img src="./img/logos_marcas/puma-logo.svg" alt=""width="120" height="120"></li>
          <li><img src="./img/logos_marcas/polo.svg" alt=""width="120" height="120"></li>
          <li><img src="./img/logos_marcas/torra.svg" alt=""width="120" height="120"></li>
        </ul>
      </div>
    </section>
    <section class="e-produtos_principal__lista_produtos u-container">
      <div class="e-lista_produtos__container">
        <div class="search_container">
          <input type="text" name="search" id="search" placeholder="Buscar...">
        </div>
        <ul class="e-lista_produtos__container__list">
        <?php foreach ($produtos as $produtos): ?>
          <li class="e-list__item">
            <a href="">
              <figure class="e-list__item__img">
                <img src="<?php echo './' . $produtos['caminhoImg'] ?>" alt="">
              </figure>
              <p class="e-list__item__texto"><?php echo $produtos['nomeProduto'] ?></p>
              <span class="e-list__item__preco"> <?php echo 'R$', number_format($produtos['preco'], 2, ',', '.')  ?> </span>
            </a>
          </li>
          <?php endforeach ?>
        </ul>
        <?php echo "<div class='e-lista_produtos__container__paginacao'     data-js='paginacao-container'> <div class='e-paginacao__list'>";
          for ($i = 1; $i <= $total_paginas; $i++) {
            if ($i === $pagina_atual) {
                echo "<span class='e-paginacao__item'>$i</span>";
            } else {
                echo "<span class='e-paginacao__item' data-js='$i'><a href='produtos.php?pagina=$i' class='pagina'>$i</a></span>";
            }
        }
        echo "</div> </div>";?>
      </div>
    </section>
  </main>
  
  <footer class="c-rodape">
      <h2 class="e-rodape__title">PUKKS</h2>
      <nav class="e-rodape__nav">

        <h3 class="e-rodape__nav__social__title">siga-nos</h3>
        <ul class="e-rodape__nav__social">
          <li class="e-nav__social__item"><a href=""><img src="./img/redes_sociais/twitter.png" alt="twitter"></a></li>
          <li class="e-nav__social__item"><a href=""><img src="./img/redes_sociais/instagram.png" alt="instagram"></a></li>
          <li class="e-nav__social__item"><a href=""><img src="./img/redes_sociais/facebook.png" alt="facebook"></a></li>
        </ul>
        
        <h3 class="e-rodape__nav__about__title">sobre a pukks</h3>
        <ul class="e-rodape__nav__about">
          <li class="e-nav__about__item"><a href="">quem somos</a></li>
          <li class="e-nav__about__item"><a href="">contato</a></li>
          <li class="e-nav__about__item"><a href="">termos de uso</a></li>
        </ul>
      </nav>
      <p class="e-rodape__terms">Todos os direitos reservados. PUKKS © 2023. Todos os preços incluem taxas sobre as vendas. Nenhum direito pode derivar de uma informação contida neste site.</p>
  </footer>

</body>
<!-- <script src="./js/index.js" type="module"></script> -->
<script src="./js/produtos.js"></script>
</html>