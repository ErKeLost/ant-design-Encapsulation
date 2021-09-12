let BASE_URL = ''
const TIME_OUT = 3000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:5000/'
}
if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:5000'
}

export { TIME_OUT, BASE_URL }
