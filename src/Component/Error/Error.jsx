import PropTypes from 'prop-types';

const Error = ({ error }) => {
    return (
        <div className="bg-dark w-100 vh-100 d-flex align-items-center justify-content-center text-white">
            <h4 className="alert alert-danger">Error : {error}</h4>
        </div>
    )
}

Error.propTypes = {
    error: PropTypes.string.isRequired
};

export default Error;
