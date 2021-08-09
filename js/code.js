class Code {
constructor(){
    this.b1=createButton('submit')
    this.b2=createButton('submit')
    this.b3=createButton('submit')
    this.i1=createInput("enter answer")
    this.i2=createInput("enter answer")
    this.i3=createInput("enter answer")
}

display(){
    this.b1.position(200,300)
    this.b2.position(800,350)
    this.b3.position(200,460)

    this.i1.position(200,270)
    this.i2.position(800,310)
    this.i3.position(200,440)

    this.b1.mousePressed(() => {
        this.i1.hide();
        this.b1.hide();
        score++;
    });

    this.b2.mousePressed(() => {
        this.i2.hide();
        this.b2.hide();
        score++;
    });

    this.b3.mousePressed(() => {
        this.i3.hide();
        this.b3.hide();
        score++;
    });

    
}
}