import React from "react";

const Cabecera = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container d-flex">
					<div>
						<a className="navbar-brand" href="#">
							Navbar
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
					<div>
						<div
							className="collapse navbar-collapse"
							id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="#">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										About
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Services
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Cabecera;
