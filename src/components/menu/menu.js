import React, { useState } from "react";
import styles from "./menu.module.css";
import { NavLink } from "react-router-dom";

const menu = () => {
  const [electronics, setelectronics] = useState(false);
  const [furniture, setfurniture] = useState(false);
  const [books, setbooks] = useState(false);
  const [phones, setphones] = useState(false);
  const [sports, setsports] = useState(false);
  const [clothes, setclothes] = useState(false);

  return (
    <div className={styles.menu_container}>
      <div className={styles.div_container}>
        <div
          className={styles.item}
          onMouseEnter={() => setelectronics(true)}
          onMouseLeave={() => setelectronics(false)}
          onClick={() => setelectronics(!electronics)}
        >
          <span style={{ margin: "0px 5px" }}>Electronics</span>
          <span style={{ margin: "0px 5px" }}>
            <i
              className={`fa fa-chevron-${electronics ? "up" : "down"}`}
              aria-hidden="true"
            ></i>
          </span>
          <div
            className={`${
              electronics ? styles.show_container : styles.hide_container
            }`}
          >
            <div className={styles.popup}>
              <NavLink className={styles.link} to="/electronics?q=Television">
                Televison
              </NavLink>
              <NavLink className={styles.link} to="/electronics?q=AC">
                AC
              </NavLink>
              <NavLink className={styles.link} to="/electronics?q=Fridge">
                Fridge
              </NavLink>
              <NavLink className={styles.link} to="/electronics?q=Heater">
                Heater
              </NavLink>
            </div>
          </div>
        </div>

        <div
          className={styles.item}
          onMouseEnter={() => setfurniture(true)}
          onMouseLeave={() => setfurniture(false)}
          onClick={() => setfurniture(!furniture)}
        >
          <span style={{ margin: "0px 5px" }}>Furniture</span>
          <span style={{ margin: "0px 5px" }}>
            <i
              className={`fa fa-chevron-${furniture ? "up" : "down"}`}
              aria-hidden="true"
            ></i>
          </span>
          <div
            className={`${
              furniture ? styles.show_container : styles.hide_container
            }`}
          >
            <div className={styles.popup}>
              <NavLink className={styles.link} to="/furniture?q=Bed">
                Bed
              </NavLink>
              <NavLink className={styles.link} to="/furniture?q=Table">
                Table
              </NavLink>
              <NavLink className={styles.link} to="/furniture?q=Closet">
                Closet
              </NavLink>
              <NavLink className={styles.link} to="/furniture?q=Sofa">
                Sofa
              </NavLink>
            </div>
          </div>
        </div>

        <div
          className={styles.item}
          onMouseEnter={() => setsports(true)}
          onMouseLeave={() => setsports(false)}
          onClick={() => setsports(!sports)}
        >
          <span style={{ margin: "0px 5px" }}>Sports</span>
          <span style={{ margin: "0px 5px" }}>
            <i
              className={`fa fa-chevron-${sports ? "up" : "down"}`}
              aria-hidden="true"
            ></i>
          </span>
          <div
            className={`${
              sports ? styles.show_container : styles.hide_container
            }`}
          >
            <div className={styles.popup}>
              <NavLink className={styles.link} to="/sports?q=Bat">
                Bat
              </NavLink>
              <NavLink className={styles.link} to="/sports?q=Bicycle">
                Bicycle
              </NavLink>
              <NavLink className={styles.link} to="/sports?q=Football">
                Football
              </NavLink>
              <NavLink className={styles.link} to="/sports?q=Hockey">
                Hockey
              </NavLink>
            </div>
          </div>
        </div>

        <div
          className={styles.item}
          onMouseEnter={() => setclothes(true)}
          onMouseLeave={() => setclothes(false)}
          onClick={() => setclothes(!clothes)}
        >
          <span style={{ margin: "0px 5px" }}>Clothes</span>
          <span style={{ margin: "0px 5px" }}>
            <i
              className={`fa fa-chevron-${clothes ? "up" : "down"}`}
              aria-hidden="true"
            ></i>
          </span>
          <div
            className={`${
              clothes ? styles.show_container : styles.hide_container
            }`}
          >
            <div className={styles.popup}>
              <NavLink className={styles.link} to="/clothes?q=T-Shirt">
                T-Shirt
              </NavLink>
              <NavLink className={styles.link} to="/clothes?q=Suits">
                Suits
              </NavLink>
              <NavLink className={styles.link} to="/clothes?q=Trousers">
                Trousers
              </NavLink>
              <NavLink className={styles.link} to="/clothes?q=Shorts">
                Shorts
              </NavLink>
            </div>
          </div>
        </div>

        <div
          className={styles.item}
          onMouseEnter={() => setbooks(true)}
          onMouseLeave={() => setbooks(false)}
          onClick={() => setbooks(!books)}
        >
          <span style={{ margin: "0px 5px" }}>Books</span>
          <span style={{ margin: "0px 5px" }}>
            <i
              className={`fa fa-chevron-${books ? "up" : "down"}`}
              aria-hidden="true"
            ></i>
          </span>
          <div
            className={`${
              books ? styles.show_container : styles.hide_container
            }`}
          >
            <div className={styles.popup}>
              <NavLink className={styles.link} to="/books?q=Fiction">
                Fiction
              </NavLink>
              <NavLink className={styles.link} to="/books?q=Sci-Fi">
                Sci-Fi
              </NavLink>
              <NavLink className={styles.link} to="/books?q=Fact">
                Fact
              </NavLink>
              <NavLink className={styles.link} to="/books?q=Space">
                Space
              </NavLink>
            </div>
          </div>
        </div>

        <div
          className={styles.item}
          onMouseEnter={() => setphones(true)}
          onMouseLeave={() => setphones(false)}
          onClick={() => setphones(!phones)}
        >
          <span style={{ margin: "0px 5px" }}>Phones</span>
          <span style={{ margin: "0px 5px" }}>
            <i
              className={`fa fa-chevron-${phones ? "up" : "down"}`}
              aria-hidden="true"
            ></i>
          </span>
          <div
            className={`${
              phones ? styles.show_container : styles.hide_container
            }`}
          >
            <div className={styles.popup}>
              <NavLink
               className={styles.link}
                to="/phones?q=iPhone"
              >
                iPhone
              </NavLink>
              <NavLink
                className={styles.link}
                to="/phones?q=Samsung"
              >
                Samsung
              </NavLink>
              <NavLink
                className={styles.link}
                to="/phones?q=Oppo"
              >
                Oppo
              </NavLink>
              <NavLink
                className={styles.link}
                to="/phones?q=Vivo"
              >
                Vivo
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
