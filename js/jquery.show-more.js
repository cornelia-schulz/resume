/**
 * Created by cornelia on 31/10/14.
 */
(function($) {

    $.fn.showMore = function() {
        this(function(event) {
            event.preventDefault();
            $(this).hide('slow');
            $(this).parents(  )
        })
    }
}(jQuery));






$(function(){ /* to make sure the script runs after page load */
    $('a.w_read_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */
        event.preventDefault(); /* prevent the a from changing the url */
        $(this).hide('slow');
        $(this).parents('#workExperience').find('#workMoreText').css('display', 'inline'); /*use css as show sets display to inline-block*/
    });
    $('a.w_read_less').click(function(event){ /* find all a.read_more elements and bind the following code to them */
        event.preventDefault(); /* prevent the a from changing the url */
        $(this).parents('#workExperience').find('a.w_read_more').show('fade');
        $(this).parents('#workExperience').find('#workMoreText').hide('fade'); /* hide the .more_text span */
    });
});