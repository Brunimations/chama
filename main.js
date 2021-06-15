const canvas = document.getElementById('field');
const ctx = canvas.getContext('2d');
let field = new Starfield(ctx);
field.inicializa();
field.start();

