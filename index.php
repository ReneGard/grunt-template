<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">

    <title>Grunt JS Template</title>

    <link rel="stylesheet" href="dist/css/main.css"/>

</head>
<body>

<!-- Main block -->
<div class="layout">

    <!-- header -->
    <header class="header">

        <div class="wrapper">

        </div>

    </header>



    <!-- container -->
    <section class="container">

        <!-- Блок который держит ширину, если нужно мин/макс -->
        <div class="wrapper">


            <aside class="sidebar">

                <div class="block"><img src="dist/img/pic/banner-01.jpg" alt=""/></div>

                <div class="block"><img src="dist/img/pic/banner-02.jpg" alt=""/></div>

                <div class="block"><img src="dist/img/pic/banner-03.jpg" alt=""/></div>

            </aside>

            <div class="content">

                <div class="block"><img src="dist/img/pic/promo-01.jpg" alt=""/></div>

                <div class="block"><img src="dist/img/pic/promo-02.jpg" alt=""/></div>

                <div class="block"><img src="dist/img/pic/promo-03.jpg" alt=""/></div>

            </div>

        </div>

    </section>


    <!-- footer -->
    <footer class="footer">

        <div class="wrapper">

        </div>

    </footer>


</div>




<!-- Include JS-code after DOM loading -->
<?php include 'tpl/js.inc.tpl'; ?>

</body>

</html>