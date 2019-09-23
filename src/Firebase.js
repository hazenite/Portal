/* eslint-disable no-unused-vars */
import * as firebase from 'firebase';


const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDpT2trtB13AYvyArQujGYDQF0aWGO2awI",
    authDomain: "portal-e9c86.firebaseapp.com",
    databaseURL: "https://portal-e9c86.firebaseio.com",
    projectId: "portal-e9c86",
    storageBucket: "portal-e9c86.appspot.com",
    messagingSenderId: "920862310014",
    appId: "1:920862310014:web:ed8d782bc1e08fdecca22f"
};
firebase.initializeApp(config);


export default firebase;