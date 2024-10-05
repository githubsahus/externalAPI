const cds = require('@sap/cds');
module.exports = cds.service.impl(async function () {
    this.on('READ','Customers',async(data,req)=>{
        try {
            const service = await cds.connect.to('Northwind');
            let results = await service.tx(req).run(req.query);
            return results;
        } catch (error) {
            req.error('500', error);
        }
    });


});

add: function(charan, param2){
    //functionlity to add
}
