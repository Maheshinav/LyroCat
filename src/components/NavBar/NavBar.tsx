import { useState, useRef } from "react";
import { Offcanvas } from "bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SideMenu from "../SideMenu/SideMenu";

type Item = {
	name: string;
	price: number;
	quantity: number;
};

type NavBarProps = {
	cartCount: number;
	cartItems: Item[];
};

const NavBar: React.FC<NavBarProps> = ({ cartCount, cartItems }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const offcanvasRef = useRef(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleOffcanvasToggle = () => {
		if (offcanvasRef.current) {
			const bsOffcanvas = new Offcanvas(offcanvasRef.current);
			bsOffcanvas.toggle();
		}
	};
	const totalAmount = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	return (
		<div>
			{isMenuOpen && <SideMenu />}
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
									className="position-absolute top-19 start-100 translate-middle badge rounded-pill bg-color"
									style={{
										transform: "translate(0, -50%)",
										left: "-15px",
										backgroundColor: "#ef9b0f",
									}}
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
					<table className="table table-responsive">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Item Name</th>
								<th scope="col">Price</th>
								<th scope="col">Quantity</th>
								<th scope="col">Item Total</th>
							</tr>
						</thead>
						<tbody>
							{cartItems.map((item, index) => (
								<tr key={index}>
									<th scope="row">{index + 1}</th>
									<td>{item.name}</td>
									<td>${item.price}</td>
									<td>{item.quantity}</td>
									<td>${(item.price * item.quantity).toFixed(2)}</td>
								</tr>
							))}
						</tbody>
						<tfoot>
							<tr>
								<td className="text-right, strong"><strong> Total: </strong></td>
								<td>${totalAmount.toFixed(2)} </td>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
