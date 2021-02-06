import React,{useState} from "react";
import styles from "./sidebar.module.css";


const sidebar = (props) => {
  
  const [starsActive,setStarsActive] = useState(true);
  const [brandsActive,setBrandsActive] = useState(true);
  const [range,setRange]=useState({value:800});

  const ChangeRangeHandler=(e)=>{
    setRange({value:e.target.value})
  }


  return (
    <>
      <div className={styles.side_nav_container}>
        <h5 className={styles.filter_text}>Filters</h5>
        <hr/>
        <div className={styles.range_container}>
          <div className={styles.filter_text}><h5>Price</h5></div>
          <div >
            <input
            // className={styles.input_range}
            style={{width: "200px"}}
            type="range"
            min="100"
            max="1000"
            step="100"
            value={range.value}
            id="range_id"
            // className={styles.range}
            onChange={ChangeRangeHandler}
          ></input></div>

        <div className={styles.left}>
          <p>Minimum</p>
          <h6>100</h6>
        </div>
        <div className={styles.right}>
          <p>Maximum</p>
          <h6>{range.value}</h6>
        </div>


          {/* <div className={styles.range_filters}>
          <div className={styles.min_filter}>
            <select id="cars" name="cars">
              <option value="Min">Min</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="500">500</option>
            </select>
          </div>

          <div className={styles.max_filter}>
            <select id="cars" name="cars">
              <option value="1000">1000</option>
              <option value="1500">1500</option>
              <option value="2000">2000</option>
              <option value="2500+">2500+</option>
            </select>
          </div>


          </div> */}
          
        </div>
       
        <div className={styles.brands_container}>
          <button type="button" className={styles.collapsible} onClick={()=>setBrandsActive(!brandsActive)}>
            <span className={styles.left}><h5>Brands</h5></span><span className={styles.right}><i className={`fa fa-chevron-${brandsActive ?'up':'down' }`} aria-hidden="true"></i></span>
          </button>
          <div className={`${styles.brands_content} ${brandsActive ?'': styles.hide}`}>
          <input 
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1" className={styles.star_number}>American Tourister</label>
          <br />
          <input
            type="checkbox"
            id="vehicle2"
            name="vehicle2"
            value="Car"
          ></input>
          <label for="vehicle2" className={styles.star_number}> Flying Machine</label>
          <br />
          <input
            type="checkbox"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
          ></input>
          <label for="vehicle3" className={styles.star_number}> Gucci</label>
          <br />
          </div>
          
        </div>
       
        <div className={styles.checkbox_container}>
          <button type="button" className={styles.collapsible} onClick={()=>setStarsActive(!starsActive)}>
            <span className={styles.left}><h5>Ratings</h5></span><span className={styles.right}><i className={`fa fa-chevron-${starsActive ?'up':'down' }`} aria-hidden="true"></i></span>
            
          </button>
          <div className={`${styles.content} ${starsActive ?'': styles.hide}`}>
            <label>
              <input 
                type="checkbox"
                value="on"
              ></input>
              <div className={styles.star_number}>4★ &amp; above</div>
            </label>
            <label>
              <input
                type="checkbox"
                value="on"
              ></input>
              
              <div className={styles.star_number}>3★ &amp; above</div>
            </label>
            <label>
              <input
                type="checkbox"
                value="on"
              ></input>
              <div className={styles.star_number}>2★ &amp; above</div>
            </label>
            <label>
              <input
                type="checkbox"
                value="on"
              ></input>
              <div className={styles.star_number}> 1 ★ &amp; above</div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default sidebar;
