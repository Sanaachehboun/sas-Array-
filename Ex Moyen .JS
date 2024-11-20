// exercice 1 (boucle)
let tableau=[1,2,3,4,5];
for(let i=0;i<tableau.length;i++){
    console.log(tableau[i]);
}


// exercice 3 (Fusionner)
let tabl=[1,2,3];
let Tab=[4,5,6];
let Tableau=tabl.concat(Tab);
console.log(Tableau);

// exercice 4 (suppression)
let Fruits=["apple","banana","cherry","date"];
Fruits.splice(1,1);
console.log(Fruits);
// exercice 5 (ordre croissant)
let numbb=[5,1,8,4,7];
numbb.sort(function(a,b) {
    return a-b;
});
console.log(numbb);
