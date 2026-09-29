(function () {
  "use strict";
  var BASE = "https://www.lcstw.com.tw";

  var products = [
    ["21368", "21368 花生漫畫：史努比的狗屋", "NT$1,999", "NT$2,999", "6.7折"],
    ["75646", "75646 卡普的海軍戰艦", "NT$3,999", "NT$5,899", "6.8折"],
    ["43301", "43301 玩具總動員彈簧狗書擋", "NT$3,299", "NT$5,099", "6.5折"],
    ["40806", "40806 薑餅 AT-AT™ 步行機", "NT$1,699", "NT$2,199", "7.7折"],
    ["42235", "42235 Ferrari 488 PISTA 汽車", "NT$1,599", "NT$2,299", "7折"],
    ["42240", "42240 Aston Martin Aramco AMR25 F1® 賽車", "NT$5,599", "NT$7,999", "7折"],
    ["21066", "21066 紐約－大蘋果", "NT$3,699", "NT$5,299", "7折"],
    ["75643", "75643 多尼多尼喬巴", "NT$1,699", "NT$2,499", "6.8折"],
    ["43025", "43025 Nike Air Max 95 x 樂高® 盒組", "NT$2,399", "NT$3,499", "6.9折"],
    ["72537", "72537 老虎 Derpy 和喜鵲 Sussie", "NT$1,889", "NT$2,699", "7折"],
    ["75641", "75641 Dr. 西爾爾克的藏身處", "NT$769", "NT$1,099", "7折"],
    ["77263", "77263 BMW M3 (E30)", "NT$699", "NT$879", "8折"]
  ];

  var sections = [
    { bar: "bar_age", alt: "依照年齡選擇 查看更多", href: "/pages/shop-by-age", cls: "wide-b", mt: 78.5, g: 26, grid: "three", tiles: [
      ["age0", "1½+", "/categories/age15"], ["age1", "4+", "/categories/4-years-old"], ["age2", "6+", "/categories/age6-8"],
      ["age3", "9+", "/categories/age9-12"], ["age4", "13+", "/categories/age13"], ["age5", "ADULTS", "/categories/age18"]] },
    { bar: "bar_interest", alt: "依照興趣選擇 查看更多", href: "/pages/interests", cls: "wide-b", mt: 35, g: 26, grid: "three square", tiles: [
      ["int0", "迪士尼與公主", "/categories/%E8%BF%AA%E5%A3%AB%E5%B0%BC%E8%88%87%E5%85%AC%E4%B8%BB"],
      ["int1", "遊戲與電玩", "/categories/%E9%81%8A%E6%88%B2%E5%92%8C%E9%9B%BB%E7%8E%A9"],
      ["int2", "SHOP BY INTEREST See more", "/pages/interests"]] },
    { bar: "bar_adult", alt: "大人的玩具 查看更多", href: "/categories/2026joyful-series", cls: "wide-b", mt: 0.5, g: 23.5, grid: "four rail", tiles: [
      ["adult0", "LEGO Ideas", "/categories/ideas"], ["adult1", "LEGO Icons", "/categories/icons"],
      ["adult2", "LEGO Technic", "/categories/technic"], ["adult3", "LEGO Architecture", "/categories/architecture"]] },
    { bar: "bar_kids", alt: "小孩的推薦 查看更多", href: "/categories/products", cls: "wide-b", mt: 22, g: 14.5, grid: "four rail", tiles: [
      ["kids0", "LEGO City", "/categories/city"], ["kids1", "LEGO Ninjago", "/categories/ninjago"],
      ["kids2", "LEGO Speed Champions", "/categories/speed-champions"], ["kids3", "LEGO Disney", "/categories/disney"]] },
    { bar: "bar_toddler", alt: "幼兒的入門 查看更多", href: "/categories/products", cls: "container", mt: 26.5, g: 29, grid: "four rail", tiles: [
      ["tod0", "LEGO Bluey", "/categories/buley"], ["tod1", "LEGO DUPLO", "/categories/duplo"],
      ["tod2", "LEGO Classic", "/categories/classic"], ["tod3", "LEGO Creator", "/categories/creator-3in1"]] }
  ];

  var posts = [
    ["blog0", "/blog/posts/2026-anniversary-sale", "2026-09-21", "樂高® 授權專賣店百貨週年慶優惠一覽！一年一度的歡慶時刻！",
      "一年一度的百貨周年慶正式開跑！🎉從9月底一路到11月，全台各大百貨陸續推出周年慶活動，各館的檔期時間、優惠內容與活動方式也各有不同。"],
    ["blog1", "/blog/posts/spongebob-singing", "2026-08-27", "海綿寶寶歌唱大賽登場，邀請你唱出經典主題曲！",
      "「哦～是誰住在深海的大鳳梨裡～？」熟悉的旋律一響起，是不是瞬間就跟著唱起來了？🧽🎤隨著 「11386《海綿寶寶》：比奇堡」正式登場"],
    ["blog2", "/blog/posts/2608-harry-potter-sale", "2026-08-20", "《哈利波特™》25周年來臨，限量豪華贈品大放送!",
      "🪄 歡慶《哈利波特™》上映25週年，魔法世界再度降臨！從霍格華茲的魔法校園，到陪伴無數粉絲成長的經典角色"]
  ];

  var cats = [
    ["cat0", "最新上市", "/categories/2026"],
    ["cat1", "最後機會", "/categories/products?filter_tag%5B68aea99ac2e6c3000cff0d65%5D%5B%5D=69a91a4d106ef1afabc697b1&scope=advanced_filter"],
    ["cat2", "熱門商品", "/categories/featured"],
    ["cat3", "獨家限定", "/categories/exclusive"]
  ];

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function img(name) { return "assets/" + name + ".jpg"; }

  var heart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.3s-7.6-4.6-9-9.4C2.1 7.6 4.3 4.7 7.4 4.7c2 0 3.6 1.1 4.6 2.7 1-1.6 2.6-2.7 4.6-2.7 3.1 0 5.3 2.9 4.4 6.2-1.4 4.8-9 9.4-9 9.4z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  var cart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 4h2.6l2.3 10.4h10.4l2.2-7.6H6.3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/><circle cx="9" cy="18.6" r="1.5" fill="currentColor"/><circle cx="16.6" cy="18.6" r="1.5" fill="currentColor"/></svg>';

  document.getElementById("products").innerHTML = products.map(function (p, i) {
    return '<li class="product">' +
      '<div class="p-media"><a href="' + BASE + '/products/' + p[0] + '" tabindex="-1" aria-hidden="true"><img src="' + img("p" + i) + '" alt="" width="140" height="140" loading="lazy"></a>' +
      '<span class="p-badge">限時特價</span>' +
      '<button type="button" class="p-act p-fav" aria-label="加入願望清單：' + esc(p[1]) + '" aria-disabled="true">' + heart + '</button>' +
      '<button type="button" class="p-act p-cart" aria-label="加入購物車：' + esc(p[1]) + '" aria-disabled="true">' + cart + '</button></div>' +
      '<a class="p-name" href="' + BASE + '/products/' + p[0] + '">' + esc(p[1]) + '</a>' +
      '<div class="p-price">' + p[2] + '</div>' +
      '<div class="p-old"><s>' + p[3] + '</s><span class="p-off">' + p[4] + '</span></div></li>';
  }).join("");

  document.getElementById("tileSections").innerHTML = sections.map(function (s) {
    return '<section class="tiles ' + s.cls + '" style="--mt:' + s.mt + 'px;--g:' + s.g + 'px">' +
      '<a class="bar" href="' + BASE + s.href + '"><img src="' + img(s.bar) + '" alt="' + esc(s.alt) + '" width="624" height="25"></a>' +
      '<ul class="tile-grid ' + s.grid + '">' + s.tiles.map(function (t) {
        return '<li><a href="' + BASE + t[2] + '"><img src="' + img(t[0]) + '" alt="' + esc(t[1]) + '" loading="lazy"></a></li>';
      }).join("") + "</ul></section>";
  }).join("");

  document.getElementById("posts").innerHTML = posts.map(function (p) {
    return '<li class="post"><a href="' + BASE + p[1] + '">' +
      '<img src="' + img(p[0]) + '" alt="" width="178" height="178" loading="lazy">' +
      '<time datetime="' + p[2] + '">' + p[2] + "</time>" +
      "<h3>" + esc(p[3]) + "</h3><p>" + esc(p[4]) + "</p></a></li>";
  }).join("");

  document.getElementById("cats").innerHTML = cats.map(function (c) {
    return '<li><a href="' + BASE + c[2] + '"><img src="' + img(c[0]) + '" alt="' + esc(c[1]) + '" loading="lazy"></a></li>';
  }).join("");

  // Hero carousel: 8 indicators are visible (6th active); only the active slide is evidenced.
  var dots = document.getElementById("heroDots");
  for (var d = 0; d < 8; d++) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "dot" + (d === 5 ? " is-active" : "");
    b.setAttribute("aria-label", "第 " + (d + 1) + " 張");
    if (d === 5) b.setAttribute("aria-current", "true"); else b.setAttribute("aria-disabled", "true");
    dots.appendChild(b);
  }

  // Inert commerce / account controls
  document.addEventListener("click", function (e) {
    var t = e.target.closest('[aria-disabled="true"]');
    if (t) e.preventDefault();
  });

  var toTop = document.getElementById("toTop");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.querySelector(".brand").focus({ preventScroll: true });
  });
  function onScroll() { toTop.classList.toggle("is-visible", window.scrollY > 400); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
