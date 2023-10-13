class Scene{
    constructor(width,height){
         this.height = height;
         this.width = width; 
        let canvas =  document.createElement("canvas")
        canvas.width = this.width;
        canvas.height = this.height;
        document.body.appendChild(canvas);
        this.context = canvas.getContext("2d"); 
    }
    draw(...drawables){
        for (let index = 0; index < drawables.length; index++){
            drawables[index].draw(this.context);
            
        }
    }
}