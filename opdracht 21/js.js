addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('goon');
    const button = document.getElementById('btn');
    const bericht = document.getElementById('bericht');

    button.addEventListener('click', function() {
        const naam = input.value;
        bericht.textContent = `Hallo, ${naam}!`;
    });
});