/**
 * install jsonwebtoken
 * jwt.sign (payload , secret , {expireIn:})
 * token client 
*/




/**
 * how to store token in client side
 * 1. memory ---> ok type
 * 2. local storage ---> ok type(xss)
 * 3. cookies : http only
*/


/**
 * 1. set cookies with http only
 * 2. cors
 * 
 * app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));



 * 3. client side axios setting

* in axios set with Cr : true
*/