function DonationPage({ item }) {
  const { image, title, category, categoryBg, textColor, price, cardBg } = item;
  return (
    <div className="flex gap-4 rounded-lg" style={{backgroundColor:cardBg}}>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col justify-center space-y-2">
        <button
          className=" py-1 rounded-lg"
          style={{ color: textColor, backgroundColor: categoryBg }}
        >
          {category}
        </button>
        <h2>{title}</h2>
        <p>${price}</p>
        <button
          className="px-4 py-1 rounded-lg font-medium"
          style={{ backgroundColor: categoryBg }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default DonationPage;
