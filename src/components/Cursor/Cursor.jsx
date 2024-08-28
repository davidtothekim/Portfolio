// Styles
import './cursor.scss';

// Dependencies
import { useState } from 'react';
import useMousePosition from '../../utils/useMousePosition';

function Cursor() {
	const { x, y } = useMousePosition();
	const cursorSize = 40;

	console.log(x, y);

	return <div className="cursor-dot" style={{ left: x, top: y }} />;
}
export default Cursor;
