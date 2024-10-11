import axois from 'axios'
function SignUp() {

    async function postUserData(event) {
        event.preventDefault()
        console.log("inside fn");
        
        try {
            const {data} = await axois.post("http://192.168.1.5:3000/api/users/login",{
                name:"asd",
                email: "asd@test.com",
                password:"123456"
    
            },)
            
            // const {data} = await axois.get('http://192.168.1.5:3000/api/users/allUsers')
    
            console.log(data);
        } catch (error) {
           console.log(error);
            
        }
        
    }

    
    
    
    
  return (
    
    
    <div className="container mx-auto ">
        <div >
            <form className="">
                
                <label className="block">
                    <span className="block font-medium text-md text-slate-200 ">Email</span>
                    <input type="email" className="p-2 mt-2 rounded-lg peer invalid:border-pink-500 invalid:text-pink-600 text-gray-950"/>
                    <p 
                    className="invisible mt-2 text-sm text-red-500 peer-invalid:visible"
                    >Please provide a valid email address.</p>
                </label>

                <label className="block ">
                    <span className="block text-md text-slate-200 invalid:text-orange-400">Name</span>
                    <input type="text" className="p-2 mt-2 rounded-lg peer invalid:border-pink-500 invalid:text-pink-600 text-gray-950"/>
                    <p className="invisible mt-2 text-sm text-red-500 peer-invalid:visible">
                    Please provide a valid username address.
                    </p>
                </label>
                
                <label className="block ">
                    <span className="block text-md text-slate-200 invalid:text-orange-400">Password</span>
                    <input type="password" className="p-2 mt-2 rounded-lg peer invalid:border-pink-500 invalid:text-pink-600 text-gray-950"/>
                    <p className="invisible mt-2 text-sm text-red-500 outline-none peer-invalid:visible ring-1">
                    Please provide a valid username address.
                    </p>
                </label>
                

                <button type="submit" id="submitBtn" onClick={postUserData} className="px-2 py-1 mb-4 text-center outline outline-1 rounded-xl">Submit</button>
                
                
            </form>
        </div>
    </div>
  )
}

export default SignUp