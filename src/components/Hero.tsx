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
  return (
    <section
      style={{
        height: "600px",
        background: `url(${hero})`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full mb-4 bg-slate-900"
    >
      <div className="flex items-end h-full w-full">
        <div className="h-max text-left  mb-6 md:mb-24 ms-5 md:ms-24">
          <h2 className="text-2xl md:text-4xl italic font-gillsansmt mb-2">{title}</h2>
          <h2 className="text-2xl md:text-4xl italic font-gillsansmt">{subTitle}</h2>

          <button className="btn-primary mt-10 md:mt-7">{buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
