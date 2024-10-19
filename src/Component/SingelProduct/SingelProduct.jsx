import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getProduct } from "../../redux/features/product/productThunk";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import Error from "../Error/Error";

const SingelProduct = () => {
    const { id } = useParams()
    const { error, product, loading } = useSelector(state => state.product)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct(id));
    }, [id, dispatch]);

    if (loading) return <LoadingIndicator />
    if (error) return <Error error={error} />;


    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center align-items-center">
                    {/* Product Image */}
                    <div className="col-12 col-lg-5 text-center">
                        <img
                            src={product?.image}
                            alt={product?.title}
                            className="img-fluid p-3 shadow-lg rounded-4"
                            style={{ maxHeight: '500px', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Product Information */}
                    <div className="col-12 col-lg-7 mt-4 mt-lg-0">
                        {/* Category */}
                        <span className="badge bg-success text-white text-capitalize px-3 py-2 mb-3">
                            {product?.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-dark fw-bold text-capitalize mb-4">
                            {product?.title}
                        </h1>

                        {/* Description */}
                        <p className="text-secondary fs-5 mb-4" style={{ lineHeight: '1.6' }}>
                            {product?.description}
                        </p>

                        {/* Price and Rating */}
                        <div className="d-flex align-items-center mb-4">
                            <h3 className="text-success fw-bold me-4">
                                ${product?.price}
                            </h3>
                            <div className="d-flex align-items-center">
                                <h5 className="text-warning mb-0 me-2">{product?.rating?.rate}</h5>
                                <span className="text-muted">/ 5</span>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="btn btn-outline-primary btn-lg px-5 py-3 rounded-4 shadow-sm">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingelProduct