import { useState, useRef } from "react";
import { Offcanvas } from "bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SideMenu from "../SideMenu/SideMenu";

const NavBar = ({ cartCount }: { cartCount: number }) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleMenu = (): void => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleOffcanvasToggle = () => {
		if (offcanvasRef.current) {
			const bsOffcanvas = new Offcanvas(offcanvasRef.current);
			bsOffcanvas.toggle();
		}
	};

	const offcanvasRef = useRef<HTMLDivElement | null>(null);

	const Logo =
		"https://res.cloudinary.com/sudeshmaldivesbook/image/upload/v1692995251/d221d82875e0490ca474a9d13884e0ab.png";

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
							<button
								className="btn position-relative pr-1"
								style={{ backgroundColor: "transparent", border: "none" }}
								onClick={handleOffcanvasToggle}
							>
								<AiOutlineShoppingCart
									color="#ef9b0f"
									size={25}
									style={{ padding: 0, margin: 0 }}
								/>
								{cartCount > 0 && (
									<span
										className="position-absolute top-19 start-100 translate-middle badge rounded-pill bg-danger"
										style={{ transform: "translate(0, -50%)", left: "-15px" }}
									>
										{cartCount}
										<span className="visually-hidden">items in cart</span>
									</span>
								)}
							</button>
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

			<Link to="/">
				<div className="d-flex justify-content-center align-items-center">
					<img src={Logo} alt="Logo Description" className="img-fluid p-2" />
				</div>
			</Link>

			<div
				ref={offcanvasRef}
				className="offcanvas offcanvas-start"
				data-bs-scroll="true"
				tabIndex={-1}
				id="offcanvasWithBothOptions"
				aria-labelledby="offcanvasWithBothOptionsLabel"
			>
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
						Your Items
					</h5>
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Item Name</th>
								<th scope="col">Price</th>
								<th scope="col">Quantity</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>{}</td>
								<td>{}</td>
								<td>{}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<hr className="hr" />
		</div>
	);
};

export default NavBar;
