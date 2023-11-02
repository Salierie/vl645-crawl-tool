const axios = require('axios');
url = "https://vietlott.vn/vi/trung-thuong/ket-qua-trung-thuong/winning-number-645#top";
async function AutoPage(url){
    try{
        const response = await axios.get(url).then(function(response){
            console.log(response.data);
        });

    }catch(error){}
}