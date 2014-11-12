<?php

include("connect.php");


// On envois la requète
$sql = $pdo->query("SELECT * FROM marques WHERE display = 1");
$sql->setFetchMode(PDO::FETCH_OBJ);


while( $value = $sql->fetch() ){ ?>
<div id='<?php echo $value->marque; ?>' class="svg mix three columns <?php if ($value->FribourgCentreWomen){echo "fribourgwoman";}?> <?php if ($value->FribourgCentreMen){echo "fribourgman";}?> <?php if ($value->CentreLaTourWomen){echo "centrelatourwoman";}?> <?php if ($value->CentreLaTourMen){echo "centrelatourman";}?>">

	<img src="../img/brands/<?php echo $value->nomImage; ?>" alt="<?php echo $value->marque; ?>">
 	<h3><?php echo $value->marque; ?></h3>
</div>
<?php
	}
?>