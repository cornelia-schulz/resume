/**
 * Created by cornelia on 31/10/14.
 */
(function($) {

    $.fn.showMore = function(panelId, options) {

        var self = this;
        var on = false;
        options = options || {};
        var expandedLabel = options.expandedLabel || 'Show Less';
        var contractedLabel = options.contractedLabel || 'Show More';

        this.text(contractedLabel);

        var toggleState = function(toggle){
            if(toggle) {
                $(panelId).css('display', 'inline');
                self.text(expandedLabel);
                on = true;
            }else {
                $(panelId).css('display', 'none');
                self.text(contractedLabel);
                on = false;
            }
        };
        toggleState(options.expanded || false);

        return this.click(function(e){
            toggleState(!on);
            e.preventDefault();
        }); // this is the clicked button

    };
}(jQuery));
