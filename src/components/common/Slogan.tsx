interface ISlogan {
  isPrimary: boolean;
}

const Slogan = ({ isPrimary }: ISlogan) => {
  return isPrimary ? (
    <div className="w-full h-8 bg-primary flex justify-center">
      <span className="text-xs font-semibold text-white leading-3 flex items-center">
        Enjoy Free Shipping On All Orders
      </span>
    </div>
  ) : (
    <></>
  );
};

export default Slogan;
