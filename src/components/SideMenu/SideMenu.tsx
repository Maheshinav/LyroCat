
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div className="dropdown-menu w-50">
      <a className="dropdown-item hoverable-item" href="#">Gifts for Owners</a>
      <a className="dropdown-item hoverable-item" href="#">Gifts for Cats</a>
    </div>
  );
};

export default SideMenu;
