// DOM Elements
const moodInput = document.getElementById('moodInput');
const searchButton = document.getElementById('searchButton');
const micButton = document.getElementById('micButton');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    updateSearchButton();
});

// Event Listeners
function setupEventListeners() {
    // Input change listener
    moodInput.addEventListener('input', function() {
        updateSearchButton();
    });

    // Enter key listener
    moodInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Search button listener
    searchButton.addEventListener('click', handleSearch);

    // Mic button listener
    micButton.addEventListener('click', handleMicClick);
}

// Update search button state
function updateSearchButton() {
    const hasText = moodInput.value.trim().length > 0;
    searchButton.disabled = !hasText;
}

// Handle search functionality
function handleSearch() {
    const mood = moodInput.value.trim();
    
    if (mood) {
        console.log('Searching for movies with mood:', mood);
        
        // Show loading state
        const originalText = searchButton.innerHTML;
        searchButton.innerHTML = '<span style="animation: pulse 1s infinite;">🔍 Buscando...</span>';
        searchButton.disabled = true;
        
        // Simulate search (replace with actual API call)
        setTimeout(() => {
            alert(`Procurando filmes para: "${mood}"\n\nEm breve, você verá recomendações personalizadas aqui!`);
            
            // Reset button
            searchButton.innerHTML = originalText;
            updateSearchButton();
        }, 2000);
    }
}


// Add some interactivity to feature cards
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
});

// Add typing effect to placeholder (optional enhancement)
function addTypingEffect() {
    const placeholders = [
        "Digite como você está se sentindo...",
        "Que tipo de filme você quer assistir?",
        "Descreva seu humor atual...",
        "O que combina com seu dia hoje?"
    ];
    
    let currentIndex = 0;
    
    setInterval(() => {
        if (!moodInput.value) {
            moodInput.placeholder = placeholders[currentIndex];
            currentIndex = (currentIndex + 1) % placeholders.length;
        }
    }, 3000);
}

// Initialize typing effect
addTypingEffect();