import {AiOutlineShoppingCart} from 'react-icons/ai';


function NavBar() {
	return (
		<div>
			<div> 
			<div
				className="collapse"
				id="navbarToggleExternalContent"
				data-bs-theme="dark"
			>
				<div className="bg-dark p-4">
					<h5 className="text-body-emphasis h4">Collapsed content</h5>
					<span className="text-body-secondary">
						Toggleable via the navbar brand.
					</span>
				</div>
			</div>
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
					>
						<span className="navbar-toggler-icon"></span>
					</button>
                    <div>
                        <AiOutlineShoppingCart color={"#ef9b0f"} size ={25}/>
                    </div>
				</div>
			</nav>
			<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
	
  </div>
 
</nav>
</div>
<hr className="hr" />
		</div>
	);
}

export default NavBar;
