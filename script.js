document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.redirect-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });
});
