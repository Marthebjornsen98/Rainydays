function showAlert(
    message = 'This is a default message',
    classType = 'information'
) {
    return `<div class="${classType}">${message}</div>`;
}
