window.registerUser = (url, user) => {
    const formData = new FormData();

    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('gender', user.gender);
    formData.append('image', user.image);
    formData.append('password', user.password);
    formData.append('confirmPassword', user.confirmPassword);

    return fetch(url, {
        method: 'POST',
        body: formData
    })
}

window.login = (url, user) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'Content-type': 'application/json'}
    })
}

window.validateToken = (url, token) => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}