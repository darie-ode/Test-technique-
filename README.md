Description

Le site a été vérifié pour s’assurer qu’il est accessible et que le crawl est autorisé via le fichier robots.txt. Le sitemap a ensuite été utilisé pour récupérer toutes les URLs du domaine, permettant d’obtenir une vue d’ensemble de la structure du site.

Le projet consiste à représenter le site sous forme d’un WebGraph, où chaque page constitue un nœud. Les liens internes entre les pages pourront être ajoutés ultérieurement comme des arêtes dans le graphe.


Fonctionnement du code

Définition des types

WebNode : représente une page avec son URL et une liste de liens internes (out).

WebGraph : représente l’ensemble du site, avec une page de départ (root) et tous les nœuds (nodes).

Construction du WebGraph

Chaque URL récupérée depuis le sitemap devient un nœud dans le graphe.

Pour l’instant, les liens internes (out) sont vides, car le crawl complet des pages n’a pas été effectué.


Affichage

Le code affiche le WebGraph dans la console pour visualiser les pages récupérées et la structure globale.


Limitation

Le WebGraph ne contient pour l’instant que les pages du sitemap. 

Les arêtes (liens internes) restent donc à compléter.


Conclusion

Le WebGraph permet d’obtenir une vision globale du site même sans parcourir toutes les pages.

La structure établie constitue une base pour compléter le graphe avec les liens internes et mieux visualiser la navigation du site.
