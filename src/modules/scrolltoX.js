export function scrollToX(cont) {

    let isMouseDown = false;
    let startX;
    let scrollLeft;

    cont.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - cont.offsetLeft;
        scrollLeft = cont.scrollLeft;
    });

    cont.addEventListener('mouseleave', () => {
        isMouseDown = false;
        cont.style.background = "none"
        cont.style.opacity = "1"
    });

    cont.addEventListener('mouseup', () => {
        isMouseDown = false;
        cont.style.background = "none"
        cont.style.opacity = "1"
    });

    cont.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - cont.offsetLeft;
        const walk = (x - startX);
        cont.scrollLeft = scrollLeft - walk * 1;
    });
}