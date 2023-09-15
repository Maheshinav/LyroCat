import "./Catjweleryboxes.css";



type CatjweleryboxesProps = {
	addToCart: (name: string, price: number) => void;
};

const Catjweleryboxes: React.FC<CatjweleryboxesProps> = ({ addToCart }) => {
	const itemimagedefault =
		"https://res.cloudinary.com/sudeshmaldivesbook/image/upload/v1692737845/Curata_Pewter_Bejeweled_Crystals_Gold-Tone_Enameled_Sophie_Siamese_Cat_Trinket_Box_on_18_Inch_Necklace.jpg";
	const Itemimage1 =
		"https://res.cloudinary.com/sudeshmaldivesbook/image/upload/v1692758360/PLAYFUL_KITTY_CAT_ON_BLUE_BASE_BEAUCHAMP.jpg";
	const Itemimage2 =
		"https://res.cloudinary.com/sudeshmaldivesbook/image/upload/v1692758359/H_D_Crystal_Ring_Holder_Dish.jpg";
	const Itemimage3 =
		"https://res.cloudinary.com/sudeshmaldivesbook/image/upload/v1692758360/download_2.jpg";

 return (
        <div className="m-2">
            <h2 className="text-center p-2">Cat Jewelry Boxes</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <img src={itemimagedefault} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Siamese cat trinket box</h5>
                            <p>$74.99</p>
                            <button
                                type="button"
                                className="btn btn-outline-warning"
                                onClick={() => addToCart("Siamese cat trinket box", 74.99)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={Itemimage1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Cute Cat Love Box</h5>
                            <p>$119.99</p>
                            <button
                                type="button"
                                className="btn btn-outline-warning"
                                onClick={() => addToCart("Cute Cat Love Box", 119.99)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={Itemimage2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mermaid Cat Love Box</h5>
                            <p>$149.99</p>
                            <button
                                type="button"
                                className="btn btn-outline-warning"
                                onClick={() => addToCart("Mermaid Cat Love Box", 149.99)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={Itemimage3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Flower Cat Jewelry Box</h5>
                            <p>$169.99</p>
                            <button
                                type="button"
                                className="btn btn-outline-warning"
                                onClick={() => addToCart("Flower Cat Jewelry Box", 169.99)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catjweleryboxes;




