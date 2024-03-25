import { Button } from '@material-tailwind/react';

function Details({ item }) {
  const { image, title, description, textColor, price, categoryBg } = item;
  console.log(item);
  return (
    <div className="max-w-6xl mx-auto space-y-5 mt-6 md:mt-12 p-4 md:p-0">
      <div className="relative">
        <img
          className="w-full object-cover overflow-hidden"
          src={image}
          alt=""
        />
        <div className=" h-16 md:h-20 absolute bottom-0 w-full bg-[#0B0B0B80]">
          <Button
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
