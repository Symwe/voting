$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
       // $('#menu-jk').scrollToFixed();
    }



})

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});



$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

// script.js

// Define a function to handle the click event for the "Vote" buttons
function handleVoteButtonClick() {
    // Get all elements with the class "btn-danger" (the "Vote" buttons)
    const voteButtons = document.querySelectorAll('.btn-danger');

    // Loop through each "Vote" button
    voteButtons.forEach(button => {
        // Add a click event listener to each button
        button.addEventListener('click', function() {
            // Retrieve the candidate's name from the adjacent sibling element
            const candidateName = this.previousElementSibling.previousElementSibling.textContent.trim();
            
            // Display an alert message indicating the candidate's name and a thank you message
            alert(`You have voted for ${candidateName}. Thank you for participating!`);
        });
    });
}

// Call the handleVoteButtonClick function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    handleVoteButtonClick();
});

