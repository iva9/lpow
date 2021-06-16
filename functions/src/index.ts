import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase)

exports.newfollowerNotification = functions.firestore.document(`users
MXww8dsbutQfhn2Ef6E7O9wGopy2`).onCreate(async event =>{
    const data = event.data();

    const  userid = data.iduser
    const subscriber = data.followed[0]

    const payload = {
        notification : {
            title :  "NOVO SEGUIDOR",
            body : `${subscriber} está te seguindo` 
        }
    }
})
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
