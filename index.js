// var http = require('http');

// var server = http.createServer(function(request, response) {

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");

// });

// var port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);


// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

// ItemJson JSONを保持するための変数
var ItemJson = { "item": "no item" }

// POSTされたJSONを取得するためのbody Parserの設定
const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());

// 直近に取られたItemを返すAPI
// http://localhost:3000/api/v1/getItem
app.get('/api/v1/getitem', (req, res) => {

    console.log('Call:getItem-----');
    //console.log(ItemJson);
    //item.jsonをレスポンスとしてセット
    res.json(ItemJson)
});

//postItem
app.post('/api/v1/postitem', function (req, res) {
    //     // リクエストボディを出力
    console.log('Call:postItem----');

    // POSTされたBODYのログ
    //console.log(req.body);

    // 書き換え前のItemJSON
    console.log(ItemJson);

    // ItemJSON書き換え
    ItemJson = req.body;

    // 書き換えたItemJSON
    console.log(ItemJson);

    // レスポンスセット
    res.send(ItemJson);
})

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 8000'));
