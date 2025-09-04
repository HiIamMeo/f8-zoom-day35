// src/components/layouts/Navigation/index.jsx
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const navItems = [
  { to: "/", title: "Home" },
  { to: "/counter", title: "Counter" },
  { to: "/todo", title: "Todo" },
  { to: "/profile", title: "Profile" },
  { to: "/products", title: "Products" },
  { to: "/comments", title: "Comments" },
  { to: "/weather", title: "Weather" },
  { to: "/buttons", title: "Buttons" },
];

function Navigation() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.list}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.item}>
            <NavLink
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
