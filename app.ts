interface Service {
    Renew():void;
    Login():void;
    Cancel():void;
}

class NewFlix implements Service {
    Renew(): void {
        console.log("Renewing NewFlix subscription");
    }
    Login(): void {
        console.log("Logging in to NewFlix");
    }
    Cancel(): void {
        console.log("Cancelling NewFlix subscription");
    }
}

class CamaronPrime implements Service {
    Renew(): void {
        console.log("Renewing CamaronPrime subscription");
    }
    Login(): void {
        console.log("Logging in to CamaronPrime");
    }
    Cancel(): void {
        console.log("Cancelling CamaronPrime subscription");
    }
}

class OBH implements Service {
    Renew(): void {
        console.log("Renewing OBH subscription");
    }
    Login(): void {
        console.log("Logging in to OBH");
    }
    Cancel(): void {
        console.log("Cancelling OBH subscription");
    }
}

enum ServiceType {
    Renew,
    Login,
    Cancel
}

const button = document.getElementById("btn")!;
const service = <HTMLSelectElement> document.getElementById("service");
const task = <HTMLSelectElement> document.getElementById("task");

let selectedService:Service;
let currentOperation:ServiceType;

service.addEventListener("change", () => {
    // console.log(service.value);
    switch (service.value) {
        case '1': selectedService = new NewFlix();
            break;
        case '2': selectedService = new CamaronPrime();
            break;
        case '3': selectedService = new OBH();
            break;
    }
});

task.addEventListener("change", () => {
    switch(task.value){
        case '1': currentOperation = ServiceType.Renew;
            break;
        case '2': currentOperation = ServiceType.Login;
            break;
        case '3': currentOperation = ServiceType.Cancel;
            break;
    }
});

button.addEventListener("click", () => {
    switch(currentOperation){
        case ServiceType.Renew: selectedService.Renew();
            break;
        case ServiceType.Login: selectedService.Login();
            break;
        case ServiceType.Cancel: selectedService.Cancel();
            break;
    }
});