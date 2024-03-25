import useDonationData from "../../Hooks/useDonationData"
import Card from './Card';

function Cards() {
  const { data } = useDonationData();
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6 md:my-10">
      {data.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

export default Cards