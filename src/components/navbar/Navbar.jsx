import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="heading">
          <h1>Dashboard</h1>
        </div>
        <div className="items">
          <div className="item search">
          <input type="text " placeholder="Search..." />
          <SearchOutlinedIcon />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQE1AWjzdRyhWg/profile-displayphoto-shrink_100_100/0/1677085437230?e=1687392000&v=beta&t=k_AtGH55bo3VbsZYvzETLOmrpXmhvmvZsZdMpTVXNZE"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
