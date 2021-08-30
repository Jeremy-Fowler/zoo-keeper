class Narwhal{
    constructor(
        name = '',
        color = '',
        gender = '',
    ){
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.carnivore = true;
        this.stomachContents = 0;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}

export default Narwhal