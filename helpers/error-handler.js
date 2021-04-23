function errorHandler(err,req,res,next){
       if(err.name === 'UnauthorizedError')
        return res.send(401).json({message: "The user is not authorized"});

    if(err.name === 'ValidationError')
        return res.sendStatus(401).json({message: err});   

    return res.sendStatus(500).json({message: err})
}

module.exports = errorHandler;
