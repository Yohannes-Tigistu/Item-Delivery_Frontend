import { Left } from "./Left";
import { Right } from "./Right";

const SendItem = () => {
  return (
    <div className=" flex flex-wrap justify-between items-cente">
      <div>
        <Left />
      </div>
      <div className="w-full md:ml-96  p-10">
        <Right />
      </div>
    </div>
  );
};
export default SendItem