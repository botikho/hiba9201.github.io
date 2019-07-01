const resizer = document.querySelector('#css-clipping-example #resizer');
const curtain = document.querySelector('#css-clipping-example .foreground');
let isDragging = false;
const maxWidth = curtain.clientWidth;
let left = maxWidth;

resizer.addEventListener('mousedown', (event) => {
    document.addEventListener('mousemove', mouseMoveHandler);

    document.addEventListener('mouseup', mouseUpHandler);

    function mouseMoveHandler(event) {
        window.requestAnimationFrame(() => {
            left = Math.max(0, Math.min(left + event.movementX * 1.5, maxWidth));

            resizer.style.left = `${left}px`;

            curtain.style.clipPath = `inset(0 ${maxWidth - left}px 0 0)`;
        });
    }

    function mouseUpHandler(event) {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
});
