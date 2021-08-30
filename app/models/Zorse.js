class Zorse{
    constructor(
        name = '',
        color = '',
        gender = '',
    ){
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.carnivore = false;
        this.stomachContents = 0;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}

export default Zorse