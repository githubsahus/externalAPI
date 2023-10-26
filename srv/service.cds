using {Northwind as nwapi} from './external/Northwind';

service catalogService @(path:'/Northwind') {
    entity Customers as projection on nwapi.Customers;
}
