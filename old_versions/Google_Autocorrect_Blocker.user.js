// ==UserScript==
// @author      たかだか。(TakaDaka.)
// @name        Google Autocorrect Blocker
// @name:en        Google Autocorrect Blocker
// @namespace   https://twitter.com/djtkdk_086969
// @description Googleの検索語句自動訂正を無効化します。
// @description:en Disables Google Search Autocorrect.
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @include     *://*.google.*/*
// @exclude     *tbm=shop*
// @exclude     *tbm=isch*
// @exclude     *tbm=vid*
// @exclude     *://plus.*
// @exclude     *://mail.*
// @exclude     *://productforums.*
// @exclude     *://maps.*
// @version     0.0.0.003
// @grant       none
// ==/UserScript==

(function() {
    console.log("GAB: Started.");
    //console.log("GAB: At " + location.href);
    if($("p.sp_cnt > a.spell_orig").length > 0) {
        console.log("GAB: Autocorrect detected!");
        var current_url_split = location.href.split("/");
        var autocorrect_orig_url = $("p.sp_cnt > a.spell_orig:first").attr("href");
        var new_url = current_url_split[0] + "//" + current_url_split[2] + autocorrect_orig_url;
        //alert("GAB: Autocorrect detected! Redirecting to " + new_url);
        location.href = new_url;
        return;
    }
})();
