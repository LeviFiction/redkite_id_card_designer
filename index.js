function resizeCanvas() {
    const outerCanvasContainer = document.getElementsByClassName('fabric-canvas-wrapper')[0];
    
    const ratio = card_canvas.getWidth() / card_canvas.getHeight();
    const containerWidth   = outerCanvasContainer.clientWidth;
    const containerHeight  = outerCanvasContainer.clientHeight;

    const scale = containerWidth / card_canvas.getWidth();
    const zoom  = card_canvas.getZoom() * scale;
    console.log(ratio, containerWidth, containerHeight, scale, zoom);
    card_canvas.setDimensions({width: containerWidth, height: containerWidth / ratio});
    card_canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
}
window.onresize = resizeCanvas;
var card_canvas = new fabric.Canvas('card_canvas');
card_canvas.setWidth(fabric.util.parseUnit("86mm"));
card_canvas.setHeight(fabric.util.parseUnit("54mm"));
resizeCanvas()