import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
    return (
        <div className="carousel carousel-center rounded-box p-4 h-[28rem] bg-neutral  space-x-4 ">
            {images.map((image) => {
                return (
                    <div key={image} className="carousel-item">
                        <img
                            src={image}
                            alt=""
                            className="object-cover rounded-box  w-80"
                        />
                    </div>
                );
            })}
        </div>
    );
};
export default Hero;
