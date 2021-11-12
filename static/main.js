$(document).ready(function(){

    //open modal
    $(".btn").click(function(){
        $(".modal").addClass("is-visible");

        setTimeout(function () {
            $(".modal").addClass('is-open');
        }, 100);
    });

    //close modal
    $('.close').click(function() {
        $(".modal").removeClass('is-open');
        $('.modal').removeClass('is-visible');
    })
});