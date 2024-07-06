const resizer = document.querySelector('#css-clipping-example #resizer');
const curtain = document.querySelector('#css-clipping-example .foreground');
const image = document.querySelector('#css-clipping-example .background');
const maxWidth = curtain.clientWidth;
let left = maxWidth;

resizer.addEventListener('mousedown', (event) => {
    const imageRect = image.getBoundingClientRect();
    const maxLeft = imageRect.x + imageRect.width + 20;
    const minLeft = imageRect.x - 20;

    document.addEventListener('mousemove', mouseMoveHandler);

    document.addEventListener('mouseup', mouseUpHandler);

    function mouseMoveHandler(event) {
        window.requestAnimationFrame(() => {
            if (event.clientX > maxLeft || event.clientX < minLeft) {
                return;
            }

            left = Math.max(0, Math.min(left + event.movementX, maxWidth));

            resizer.style.left = `${left}px`;

            curtain.style.clipPath = `inset(0 ${maxWidth - left}px 0 0)`;
        });
    }

    function mouseUpHandler(event) {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
});
