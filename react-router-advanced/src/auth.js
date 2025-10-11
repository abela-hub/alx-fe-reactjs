// Simulate authentication
export const auth = {
    isAuthenticated: false,
    login(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async login
    },
    logout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    },
};
