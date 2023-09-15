import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Catjweleryboxes from "./pages/Catjweleryboxes";
import OwnerGifts from "./components/OwnerGifts/OwnerGifts";
import Logo from "./assets/logo.png";

type Item = {
	name: string;
	price: number;
	quantity: number;
};

function App() {
	const [cartCount, setCartCount] = useState(0);
	const [cartItems, setCartItems] = useState<Item[]>([]);

	const addToCart = (itemName: string, itemPrice: number) => {
		const existingItem = cartItems.find((item) => item.name === itemName);

		if (existingItem) {
			setCartItems((prevItems) =>
				prevItems.map((item) =>
					item.name === itemName
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			setCartItems((prevItems) => [
				...prevItems,
				{ name: itemName, price: itemPrice, quantity: 1 },
			]);
		}

		setCartCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<BrowserRouter>
				<NavBar cartCount={cartCount} cartItems={cartItems} />
				<div className="container mt-3">
					<div className="d-flex justify-content-center">
						<img src={Logo} alt="Your Logo" className="img-fluid" style={{maxWidth: '200px'}}/> 
						
					</div>
					<hr className="hr"/>
				</div>
				<Routes>
					<Route path="/Catjweleryboxes" element={<Catjweleryboxes addToCart={addToCart} />} />
					<Route path="/" element={<OwnerGifts/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
