// ==UserScript==
// @author         たかだか。(TakaDaka.)
// @name           Google Autocorrect Blocker
// @name:en        Google Autocorrect Blocker
// @namespace      https://twitter.com/djtkdk_086969
// @description    Googleの検索語句自動訂正を無効化します。
// @description:en Disables Google Search Autocorrect.
// @include        *://*.google.*/*
// @exclude        *tbm=shop*
// @exclude        *tbm=isch*
// @exclude        *tbm=vid*
// @exclude        *://plus.*
// @exclude        *://mail.*
// @exclude        *://productforums.*
// @exclude        *://maps.*
// @version        0.0.0.005
// @grant          none
// @compatible     firefox
// @compatible     chrome
// ==/UserScript==

(function() {
    console.log("GAB " + GM_info.script.version + " Started.");
    var spell_orig = document.querySelector("p.sp_cnt > a.spell_orig");
    if(spell_orig !== null) {
        console.log("GAB: Autocorrect detected! Redirecting to your original search query...");
        var current_url_split = location.href.split("/");
        var autocorrect_orig_url = spell_orig.getAttribute("href");
        var new_url = current_url_split[0] + "//" + current_url_split[2] + autocorrect_orig_url;
        location.href = new_url;
    } else {
        console.log("GAB: The results for your original search query is shown.");    }
})();
