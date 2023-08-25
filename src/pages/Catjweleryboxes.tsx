


const Catjweleryboxes = ({ addToCart }: { addToCart: () => void }) => {
    

    const itemimagedefault= "https://res.cloudinary.com/sudeshmaldivesbook/image/upload/v1692737845/Curata_Pewter_Bejeweled_Crystals_Gold-Tone_Enameled_Sophie_Siamese_Cat_Trinket_Box_on_18_Inch_Necklace.jpg";
    const itemimagetwo="https://res.cloudinary.com/sudeshmaldivesbook/image/upload/v1692758360/PLAYFUL_KITTY_CAT_ON_BLUE_BASE_BEAUCHAMP.jpg";
    const itemimagethree="https://res.cloudinary.com/sudeshmaldivesbook/image/upload/v1692758359/H_D_Crystal_Ring_Holder_Dish.jpg";
    const itemimagefour="https://res.cloudinary.com/sudeshmaldivesbook/image/upload/v1692758360/download_2.jpg"
  return (
    
    <div className="m-2">
        <h2 className="text-center p-2">
            Cat Jwelery Boxes
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src={itemimagedefault} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" className="btn btn-outline-primary" onClick={addToCart}>Add to Cart</button>

      </div>
    </div>
    
  </div>
  <div className="col">
    <div className="card">
      <img src={itemimagetwo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" className="btn btn-outline-primary" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={itemimagethree} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" className="btn btn-outline-primary" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={itemimagefour} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" className="btn btn-outline-primary" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Catjweleryboxes;