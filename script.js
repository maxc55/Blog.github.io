function toggleDetails(element) {
    var details = element.querySelector('.article-details'); // Modifié pour sélectionner .article-details
    var isVisible = details.style.display === "none";
    details.style.display = isVisible ? "block" : "none";
}
