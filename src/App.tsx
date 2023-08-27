import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Catjweleryboxes from "./pages/Catjweleryboxes";

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
				<Routes>
					<Route path="/" element={<Catjweleryboxes addToCart={addToCart} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
