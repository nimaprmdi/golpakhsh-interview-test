import { FaRegCheckCircle } from "react-icons/fa";

const PaymentSuccessPage: React.FC = (): JSX.Element => {
  return (
    <section className="w-full u-full-height-menu flex items-center justify-center animate-fade-in">
      <div className="container flex-col flex justify-center items-center content-center px-4 md:px-0">
        <FaRegCheckCircle className="text-green-600 text-5xl" />

        <h1 className="text-center text-4xl text-green-600 mt-6">Payment Successful</h1>

        <p className="text-center mt-8 text-xl">
          Thank you for choosing Modimal, Your order will be generated based on your delivery request.{" "}
        </p>

        <p className="text-center mt-4 text-xl">the Receipt has been sent to your email </p>

        <p className="text-center mt-10 text-xl">Please Contact us for any query</p>

        <span className="text-center text-sm mt-4">+1(929)460-3208</span>
        <span className="text-center text-sm mt-4">OR</span>
        <span className="text-center text-sm mt-4">Hello @ modimal.com</span>
      </div>
    </section>
  );
};

export default PaymentSuccessPage;
