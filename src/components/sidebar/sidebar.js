import React, { useState } from "react";
import styles from "./sidebar.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router'

const sidebar = (props) => {
  const [starsActive, setStarsActive] = useState(true);
  const [brandsActive, setBrandsActive] = useState(true);
  const [range, setRange] = useState({ value: 800 });
  const dispatch = useDispatch();
  const history = useHistory();

  const [filters, setFilter] = useState({
    brands: [],
    ratings: [],
    range: {
      min: 100,
      max: 800,
    },
  });
  const [filterData, setFilterData] = useState([]);

  const ChangeRangeHandler = (e) => {
    setRange({ value: e.target.value });
    setFilter({ ...filters, range: { min: 100, max: e.target.value } });
  };
  const ChangeRatingsHandler = (e) => {
    if (!filters.ratings.includes(e.target.value))
      setFilter({ ...filters, ratings: [...filters.ratings, e.target.value] });
    else {
      let arr = filters.ratings.filter((item) => item !== e.target.value);
      setFilter({ ...filters, ratings: arr });
    }
  };
  const ChangeBrandsHandler = (e) => {
    if (!filters.brands.includes(e.target.value))
      setFilter({ ...filters, brands: [...filters.brands, e.target.value] });
    else {
      let arr = filters.brands.filter((item) => item !== e.target.value);
      setFilter({ ...filters, brands: arr });
    }
  };

  const ApplyFilters = () => {

    console.log('filter applied')

    let query = `http://localhost:3000/items/search?q=all`;

    let maxPrice = filters.range.max;
    let brands = filters.brands;

    let star = filters.ratings.map((item) => parseInt(item));

    star = Math.min(...star);



    if(filters.ratings.length == 0)
    star = 1;


    let queryappend = `&max=${maxPrice}&star=${star}
    ${brands.length>0
      ?`&brands=${encodeURIComponent(JSON.stringify(brands))}`
      :''}`;

    // brands = encodeURIComponent(JSON.stringify(brands));

    //query = query + queryappend + "&brands=" + brands;


    history.push('/search?q=all'+queryappend);
    // let data = null;
    // const getData = async () => {
    //   const contentData = await axios.get(query);
    //   if (contentData) data = contentData.data;


    //   return dispatch({ type: "ADD_FILTERS", payload: data });
    // };
    // getData();
  };

  return (
    <>
      <div className={styles.side_nav_container}>
        <h5 className={styles.filter_text}>Filters</h5>
        <hr />
        <div className={styles.range_container}>
          <div className={styles.price_text}>
            <h5>Price</h5>
          </div>
          <div className={styles.ranges}>
            <div styles={styles.input_div}>
              <input
                style={{ width: "200px" }}
                type="range"
                min="100"
                max="1000"
                step="100"
                value={range.value}
                id="range_id"
                // className={styles.range}
                onChange={ChangeRangeHandler}
              ></input>
            </div>
            <div className={styles.left}>
              <h6>Min : 100</h6>
            </div>
            <div className={styles.right}>
              <h6>Max : {range.value}</h6>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <div className={styles.brands_container}>
          <button
            type="button"
            className={styles.collapsible}
            onClick={() => setBrandsActive(!brandsActive)}
          >
            <span className={styles.left}>
              <h5>Brands</h5>
            </span>
            <span className={styles.right}>
              <i
                className={`fa fa-chevron-${brandsActive ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
            </span>
          </button>
          <div
            className={`${styles.brands_content} ${
              brandsActive ? "" : styles.hide
            }`}
          >
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="300"
              onChange={ChangeBrandsHandler}
            ></input>
            <label for="American Tourister" className={styles.star_number}>
              D&G
            </label>
            <br />
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="301"
              onChange={ChangeBrandsHandler}
            ></input>
            <label for="American Tourister" className={styles.star_number}>
              Peter England
            </label>
            <br />
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="302"
              onChange={ChangeBrandsHandler}
            ></input>
            <label for="American Tourister" className={styles.star_number}>
              American Tourister
            </label>
            <br />
            <input
              type="checkbox"
              id="vehicle2"
              name="vehicle2"
              value="303"
              onChange={ChangeBrandsHandler}
            ></input>
            <label for="Flying Machine" className={styles.star_number}>
              {" "}
              Flying Machine
            </label>
            <br />
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              value="304"
              onChange={ChangeBrandsHandler}
            ></input>
            <label for="vehicle3" className={styles.star_number}>
              {" "}
              Gucci
            </label>
            <br />
          </div>
        </div>

        <hr />

        <div className={styles.checkbox_container}>
          <button
            type="button"
            className={styles.collapsible}
            onClick={() => setStarsActive(!starsActive)}
          >
            <span className={styles.left}>
              <h5>Ratings</h5>
            </span>
            <span className={styles.right}>
              <i
                className={`fa fa-chevron-${starsActive ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
            </span>
          </button>
          <div
            className={`${styles.content} ${starsActive ? "" : styles.hide}`}
          >
            <label>
              <input
                type="checkbox"
                value="4"
                onChange={ChangeRatingsHandler}
              ></input>
              <div className={styles.star_number}>4★ &amp; above</div>
            </label>
            <label>
              <input
                type="checkbox"
                value="3"
                onChange={ChangeRatingsHandler}
              ></input>

              <div className={styles.star_number}>3★ &amp; above</div>
            </label>
            <label>
              <input
                type="checkbox"
                value="2"
                onChange={ChangeRatingsHandler}
              ></input>
              <div className={styles.star_number}>2★ &amp; above</div>
            </label>
            <label>
              <input
                type="checkbox"
                value="1"
                onChange={ChangeRatingsHandler}
              ></input>
              <div className={styles.star_number}> 1 ★ &amp; above</div>
            </label>
          </div>
        </div>
        <hr />
        <div className={styles.applyFilter}>
          <button styles={styles.applybtn} onClick={ApplyFilters}>
            <span>Apply</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default sidebar;
