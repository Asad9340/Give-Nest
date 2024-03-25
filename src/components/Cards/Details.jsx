import { Button } from '@material-tailwind/react';
import { saveLocalStorage } from '../../Utilities/localStorage';

function Details({ item }) {
  const { image, title, description, textColor, price, categoryBg } = item;
  const handleDonate = () => {
    saveLocalStorage(item);
  };
  return (
    <div className="space-y-5 mt-6 md:mt-12 p-4 md:p-0">
      <div className="relative flex">
        <img
          className="w-full object-cover overflow-hidden rounded-xl"
          src={image}
          alt=""
        />
        <div className=" h-16 md:h-20 absolute rounded-xl bottom-0 w-full bg-[#0B0B0B80]">
          <Button
            onClick={handleDonate}
            style={{ color: textColor, backgroundColor: categoryBg }}
            className="m-5"
          >
            Donate {price}
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-[#0B0B0B] underline">{title}</h2>
        <p className="text-[#0B0B0BB2]">{description}</p>
      </div>
    </div>
  );
}

export default Details;
