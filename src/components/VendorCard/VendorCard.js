import './VendorCard.scss';

function VendorCard(props) {
  const {
    image,
    vendorName,
    information,
    handleClick
  } = props;
  return (
    <div className="vendor-card">
      <div className="vendor-card__content">
        <img
          src={image}
          alt={vendorName}
          className="vendor-card__image"
        />
        <div className="vendor-card__title">
          <p className="vendor-card__name">
            {vendorName}
          </p>
          <p className="vendor-card__placeholder">...</p>
        </div>
        <p className="vendor-card__information">
          {information}
        </p>
        <button onClick={handleClick} className="vendor-card__button">
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default VendorCard;
