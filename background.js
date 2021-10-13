chrome.storage.local.get(['logged_in'], function(data) {
    var state = data.logged_in;
    console.log(state);
    if (state === true) {
        chrome.action.setPopup({popup: "locker.html"});
    } else if (state === false) {
        chrome.action.setPopup({popup: "login.html"});
    }
});


let installReason = (detail) => {
    if (detail.reason === "install") {
        chrome.tabs.create({
            url: "https://college-manager-thank-you.herokuapp.com/"
        });
    }
}

chrome.runtime.onInstalled.addListener((details) => {
    installReason(details);
});