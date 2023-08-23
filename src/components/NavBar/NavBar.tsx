import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SideMenu from "../SideMenu/SideMenu";

const NavBar = () => {
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
						<div>
							<AiOutlineShoppingCart color="#ef9b0f" size={25} />
						</div>
					</div>
				</nav>

				<div
					className="collapse"
					id="navbarToggleExternalContent"
					data-bs-theme="dark"
				>
					<div className="bg-dark p-4">
						<h5 className="text-body-emphasis h4">Collapsed content</h5>
						<span className="text-body-secondary"></span>
					</div>
				</div>
			</div>
			<hr className="hr" />
		</div>
	);
};

export default NavBar;
