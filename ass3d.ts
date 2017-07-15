//abstract class starts..
abstract class Department{
	name: string;
	location:string;
	constructor(name,location){
		this.name = name;
		this.location = location;
	}
	//abstract method..
	abstract getInfo();
}
class AccountingDepartment extends Department{
	constructor(name,location){
	super(name,location);
	}
	getInfo(){
		console.log(` Name of department is ${this.name} & location is ${this.location}  `);
	}

}
class AdministrativeDepartment extends Department{
	constructor(name,location){
	super(name,location);
	}
	getInfo(){
		console.log(` Name of department is ${this.name} & location is ${this.location}  `);
	}

}
var obj1 = new AccountingDepartment('Accounting-Head' , 'new-delhi First-floor');
var obj2 = new AdministrativeDepartment('Administrative-Head' , 'new-delhi second-floor');
obj1.getInfo();
obj2.getInfo();
