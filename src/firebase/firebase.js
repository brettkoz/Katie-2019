import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
class Firebase {
  constructor() {
    app.initializeApp(dev_config);
    this.db = app.firestore();
    this.db.enablePersistence().catch(function(err) {
      console.log("error enabling persistence: " + err);
      if (err.code == "failed-precondition") {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
        console.log(
          "failed precondition setting enablePersistance, multiple tabs open"
        );
      } else if (err.code == "unimplemented") {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
        console.log("the current browser doesnt support persistanceEnabled");
      }
    });
    this.auth = app.auth();
    this.storage = app.storage();
  }
  db = () => this.db;
  auth = () => this.auth;
}
const dev_config = {
  apiKey: "AIzaSyBrzvbu9kDdsd9WBar54TQWpAUWEow9DVI",
  authDomain: "katiephotographydev.firebaseapp.com",
  databaseURL: "https://katiephotographydev.firebaseio.com",
  projectId: "katiephotographydev",
  storageBucket: "katiephotographydev.appspot.com",
  messagingSenderId: "357033620058",
  appId: "1:357033620058:web:bbb074e3dbbe3b431ade63",
  measurementId: "G-0Z4FCSSFKC"
};

export default Firebase;
