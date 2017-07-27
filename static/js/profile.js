$(function() {

    $(".member-remove").click(function() {
        var $this = $(this);

        $("#rtm-email").text($this.data("email"));
        $("#remove-team-member-email").val($this.data("email"));
        $('#remove-team-member-modal').modal("show");

        return false;
    });

    var $radios = $('input[name="period"]');
    var $want_reports = $('input[name="reports_allowed"]');

    $radios.prop("disabled", true)
    $want_reports.on('click', function(){
        if ( $(this).is(':checked') )
            $radios.prop("disabled", false);
        else
            $radios.prop("disabled", true);
    });

});