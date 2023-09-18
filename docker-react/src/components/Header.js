import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
const Header = () => {
    return (_jsx("header", { children: _jsxs("h1", { className: "{header-icon}", children: [_jsx(AddTaskRoundedIcon, {}), " ToDoList"] }) }));
};
export default Header;
