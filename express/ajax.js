var createCard = data => {
    return `<div class="card">
           <div class="card-body">
            data
           </div>
        </div>`

}
$(document).ready(function () {
    $("#current").submit(function (event) {
        event.preventDefault();

        var formValues = $(this).serialize();

        // Send the form data using post
        $.post("reservation.html", formValues, function (data) {
            console.log(data)
            var render = createCard(data);
            $("#current").html(render);
        });
    });
});

$.get("/api/reservations", res => {
    console.log(res);
    // $("#current").html(JSON.parse(res));

})