/* eslint-disable no-unused-vars */
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'


const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDpT2trtB13AYvyArQujGYDQF0aWGO2awI",
    authDomain: "portal-e9c86.firebaseapp.com",
    databaseURL: "https://portal-e9c86.firebaseio.com",
    projectId: "portal-e9c86",
    storageBucket: "portal-e9c86.appspot.com",
    messagingSenderId: "920862310014",
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;