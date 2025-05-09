import "./Book.css";
const book = [
    {
        id: 1,
        title: "Nhà Giả Kim",
    },
    {
        id: 2,
        title: "Bí Mật Tội Phạm",
    },
    {
        id: 3,
        title: "1000 Lời Xám Hối",
    },
    {
        id: 4,
        title: "Đi Tìm Lẽ Sống"
    }
]
function Book(props) {
    return (
        <div className="book-container">
                <h3 className="book-title">Danh Sách Yêu Thích</h3>
                <div className="book-card">
                {book.map((item) => (
                    <div className="book-list" key={item.id}>
                        <div className="book-item">{item.title}</div>
                    </div>
                ))}
                </div>
        </div>
    );
}

export default Book;