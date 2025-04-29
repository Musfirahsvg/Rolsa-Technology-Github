// // import HeroBanner from "../../Components/HeroBanner/HeroBanner";
// import "./Auth.css";
// import Image4 from  '../../Assets/Image 4.png'
// import RegisterForm from "../../Components/AuthForms/Register";
// import LoginForm from "../../Components/AuthForms/Login";
// import { useState } from "react";

// export default function Auth() {
//     const[isRegister, setIsRegister] = useState(true);

//     function toggleForms(){
//         setIsRegister(!isRegister)
//     }
    
//     return (
//         <>
//             <div className="auth-container">
//                 <div className="auth-hero-column" bgImage={Image4}>
//                         <h1>Energy Consumption</h1>
//                         <h2>Use Renewable resources to save Energy</h2>
//                 </div>
//                 <div className="auth-form-column">
//                     <h2>Unsinkable gains await</h2>
//                     {
//                         isRegister 
//                         ? <RegisterForm toggle = {toggleForms}/> 
//                         : <LoginForm toggle = {toggleForms}/>
//                     }


//                 </div>
                

//             </div>

//         </>
//     )
// }  







// import "./Auth.css";
// import Image4 from '../../Assets/Image 4.png';
// import RegisterForm from "../../Components/AuthForms/Register";
// import LoginForm from "../../Components/AuthForms/Login";
// import { useState } from "react";

// export default function Auth() {
//     const [isRegister, setIsRegister] = useState(true);

//     function toggleForms() {
//         setIsRegister(!isRegister);
//     }

//     return (
//         <div className="auth-container">
//             <div className="auth-hero-column" style={{ backgroundImage: `url(${Image4})` }}>
//                 <h1>Energy Consumption</h1>
//                 <h2>Use Renewable resources to save Energy</h2>
//             </div>
//             <div className="auth-form-column">
//                 <h2>{isRegister ? "Create an Account" : "Welcome Back"}</h2>
//                 {isRegister ? <RegisterForm toggle={toggleForms} /> : <LoginForm toggle={toggleForms} />}
//             </div>
//         </div>
//     );
// }







// import "./Auth.css";
// import Image4 from '../../Assets/Image 4.png';
// import RegisterForm from "../../Components/AuthForms/Register";
// import LoginForm from "../../Components/AuthForms/Login";
// import ChangePasswordForm from "../../Components/AuthForms/ChangePassword"; // Add this line
// import { useState } from "react";

// export default function Auth() {
//     const [formType, setFormType] = useState("register"); // "login", "register", "change-password"

//     const toggleForms = (type) => {   
//         setFormType(type);
//     };

//     const getTitle = () => {
//         if (formType === "register") return "Create an Account";
//         if (formType === "login") return "Welcome Back";
//         if (formType === "change-password") return "Change Password";
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-hero-column" style={{ backgroundImage: `url(${Image4})` }}>
//                 <h1>Energy Consumption</h1>
//                 <h2>Use Renewable resources to save Energy</h2>
//             </div>
//             <div className="auth-form-column">
//                 <h2>{getTitle()}</h2>
//                 {formType === "register" && <RegisterForm toggle={() => toggleForms("login")} />}
//                 {formType === "login" && (
//                     <LoginForm
//                         toggle={() => toggleForms("register")}
//                         onForgotPassword={() => toggleForms("change-password")}
//                     />
//                 )}
//                 {formType === "change-password" && (
//                     <ChangePasswordForm toggleBack={() => toggleForms("login")} />
//                 )}
//             </div>
//         </div>
//     );
// }









// ✅ File: src/Pages/Auth/Auth.js
import "./Auth.css";
import Image4 from '../../Assets/Image 4.png';
import RegisterForm from "../../Components/AuthForms/Register";
import LoginForm from "../../Components/AuthForms/Login";
import ChangePasswordForm from "../../Components/AuthForms/ChangePassword";
import { useState } from "react";

export default function Auth() {
    const [formType, setFormType] = useState("register");

    return (
        <div className="auth-container">
            <div className="auth-hero-column" style={{ backgroundImage: `url(${Image4})` }}>
                <h1>Energy Consumption</h1>
                <h2>Use Renewable resources to save Energy</h2>
            </div>
            <div className="auth-form-column">
                <h2>{
                    formType === "register" ? "Create an Account" :
                    formType === "login" ? "Welcome Back" :
                    "Change Password"
                }</h2>
                {formType === "register" && <RegisterForm toLogin={() => setFormType("login")} />}
                {formType === "login" && (
                    <LoginForm
                        toRegister={() => setFormType("register")}
                        toChangePassword={() => setFormType("change-password")}
                    />
                )}
                {formType === "change-password" && (
                    <ChangePasswordForm
                        toLogin={() => setFormType("login")}
                        toRegister={() => setFormType("register")}
                    />
                )}
            </div>
        </div>
    );
}
