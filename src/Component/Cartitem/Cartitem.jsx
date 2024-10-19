import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cartitem = ({ id, image, title, rating, category, price }) => {
    const generateStars = (rating) => {
        const maxStars = 5;
        return Array.from({ length: maxStars }, (_, i) =>
            i < rating ? '★' : '☆'
        ).join('');
    };

    return (
        <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="w-100 shadow shadow-sm rounded rounde-3 d-flex flex-column product-box bg-white" style={{ height: "100%" }}>
                <div className="image-container" style={{ height: "250px", overflow: "hidden" }}>
                    <img src={image} alt={title} className="w-100 p-2" style={{ height: "100%" }} />
                </div>
                <div className="text d-flex flex-column justify-content-between p-2 flex-grow-1">
                    <h6 className="title text-truncate">{title}</h6>
                    <h5>
                        <span style={{ color: "gold" }}>{generateStars(rating?.rate)}</span> <br />
                        <span className="text-muted fs-6">{rating?.count} user Reviews</span>
                    </h5>
                    <h6><span className="badge bg-info">{category}</span></h6>
                    <h6>{price}$</h6>
                    <Link className='text-primary fw-bolder' to={`/product/${id}`}>View More</Link>
                </div>
            </div>
        </div>

    );
};

Cartitem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired
    }).isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default Cartitem;
