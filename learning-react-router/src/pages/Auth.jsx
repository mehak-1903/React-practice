export const Auth = {
    isAuthenticated : false,

    login(cb){
        Auth.isAuthenticated = true;
        setTimeout(cb, 500);
    },

    logout(cb){
        Auth.isAuthenticated = false;
        setTimeout(cb, 500);
    }
}