const fs = require('fs-extra');
const {join} = require('path');

const loadSqlQueries = async (foldername) => {
    const filePath = join(process.cwd() , 'data' , foldername);
    const files = await fs.readdir(filePath);
    const sqlFiles = files.filter(f => f.endsWith('.sql'));
    const queries = {};
    for( const sqlfiles of sqlFiles) {
        const query = fs.readFileSync(join(filePath , sqlfiles), {encoding: "UTF-8"});
        queries[sqlfiles.replace(".sql" , "")] = query;
    }
    return queries;
}

module.exports = {
    loadSqlQueries
}