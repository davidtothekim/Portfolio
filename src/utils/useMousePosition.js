// Dependencies
import { useState, useEffect } from 'react';

export default function useMousePosition() {
	// State
	const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });

	// Functions
	const updateMousePosition = (e) => {
		setMousePosition({ x: e.pageX, y: e.pageY });
	};

	// UseEffects
	useEffect(() => {
		window.addEventListener('mousemove', updateMousePosition);
		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, []);

	return mousePosition;
}
