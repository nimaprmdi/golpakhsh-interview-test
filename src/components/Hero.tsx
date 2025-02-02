import hero from "../assets/images/hero.png";
import { useNavigate } from "react-router-dom";

interface IHeroProps {
  title?: string;
  subTitle?: string;
  buttonText?: string;
}

const Hero = ({
  title = "Elegance in simplicity,",
  subTitle = "Earth’s harmony",
  buttonText = "New In",
}: IHeroProps) => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        height: "600px",
        background: `url(${hero})`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full mb-4 bg-slate-900 flex justify-center"
    >
      <div className="flex items-end h-full w-full max-w-1224">
        <div className="h-max text-left mb-6 md:mb-24">
          <h2 className="text-2xl md:text-4xl italic font-gillsansmt mb-2 text-shadow-lg u-text-has-shadow ms-3 lg:ms-0">
            {title}
          </h2>
          <h2 className="text-2xl md:text-4xl italic font-gillsansmt u-text-has-shadow ms-3 lg:ms-0">{subTitle}</h2>

          <button onClick={() => navigate("/shop")} className="btn-primary mt-10 md:mt-7 ms-3 lg:ms-0">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
