import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const Slider1 = () => {

    var settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
        infinite: true,
    
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          
        ]
      };
      const arr=[
        {
          url:"https://th.bing.com/th/id/OIP.QSBlqfC_Bz18-KgO6CythwHaEo?pid=ImgDet&rs=1",
           para:" Min. 40% off"
        },
        {
          url:"https://th.bing.com/th/id/OIP.u8RmBhfw7SMuyGnW_g430gHaFS?pid=ImgDet&rs=1",
           para:"Min. 40% off"
        },
        {
          url:"https://www.fashiongonerogue.com/wp-content/uploads/2019/07/Stylish-Woman-Shopping.jpg",
           para:"Min. 40% off"
        },
        {
          url:"https://th.bing.com/th/id/OIP.u8RmBhfw7SMuyGnW_g430gHaFS?pid=ImgDet&rs=1",
           para:"Min. 40% off"
        },
        {
          url:"https://th.bing.com/th/id/OIP.QSBlqfC_Bz18-KgO6CythwHaEo?pid=ImgDet&rs=1",
           para:"Min. 40% off"
        },
        {
          url:"https://th.bing.com/th/id/OIP.u8RmBhfw7SMuyGnW_g430gHaFS?pid=ImgDet&rs=1",
           para:"Min. 40% off"
        }
        
      ]
  return (
    <div>
        
            <Slider {...settings}>
      {
            arr.map((data, i)=> (
              <div>
              <img className='im' src={data.url} style={{width:"22vw", height: "27vh"}} alt=""/>
              <p style={{marginLeft:30}}>{data.para}</p>
              </div>
            ))
          }
   
    </Slider>
    
    </div>
  )
}
// export default Slider1;