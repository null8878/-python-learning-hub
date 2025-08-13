document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
});

async function loadProgress() {
    const modules = ['basics', 'oop', 'databases', 'apis', 'web-scraping', 'testing', 'deployment', 'projects'];
    
    for (const module of modules) {
        try {
            const response = await fetch(`/api/progress/${module}`);
            const progress = await response.json();
            updateProgressBar(module, progress);
        } catch (error) {
            console.error(`Error loading progress for ${module}:`, error);
        }
    }
}

function updateProgressBar(module, progress) {
    const moduleCards = document.querySelectorAll('.module-card');
    let moduleCard = null;
    
    moduleCards.forEach(card => {
        const href = card.getAttribute('onclick');
        if (href && href.includes(module)) {
            moduleCard = card;
        }
    });
    
    if (moduleCard) {
        const progressBar = moduleCard.querySelector('.progress');
        const completedLessons = progress.filter(p => p.completed).length;
        const totalLessons = progress.length || 10; // Default to 10 lessons per module
        const percentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
        
        progressBar.style.width = `${percentage}%`;
    }
}