function calcul(){
	var taille = +document.getElementbyId('taille').value
	var masse = +document.getElementbyId('masse').value
	
	var IMC = masse / taille**2
	var commentaire = ""
	console.log('Voici la taille ${taille}')
	console.log ('Voici la masse ${masse}')
	console.log (masse + taille)
	console.log (IMC)
	
	if(IMC<18){
		commentaire = "sous-poids"
	} else if (IMC>25){
		commentaire = "surpoids"
		} else { 
			commentaire = "poids normal"
			}
	
	var résultat = document.getElementById('résultat')
	résultat.textContent = votre IMVC est de ${IMC.toFixed(2)}. Vous êtes en ${commentaire}'
	
}

document.getElementById('taille').addEventListener('onclick', nouveau_calcul())

var mesure_poids = document.getElementById('masse');
mesure_poids.addEventListener('input', nouveau_calcul);

var mesure_taille = document.getElementById('taille');
mesure_taille.addEventListener('input', nouveau_calcul);

function nouveau_calcul() {
	var taille = document.getElementbyId('taille').value
	var masse = document.getElementbyId('masse').value
	
	if(taille.value !=""& masse.value !="") {
		var IMC = masse / taille**2
		var commentaire = ""
		
		console.log('Voici la taille ${taille}')
		console.log ('Voici la masse ${masse}')
		console.log (masse + taille)
		console.log (IMC)
		
		if(!Number.isNaN(IMC) & IMC>0 & IMC!=Infinity){
		if(IMC<18){
			commentaire = "sous-poids"
		} else if (IMC>25){
			commentaire = "surpoids"
			} else { 
				commentaire = "poids normal"
				}
		}
		
		var résultat = document.getElementById('résultat')
	résultat.textContent = votre IMVC est de ${MC.tofixed(2)}. Vous êtes en ${commentaire}'
	}
}