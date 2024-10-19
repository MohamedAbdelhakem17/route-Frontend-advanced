import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../redux/features/product/productThunk";
import {
    clearSelectedCategory,
    setSelectedCategory,
} from "../../redux/features/product/productSlice";

const CategoryFilter = () => {
    const { categories, selectedCategory, loading } = useSelector(
        (state) => state.product
    );
    const dispatch = useDispatch();

    const handleFilter = (category) => {
        dispatch(setSelectedCategory(category));
    };

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
                {!loading && (
                    <button
                        className={`category-btn ${!selectedCategory && "active"}`}
                        onClick={() => dispatch(clearSelectedCategory())}
                    >
                        all
                    </button>
                )}

                {categories?.map((categorie, index) => (
                    <button
                        key={index}
                        className={`category-btn ${selectedCategory === categorie ? "active" : ""
                            }`}
                        onClick={() => handleFilter(categorie)}
                    >
                        {categorie}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
