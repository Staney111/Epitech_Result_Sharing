Ce morceau de code permet de regler le probleme: MISSING show rule for first 4 articles

Pour ce faire, on va afficher tout les elements en block (display: block;), ce qui leur donne tous un Show ok.

Ensuite, on peut display: none; les objets qu'on ne veut pas.

Dans les deux manipulations, on rentre dans section:last-of-type ce qui permet de recuper la derniére section detecter (dans notre cas celle qui contient les articles sur lesquelles on doit agir).

Puis on rentre dans article (qui sont donc ceux qu'on veut modifier) et on utilise nth-child() afin de selection avec precision ceux a qui on veut appliquer la modifications. Pour plus d'informations sur nth-child, je vous invite a visiter le site suivant: https://developer.mozilla.org/fr/docs/Web/CSS/:nth-child#nth-child-n3

Pour utiliser la solution, il faut mettre le morceau de code a l'interieur de votre media query.

Trouvé par: legobelindu93 et Matensu
Posté par: staney