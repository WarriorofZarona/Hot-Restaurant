$(document).ready(function () {
    $("#current").submit(function (event) {
        // Stop form from submitting normally
        event.preventDefault();

        /* Serialize the submitted form control values to be sent to the web server with the request */
        var formValues = $(this).serialize();

        var createCard = data => {
            return `<div class="card">
                   <div class="card-body">
                    data
                   </div>
                </div>`

        }

        // Send the form data using post
        $.post("reservation.html", formValues, function (data) {
            // Display the returned data in browser
            var render = createCard(data);
            $("#current").html(render);
        });
    });
});