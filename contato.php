<!DOCTYPE html>
<html>
<head>
	<title>Dev3Tech - contato |sites e sistemas baratos</title>
	<link rel="shortcut icon" href="images/shotcut.png">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.o, maximun-scale=1.0">
	<meta charset ="description" content="Empresa destinada ao desenvolvimento e manutenção de sites e sistemas "/>
	<meta charset= "keyword" content="empresa, sites,baratos,Ribeirão,das,Neves,Minas,Gerais,Belo,Horizonte,qualidade,Sistemas,sistema,gerenciamento,barato,em,conta,dev3tech,d3t,"/>
	<meta charset= "author" content="DEV3TECH"/>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<meta name="google-site-verification" content="es03mbE1fNKfMEpRXXmY94nU8IJ1dH2-wUwKXf7scME" />
	<link rel="alternate" href="http://dev3tech.com.br/" hreflang="pt-br" />
<script> 
$(document).ready(function(){
    $(".mobile-menu").click(function(){
        $(".mobile-menu ul").slideToggle("slow");
    });
});
</script>
</head>
<body>
	<div class="header-2">
		<div class="container">
		<a href="index.php"><div class="logo"></div></a><!--logo-->
			<?php include("menu_home.php");?>
			</div><!--container-->
	</div>
	<section class="sessao-contato">
		<div class="form-contato">
				<h2>Entre em contato</h2>
				<p>Nos envie o seu pedido, entraremos em contato o mais breve! <br/>Email: contato@dev3tech.com.br</p>
				<form action="envio_formulario.php" id="formulario-email" name="envio_formulario" method="post">
					<div class="input-form w100">
							<input type="text" name="nome" placeholder="Nome:" required/>
						</div><!--input-form w100-->

						<div class="input-form w50">
							<input type="text" name="email" placeholder="E-mail:" required/>
						</div><!--input-form w50-->

						<div class="input-form w50">
							<input type="text" name="telefone" placeholder="Telefone:" required/>
						</div><!--input-form w50-->

						<div class="input-form w100">
							<textarea name="mensagem" placeholder="Mensagem:" required></textarea>
						</div><!--input-form w100-->

						<div class="input-form w100">
							<input type="submit" name="enviar" value="ENVIAR"/>
						</div><!--input-form w100-->
				</form>
			</div><!--form-->
	</section>
	<?php
		include("footer.php");
	?>
		<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-100058519-1', 'auto');
		ga('send', 'pageview');

		</script>
</body>
</html>