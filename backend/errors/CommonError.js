class CommonError extends Error {
    constructor(message, status= 400) {
        super(message);
        this.status = status
    }
}

module.exports = CommonError;
