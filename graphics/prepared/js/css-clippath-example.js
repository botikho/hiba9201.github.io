const resizer = document.querySelector('#css-clipping-example #resizer');
const curtain = document.querySelector('#css-clipping-example .foreground');
let isDragging = false;
const maxWidth = curtain.clientWidth;
let left = maxWidth;

resizer.addEventListener('mousedown', (event) => {
    isDragging = true;

    console.log('down', event);

    document.addEventListener('mousemove', mouseMoveHandler);

    document.addEventListener('mouseup', mouseUpHandler);

    function mouseMoveHandler(event) {
        console.log('move', event);
        window.requestAnimationFrame(() => {
            left = Math.max(0, Math.min(left + event.movementX, maxWidth));

            resizer.style.left = `${left}px`;

            curtain.style.clipPath = `inset(0 ${maxWidth - left}px 0 0)`;
        });
    }

    function mouseUpHandler(event) {
        console.log('up');
        isDragging = false;

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
});
