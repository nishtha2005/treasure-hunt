class Security{
    constructor(){
        this.t1=createElement('h2')
        this.t2=createElement('h2')
        this.t3=createElement('h2')
        this.h1=createElement('h4')
        this.h2=createElement('h4')
        this.h3=createElement('h4')
    }
    hide(){
        this.t1.hide();
        this.t2.hide();
        this.t3.hide();
        this.h1.hide();
        this.h2.hide();
        this.h3.hide();
    }
display(){
    fill("white");
    this.t1.html("ARAIVLEB")
    this.t1.position(140,175)

    this.t2.html("CUTINFON")
    this.t2.position(800,200)

    this.t3.html("ATABADSE")
    this.t3.position(200,350)

    this.h1.html("hint:the one that keeps changing,and never constant")
    this.h1.position(200,200)

    this.h2.html("hint:the one that completes all the tasks")
    this.h2.position(700,250)

    this.h3.html("hint:the one that stores information")
    this.h3.position(200,400)
  
}

}