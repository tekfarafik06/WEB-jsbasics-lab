// TODO
// A `Circle` class/function that can be invoked as :
// const c = new Circle();
// It should contain at least 3 hidden fields `x`, `y`, and `radius`.
export class Circle {
  // TODO

  #x;
  #y;
  #radius;
  #area;
  // Constructeur prenant en entrée `x`, `y` et `radius`
  constructor(x, y, radius) {
    this.#x = x;
    this.#y = y;
    this.radius = radius;
  }
  // Getter et setter pour `radius`
  set radius(valeur) {
    // Vérification que la valeur est positive
    if (valeur < 0) {
      throw '';
    }
    this.#radius = valeur;
  }
  get radius() {
    return this.#radius;
  }

  // Getter pour les coordonnées `coords`
  get coords() {
    return [this.#x, this.#y];
  }

  // Getter et setter pour `area`
  get area() {
    return this.#area;
  }
  set area(valeur) {
    // Vérification que la valeur est positive
    if (valeur < 0) {
      throw '';
    }
    this.#area = valeur;
    this.#radius = Math.sqrt(this.#area / Math.PI);
  }

  // Fonction `moveTo` pour déplacer un cercle
  moveTo(x, y) {
    this.#x = x;
    this.#y = y;
  }

  // Fonction statique `distance` pour calculer la distance entre deux cercles
  static distance(circle1, circle2) {
    // Récupération des coordonnées des cercles
    let [x1, y1] = circle1.coords;
    let [x2, y2] = circle2.coords;

    // Calcul de la distance avec la formule de Pythagore
    let X=Math.pow(x2 - x1, 2);
    let Y=Math.pow(y2 - y1, 2);
    let distance = Math.sqrt(X +Y);
    return distance;
  }

  // Fonction statique `doIntersect` pour vérifier l'intersection entre deux cercles
  static doIntersect(circle1, circle2) {
    let distance = Circle.distance(circle1, circle2);
    return distance < circle1.radius + circle2.radius;
  }
}
