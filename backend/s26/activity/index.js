this.tackle = function(target) {

	    console.log( this.name + " tackled " + target.name);
target.health -= this.attack;

if (target.health <= 0) {

 target.faint()
	    
} else {
return target.name +"'s health is now reduced to " + target.health
 }

	};

	this.faint = function(){
	   
	    return this.name + "fainted"
	}
}

let pikachu = new Pokemon("Pikachu",12);
console.log(pikachu);


let geodude = new Pokemon("Geodude", 8);
console.log(geodude);


let mewtwo = new Pokemon("Mewtwo", 100);
console.log(mewtwo);


geodude.tackle(pikachu);
console.log(pikachu);


mewtwo.tackle(geodude);
console.log(geodude);