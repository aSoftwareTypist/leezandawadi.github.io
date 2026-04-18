document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.chk');
    const switch_sound = new Audio("./assets/extras/switch-on.mp3");
    const body = document.getElementById('body');

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        toggle.checked = true;
    }

    toggle.addEventListener('change', () => {
        body.classList.toggle('dark', toggle.checked);
        localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
        switch_sound.currentTime = 0;
        switch_sound.play();
    });
});