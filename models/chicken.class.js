class Chicken extends MovableObject {
    y = 350 + Math.random() * 35;
    height = 70;
    width = 75;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');


        this.x = 220 + Math.random() * 500;
    }

}