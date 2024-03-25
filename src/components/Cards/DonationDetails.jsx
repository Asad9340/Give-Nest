import { useParams } from 'react-router-dom';
import useDonationData from '../../Hooks/useDonationData';
import Details from './Details';

function DonationDetails() {
  const { data } = useDonationData();
  const { id } = useParams();
  const DonationItem = data.filter(item => item.id === Number(id));
  return (
    <div className="max-w-6xl mx-auto px-4 md:mx-10">
      {
        DonationItem.map((item, index) => <Details key={index} item={item}  />)
      }
    </div>
  );
}

export default DonationDetails;
