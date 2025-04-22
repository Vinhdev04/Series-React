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

#### `3. Object and Classes`:

- `Object`:
  - được sử dụng đê nhóm các giá trị lại với nhau
  - `key-value`
- `Class`:
  - khắc phục nhược điểm của object
  - sử dụng hàm tạo `constructor()` để khởi tạo thuộc tính cho đối tượng

---

#### `4. Array`:

- `Array`
  - là một dạng đặc biệt của object
  - được thiết kế để lưu trữ theo thứ tự và truy cập bằng chỉ sô (index)
  - index bắt đâu: 0, kết thúc: n-1
  - `Type of Array`: là 1 `Object` , vậy nên mới khởi tạo 1 mảng được bằng `constructor`
- `Method`:

  - ### `push()`:
    - thêm phần tử vào cuối mảng
  - ### `pop()`:
    - xóa phần tử cuối mảng
    - CÓ làm thay đổi mảng ban đầu
    - trả về phần tử đã bị xoá ra khỏi mảng
    - trả về undefined nếu mảng rỗng
  - ### `shift()`:
    - xóa phần tử đầu mảng
    - CÓ làm thay đổi mảng ban đầu
    - trả về phần tử đã bị xoá ra khỏi mảng
    - trả về undefined nếu mảng rỗng
  - ### `unshift`():
    - thêm phần tử vào đầu mảng
  - ### `map()`:
    - duyệt phân tử mảng và `tạo ra mảng mới từ mảng cũ`, `biến mảng thành Object[key-value]`
    - iúp tạo ra một mảng mới với các phần tử là kết quả từ việc thực thi một hàm lên TỪNG PHẦN TỬ của mảng ban đầu
    - KHÔNG làm thay đổi mảng ban đầu
  - ### `findIndex()`:

    - Tìm phần tử đầu tiên thỏa mãn trong mảng [true-false]

    ```bash
        const fruits = ["Cam", "Xoài", "Dứa", "Kiwi"];
        const res = fruits.findIndex((item) => {
            return item === "Dứa";
        });
        console.log(res); // 2 -> `có và nằm ở vị trí index = 2`
    ```

  - ### `reducer()`:
    - dùng để thực thi một hàm lên từng phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất
    - KHÔNG làm thay đổi mảng ban đầu
    - trả về giá trị sau khi rút gọn
  - ### `some()`:
    - xác định xem ít nhất một thành viên mảng có thỏa mãn bài kiểm tra được xác định bởi hàm đã cho hay không.
    - Nó trả về true nếu nó tìm thấy một phần tử trong mảng mà hàm đã chỉ định trả về true; ngược lại, nó trả về false.
    - Nó không làm thay đổi mảng.
  - ### `every()`:
    - xác định xem tất cả thành viên mảng có thỏa mãn bài kiểm tra được xác định bởi hàm đã cho hay không.
  - ### `filter()`:
    - KHÔNG làm thay đổi mảng ban đầu
    - trả về 1 mảng mới sau khi lọc
    - trả về một mảng RỖNG nếu không có phần tử nào thỏa mãn điều kiện
  - ### `includes()`:
    - kiểm tra xem phần tử đã cho có tồn tại trong mảng hay không
    - KHÔNG làm thay đổi mảng ban đầu
    - trả về kiểu Boolean: true nếu tìm thấy hoặc false nếu không tìm thấy
  - ### `forEach()`:
    - dùng để duyệt qua từng phần tử của mảng
  - `find()`:
    - dùng để lọc phần tử trong mảng, tuy nhiên nó sẽ trả về giá trị ĐẦU TIÊN tìm thấy ở trong mảng hoặc có thể trả về undefined nếu không tìm thấy
    - TIÊN tìm thấy ở trong mảng hoặc có thể trả về undefined nếu không tìm thấy
  - ### `concat()`:
    - Phương thức tạo ra một mảng mới bằng cách hợp nhất (kết hợp) các mảng hiện có
    - Phương thức không thay đổi các mảng hiện có
  - ### `indexOf()`:
    - dùng để tìm kiếm vị trí của phần tử trong mảng
    - trả về giá trị index ĐẦU TIÊN của mảng nếu phần tử tồn tại trong mảng
    - trả về -1 nếu phần tử không tồn tại trong mảng
    - KHÔNG làm thay đổi mảng ban đầu
  - ### `join()`:

    - chuyển đổi một mảng thành một chuỗi các giá trị mảng và có thể chỉ định phân tách bằng (,."",...)

  - ### `slice()`:

    - Phương thức không loại bỏ bất kỳ phần tử nào khỏi mảng
    - Tạo ra một mảng mới

  - ### `splice(start,deleteCount)`:

    - Thêm 1 giá trị mới vào mảng
    - Lấy ra giá trị của 1 mảng
    - Xóa phần tử khỏi mảng và trả về mảng bị xóa
    - Tạo ra một mảng mới

  - ### `toSpliced()`:

    - Tương tự splice(), nhưng giữ cho mảng gốc không thay đổi

  - ### `toString()`:

    - chuyển đổi một mảng thành một chuỗi các giá trị mảng

  - ### `at()`:

    - trả về phần tử tại vị trí index

  - ### `copyWithin()`:

    - Phương thức sao chép các thành phần mảng đến một vị trí khác trong một mảng
    - Phương thức ghi đè lên các giá trị hiện có.
    - Phương thức không thêm các giá trị vào mảng
    - Phương pháp không thay đổi độ dài của mảng.

  - ### `flat()`:

    - Phương thức tạo ra một mảng mới với các phần tử con được nối với độ sâu được chỉ định.

  - ### `flatMap()`:
    - Phương thức đầu tiên ánh xạ tất cả các phần tử của một mảng và sau đó tạo một mảng mới bằng cách làm phẳng mảng.

---

#### `5. Destructuring [Array,Object,Function]`:

- là một tính năng quan trọng
- Cho phép trích xuât dữ liệu từ `array` hoặc `object` một cách nhanh và dễ dàng
- Với `array` trích xuất thông qua `vị trí (index)`
- Với `object` trích xuất thông qua `property name` `tên biến phải trùng với ten thuộc tính trong Oject`
- Sử dụng trực tiếp trong tham số (parameter) của hàm. Để tránh việc lặp lại truy cập thuộc tính bên trong thân hàm
- ` Destructuring` với rest parameter với `Array`
- ` Destructuring` thiết lập giá trị mặc định với `Array`
- ` Destructuring` bỏ qua phần tử ko cần thiết với `Array`
- ` Destructuring` đổi tên biến với `Object`
- ` Destructuring` với rest parameter với `Object`
- ` Destructuring` thiết lập giá trị mặc định với `Object`
