const baseURL = process.env.REACT_APP_API

const urls = {
    trains: '/api/trains',
    stations: '/api/stations',
    schedules: '/api/schedules'
}

module.exports = {
    baseURL,
    urls
}
