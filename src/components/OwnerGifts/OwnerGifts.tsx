const OwnerGifts = () => {
	const Itemimage =
		"https://res.cloudinary.com/sudeshmaldivesbook/image/upload/v1692737845/Curata_Pewter_Bejeweled_Crystals_Gold-Tone_Enameled_Sophie_Siamese_Cat_Trinket_Box_on_18_Inch_Necklace.jpg";
	return (
    
		<div className="mb-5 mt-5 d-flex justify-content-center">
			<div className="card" style={{ width: "18rem" }}>
        
      <img src= {Itemimage} className="card-img-top" alt=""/>
				<div className="card-body">
        <h5 className="mt-3">
          Sieamese Cat Bejwelled Trinket Box
        </h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</p>
          <a href="#" className="btn btn-primary">Shop</a>
				</div>
			</div>
		</div>

	);
};

export default OwnerGifts;
