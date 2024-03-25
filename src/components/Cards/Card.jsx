import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function Card({ card }) {
  const {id, image, title, category, textColor, cardBg, categoryBg } = card;
  return (
    <Link to={`/donation-details/${id}`}>
      <div
        style={{ backgroundColor: cardBg }}
        className="border rounded-lg space-y-4 cursor-pointer"
      >
        <div>
          <img className="rounded-t-lg w-full" src={image} alt="" />
        </div>
        <div style={{ color: textColor }} className="space-y-4">
          <Button
            className="ml-4"
            style={{ color: textColor, backgroundColor: categoryBg }}
          >
            {category}
          </Button>
          <h2 className="text-2xl font-semibold p-4 ">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Card;
