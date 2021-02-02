// $(function () {
//     $("#sortable").sortable({
//         revert: true
//     });
//     $("#draggable").draggable({
//         connectToSortable: "#sortable",
//         helper: "clone",
//         revert: "invalid"
//     });
//     $("ul, li").disableSelection();
//     });

$(function () {
    $("#sortable1, #sortable2, #sortable3, #sortable4").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
});