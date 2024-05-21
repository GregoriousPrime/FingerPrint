
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.f3c134bf548ad5d2cb26.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2579.baseline.en.6a20d1c5e23e7c576831.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3240.baseline.en.862539b5e1e6c5c4b5cc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9180.baseline.en.68ba5b899d4d0551c686.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.dda04795dad3a8340ba6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3912.baseline.en.d458249c4f6cc1c2f0b4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/308.baseline.en.66c276c8b6a27a43dee2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4766.baseline.en.c3e894728629ceb05cf5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2545.baseline.en.5d694282975ef369ad89.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3364.baseline.en.db286f195bcd8e8a6207.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8783.baseline.en.03546aa4873052601667.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5006.baseline.en.808eb60349d331a7275b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9045.baseline.en.d4b852267463c6b00a44.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.eb046c8be041b20dbb31.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/2579.baseline.en.6d7f407b553c8b3e4b32.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.66c00330802d031cc36a.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.en.8599422238d7a92e6448.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  