import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);
    const lightRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const dot = dotRef.current;
        const light = lightRef.current;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Dot follows immediately
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;

            // Light follows
            light.style.left = `${mouseX}px`;
            light.style.top = `${mouseY}px`;
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea, [data-hover]')) {
                cursor.classList.add('hover');
            }
        };

        const handleMouseOut = (e) => {
            if (e.target.closest('a, button, input, textarea, [data-hover]')) {
                cursor.classList.remove('hover');
            }
        };

        const animate = () => {
            cursorX += (mouseX - cursorX) * 0.12;
            cursorY += (mouseY - cursorY) * 0.12;

            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;

            requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
        animate();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            <div className="custom-cursor" ref={cursorRef} />
            <div className="cursor-dot" ref={dotRef} />
            <div className="mouse-light" ref={lightRef} />
        </>
    );
}
