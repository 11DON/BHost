import { useState } from "react";
import { Link } from "react-router-dom";

function DropdownItemWithSubmenu({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item dropdown w-lg-auto ms-auto">
      <button
        className="btn text-start text-lg-center dropdown-toggle"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>

      <ul className={`dropdown-menu ${open ? "show" : ""}`}>
        {items.map((item, i) => (
          <li key={i} className={item.children ? "dropdown-submenu" : ""}>
            {item.children ? (
              <>
                <button
                  className="dropdown-item  text-start"
                  onClick={(e) => e.preventDefault()}
                >
                  {item.label}
                </button>
                <ul className="dropdown-menu">
                  {item.children.map((child, j) => (
                    <li key={j}>
                      <Link className="dropdown-item" to={child.to}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link className="dropdown-item" to={item.to}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default DropdownItemWithSubmenu;
