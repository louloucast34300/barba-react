## ToggleAction 
default : 'play none none none'

param : 
play : lance l'animation dès que la ref est visible. 
restart : relance l'animation chaque fois que la ref est visible.
pause : met en arret l'animation en cours si la ref n'est plus visible ( à mettre en 2 eme argument => ex : "play pause none none")
resume : à placer en 3 eme argument, si l'animation est en pause parce que la ref n'est plus visible, lance l'animation là ou elle c'est arretée quand la ref redeviens visible.
reverse : à placer en 3 eme argument : pareil que resume sauf que la, l'animation revient vers le début. 
pause : comme dernier argument : permet de fluidifier l'application en stoppant l'animation des qu'elle n'est plus visible. 

exemple de ToggleAction : 'restart none reverse pause'