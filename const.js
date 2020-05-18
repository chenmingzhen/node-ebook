const env = require('./env');
let resUrl;
let mp3FilePath;
let dbHost;
let dbUser;
let dbPwd;

if (env === 'dev') {
    resUrl = 'http://192.168.1.106:8081';
    // mp3FilePath = '/Users/sam/Desktop/resource/mp3';
    dbHost = 'localhost';
    dbUser = 'root';
    dbPwd = 'cmz214164051';
} else if (env === 'prod') {
    resUrl='http://193.112.175.198';
    dbHost = '193.112.175.198';
    dbUser='root';
    dbPwd='cmz214164051';
}

const category = [
    'Biomedicine',
    'BusinessandManagement',
    'ComputerScience',
    'EarthSciences',
    'Economics',
    'Engineering',
    'Education',
    'Environment',
    'Geography',
    'History',
    'Laws',
    'LifeSciences',
    'Literature',
    'SocialSciences',
    'MaterialsScience',
    'Mathematics',
    'MedicineAndPublicHealth',
    'Philosophy',
    'Physics',
    'PoliticalScienceAndInternationalRelations',
    'Psychology',
    'Statistics'
];

module.exports = {
    resUrl,
    category,
    mp3FilePath,
    dbHost,
    dbUser,
    dbPwd
};

