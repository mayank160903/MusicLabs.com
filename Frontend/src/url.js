const backendUrl =
    window.location.hostname === 'localhost'
        ? "http://localhost:8000"
        : "backend deployed url";

export {backendUrl};