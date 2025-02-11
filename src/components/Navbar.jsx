const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar bg-[#fcba03] shadow-sm">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Sports Academy</a>
                  <ul className="p-2">
                    <li>
                      <a>Picture Gallery</a>
                    </li>
                    <li>
                      <a>Live TV</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Handicrafts</a>
                </li>
              </ul>
            </div>

            {/* LOGO + TEXT */}
            <div className="flex items-center">
  <a className="px-3 py-2 bg-[#fcba03] rounded-md hover:bg-[#cfb56c] text-xl font-bold flex items-center">
    <img
      src="/src/assets/logo.jpg"
      alt="Shopno Kurai Logo"
      className="h-10 w-auto mr-2"
    />
    <div>
      <h1>Swapno Kurai</h1>
      {/* Hide this text on small screens, show on md+ screens */}
      <small className="hidden md:block font-normal text-sm">
        Social Development Agency since 2018
      </small>
    </div>
  </a>
</div>

          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <details>
                  <summary>Sports Academy</summary>
                  <ul className="p-2">
                    <li>
                      <a>Picture Gallery</a>
                    </li>
                    <li>
                      <a>Live TV</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Handicrafts</a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
