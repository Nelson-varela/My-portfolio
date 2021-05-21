import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand"><h1>My Portfolio</h1></a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link active mx-4" aria-current="page">
                  <h4>My Blog</h4>
                </a>
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link href="/github">
                <a className="nav-link">
                 <h4>Github</h4>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;