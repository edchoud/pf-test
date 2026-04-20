# pf-test — Futur portfolio

## Contexte
Ce repo remplacera edchoud.github.io à terme et récupérera son URL.
Ne jamais toucher au repo edchoud.github.io.

## Workflow obligatoire
Pour CHAQUE modification :
1. Toujours partir de main à jour : `git checkout main && git pull`
2. Créer une branche dédiée depuis main : `git checkout -b fix/footer` ou `feature/hero-section`
3. Faire les modifications sur cette branche uniquement
4. Avant de créer la PR, rebaser sur main : `git rebase main`
5. Commiter avec un message clair en français
6. Pusher la branche sur GitHub
7. Créer une Pull Request sur GitHub
8. Supprimer la branche après merge

Ne jamais créer une branche depuis une autre branche feature.
Ne jamais commiter directement sur main.

