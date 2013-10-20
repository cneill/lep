<?php
/*
LEA Portal
By Charles Neill, 2013
Some rights reserved
*/
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>UT Entrepreneurship Portal</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" type="text/css" href="css/bootstrap.flatly.min.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-responsive2.min.css">
    <link rel="stylesheet" type="text/css" href="css/lea.font.css">
    <style>
    <?php
    // PHP LESS COMPILER
    require('lib/php/lessphp/lessc.inc.php');
    $l = new lessc;
    try{
        echo $l->compileFile('less/portal.less');    
    } catch (exception $e) {
        die("Error with LESS");
    }
    ?>
    </style>
</head>
<body>
    <div class="container">
        <div id="header">
            <div id="logo" class="row-fluid">
                <div class="span12">
                    <a href="/portal/"><img src="img/portal-logo.png" alt="Longhorn Entrepreneurship Agency Portal" /></a>
                </div>
            </div>
            <div id="top-bar" class="row-fluid">
                <div id="filters" class="span12 text-center">
                    <h4><strong>Filters</strong></h4>
                    <div class="nav nav-pills">
                        <li class="active"><a href="#" data-category="all"><i class="icon-asterisk"></i> View All</a></li>
                        <li><a href="#" data-category="student"><i class="icon-graduation-cap"></i> Student Organizations</a></li>
                        <li><a href="#" data-category="univ"><i class="icon-book"></i> University Programs</a></li>
                        <li><a href="#" data-category="austin"><i class="icon-briefcase"></i> Austin Resources</a></li>
                    </div>
                </div>
            </div>
        </div>

        <div id="main" class="inner">
        </div>

    </div>

    <div class="footer row-fluid">
        <div class="span12">
            <p id="copy" class="text-center text-muted">&copy; Longhorn Entrepreneurship Agency 2013</p>
        </div>
    </div>    

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/underscore.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/jquery.leanModal.min.js"></script>
<script type="text/javascript" src="js/lea.data.js"></script>
<script type="text/javascript" src="js/lea.grid.js"></script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-43343703-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</body>
</html>