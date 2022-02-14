import { IPhoto } from "../../interfaces";
import { FreeMode, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css/navigation";
interface ISliderPhotosProps {
  photos: IPhoto[];
}
const SliderPhotos: React.FC<ISliderPhotosProps> = ({ photos }) => {
  return (
    <section>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {photos.map(({ id, url, title }) => (
          <SwiperSlide key={id}>
            <Image src={url} width={600} height={600} alt={title}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderPhotos;
