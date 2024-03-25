function DonationPage({ item }) {
  const { image, title, category, categoryBg, textColor, price, cardBg } = item;
  return (
    <div className="flex flex-col md:flex-row gap-4 rounded-lg m-4" style={{backgroundColor:cardBg}}>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col justify-center space-y-2 p-2">
        <button
          className=" py-1 rounded-lg"
          style={{ color: textColor, backgroundColor: categoryBg }}
        >
          {category}
        </button>
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-lg">${price}</p>
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
