import { getAuth, signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";
import {facebook, google, db} from '../../firebase/firebaseConfig'
import { loginTypes } from "../types/loginTypes";
import { addDoc,collection,getDocs,query,where,doc,deleteDoc} from "@firebase/firestore";
// import { productTypes } from "../types/productTypes";

export const loginEmailPassword = (email,password) =>{
    
    return (dispatch) =>{

       const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
       .then(({user}) =>{
             dispatch(
                loginSincrono(user.uid,user.displayName)
             ) 
             console.log('Bienvenid@');
       })
       .catch(e =>{
            console.log('El usuario no existe');
       })
    }
}
// export const logoutAsincrono = () =>{
//     
//     return (dispatch) =>{
// 
//        const auth = getAuth();
//        
//         signInWithEmailAndPassword(auth,email,password)
//        .then(({user}) =>{
//              dispatch(
//                 loginSincrono(user.uid,user.displayName)
//              ) 
//              console.log('Bienvenid@');
//        })
//        .catch(e =>{
//             console.log('El usuario no existe');
//        })
//     }
// }

export const loginGoogle = () => {

    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,google)
        .then(({user}) => {
            dispatch(loginSincrono(user.uid,user.displayName))
            console.log(`Bienvenid@ ${user.displayName}`);
        })
        .catch(e =>{
            console.log(e);
        })
    }
}
export const loginFacebook = () => {

    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,facebook)
        .then(({user}) => {
            dispatch(loginSincrono(user.uid,user.displayName))
            console.log(`Bienvenid@ ${user.displayName}`);
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

export const loginSincrono = (id, displayname) => {
    return{
       type: loginTypes.login,
       payload: {
           id,
           displayname
       }
    }
}

export const logoutSincrono = () => {
    return{
        type: loginTypes.logout
    }
}

// Search
// export const searchAsync = (producto) => {
   
//     return async (dispatch) => {
//         const traerCollection = collection(db,'ProductosAmazonas')
//         const q = query(traerCollection, where('nombre', '>=', producto, '<',  producto + 'z'))
//         const datos = await getDocs(q)

//         const productos = []
//         datos.forEach((documentos) => {
//             productos.push({
//                 id: documentos.id,
//                 data:documentos.data()
//             })
//             console.log('documentos.data()', documentos.data())
//         })
//         dispatch(searchSync(productos))
//     }
// }

// export const searchSync = (productos) => {
//     return {
//         type: productTypes.search,
//         payload: productos
//     }
// }