const serverUrl = 'https://adventus-api.ml/';
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}
function generateUserMenu(first_name, last_name) {
    return '<p style="margin-top: 0;">Welcome, <b>' + first_name + ' ' + last_name + '</b>!</p><a href="/favorites" class="user-menu-link" onclick="$(\'#user-menu\').addClass(\'element-hidden\'); $(\'.cover-main-content\').removeClass(\'element-visible\');"><img src="/drawables/heart-off.svg" style="height: 1.2em;"><p style="display: inline-flex; margin-left: 6px;">Favorites</p></a><button onclick="setCookie(\'user_tkn\', \'\', 0); location.reload();" class="login-button" style="display: block; margin-top: calc(96px - 3em);">Log out</button>';
}