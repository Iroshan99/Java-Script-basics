interface Vehicle{
    wheels: number;
    color: String;
    drive(): void;
}

class Car implements Vehicle{
    wheels: number;
    color: string;
    drive(): void {
        console.log('driving car');
    }
}

class Bike implements Vehicle{
    wheels: number;
    color: string;
    drive(): void {
        console.log('driving Bike');
    }
}

class vehicleFactory{

    vehicle: Vehicle;
    getVehicle(type: String){
        if(type=='car'){
            this.vehicle=new Car();
            return this.vehicle;
        }
        else if(type=='bike'){
            this.vehicle=new Bike();
            return this.vehicle;
        }
    }
}

const factory= new vehicleFactory();
const car=factory.getVehicle('car');
car?.drive();
