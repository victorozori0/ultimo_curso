$(document).ready(function() {
    $('#myModal').on('show.bs.modal', function() {
        $(this).find('.modal-content').hide().fadeIn(500); // Efeito de transição suave
    });
});
