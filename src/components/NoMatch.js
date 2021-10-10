function NoMatch() {
  return (
    <div
      style={{
        width: "50%",
        height: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px auto",
      }}
    >
      <div>
        <h1>此頁面不存在。</h1>
        <p>我們找不到你正在尋找的網頁。或許我們的常見問題或社群幫得上忙？</p>

        <a
          href="#"
          onClick={() => {
            window.history.back();
          }}
        >
          返回
        </a>
      </div>
      <img
        width="50%"
        src="https://www.scdn.co/i/404/record.svg"
        alt="CD"
      ></img>
    </div>
  );
}

export default NoMatch;
