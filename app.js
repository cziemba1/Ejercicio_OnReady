const concesionaria =  []; //Array donde se guardara el listado de Vehiculos

class Vehiculo {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }
  
  formatoPrecio() { // Funcion para darle formato de "precio"
    const precioFormato = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(this.precio);
    return precioFormato;
  }
}

class Auto extends Vehiculo {
  constructor(marca, modelo, puertas, precio) {
    super(marca, modelo, precio);
    this.puertas = puertas;
  }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, cilindrada, precio) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada;
  }
}

// Carga de vehiculos(items) en el listado
function cargarVehiculos(){
  const auto1 = new Auto('Peugeot', '206', 4, 200000);
  const moto1 = new Moto('Honda', 'Titan', '125c', 60000);
  const auto2 = new Auto('Peugeot', '208', 5, 250000);
  const moto2 = new Moto('Yamaha', 'YBR', '160c', 80500.5);
  concesionaria.push(auto1, moto1, auto2, moto2);
}

// Imprime el listado de vehiculos, aplicando el formato correspondiente ya sea se trate de un auto o una moto
function imprimirListado(){
    concesionaria.forEach((item) => {
    if (item instanceof Auto === true) {
      console.log(
        `Marca: ${item.marca} // Modelo: ${item.modelo} // Puertas: ${
          item.puertas
        } // Precio: ${item.formatoPrecio()}`
      );
    } else {
      console.log(
        `Marca: ${item.marca} // Modelo: ${
          item.modelo
        } // Cilindrada: ${
          item.cilindrada} // Precio: ${item.formatoPrecio()}`
      );
    }
  });
}

// Compara el precio de los vehiculos y devuelve el mas barato o el mas caro de acuerdo al "conceptoPrecio" ingresado
function comparacionPrecio (vehiculos, conceptoPrecio) {
    const vehiculoMasCaro = vehiculos.sort((a, b) => {
      if(conceptoPrecio.toLowerCase() == "caro"){
        if(a.precio > b.precio) {
            return -1;
        }
        return 0;
      }else if(conceptoPrecio.toLowerCase() == "barato"){
        if(a.precio < b.precio) {
            return -1;
        }
        return 0;
      } 
    })[0];
    console.log(`Vehículo más caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}`);
}

// Busca si existe la letra indicada en el modelo de cada vehiculo. De existir, devuelve el mismo.
function buscarLetraEnVehiculo (vehiculo, letra) {
    const resultado = vehiculo.find(vehiculo => {
        return vehiculo.modelo.includes(letra);
    })
    if(resultado) {
        console.log(`Vehículo que contiene en el modelo la letra ‘${letra}’: ${resultado.marca} ${resultado.modelo} ${resultado.formatoPrecio()}`);
    } else {
        console.log('No se encontro vehiculo con la letra proporcionada');
    }
}

// Devuelve los vehiculos ordenados por precio de acuerdo al ordenamiento ingresado:
// "mayor" = ordena de mayor a menor
// "menor" = ordena de menor a mayor
function ordernarVehiculosPorPrecio (vehiculos, ordenamiento) {
    const resultado = vehiculos.sort((a, b) => {
        if(ordenamiento.toLowerCase() == "mayor"){
            if(a.precio > b.precio) {
            return -1;
            }
            return 0;
        }else if(ordenamiento.toLowerCase() == "menor"){
            if(a.precio < b.precio) {
            return -1;
            }
            return 0;
        }
    });
    console.log("Vehículos ordenados por precio de mayor a menor:")
        resultado.forEach(vehiculo => {
            console.log(`${vehiculo.marca} ${vehiculo.modelo}`);
        })
}

function lineaDivisoraEstilo(){
  console.log("======================")
}

cargarVehiculos();
imprimirListado();
lineaDivisoraEstilo()
comparacionPrecio(concesionaria, "caro");
comparacionPrecio(concesionaria, "barato");
buscarLetraEnVehiculo(concesionaria, "Y");
lineaDivisoraEstilo();
ordernarVehiculosPorPrecio(concesionaria, "mayor");