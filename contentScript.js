function navigateToRandomUrl() {
    let links = document.querySelectorAll('a:not([href^="#"])');
    let link = links[random(links.length)];

    link.click();
}

function random(max) {
    return Math.floor(Math.random() * (max-1));
}


navigateToRandomUrl();