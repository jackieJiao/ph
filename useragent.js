var page = require('webpage').create(),
  system = require('system'),
  t, address;

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>');
  phantom.exit();
}

t = Date.now();
address = system.args[1];
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36';
address2='http://www.tianyancha.com/search?key=%E5%8C%97%E4%BA%AC%E5%8D%8E%E9%81%93%E5%BE%81%E4%BF%A1%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&checkFrom=searchBox';
page.open(address, function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var target_url = page.evaluate(function () {
            return document.getElementsByClassName('query_name search-new-color')[0].getAttribute('href');
        });
        console.log(target_url);
        
    }
    phantom.exit();
});

