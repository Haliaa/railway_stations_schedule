const baseURL = process.env.REACT_APP_API

const urls = {
    trains: '/trains',
    stations: '/stations',
    schedules: '/schedules'
}

module.exports = {
    baseURL,
    urls
}
