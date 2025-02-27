/*Projet dactylo
Objectif
Créer un jeu de dactylographie pour améliorer la vitesse et la précision de frappe au clavier.

Lisez l'article suivant: https://www.ulysselubin.com/blog/dactylo

Votre mission sera ensuite de créer une application qui permet : - de tester sa vitesse de frappe (MPM = mots par minute) - de tester sa précision de frappe (pourcentage de fautes) - de s'éveiller au clavier (doigt à utiliser pour chaque touche)

Consignes
créer une application web (HTML, CSS, JS)
Utiliser cette liste de mots :
Créer un champ de texte pour que l'utilisateur puisse écrire les mots affichés.
Lorsque l'utilisateur appuie sur la touche "Entrée", vérifiez si le mot est correct.
Si c'est le cas, rayez le mot et remettez le champ de texte à zéro.
Sinon remettez le champ de texte à zéro pour que l'utilisateur tente à nouveau de saisir le mot.
Afficher la statistique de vitesse de frappe (MPM) et de précision (pourcentage de fautes) à la fin de la partie.
Ajouter un bouton pour recommencer une partie.
Utiliser la touche "espace" pour valider un mot, en plus de la touche "Entrée"
Enregistrer les scores dans le localStorage pour afficher les 5 meilleurs scores.
Afficher une aide avec les doigts à utiliser pour mot actuel à saisir (main gauche / droite + nom du doigt à utiliser)
Demander au prof des consignes supplémentaires*/



const allWords = [
    "tourbillonner","confondre","soupirer","après-midi","court","piège","découverte","arrivée","cents","logement","ronces","proche","grimace","élégant","terrestre","cependant","dentelle","obéissant","surmonter","quarante","timbre","rapport","regard","isoler","amitié","entretien","écorce","messagère","veille",
    "nœud","habiter","répartir","effort","périlleux","lisse","lieu","réussir","dessus","million","scène","avouer","troubler","charmant","excellent","désir","port","loger","prendre","imprimerie","obus","belge","schiste","absent","clair","prévenir","défaite","point","conte","actuellement","hameçon","file","grandir",
    "descendre","fouet","barrer","fontaine","ruiner","exécution","balayer","bombardement","secousse","maintenant","encadrer","doux","laver","tendresse","seul","parure","propriété","présider","soustraction","résister","cent","dizaine","étonnant","humide","revolver","guérir","bagages","pourrir","habitation","mèche",
    "thé","maison","pâlir","yeux","peintre","aisément","quelquefois","aspect","cours","gâteau","baignoire","nombre","conservation","gentil","là-bas","tranquillement","début","égayer","employé","anneau","maladroitement","rassembler","debout","expirer","joie","simple","ballon","environner","chasseur","observer",
    "prudent","mieux","noircir","demi","merveilleusement","geler","fortement","constamment","distraction","coudre","carrousel","coquelicot","élastique","nouveau","textile","bataillon","argent","différence","guetter","cadavre","former","conduire","violon","laine","brigand","majestueux","exactement","rude","jaloux",
    "préparer","écrivain","vitesse","grelotter","poire","relire","circulation","brûlant","patte","réchauffer","contact","récolte","fier","bourrasque","symbole","tort","ordinairement","impatient","envier","gentiment","chance","paresse","soupçonner","poupée","galoper","reconnaître","souris","dépouiller","revivre",
    "sec","parcourir","soulager","avantage","promener","craquement","jouer","fleur","chute","rester","plante","nettement","lundi","importer","comparer","canal","facteur","courir","remarque","mode","ample","lac","longuement","construire","suivre","monter","questionner","également","part","opinion","gras",
    "explication","nuit","gravir","peau","mensonge","balancer","regrettable","abondamment","aussitôt","halte","exprès","vulgaire","bousculer","directement","dette","cuisinière","neiger","coucher","offre","tourbillon","brebis","poulailler","réserve","garage","plafond","tache","voyager","valet","retarder","refroidir",
    "membre","proclamer","splendeur","dehors","rejeter","gazette","cristal","rare","extrême","embarquer","paysage","pur","combien","intérieur","principalement","perte","régulièrement","lumière","éclairer","claquer","ramener","magie","assurance","spectacle","journal","assister","garde","défaut","mansarde","refus",
    "pleurs","introduire","maigre","désagréable","abriter","convenable","entier","tour","addition","revue","barre","seau","coin","gronder","signature","comparaison","ravissant","favori","ton","reposer","tonneau","majesté","officier","ministre","minute","linge","royaume","débarrasser","tourner","bateau","faucher",
    "rougir","généralement","résumé","montée","morne","descente","prudemment","parler","conclure","mal","tapisserie","pêcher","orange","seconde","jonquille","sensible","domicile","hésiter","appartement","entreprendre","chapeau","absolu","rentrer","impossibilité","fauteuil","abaisser","jaunir","préférer","attention",
    "brute","résoudre","hangar","rapidement","comprendre","glace","derrière","obliger","total","lot","prudence","rusé","calmement","ôter","plainte","cigare","mensuel","hiver","neuf","tiède","baigner","abandonner","science","automatique","peine","chemin","direct","souci","force","lutter","fonction","signifier","salé",
    "étoile","bonbon","régime","chercher","division","habiller","médecin","écouter","niche","convenir","gravier","cuisse","marcher","démonter","aspirer","estomac","bras","pourpre","certes","ferrer","calme","silencieux","flotter","figurer","silence","mourir","tambour","foncé","caresse","négociant","géant","refus",
    "attrister","suer","colonne","mettre","frisson","atmosphère","moyenne","corne","sombre","démontrer","balai","vanter","suspendre","utile","aisé","prairie","de","plaie","monnaie","clavier","limiter","retomber","pitié","arc","avantageux","anxiété","voyage","repousser","fauve","opposer","essuyer","utilité","emporter",
    "lors","décourager","cité","ruisseler","tordre","partir","porter","consulter","venir","minuscule","éternel","noix","aussi","entrain","noyer","barrer","égarer","chose","presser","pâquerette","craintif","faire","chant","passer","maladie","négation","copain","débarquer","invisible","fermer","admettre","match","attaquer",
    "mûrir","texte","tapisser","pardon","tournée","patience","quotidien","vélo","ordonner","tissu","hôpital","classe","frémir","frotter","intéresser","mou","roue","roseau","panda","jeter","exiger","charge","bienfaisant","raser","signification","ventre","bienfait","luire","assaut","répondre","fièrement","plage","envoyer",
    "amer","noir","distance","bon","remarquable","amusement","son","fêter","homme","réponse","chêne","deuxième","fagot","prison","poing","douloureux","bûcheron","boucherie","foin","composition","couverture","bûche","mémoire","frisson","bracelet","dissiper","fendre","trouver","repentir","rapidité","échanger","infirme",
    "second","parfait","empereur","tenue","étincelle","fabriquer","hésitation","étroit","impossible","chanter","fumer","gratitude","multiplicateur","accent","désormais","écrire","lunettes","dos","bouger","règne","appuyer","électricité","acier","brochure","éléphant","guide","graine","balançoire","coucou","grâce","fer",
    "élégamment","indigne","entasser","flatteur","précis","grenouille","attachement","capuchon","convaincre","héros","récompenser","lien","éblouir","eau","écureuil","ingénieur","coûter","poumon","conter","observation","ceinture","premier","successivement","poêle","dernier","frontière","rien","inviter","replier","chien",
    "adoucir","suffrage","remerciement","réciter","fardeau","végétation","cruel","légume","barrière","portrait","programme","nombreux","couler","zèbre","fraîcheur","saleté","naufrage","cabinet","attente","franc","hache","colorer","permettre","grouper","idéal","disposer","foudre","livret","sport","réservoir","entretenir",
    "énergique","matelas","pastille","paletot","grand","durement","seigneur","regret","gouvernement","remplacer","pente","heureux","filet","effacer","reparaître","fâcher","persuader","physique","défilé","bord","épuiser","couchant","brûlure","château","américain","jurer","tapage","profiter","vivre","souple","féroce",
    "insigne","guider","lendemain","peut-être","carton","longer","rêver","employer","repas","chérir","classique","soulier","fourrure","ardent","cesse","an","remercier","plaire","oser","fusiller","gémissement","sifflement","fléau","actuel","enterrement","dire","malheur","broder","coq","marche","dîner","plonger","cerisier",
    "horrible","poursuite","fromage","jardin","précédent","réaliser","football","marquis","guérison","mélancolique","apparaître","alors","partage","écurie","grondement","retirer","surgir","récréation","couture","punir","culotte","fièvre","colonie","sûr","vérifier","peur","douze","salir","chauffeur","trouble","doré",
    "acheminer","étable","élever","inonder","examiner","reine","aveugle","dommage","vitre","paisible","sentiment","sonore","niveau","trimestre","spécialement","air","coiffer","contact","moyen","exposer","demi-heure","bienveillance","imprimer","espérer","modestie","accabler","réfugier","blessure","instituteur","bien",
    "infiniment","gracieux","friandise","carreau","flatter","soins","subitement","velours","gaiement","trajet","brochet","supposer","propreté","reste","pire","éclaircir","étudier","refuser","ressembler","traversée","cigarette","prospérité","arrondissement","gland","symbole","café","colle","pomme","ampoule","lenteur",
    "ravages","rose","valise","sauver","réjouir","chat","reconnaissant","arrêter","lettre","désolation","mélodie","girafe","deviner","paiement","pétrole","pantoufle","bonnet","exception","vice","constater","plan","jet","geste","commencer","pas","toutefois","vert","rouler","source","réparer","débattre","goûter","occasion",
    "seize","cultivateur","perle","flambeau","inscrire","destruction","déchirer","fonds","créer","haut","falloir","rejoindre","nord","poireau","allure","quatrième","fixe","raccommoder","fixement","construction","solide","vif","poursuivre","étendue","tomber","adresse","commode","étincelant","octobre","traîner","camp"
]
//Affichez 10 mots aléatoires à l'écran. Vous pourrez vous aider de la fonction slice() pour obtenir une portion de tableau. Et vous pouvez utiliser cette fonction pour mélanger le tableau:
const smallallWords = allWords.slice(0,3);
console.log(smallallWords)

// renvoie une copie du tableau et le mélange aléatoirement.
const shuffle = (array) => {
    const copy = [...array]    
    copy.sort(() => Math.random() - 0.5)
    return copy
    
}

//récupère les 10 premier element de la liste mélanger
let tabshuffle = shuffle(allWords)
let words = tabshuffle.slice(0,3)
console.log(words);

// Créez une nouvelle div pour afficher la liste de mots
const boiteListe = document.createElement('div');

// Créez une liste non ordonnée (ul) pour contenir les éléments de liste (li)
const liste = document.createElement('ul');

// Ajoutez chaque mot de la liste mélangée à la liste créée
words.forEach((mot, i) => {
    const element = document.createElement('li');
    element.textContent = mot;
    element.setAttribute('Id', 'mot_' + i);
    liste.appendChild(element);

    //console.log(i)
});
boiteListe.appendChild(liste);

// Créez un champ de texte
const champtext = document.createElement('input');
champtext.setAttribute('type', 'text');
champtext.setAttribute('placeholder', 'Entrez les mots affichés ici');
//champtext.focus()
boiteListe.appendChild(champtext);


//compteur de faute
const contenaire = document.createElement('div')
const text = document.createElement('div')
text.innerText = "Nombreux de faute :"
const compteur = document.createElement('div')

//temps

const contenaire2 = document.createElement('div')
//let Time = TimeStart
const timeur = document.createElement('div')
timeur.innerText = "Temps :"
const time = document.createElement('div')


// recupère element du formulaire
let j = 0
let faux = 0
let TimeStart;
let idInterval;

champtext.addEventListener("keyup", function(event){
    if(!TimeStart){
        TimeStart = Date.now()
        idInterval = setInterval(() => {
            time.innerText = (Date.now()-TimeStart)/1000
        }, 68)
    }
    const valeur = champtext.value
    
    if(event.key === "Enter" || event.key === " "){
        event.preventDefault();
        //alert("Vous avez appuyé sur la touche entré");
        //remettre champ text a vide
        champtext.value="";
        if (valeur === tabshuffle[j]){
            //barrer mot
            document.querySelector("#mot_"+j).style.textDecoration = "line-through";
            j++
            //Vérifier si le dernier mot a été barré
            if(j === words.length){
                // Arrêter le temps
                clearInterval(idInterval)
                time.innerText = (Date.now()-TimeStart)/1000
            }
            
            
        }
        else{
            //nbr de faute
            faux++
            console.log(faux)
            //nombre de faute evolue
            compteur.innerText = faux
        }
    }

});

//bouton recommencer 
// Fonction pour réinitialiser le jeu
function resetGame() {
    window.location.reload()
}

// Créer un bouton de réinitialisation
const boutonReset = document.createElement("button");
boutonReset.textContent = "Recommencer";
boiteListe.appendChild(boutonReset);

// Ajouter un gestionnaire d'événements au bouton de réinitialisation
boutonReset.addEventListener("click", resetGame);



document.body.appendChild(boiteListe);
boiteListe.appendChild(contenaire)
contenaire.appendChild(text)
contenaire.appendChild(compteur)
boiteListe.appendChild(contenaire2)
contenaire2.appendChild(timeur)
contenaire2.appendChild(time)




