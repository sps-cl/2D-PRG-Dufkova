class Background{
    constructor(widht,height){
        this.widht = widht;
        this.height = height;
        this.image = document.getElementById("background");
    }
    draw(context){
        context.drawImage(this.image , 0, 0, this.widht, this.height);
    }
}