import useDonationData from "../../Hooks/useDonationData"
import Card from "./Card";

function Cards() {
  const { data } = useDonationData();
  return (
    <div>
      {
        data.map((card, index) => <Card key={index} card={card} />)
      }
    </div>
  )
}

export default Cards