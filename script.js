// Example: Log link clicks
document.querySelectorAll('.link-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`Clicked: ${btn.textContent}`);
    });
});