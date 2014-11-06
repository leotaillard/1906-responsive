<section id="form" class="panel">
	<div class="container">
		<h2>Contact</h2>
				<form id="contact-form" class="sixteen columns clearfix" action="process.php" method="POST" >
					<div class="eight columns alpha">

						<!-- NAME -->
						<div id="prenom-group" class="form-group form-half alpha">
							<label for="prenom">Prénom</label>
							<input type="text" class="form-control" name="prenom" placeholder="Prénom">
							<!-- errors will go here -->
						</div>
						<!-- Nom -->
						<div id="nom-group" class="form-group form-half beta">
							<label for="nom">Nom</label>
							<input type="text" class="form-control" name="nom" placeholder="Nom">
							<!-- errors will go here -->
						</div>
						
						</div>
						<div class="eight columns omega">

						<!-- EMAIL -->
						<div id="email-group" class="form-group">
							<label for="email">Email</label>
							<input type="email" class="form-control" name="email" placeholder="Email">
							<!-- errors will go here -->
						</div>

						<!-- Phone number -->
						<div id="phone-group" class="form-group">
							<label for="phone">Téléphone</label>
							<input type="text" class="form-control" name="phone" placeholder="Téléphone">
							<!-- errors will go here -->
						</div>
						</div>
						<div class="sixteen columns alpha">

						<!-- MEssage number -->
							<div id="message-group" class="form-group">
							<label for="message">Message</label>
							<textarea class="form-control" name="message" placeholder="Message"></textarea>
							<!-- errors will go here -->
							</div>

						</div>
						<div class="sixteen columns alpha">
							<div id="candidature-group" class="form-group">
								<label for="checkbox-candidature">Cliquez ici pour envoyer votre candidature : </label>
								<input type="checkbox" id="checkbox-candidature" class="form-control" name="candidature" value="candidature">
								<!-- errors will go here -->
							</div>
							<!-- File  -->
							<div id="file-group" class="form-group">
							<label for="file">Veuillez nous joindre votre dossier de candidature avec lettre de motivation, CV et photo : </label>
							<input type="file" id="file" class="form-control" name="file">
							<!-- errors will go here -->
							</div>

						</div>
					<button type="submit" class="btn btn-submit">Envoyer</button>

		</form>


</section>
