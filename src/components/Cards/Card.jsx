import { Button } from '@material-tailwind/react';

function Card({ card }) {
  console.log(card);
  const { image, title, category, textColor } = card;
  console.log(textColor)
  return (
    <div className="border rounded-lg space-y-4">
      <div>
        <img className="rounded-t-lg w-full" src={image} alt="" />
      </div>
      <div className="space-y-20">
        <Button>{category}</Button>
        <h2 className={`text-4xl text-[${textColor}]`}>{title}</h2>
      </div>
    </div>
  );
}

export default Card;
