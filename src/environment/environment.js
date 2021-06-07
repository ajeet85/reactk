const MODE = 'dev';      // 'development/production/pre_production'
let API_URL = '';
if(MODE==='dev'){
	API_URL = "http://65.0.166.200:3009/";
} else if(MODE==='production'){
	API_URL = "";
} else {
	API_URL = "";
}

export const URL = API_URL;


