<?php

$PARAM_hote='localhost'; // le chemin vers le serveur
$PARAM_port='8888';
$PARAM_nom_bd='1906'; // le nom de votre base de données
$PARAM_utilisateur='root'; // nom d'utilisateur pour se connecter
$PARAM_mot_passe='root'; // mot de passe de l'utilisateur pour se connecter
try{
  $pdo = new PDO('mysql:host='.$PARAM_hote.';dbname='.$PARAM_nom_bd, $PARAM_utilisateur, $PARAM_mot_passe, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
}
catch(Exception $e)
{
        echo 'Erreur : '.$e->getMessage().'<br />';
        echo 'N° : '.$e->getCode();
}


// On envois la requète
$sql = $pdo->query("SELECT * FROM marques");
$sql->setFetchMode(PDO::FETCH_OBJ);


while( $value = $sql->fetch() ){

?>
<div id='<?php echo $value->marque; ?>' class="svg mix three columns <?php if ($value->fribourg){echo "fribourg";}?> <?php if ($value->latour){echo "latour";}?> <?php if ($value->man){echo "man";}?> <?php if ($value->woman){echo "woman";}?>">
<p><?php echo $value->marque; ?></p>
</div>
<?php
}
?>