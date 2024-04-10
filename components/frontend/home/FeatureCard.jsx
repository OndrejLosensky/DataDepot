import { FaArrowRightLong } from "react-icons/fa6";

const FeatureCard = ({ hovered, setHovered, icon: Icon, heading, description }) => {
  return (
    <div className="relative space-y-4 mt-2 rounded-3xl py-6 px-8">
      <div className="grid h-12 w-12 place-items-center rounded-lg bg-purple-500 p-2">
        <Icon className="h-7 w-7 text-gray-300 stroke-gradient gradient-fresh-mint" />
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-heading">
       {heading}
      </h3>
      <p className="font-medium text-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <span
        className="flex flex-row space-x-2 items-center cursor-pointer font-medium text-purple-500"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p>Learn more</p>
        <FaArrowRightLong
          className="h-6 w-6 transition-all duration-300"
          style={{ marginLeft: hovered ? '12px' : '8px' }}
        />
      </span>
    </div>
  );
};

export default FeatureCard;
