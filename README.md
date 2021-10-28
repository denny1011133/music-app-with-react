# 音樂收藏網站

本專案以 React 作為核心的練習題目，並使用 Create React App 建置。

![Alt demo](https://i.imgur.com/dtCtc0w.png)


## 開發功能

* 可瀏覽目前音樂庫裡所有的音樂。
* 可透過關鍵字找尋符合的音樂。
* 可透過點擊收藏按鈕收藏想要的音樂。
* 可在我的收藏查看已收藏的音樂。
* 可透過 Facebook 進行登入與登出。


## 技術與套件使用

* json-server 模擬 RESTful API 串接。
* React-Bootstrap 完成大部分 UI 。
* react-router-dom 實作路由切換功能。
* react-fontawesome 完成大部分 icon 。
* clsx 實現動態顯示 className。
* styled-component 撰寫 css-in-JS 。

## Demo 

 因本專案屬前端專案，無實際後端的資料庫介接，故以GIF展示成果。

 [GIF Demo](https://imgur.com/a/awOdb90)
 
## Installation

1. 下載至本地資料夾
```bash
git clone https://github.com/denny1011133/music-app-with-react.git 
```
2. 安裝所需套件
```bash
npm install 
```


3. 請依執行的環境不同開啟dev server
```bash
  * Windows (cmd.exe) 👉 set HTTPS=true&&npm start   
  * Windows (Powershell) 👉 ($env:HTTPS = "true") -and (npm start)       
  * Linux, macOS (Bash) 👉  HTTPS=true npm start   
```
4. 開啟模擬server
```bash
  json-server --watch db.json --port 3002
```
     
  
     
     
        
