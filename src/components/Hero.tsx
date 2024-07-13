import { Link, useNavigate } from "react-router-dom";
import hero from "../assets/images/hero.png";

interface HeroProps {
  title?: string;
  subTitle?: string;
  buttonText?: string;
}

const Hero = ({
  title = "Elegance in simplicity,",
  subTitle = "Earth’s harmony",
  buttonText = "New In",
}: HeroProps) => {
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
          <h2 className="text-2xl md:text-4xl italic font-gillsansmt mb-2 text-shadow-lg">{title}</h2>
          <h2 className="text-2xl md:text-4xl italic font-gillsansmt">{subTitle}</h2>

          <button onClick={() => navigate("/shop")} className="btn-primary mt-10 md:mt-7">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
