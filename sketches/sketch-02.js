const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')


const settings = {
  dimensions: [ 1080, 1080 ]
};

//quick functions, deprecated
const degToRad = (degree) => {return degree / 180 * Math.PI;};
const randomRange = (min, max) => {return Math.random() * (max - min) + min};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = 0;
    const cy = 0;
    const w = width * 0.01;
    const h = height * 0.1;

    let x,y;

    const num = 50;
    const radius = width * 0.9;

    for(let i = 0; i<num; i++){

      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);
      
      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(.1, 2), random.range(.2, 3));

      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.beginPath();
      context.lineWidth = random.range(5, 20);
      context.arc(0, 0, random.range(radius * 0.5, radius * 1.5), slice * random.range(1, -10), slice * random.range(1, 5));
      context.stroke();
      context.restore();

    }
    
  };
};

canvasSketch(sketch, settings);
