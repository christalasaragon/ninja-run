// player obj
const player = {
	character: $("#player"),
	playerPos: 0
}
console.log(player)

// ai object
const ai = {
	character:$("#ai"),
	aiPos : 0
}

console.log(ai)


let playerPosition = 0;
let aiPosition = 0;

// const aiMove = () => {

// 	if (ai.aiPos <1000) {
// 		ai.character.animate ({
// 			'left' : (aiPosition+=100) + "px"
// 		})
// 	} else {
// 		return true
// 	}
	
// 	ai.aiPos = aiPosition
// 	result()
// 	setTimeout(aiMove, 500)
// }


const aiEasy = () => {

	if (ai.aiPos <1000) {
		ai.character.animate ({
			'left' : (aiPosition+=100) + "px"
		})
	} else {
		return true
	}
	
	ai.aiPos = aiPosition
	result()
	setTimeout(aiEasy, 1000)
}


const aiMed = () => {

	if (ai.aiPos <1000) {
		ai.character.animate ({
			'left' : (aiPosition+=100) + "px"
		})
	} else {
		return true
	}
	
	ai.aiPos = aiPosition
	result()
	setTimeout(aiMed,600)
}

const aiHard = () => {

	if (ai.aiPos <1000) {
		ai.character.animate ({
			'left' : (aiPosition+=100) + "px"
		})
	} else {
		return true
	}
	
	ai.aiPos = aiPosition
	result()
	setTimeout(aiHard, 500)
}

// move the  ai
$("#easy").click(function(){
	console.log("hello")
	aiEasy()
})

// medium

$("#med").click(function(){
	aiMed()
})

// hard

$("#hard").click(function(){
	aiHard()
})


//  move the player function

player.character.click(function(){

	// console.log("kimbap")
	$(this).animate({
		'left': (playerPosition+=100) + 'px'
	})

	// console.log('this is the current value of player position: ' + playerPosition)
	player.playerPos = playerPosition
	// console.log(player)

	result()
})



const result = () => {
	if(player.playerPos === 1000){
		alert('Sasuke won!')
		location.reload(true)
		return true
	}

	if(ai.aiPos === 1000){
		alert('Kakashi won!')
		location.reload(true)
		return true
	}
}