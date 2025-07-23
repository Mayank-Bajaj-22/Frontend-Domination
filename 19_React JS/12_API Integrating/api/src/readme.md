- AJAX, Fetch, and Axios (Data Fetching Methods)
    - AJAX (Asynchronous JavaScript and XML)
        - A technique for sending and receiving data asynchronously without reloading the page. Commonly used via XMLHttpRequest in older applications
    - Fetch API
        - A modern, native JavaScript API for making HTTP requests. It returns Promises and is cleaner and more powerful than XMLHttpRequest.

        fetch('/api/data')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    - Axios
        - A popular third-party HTTP client for the browser and Node.js. It simplifies requests, automatically transforms JSON, and has built-in support for interceptors and cancel tokens.

        axios.get('/api/data')
            .then(res => console.log(res.data))
            .catch(err => console.error(err));


- in short: ajax concept and implement through fetch and axios
- API is just a normal link jo redirect karti hai
- backend deploy karne ke baad ek link milti hai usko api kehte hai
- axios ke jariye hum api ko call karte hai