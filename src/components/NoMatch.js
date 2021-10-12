function NoMatch() {
  return (
    <div
      style={{
        height: "85vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "224.8px",
      }}
    >
      <div>
        <h1>此頁面不存在。</h1>
        <p>我們找不到你正在尋找的網頁。或許我們的常見問題或社群幫得上忙？</p>
        <a
          href="/"
          onClick={() => {
            window.history.back();
          }}
        >
          返回首頁
        </a>
      </div>
      <img
        style={{ minWidth: "200px" }}
        width="20%"
        src="https://www.scdn.co/i/404/record.svg"
        alt="CD"
      ></img>
    </div>
  );
}

export default NoMatch;
