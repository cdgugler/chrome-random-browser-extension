function navigateToRandomUrl() {
    let links = document.querySelectorAll('a:not([href^="#"])');
    let link = links[random(links.length)];

    // TODO: option to randomly start back at new seed url
    link.target = "_self";
    link.click();
}

function random(max) {
    return Math.floor(Math.random() * (max-1));
}


navigateToRandomUrl();
