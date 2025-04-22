import "./App.css";
const tank = "src/assets/images/tank.png";
const date = new Date().toLocaleDateString();
const timer = new Date().toLocaleTimeString();

const text = [
  "Chào mừng bạn đến với thế giới React!",
  "Rất vui được gặp bạn ở đây",
  "Cùng nhau tìm hiểu thế giới React nào..",
];
console.log(text);

function randomTitle() {
  return Math.floor(Math.random() * text.length);
}

function Header() {
  const title = text[randomTitle()];
  const name = "Hà";
  let isLogin = true;
  return (
    <>
      <h4>{title}</h4>
      <div className="center-text">
        <p>
          Hôm nay là: <strong>{date}</strong>
        </p>
        <p>
          Thời gian hiện tại: <strong>{timer}</strong>
        </p>
        <p>Xin chào: {name}</p>
        <p>
          Trạng thái tài khoản: {isLogin ? "Đã đăng nhập" : "Chưa đăng nhập"}
        </p>
        <img src={tank} style={{ width: "100px" }}></img>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
