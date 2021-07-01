class Raindrop {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius
        World.add(world, this.body)
        //.log(this.body.position)

    }

    update() {
        if (this.body.position.y > height) {
            //console.log(this.body)
            Matter.body.setPosition(this.body,{ x: random(0, 400), y: random(-300, 300) })
        }
    }
    display() {
        push()
        console.log(this.body.position.y)
        translate(this.body.position.x, this.body.position.y)
        ellipseMode(RADIUS)
        ellipse(0, 0, this.radius)
        pop()

    }
}