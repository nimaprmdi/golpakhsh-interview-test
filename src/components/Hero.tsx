import hero from "../assets/images/hero.png";

interface IHeroProps {
  title?: string;
  subTitle?: string;
}

const Hero = ({ title = "Golpakhsh", subTitle = "Interview test using React, Redux and TypeScript" }: IHeroProps) => {
  return (
    <section className="mb-4 w-100 bg-slate-900">
      <img className="w-auto object-contain" src={hero} alt="hero-image" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">{title}</h1>
          <p className="my-4 text-xl text-white">{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
