import { useState } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import OwnerGifts from "./components/OwnerGifts/OwnerGifts";
import Catjweleryboxes from "./pages/Catjweleryboxes";

function App() {

	const [cartCount, setCartCount] = useState(0);

    const addToCart = () => {
        setCartCount(prevCount => prevCount + 1);

	}
	return (
		<div>
			<BrowserRouter>
				<NavBar cartCount={cartCount} />
				<Routes>
					<Route path="/" element={<OwnerGifts />} />
					<Route path="/Catjweleryboxes" element={<Catjweleryboxes addToCart={addToCart}/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
