var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//abstract class starts..
var Department = (function () {
    function Department(name, location) {
        this.name = name;
        this.location = location;
    }
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(name, location) {
        return _super.call(this, name, location) || this;
    }
    AccountingDepartment.prototype.getInfo = function () {
        console.log(" Name of department is " + this.name + " & location is " + this.location + "  ");
    };
    return AccountingDepartment;
}(Department));
var AdministrativeDepartment = (function (_super) {
    __extends(AdministrativeDepartment, _super);
    function AdministrativeDepartment(name, location) {
        return _super.call(this, name, location) || this;
    }
    AdministrativeDepartment.prototype.getInfo = function () {
        console.log(" Name of department is " + this.name + " & location is " + this.location + "  ");
    };
    return AdministrativeDepartment;
}(Department));
var obj1 = new AccountingDepartment('Accounting-Head', 'new-delhi First-floor');
var obj2 = new AdministrativeDepartment('Administrative-Head', 'new-delhi second-floor');
obj1.getInfo();
obj2.getInfo();
