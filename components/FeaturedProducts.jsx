import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FeaturedProduct from "../components/FeaturedProduct";
import { Navigation, EffectCoverflow } from "swiper/modules";
import AnimatedBlock from "../components/AnimatedBlock";
import { CaretIcon } from "./CustomIcons";

// Import swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const FeaturedProducts = ({
  products,
  setCartVisible,
  setCartError,
  cartState,
  setCurrentProduct,
}) => {
  const swiperRef = useRef(null);

  return (
    <>
      <AnimatedBlock className="w-10/12 lg:w-8/12 xl:w-2/3 2xl:w-6/12">
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={1.2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 90,
              modifier: 3,
            }}
            navigation={true}
            modules={[EffectCoverflow, Navigation]}
            className="px-4"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} data-slide-index={index}>
                <FeaturedProduct
                  product={product}
                  setCartVisible={setCartVisible}
                  setCartError={setCartError}
                  cartState={cartState}
                  setCurrentProduct={(product) => setCurrentProduct(product)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-between absolute top-1/2 w-full">
            <div
              className="rotate-90 cursor-pointer -translate-x-full -ml-4"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <CaretIcon />
            </div>
            <div
              className="-rotate-90 cursor-pointer translate-x-full -mr-4"
              onClick={() => swiperRef.current.slideNext()}
            >
              <CaretIcon />
            </div>
          </div>
        </div>
      </AnimatedBlock>
    </>
  );
};

export default FeaturedProducts;
