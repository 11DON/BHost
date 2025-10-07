import { useState } from "react";
import { Link } from "react-router-dom";

function DropdownItemWithSubmenu({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item dropdown w-lg-auto ms-auto">
      <button
        className="btn text-start text-lg-center dropdown-toggle"
        onClick={() => setOpen(!open)}
        type="button"
      >
        {title}
      </button>

      <ul className={`dropdown-menu ${open ? "show" : ""}`}>
        {items.map((item, i) => (
          <li key={i} className={item.children ? "dropdown-submenu" : ""}>
            {item.children ? (
              <>
                {item.to ? (
                  <Link
                    className="dropdown-item text-start"
                    to={item.to}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="dropdown-item text-start"
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.label}
                  </button>
                )}
                <ul className="dropdown-menu submenu-responsive">
                  {item.children.map((child, j) => (
                    <li key={j}>
                      {child.to ? (
                        <Link className="dropdown-item" to={child.to} onClick={() => setOpen(false)}>
                          {child.label}
                        </Link>
                      ) : (
                        <a className="dropdown-item" href={child.href} onClick={() => setOpen(false)}>
                          {child.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              item.to ? (
                <Link className="dropdown-item" to={item.to} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <a className="dropdown-item" href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              )
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default DropdownItemWithSubmenu;
