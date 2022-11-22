import admin, { FirebaseError} from "firebase-admin";

async function execute(token: string){
  try {
    const app = admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      databaseURL: 'https://p1gg-devstage.firebaseio.com'
    });

    const user = await app.auth().verifyIdToken(token);
    return {
      uid: user.uid,
      email: user.email,
    };
  } catch (e) {
    const firebaseError = <FirebaseError>e
    return {
      code: firebaseError.code,
      message: firebaseError.message
    };
  }
}

async function main(){
  const token = process.argv[2];
  console.log(token)

  const result = await execute(token)

  console.table(result)
}

main()