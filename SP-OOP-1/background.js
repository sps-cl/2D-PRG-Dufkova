class Background{
    constructor(width,height){
        this.width = width;
        this.height = height;
        this.image = document.getElementById("background");
        this.layers = [
            document.getElementById("layer0"),
            document.getElementById("layer1"),
            document.getElementById("layer2"),
            document.getElementById("layer3"),
            document.getElementById("layer4")
        ]
        this.positions = [0,0,0,0,0]
        this.speeds = [0,-1,-2,-3,-4]
    }
    
    draw(context){
       // context.drawImage(this.image , 0, 0, this.width, this.height);
       for (let index = 0; index < this.positions.length; index++){
            context.drawImage( this.layers[index], this.positions[index], 0, this.width, this.height);
            context.drawImage( this.layers[index], this.positions[index] + this.width , 0, this.width, this.height);
            this.positions[index] += this.speeds[index];
            if(this.positions[index] <= -this.width ){
                this.positions[index] = 0;

            }
        }
    }
}
