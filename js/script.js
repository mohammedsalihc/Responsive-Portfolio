$(document).ready(function () {
    $("#contact-forms").validate({
        rules: {
            name: {
                required: true,
                minlength: 4,
                maxlength: 15
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 4
            }

        }
    })

})