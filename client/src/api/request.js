function parseData(data) {
    const formData = new FormData()
    for (let [key, value] of Object.entries(data)) {
        formData.append(key, value)
    }
    return formData;
}

function request(url, data = false, method = "GET", type = 'JSON') {
    return new Promise(async (resolve, reject) => {
        const options = {
            method,
            headers: { 'Content-Type': 'application/json' } //without this line  server get req.body empty
        }
        if (data && (method === 'POST' || method === 'PATCH')) {
            options.body = type === 'JSON' ? JSON.stringify(data) : parseData(data)
        }
        //method === 'POST'&&console.log(options.body)
        const response = await fetch(process.env.REACT_APP_API_URL_PREFIX + url, options)
        //method === 'POST'&&console.log(response)
        const result = await response.json()
        //method === 'POST'&&console.log(result)
        if (response.ok) {
            resolve(result)
        }
        else {
            reject(result)
        }
    });
}

export const post = (url, data) => request(url, data, 'POST');
export const postFORM_DATA = (url, data) => request(url, data, 'POST', 'FORM_DATA');
export const get = url => request(url);
export const patch = (url, data) => request(url, data, 'PATCH');
export const remove = (url) => request(url, '', 'DELETE');
