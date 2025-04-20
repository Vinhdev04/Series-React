# ⚛️ Series Học ReactJS Từ A đến Z

- **Author: `@Vinhdev04`**

![React Banner](./Sources/Images/bannerReact-01.jpg)

> Học ReactJS bài bản, dễ hiểu và thực chiến – dành cho người mới bắt đầu đến khi làm được dự án thật! 🚀

---

## 📚 Giới thiệu Series

![React Banner](./Sources/Images/bannerReact-02.jpg)

Chào mừng bạn đến với **series học ReactJS**! Đây là chuỗi bài học được xây dựng nhằm giúp bạn:

- Hiểu rõ về **React là gì**, tại sao nên dùng React
- Làm quen với các khái niệm như **JSX**, **Component**, **Props**, **State**, **Hooks**
- Tạo ứng dụng **Single Page Application (SPA)**
- Làm việc với **React Router**, **Axios**, **State Management**
- Xây dựng dự án thực tế với React

> 👨‍💻 Không chỉ học lý thuyết, bạn sẽ được **code thực tế** và làm **dự án nhỏ cuối khóa** để ôn lại kiến thức.

---

## 🧱 Cấu trúc nội dung

| STT | Chủ đề             | Nội dung chính                                |
| --- | ------------------ | --------------------------------------------- |
| 1️⃣  | Giới thiệu ReactJS | JSX, Virtual DOM, tạo project React           |
| 2️⃣  | Component & Props  | Tạo component, truyền dữ liệu qua props       |
| 3️⃣  | State & Event      | Quản lý state, xử lý sự kiện trong React      |
| 4️⃣  | Hooks cơ bản       | `useState`, `useEffect`, custom hooks         |
| 5️⃣  | React Router       | Routing, Nested Route, Navigation             |
| 6️⃣  | Gọi API với Axios  | Fetch dữ liệu từ backend, xử lý loading/error |
| 7️⃣  | State nâng cao     | Context API, Redux (overview)                 |
| 8️⃣  | Dự án mini         | App quản lý Todo, Blog hoặc sản phẩm          |
| 9️⃣  | Deploy             | Build và deploy lên Vercel hoặc Netlify       |

---

## 🎯 Mục tiêu sau series này

- ✅ Hiểu vữa cấu trúc và nguyên lý hoạt động của React
- ✅ Tự tin xây dựng SPA với React Router
- ✅ Biết gọi API, xử lý dữ liệu
- ✅ Biết deploy project lên nền tảng hosting
- ✅ Là nền tảng để học nâng cao: `Next.js`, `Redux Toolkit`, `Tailwind`, v.v.

---

## 📌 Yêu cầu kiến thức nền

- HTML / CSS / JavaScript (ES6+)
- Biết về function, array, object trong JS
- Kiến thức về DOM và event handling
- Git, VSCode là một lợi thế

---

## 💡 Mẹo học hiệu quả

- 📓 Tự ghi chúc lại những gì đã học
- 🔁 Ôn lại bài sau 2–3 ngày
- 🧪 Thử làm lại các bài bằng cách viết lại theo cách của bạn
- 📚 Đọc tài liệu chính thức: https://reactjs.org

---

## 🛠 Công cụ hỗ trợ

- Node.js v18+
- Code Editor: VSCode
- Extensions: React Developer Tools, Prettier
- Axios, React Router
- Hosting: Vercel / Netlify

---

## 🧲 Dự án cuối khóa - ReactJS

### 📌 Tên dự án: `Website Tuyển Dụng`

### 🎨 Stack sử dụng: ReactJS + React Router + Axios + (tuỳ chọn Tailwind hoặc Bootstrap)

### 📂 Cấu trúc thư mục :

```
src/
│
├── components/
├── pages/
├── services/
├── assets/
├── App.jsx
└── main.jsx
```

### ⚙️ Các chức năng chính:

- [ ] Xem danh sách ...
- [ ] Tìm kiếm ...
- [ ] CRUD dữ liệu ...

---

## ❤️ Cảm ơn bạn đã theo dõi!

> Nếu thấy series hữu ích, hãy ⭐ repo này và chia sẻ cho bạn bè nhé!

---

### 🌐 Khởi tạo project React

- Dùng `Vite` (khuyến nghị)

  ```bash
  npm create vite@latest my-app --template react
  cd my-app
  npm install
  npm run dev
  ```

- Dùng `Create React App` (truyền thống)
  ```bash
  npx create-react-ap
  ```

---

### ♻️ **Ôn tập Javascript ES6**

#### `1. Module`:

- Là 1 file chứa mã Javascript mà bạn có thể tái sử dụng ở file khác
- Giúp chia nhỏ ứng dụng, dễ quản lý và bảo trì
- Khi sử dụng thêm `type=module` vào file javascript
  > Ví dụ: `<script type="module" src="script.js"></script>`
- `Named Export`: cho phép export nhiều phần tử từ một file
  - Khi import cần sử dụng `{}`
  - > Ví dụ: `import { showName } from "./main.js"; `
- `Default Export`: cho phép mỗi `module` chỉ có 1 `default export`
  - Khi import không cần `{}`
  - > Ví du: `import grade from "./main.js";`
- `Import default`:
  - Tên biến import đặt tùy ý
- `Import named`:
  - Đặt tên với `as`
  - > Ví dụ: `import{myName as newName } from ""  `
- `import * name from ""`: lấy tất cả
- `Lưu ý: `
  - một module chỉ có 1 export default
  - `import *` sẻ không bao gồm export default

---

#### `2. Function`:

- `Declaration Function`:
  - Syntax:
    - > function function_name(parameters){}
- `Expression Function`:
  - Syntax:
    - > const name = function(parameters){}
- `Arrow Function`:
  - Syntax:
    - > const name = (parameters) => {}

---
