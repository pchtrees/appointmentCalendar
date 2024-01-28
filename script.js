document.addEventListener('DOMContentLoaded', function () {
    const mobileNav = document.getElementById('mobileNav');
    const calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
        initialView: 'dayGridMonth',
        height: '400px',
        headerToolbar: { left: 'prev', center: 'title', right: 'next' },
    });
    calendar.render();
    
    document.getElementById('menuButton').addEventListener('click', () => mobileNav.classList.toggle('hidden'));
    
    document.querySelectorAll('.fc-prev-button, .fc-next-button').forEach(button => {
        button.style.backgroundColor = '#735751';
        button.style.color = 'white';
    });
});