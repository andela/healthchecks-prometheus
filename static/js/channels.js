$(function() {
    var placeholders = {
        email: "address@example.org",
        webhook: "http://",
        slack: "https://hooks.slack.com/...",
        hipchat: "https://api.hipchat.com/...",
        pd: "service key"
    }

    $("#add-channel-kind").change(function() {
        $(".channels-add-help p").hide();

        var v = $("#add-channel-kind").val();
        $(".channels-add-help p." + v).show();

        $("#add-channel-value").attr("placeholder", placeholders[v]);
    });

    $(".edit-checks").click(function() {
        $("#checks-modal").modal("show");
        var url = $(this).attr("href");
        $.ajax(url).done(function(data) {
            $("#checks-modal .modal-content").html(data);

        })


        return false;
    });

    $("#verify_modal").click(function () {
        $("#phone").val(this.dataset.phone);
        $("#phone_code").val(this.dataset.phone_code);
        $("#code").val(this.dataset.code);
        $("#verify-form-modal").modal("show");
    })

    var $cm = $("#checks-modal");
    $cm.on("click", "#toggle-all", function() {
        var value = $(this).prop("checked");
        $cm.find(".toggle").prop("checked", value);
    });

    $(".channel-remove").click(function() {
        var $this = $(this);

        $("#remove-channel-form").attr("action", $this.data("url"));
        $(".remove-channel-name").text($this.data("name"));
        $('#remove-channel-modal').modal("show");

        return false;
    });

    $('[data-toggle="tooltip"]').tooltip();

});