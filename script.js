function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Modal functionality
var modal = document.getElementById('random-modal');
var closeBtn = document.getElementsByClassName('close')[0];

if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        scheduleNextModal();
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        scheduleNextModal();
    }
}

function scheduleNextModal() {
    var randomTime = Math.random() * 30000 + 10000; // Random time between 10-40 seconds
    setTimeout(function() {
        modal.style.display = 'flex';
    }, randomTime);
}

// Start the first modal after page load
scheduleNextModal();