/*
Auteur: Léo Taillard
*/
$(document).ready(function() {
            // process the form

            $('#checkbox-candidature').change(function(){
                $('#file-group').toggle();
            });



            $('form').submit(function(event) {


                $('.form-group').removeClass('has-error'); // remove the error class
                $('.help-block').remove(); // remove the error text

                // get the form data
                // there are many ways to get this data using jQuery (you can use the class or id also)
                var formData = {
                    'nom'              : $('input[name=nom]').val(),
                    'prenom'              : $('input[name=prenom]').val(),
                    'email'             : $('input[name=email]').val(),
                    'telephone'    : $('input[name=phone]').val(),
                    'message'   : $('#contact-form textarea').val(),
                    // 'file'  :  $("#contact-form input[name=file]").val(),
                };
                // process the form
                $.ajax({
                    type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
                    url         : 'process.php', // the url where we want to POST
                    data        : formData, // our data object
                    dataType    : 'json', // what type of data do we expect back from the server
                    encode      : true
                })
                    // using the done promise callback
                    .done(function(data) {

                        // log data to the console so we can see
                        console.log(data); 

                        // here we will handle errors and validation messages
                        if ( ! data.success) {
                            
                            // handle errors for name ---------------
                            if (data.errors.nom) {
                                $('#nom-group').addClass('has-error'); // add the error class to show red input
                                $('#nom-group').append('<div class="help-block">' + data.errors.nom + '</div>'); // add the actual error message under our input
                            }
                            if (data.errors.prenom) {
                                $('#prenom-group').addClass('has-error'); // add the error class to show red input
                                $('#prenom-group').append('<div class="help-block">' + data.errors.prenom + '</div>'); // add the actual error message under our input
                            }


                            // handle errors for email ---------------
                            if (data.errors.email) {
                                $('#email-group').addClass('has-error'); // add the error class to show red input
                                $('#email-group').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
                            }
                            if (data.errors.telephone) {
                                $('#phone-group').addClass('has-error'); // add the error class to show red input
                                $('#phone-group').append('<div class="help-block">' + data.errors.telephone + '</div>'); // add the actual error message under our input
                            }
                            if (data.errors.message) {
                                $('#message-group').addClass('has-error'); // add the error class to show red input
                                $('#message-group').append('<div class="help-block">' + data.errors.message + '</div>'); // add the actual error message under our input
                            }



                        } else {

                            // ALL GOOD! just show the success message!
                            $("#contact-form").empty();
                            $('form').append('<div class="alert alert-success">' + data.message + '</div>');

                            // usually after form submission, you'll want to redirect
                            // window.location = '/thank-you'; // redirect a user to another page

                        }
                    })

                    // using the fail promise callback
                    .fail(function(data) {

                        // show any errors
                        // best to remove for production
                        console.log(data);
                    });

                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();
            });
});
