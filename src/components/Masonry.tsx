import masonryImage1 from "../assets/images/masonry-images/masonry-(1).jpg";
import masonryImage2 from "../assets/images/masonry-images/masonry-(2).jpg";
import masonryImage3 from "../assets/images/masonry-images/masonry-(3).jpg";
import masonryImage4 from "../assets/images/masonry-images/masonry-(4).jpg";
import masonryImage5 from "../assets/images/masonry-images/masonry-(5).jpg";

const Masonry = () => {
  return (
    <section className="w-full flex justify-center py-20">
      <div className="w-full max-w-1224 ">
        <h4 className="text-3xl font-semibold text-black mb-6">Follow us @modimal</h4>

        <div className="flex h-full flex-wrap w-full bg-green-950 overflow-hidden" style={{ height: "751px" }}>
          <div className="hidden h-full lg:block w-full lg:w-1/2">
            <img
              className="object-cover object-top w-full"
              src={process.env.PUBLIC_URL + masonryImage4}
              alt="masonry-4"
            />
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-wrap">
            <div className="w-full h-1/2 flex">
              <img
                className="object-cover object-top w-1/2"
                src={process.env.PUBLIC_URL + masonryImage2}
                alt="masonry-4"
              />
              <img
                className="object-cover object-top w-1/2"
                src={process.env.PUBLIC_URL + masonryImage5}
                alt="masonry-5"
              />
            </div>

            <div className="w-full h-1/2 flex">
              <img
                className="object-cover object-top w-1/2"
                src={process.env.PUBLIC_URL + masonryImage1}
                alt="masonry-1"
              />
              <img
                className="object-cover object-top w-1/2"
                src={process.env.PUBLIC_URL + masonryImage3}
                alt="masonry-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masonry;
