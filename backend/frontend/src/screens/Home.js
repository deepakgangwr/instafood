import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState(''); // Assuming you have a search state

  const loadFoodItems = async () => {
    let response = await fetch(`${window.location.origin}/api/foodData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodItems(response[0]);
    setFoodCat(response[1]);
  }

  useEffect(() => {
    loadFoodItems();
  }, []);

  return (
    <div>
      <div><Navbar /></div>
      <div>  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain ! important" }}>
      <div className="carousel-inner" id='carousel'>
        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <div className="carousel-innertest pb-1" id='test'><p>𝑲𝒉𝒂𝒏𝒂 - 𝑲𝒉𝒂𝒋𝒂𝒏𝒂</p></div>
          <div className="carousel-innertest1 pb-3" id='test1'><p>Quick, Delicious Meals Delivered to Your Doorstep Instantly</p></div>
          <div className="d-flex justify-content-center pb-3">
          <input className="form-control me-3 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <button className="btn btn-outline-light " type="submit">Search</button>
          </div>
        </div>
        <div className="carousel-item active">
          <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" style={{ filter: "brightness(50%)" }} alt="..." />
        </div>
        <div className="carousel-item ">
          <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
      <div className='container  py-5'  style={{backgroundColor: "" }}> {/* bootstrap is mobile first */}
        {
          foodCat.length > 0
            ? foodCat.map((data) => {
              return (
                <div key={data.id} className='row mb-3'>
                  <div className='fs-3 m-3 '>
                    {data.CategoryName}
                  </div>
                  <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                  {foodItems.length > 0 ? foodItems.filter(
                    (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodItem={filterItems}
                            options={filterItems.options[0]}  >

                            </Card>
                        </div>
                      )
                    }) : <div>No Such Data</div>}
                </div>
              )
            })
            : ""
        }
      </div>
     <Footer />
    </div>
  )
}
