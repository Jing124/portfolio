$(document).ready(() => {
    const locationPieces = window.location.href.split('/');
    const fileWithExtension = locationPieces[locationPieces.length - 1];
    let fileName = fileWithExtension.split('.');
    fileName = fileName[0];
    if (fileName == 'index'){
        fileName = 'portfolio';
    }

    $('nav a').removeClass('active');
    $(`nav a#${fileName}`).addClass('active');
});