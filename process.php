<?php

require 'class.phpmailer.php';

$mail = new PHPMailer;


$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

// validate the variables ======================================================
	// if any of these variables don't exist, add an error to our $errors array

	if (empty($_POST['nom']))
		$errors['nom'] = 'Le nom est requis.';
	if (empty($_POST['nom']))
		$errors['prenom'] = 'Le prénom est requis.';

	if (empty($_POST['email']))
		$errors['email'] = 'L\'email est requis.';

	if (empty($_POST['telephone']))
		$errors['telephone'] = 'Le numéro de téléphone est recquis.';

	if (empty($_POST['message']))
		$errors['message'] = 'Un message est recquis.';

// return a response ===========================================================

	// if there are any errors in our errors array, return a success boolean of false
	if ( ! empty($errors)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {

//$mail->SMTPDebug = 3;                               // Enable verbose debug output


		$mail->From = 'leo.taillard@gmail.com';
		$mail->FromName = 'Angéloz Mode';
		$mail->addAddress('leo.taillard@gmail.com', 'Léo Taillard');     // Add a recipient

		$mail->isHTML(true);                                  // Set email format to HTML

		// if there are no errors process our form, then return a message

		// DO ALL YOUR FORM PROCESSING HERE
		// THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)

		// show a message of success and provide a true success variable
		$data['success'] = true;
		$data['message'] .= '<p>Oh my fucking god, it will be legendary!</p>';

		$content = "";
		$content .= "Prénom : ".$_POST['prenom'].'<br>';
		$content .= "Nom : ".$_POST['nom'].'<br>';
		$content .= "Email : ".$_POST['email'].'<br>';
		$content .= "Téléphone : ".$_POST['telephone'].'<br>';
		$content .= "Message : ".$_POST['message'].'<br>';

		if (isset($_FILES['file']) &&
		    $_FILES['file']['error'] == UPLOAD_ERR_OK) {
		    $mail->AddAttachment($_FILES['file']['tmp_name'],
		                         $_FILES['file']['name']);
		}
		$mail->Subject = 'Formulaire de contact - 1906';
		$mail->Body    = $content;

		$mail->send();
	}

	// return all our data to an AJAX call
	echo json_encode($data);