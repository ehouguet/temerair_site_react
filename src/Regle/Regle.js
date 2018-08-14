import React, { Component } from 'react'; import './Regle.css'; 
import { Link } from 'react-router-dom';


class Regle extends Component {
  render() {
    return (
    <div className = "fondR">
      <header>
<h1>Témérair</h1>
</header>

<div className="menu">
  <a className="menu_link" href="#Description">Description générale</a>
  <a className="menu_link" href="#Plateaux">Plateaux</a>
  <a className="menu_link" href="#Deroulement">Déroulement du jeu</a>
  <a className="menu_link" href="#Deplacements">Déplacements et capacités des pièces</a>
</div>

<div className = "script">
        <h3 id="Description">Description générale</h3>
        <p>Témérair (terre, mer, air) est un jeu de stratégie combinatoire abstrait à information parfaite conçu et développé à partir de 2011 par Adrien et Elouan Houguet.</p>
        <h3 id="Plateaux">Plateaux</h3>
          <ul>
            <li>3 plateaux
              <ul>
                <li>Un plateau de 4x8 cases en alternance rouges et blanches se situant à la gauche de la personne installant le plateau. Ce plateau signifie la terre.</li>
                <li>Un plateau de 4x8 cases en alternance bleues et blanches étant adjacent au plateau signifiant la terre et se situant à la droite de la personne installant le plateau. Ce plateau signifie la mer.</li>
                <li>Un plateau suspendu séparé en deux parties de 2x8 cases en alternance translucides et transparentes. Une de ces deux parties se situe en longueur au-dessus des deux premières cases du plateau signifiant la terre en partant de la gauche. L'autre partie se situe en longueur au-dessus des deux dernières cases du plateau signifiant la mer en partant de la gauche. Ces deux parties sont reliées par principe de wraparound (disparition des pièces d'un côté du plateau et réapparition de celles-ci sur son côté opposé selon le déplacement des pièces) de gauche vers la droite pour la partie située au-dessus de la mer et de droite vers la gauche sur la partie située au-dessus de la terre. Ce plateau signifie l'air.</li>
              </ul></li>
            <li>48 pièces dont:
              <ul>
                <li>24 ronds (12 foncés et 12 clairs)</li>
                <li>6 carrés (3 foncés et 3 clairs)</li>
                <li>6 triangles (3 foncés et 3 clairs)</li>
                <li>6 croix (3 foncées et 3 claires)</li>
                <li>6 pentagones (3 foncés et 3 clairs)</li>
              </ul></li>
            </ul>
          <h3 id="Deroulement">Déroulement du jeu</h3>
            <h4>Mise en place</h4>
              <p>Le jeu oppose deux joueurs ou deux équipes.</p>
              <p>Les joueurs s'accordent pour choisir la couleur des pièces (soit claires, soit foncées) qui leur appartiendront. Le joueur possédant les pièces foncées commence la partie.</p>
              <p>Sur chaque plateau (en sachant que la première case du plateau aérien commence sur la première case en partant de la gauche de la partie à la droite du joueur, la troisième case se situe sur la première case en partant de la gauche de la partie aérienne à la droite du joueur) les pièces seront disposées de la manière suivante:</p>
                <ul>
                  <li>Sur la rangée la plus proche du joueur
                    <ul>
                      <li>Le carré sera disposé sur la première case en partant de la gauche</li>
                      <li>La croix sera placée sur la seconde case en partant de la gauche</li>
                      <li>Le pentagone sur la troisième case en partant de la gauche</li>
                      <li>Et le triangle sur la quatrième case en partant de la gauche</li>
                    </ul></li>
                  <li>Sur toute la seconde rangée la plus proche du joueur seront placés les ronds.</li>
                </ul>

            <h4>But du jeu</h4>
              <p>À tour de rôle, les joueurs devront soit déplacer une des pièces leur appartenant soit utiliser une de leur capacité sur le plateau de leur choix. Aucun joueur ne peut passer son tour.</p>
              <p>Le but du jeu est d'éliminer les pentagones adversaires sur la majorité des plateaux. N'ayant que 3 pentagones adverses sur les trois plateaux différents, la partie s'achève automatiquement lorsqu'un joueur élimine 2 pentagones de l'adversaire. Il est alors déclaré vainqueur de la partie.</p>
              <p>Lorsqu'il est impossible aux deux joueurs d'éliminer les pentagones sur la majorité des plateaux la partie est déclarée ex-aequo.</p>
              <p>Lorsqu'un pentagone est éliminé sur un plateau aucun des joueurs ne peut ni déplacer ni utiliser la capacité des pièces encore présentes sur ce dernier. Il sera nommé plateau inactif. Le joueur ayant éliminé le pentagone adverse peut alors pendant son tour, au lieu de déplacer une pièce ou d'utiliser sa capacité, rapatrier une des pièces non-éliminée du le plateau inactif sur un des plateaux encore actif (c.à.d. où les deux pentagones des deux joueurs sont encore présents) auprès de son pentagone (voir déplacements et capacité des pièces). Il peut répéter cette action tant qu'il lui reste des pièces non-éliminées sur le plateau inactif.</p>
              <p>Sauf par le principe de rapatriement mentionné ci-haut aucune pièce ne peut passer d'un plateau à l'autre.</p>
              <p>Pour éliminer le pentagone de l'adversaire ou pour défendre le leur les joueurs auront à leur disposition des pièces avec des déplacements et des capacités différentes. Ces pièces pourront aussi éliminer d'autres pièces adverses ou se faire éliminer par d'autres pièces de l'adversaire.</p>   
              <p>Lorsqu'une pièce est éliminée elle est retirée du jeu.</p>

<h3 id="Deplacements">Déplacements et capacités des pièces</h3>
<h4>Rond</h4>
<p>Le rond ne peut se déplacer, si rien l'en empêche (pièces adverses ou pièces de sa couleur), que d’une seule case vers l’adversaire, soit en diagonale ou soit par la case située en face de lui.</p>
<p>Il peut éliminer une pièce adverse en se positionnant, dans la limite de ses déplacements, sur la case ou se situe la pièce de l’adversaire.</p>

<h4>Carré</h4>
<p>Le carré peut se déplacer en ligne horizontalement ou verticalement tant qu'aucun obstacle ne l'en empêche (pièces adverses ou pièces de sa couleur).</p>
<p>Il peut éliminer une pièce adverse en se positionnant, dans la limite de ses déplacements, sur la case ou se situe la pièce de l’adversaire.</p>

<h4>Triangle</h4>
<p>Le triangle peut se déplacer en diagonale tant qu'aucun obstacle ne l'en empêche (pièces adverses ou pièces de sa couleur).</p>
<p>Il peut éliminer une pièce adverse en se positionnant, dans la limite de ses déplacements, sur la case ou se situe la pièce de l’adversaire.</p>
<p>Il peut aussi éliminer la pièce se situant juste sur la case du plateau situé au-dessus ou en dessous de lui soit en se déplaçant vers la case situé au-dessus ou en dessous de la pièce à éliminer, soit en restant immobile, le joueur utilisera alors la capacité de la pièce à éliminer une pièce situe en dessous ou au-dessus d'elle.</p>
<p>Le triangle peut ainsi éliminer deux pièces à la fois en se positionnant sur une pièce et en éliminant la pièce située au-dessus de lui lors de son positionnement.</p>

<h4>Croix</h4>
<p>La croix peut se déplacer d'une seule case vers la gauche, vers la droite, vers le haut ou vers le bas si rien l'en empêche (pièces adverses ou pièces de sa couleur).</p>
<p>Au lieu de se déplacer elle peut éliminer une pièce de l'adversaire située soit à deux cases vers le haut et une vers la gauche ou la droite, soit à deux case vers le bas et une vers la gauche ou la droite, soit à deux cases vers la gauche et une vers le haut ou le bas, soit à deux cases vers la droite et une vers le haut ou le bas. Elle peut aussi éliminer de cette façon une pièce située sur le plateau adjacent situé au même niveau (les plateaux signifiant la terre et la mer).</p>

<h4>Pentagone</h4>
<p>Le pentagone peut se déplacer d'une seule case en diagonale si rien l'en empêche.</p>
<p>Il peut éliminer une pièce adverse en se positionnant, dans la limite de ses déplacements, sur la case ou se situe la pièce.</p>
<p>Le pentagone peut rapatrier les pièces d'un plateau inactif gagné par le joueur sur une des cases adjacentes au pentagone, soit à gauche, à droite, en haut ou en bas.</p>
      </div>

<div className = "footer">
<p>Témérair©</p>
</div>

    </div>
    );
  }
}

export default Regle;
