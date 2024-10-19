import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/product/productThunk";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import Cartitem from "../Cartitem/Cartitem";
import Error from "../Error/Error";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

const Home = () => {
    const { products, loading, error, selectedCategory } = useSelector(
        (state) => state.product
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    if (error) return <Error error={error} />;
    return (
        <>
            <div className="container">
                <CategoryFilter />

                {loading && <LoadingIndicator />}

                <div className="row justify-content-center align-items-center g-2 mt-3">
                    {filteredProducts?.map((product) => (
                        <Cartitem
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            rating={product.rating}
                            image={product.image}
                            price={product.price}
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
