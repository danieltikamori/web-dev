class Color {
  //capitalized name
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.colorName = name; //or just name
  }

  methodGreet() {
    return `Hello from ${this.colorName} color!!!`;
  }
  // methodRGB(){
  //   return `${this.r}, ${this.g}, ${this.b}`;
  // }
  // or
  methodRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  methodHEX() {
    return '#' + ((1<<24))
  }
}

const color1 = new Color(255, 0, 0, "dunno");