# 音樂收藏網站

本專案以 React 作為核心的練習題目，並使用 Creat-react-app 建置。

![Alt demo](https://i.imgur.com/dtCtc0w.png)


## 開發功能

* 可瀏覽目前音樂庫裡所有的音樂。
* 可透過關鍵字找尋符合的音樂。
* 可透過點擊收藏按鈕收藏想要的音樂。
* 可在我的收藏查看已收藏的音樂。
* 可透過 Facebook 進行登入與登出。


## 技術與套件使用

* json-server 模擬後端 API 串接。
* react-boostrap 完成大部分 UI 外觀。
* react-router-dom 實作路由切換功能。
* react-fontawesome 完成大部分 icon 樣式 。
* clsx 動態顯示 className。
* styled-component 攥寫 css-in-JS 。

## Demo by GIF 

 因本專案屬前端專案，無實際後端的資料庫介接，故以GIF展示成果。

 [GIF Demo](https://imgur.com/a/awOdb90)
 
 ## 想要至本地端查看的話可以先下載本專案至自己的資料夾，並以下步驟開啟即可

     1. npm install. (下載所需套件)
     
     2. npm start. （開啟專案）
     
     3. json-server --watch db.json --port 3002 （開啟模擬server）
