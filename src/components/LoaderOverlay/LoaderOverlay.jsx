// Styles
import './loader-overlay.scss';

// Components
import Loader from '../Loader/Loader';

function LoaderOverlay({ visibility }) {
	return (
		<div className={`loader-overlay loader-overlay--${visibility}`}>
			<Loader />
		</div>
	);
}
export default LoaderOverlay;
