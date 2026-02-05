import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "../Heading/Heading";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1 400px] px-10 mx-auto py-20 ">
        <Heading heighlight="Customer" Heading="Saying" />

        <div className="flex justify-end my-5 py-5 gap-x-3">
          <button className="custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500">
            <IoIosArrowBack />
          </button>
          <button className="custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper 
        navigation={{
            nextEl:".custom-next",
            prevEl:".custom-prev"
        }} 
        loop={true} 
        breakpoints={{
          640:{slidesPerView:1,spaceBetween:20},
          768:{slidesPerView:2,spaceBetween:20},
          1024:{slidesPerView:3,spaceBetween:20},
        }}
        modules={[Navigation]} className="mySwiper">
          {review.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img src={item.image} className="w-full h-full"/>
                  </div>

                  <div>
                    <h5 className="text-xl font-bold ">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-yellow-400 gap-1 mt-3 text-xl">
                      {Array.from({length:item.ration},(_, index)=>(
                        <FaStar />
                      ))}
                      </span>
                  </div>
                </div>

                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">
                    {item.para}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    ration: 3,
    para: "Freshbasket is my go-to store for all gtocery needs. Their product is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of oraganic options!",
    image: customer1,
  },

  {
    id: 2,
    name: "Devid Smith",
    profession: "Chef",
    ration: 4,
    para: "As a chef, quality ingredients are everything. Freshbasket consistently delivers the best vegetables,hurbs, and pantry staples. Highly recommended!  ",
    image: customer2,
  },

  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    ration: 3,
    para: "Shoping online with FreshBasket has saved me so much time. I trust them for my family weekly groceries-always fresh,afordable and reliable.",
    image: customer3,
  },

  {
    id: 4,
    name: "Carlos mendes",
    profession: "Fitness Coach",
    ration: 5,
    para: "I appreciate the selection of healthy foods and clean-label product. Freshbasket has been a great partner in my wellness journey!",
    image: customer4,
  },

  {
    id: 5,
    name: "Natcha Phongchi",
    profession: "Nutritionist",
    ration: 4,
    para: "Freshbasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-match",
    image: customer5,
  },
];
