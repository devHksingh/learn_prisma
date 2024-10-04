
class ApiResponse {
    statusCode:Number;
    data: undefined;
    success:Boolean
    message:String
    
    
    constructor(statusCode:Number,data:any,message='Success'){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this .success = statusCode.valueOf() < 400
    }
}

export {ApiResponse}