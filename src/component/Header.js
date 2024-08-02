import React from 'react'
import '../Css/Header.css'

function Header() {
  return (
    <div>
      <div className="container-fluid">
        <input type="text" placeholder='Search here' />
      </div>

      {/* navigation */}
      <div className="navigation">
        

      </div>


      {/*carousel page  */}

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className='object-fit images' src="https://t3.ftcdn.net/jpg/01/05/94/58/360_F_105945852_XrwXKqIJAXkgz3fBFrXajFZ3nmPNmIo9.jpg"      class="d-block w-100"  alt="..."/>
    </div>
    <div class="carousel-item">
      <img className='object-fit images' src="https://img.freepik.com/free-photo/female-artist-hand-making-cartoon-faces-using-craft-equipment_23-2148188350.jpg?t=st=1709646143~exp=1709649743~hmac=7642a01e26c408001030dd4c3152da70312d2d39ced55d63e121ba0e31002e83&w=996" class="d-block w-100"   alt="..."/>
    </div>
    <div class="carousel-item">
      <img className='object-fit images' src="https://img.freepik.com/premium-photo/handicraft-hd-8k-wallpaper-stock-photographic-image_853645-41318.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Header;