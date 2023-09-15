import jsonfile from 'jsonfile'
import moment from 'moment'
import simpleGit from 'simple-git'

const DATA_PATH = './data.json'
const  DATE = moment().format()

const data = {
    date: DATE
}

jsonfile.writeFile(DATA_PATH, data)
simpleGit().add(DATA_PATH).commit(DATE, {'--date': DATE}).push()