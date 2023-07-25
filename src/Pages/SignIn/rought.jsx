// const validate = async () => {
//   console.log(Cookies.get("idToken"));
//   try {
//     const response = await API.auth.validateToken({
//       requestUri: "http://localhost:5173/dashboard",
//       // postBody: { idToken: Cookies.get("idToken"), providerId: "password" },
//       postBody: `idToken={${Cookies.get("idToken")}}&providerId="password"`,
//       // requestUri: `[http://localhost:5173/dashboard]`,
//       // returnIdpCredential: true,
//       // returnSecureToken: true,
//       // postBody: `idToken=[${Cookies.get(
//       //   "idToken"
//       // )}]&providerId=[${"password"}]`,
//     });
//     console.log(response);
//   } catch (e) {
//     console.log(e);
//   }
// };
