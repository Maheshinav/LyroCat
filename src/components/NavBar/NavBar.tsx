import { useState } from "react";
import "./NavBar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import SideMenu from "../SideMenu/SideMenu";

const NavBar= ({ cartCount }: { cartCount: number }) => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
	return (
		<div>
			{isMenuOpen && <SideMenu />}
			<div>
				<nav className="navbar navbar-dark bg-dark">
					<div className="container-fluid">
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarToggleExternalContent"
							aria-controls="navbarToggleExternalContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
							onClick={toggleMenu}
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="d-flex align-items-center">
    <AiOutlineShoppingCart color="#ef9b0f" size={25} className="me-2" />
    <div style={{ position: 'relative' }}>
        <BsFillCircleFill color="#ef9b0f" size={20} />
        {cartCount > 0 && (
            <span style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                color: 'white', 
                fontSize: '12px' 
            }}>
                {cartCount}
            </span>
        )}
    </div>
</div>

					</div>
				</nav>

				<div
					className="collapse collapse-horizontal"
					id="collapseWidthExample"
					data-bs-theme="dark"
				>
					<div className="bg-dark p-4">
						<h5 className="text-body-emphasis h4">Collapsed content</h5>
						<span className="text-body-secondary"></span>
					</div>
				</div>
			</div>
			<div></div>
			<hr className="hr" />
		</div>
	);
};

export default NavBar;
