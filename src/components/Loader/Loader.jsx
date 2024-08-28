// Styles
import './loader.scss'

// Dependencies
import { MutatingDots } from 'react-loader-spinner'

function Loader() {
    return (
        <>
            <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#ffb561"
                secondaryColor="#ffb561"
                radius="16.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </>
    );
}
export default Loader;