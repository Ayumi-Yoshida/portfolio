"use strict";

$(function () {
  var hash = location.hash;
  hash = (hash.match(/^#tab\d+$/) || [])[0];
  if ($(hash).length) {
    var tabName = hash.slice(1);
  } else {
    var tabName = "tab1";
  }
  $(".portfolio__content").css("display", "none");
  var tabNo = $("ul.tab-menu__list li#" + tabName).index();
  $(".portfolio__content").eq(tabNo).fadeIn();

  if (tabNo == 1) {
    $(".portfolio__bg-color").addClass("select-bg");
  }
  // //別ページから指定のタブを開く&背景色の入れ替え

  var buttons = $(".tab-menu__list-item");
  buttons.each(function (index) {
    $(this).on("click", function () {
      // クラスの追加削除
      var btnNon = $(this).index();
      $(".portfolio__bg-color").toggleClass("select-bg");
      // クリックすると同じ番号のコンテンツを非表示にします;
      $(".portfolio__content").hide().eq(index).fadeIn();
    });
  });

  // ハンバーガーメニュー
  $(".burger-btn").on("click", function () {
    $(
      ".nav-drawer__bar-top, .nav-drawer__bar-mid, .nav-drawer__bar-bottom"
    ).toggleClass("active");
    $(".nav-drawer").toggleClass("open");
    return false;
  });
  // 以下消すな
});

// 一定のところでマウスホイールで横スクロール＋固定
window.addEventListener("load", function () {
  //プラグインを定義
  gsap.registerPlugin(ScrollTrigger);

  const area = document.querySelector(".js-area");
  const wrap = document.querySelector(".js-wrap");
  const items = document.querySelectorAll(".js-item");
  const num = items.length;

  //横幅を指定
  // gsap.set(wrap, { width: num * 100 + "%" });
  gsap.set(items, { width: 100 / num + "%" });

  gsap.to(items, {
    xPercent: -100 * (num - 1), //x方向に移動させる
    ease: "none",
    scrollTrigger: {
      trigger: area, //トリガー
      start: "top 16%", //開始位置
      end: "+=1000", //終了位置
      pin: true, //ピン留め
      scrub: true, //スクロール量に応じて動かす
    },
  });
});
