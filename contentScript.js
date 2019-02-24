function navigateToRandomUrl() {
    let links = document.querySelectorAll('a:not([href^="#"])');
    let link = links[random(links.length)];

    // TODO: remove links with targets or update location instead
    // TODO: option to randomly start back at new seed url
    link.click();
}

function random(max) {
    return Math.floor(Math.random() * (max-1));
}


navigateToRandomUrl();