import { message } from "antd";
import './App.css';
import TabButton from "./components/TabButton";
function App(props) {
  //#TODO: truyền hàm sự kiện từ Component cha vào Component con
  const [messageApi, contextHolder] = message.useMessage();

    const handleSuccess = () => {
        messageApi.open({
        type: "success",
        content: "This is a success message",
        });
    };

    const handleWarning = () => {
        messageApi.open({
        type: "warning",
        content: "This is a warning message",
        });
    };

    const handleError = () => {
        messageApi.open({
        type: "error",
        content: "This is an error message",
        });
    };

  return (
    <>
      {contextHolder}
      <TabButton onSelect={handleSuccess} >Success</TabButton>
      <TabButton onSelect={handleError}>Error</TabButton>
      <TabButton onSelect={handleWarning} >Warning</TabButton>
    </>
  )
}

export default App
