'use strict'

function validation(req,res,next)
{
    if(req.query.name)
    {
        console.log(req.query.name.toString());
        next()
    }
    else
    {
        next('There is no name')
    }
}
module.exports=validation