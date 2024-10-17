// Example jQuery to handle add to cart functionality
$(document).ready(function() {
    $('.add-to-cart').on('click', function() {
        let productId = $(this).data('id');
        // Implement add to cart logic here
        alert('Product added to cart: ' + productId);
    });
});

 /* Form validation */
 $(document).ready(function() {
    $('#form').submit(function (e) {
    /*Get Values*/
       var name = $('#name').val().trim();
       var email = $('#email').val().trim();
       var msg = $('#msg').val().trim();
    // reset the errors
    $(".error").remove();
    var isValidForm = true;
    
    //Validation Conditions here
    if (name.length < 1) {
    $('#name').after('<span class="error">This field is required</span>');
    var isValidForm = false;
    }
    if(email.length < 1) {
    $( '#email').after('<span class="error">This field is required</span>');
    var isValidForm = false;
    }
    if(msg.length < 1) {
        $( '#msg').after('<span class="error">This field is required</span>');
        var isValidForm = false;
        }
    
        return isValidForm;
    });
    });

   