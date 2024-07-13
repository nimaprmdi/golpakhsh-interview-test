import cta from "../assets/images/cta-bg-1.jpg";

interface CtaProps {
  className?: string;
  title?: string;
  buttonText?: string;
}

const Cta = ({
  className,
  title = "Stylish sustainability in clothing promotes eco-friendly choices for a greater future",
  buttonText = "Sustainability",
}: CtaProps) => {
  return (
    <section
      style={{
        height: "600px",
        background: `url(${process.env.PUBLIC_URL + cta})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`w-full h-16 bg-red-50 ${className} flex items-end justify-end`}
    >
      <div className="mb-4 lg:mb-10" style={{ width: "495px" }}>
        <h3 className="text-xl w-full px-4 font-normal capitalize">{title}</h3>

        <div className="w-full flex justify-end mt-3 pe-4 lg:pe-12">
          <button className="btn-primary text-right">{buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
