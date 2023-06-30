Bonjour,

Ce projet est un test technique fait en trois jours. Le projet est fait avec React, Nodejs et mongodb(la base de donnée est dans un cluster personnel en cloud).

L'objectif est de crée une API qui peut faire des rapports sur des patients et les enregistrer.

Une fois que vous aurez lancer le server avec Nodejs.

Requete possible:

                GET: Recuperer tous les Patients: http://localhost:5000/api/patient/
                
                     Recuperer toutes les humeurs: http://localhost:5000/api/humeur/

                     Recuperer un Patient: http://localhost:5000/api/patient/:id (id du patient)

                     Recuperer une humeur : http://localhost:5000/api/humeur/:id (id de l'humeur)

                     Recuperer toutes les humeurs d'un patient: http://localhost:5000/api/humeur/patient/:id (id du patient)

                POST: Ajouter un patient: http://localhost:5000/api/patient/  body {name: {nom} , age: {age}}

                      Ajouter une humeur: http://localhost:5000/api/humeur/  body {description: {info} , id_patient: {id}}

                DELETE: supprimer une humeur: http://localhost:5000/api/humeur/:id (id de l'humeur)

                         supprimer un patient: http://localhost:5000/api/patient/:id (id du patient)

Du cote React il est lié a la base de donnée, tous les patients affichés sont issus de cette derniers.

En cliquant sur le bouton "realiser un rapport" vous pouvez envoyer un rapport sur le patient ciblé en appuyant sur enregistrer. 


                      
