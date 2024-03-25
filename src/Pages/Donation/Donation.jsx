
import { getFromLocalStorage } from "../../Utilities/localStorage"
import DonationPage from "./DonationPage";


function Donation() {
  const savedData = getFromLocalStorage();
  console.log(savedData);
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {
        savedData.map((item, index) => <DonationPage key={index} item={item} />)
      }
    </div>
  );
}

export default Donation