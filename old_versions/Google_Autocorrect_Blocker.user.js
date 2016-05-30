// ==UserScript==
// @author      たかだか。(TakaDaka.)
// @name        Google Autocorrect Blocker
// @namespace   https://twitter.com/djtkdk_086969
// @description Disables Google Search Autocorrect
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
// インスタント検索が有効だと正常に動作しないかもしれない

/*
  [これは何?]
  Google検索の際、次のように検索語句の自動訂正が行われることがあります。
  次の検索結果を表示しています: 東京スカイツリー駅
  元の検索キーワード: とうきょうスカイツリー駅
   
  本スクリプトは、このような検索語句の自動訂正により表示される
  「元の検索キーワード: *」のリンク (a.spell_orig) の存在を検知すると、
  「元の検索キーワード: *」のリンク先にリダイレクトします。

  [注意]
  インスタント検索がオンの状態だと正常に動作しない可能性があります。
  このスクリプトを使用する際にはインスタント検索をオフにすることを強く推奨します。
  
  [What's this?]
  The Google Search sometimes auto-corrects your search query like:
  Showing results for: localhost
  Search instead for localhsot

  This script detects search query autocorrect and
  redirects to the results for your original search query
  by detecting the "Search instead for *" link (a.spell_orig)

  [Disclaimer]
  This script might not work if the Instant Search feature is enabled.
  It is strongly recommended that you disable the Instant Search feature while using this script.
*/

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
