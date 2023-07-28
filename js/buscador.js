
// buscador
$(document).ready(function () {
    $('#search-input').on('input', function () {
        var searchTerm = $(this).val().toLowerCase();
        $('.main-glosario article').each(function () {
            var articleText = $(this).text().toLowerCase();
            if (articleText.indexOf(searchTerm) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});
