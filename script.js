document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if(form) {
        form.addEventListener("submit", function(event) {
            // Això fa que no s'envii de veritat per poder veure l'alerta
            // (Opcional, si vols que s'envii treu la línia preventDefault)
            // event.preventDefault(); 
            alert("Gràcies per contactar amb EcoTravel! Et respondrem en menys de 24h.");
        });
    }
});