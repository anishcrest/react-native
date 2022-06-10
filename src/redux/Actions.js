// Function to logging the user in
export function USER_LOGIN(res) {
    return { type: 'USER_LOGIN', res };
}

// Function to log the user out of the app
export function LOG_OUT() {
    return { type: 'LOG_OUT' };
}

// Function to update user token
export function USER_TOKEN(res) {
    return { type: 'USER_TOKEN', res };
}

// Function to change user's country details
export function USER_COUNTRY_DETAIL(res) {
    return { type: 'USER_COUNTRY_DETAIL', res };
}

// Function to update firebase token of the user
export function FIREBASE_TOKEN(res) {
    return { type: 'FIREBASE_TOKEN', res };
}

// Function to update the provider of the user
export function PROVIDER(res) {
    return { type: 'PROVIDER', res };
}
