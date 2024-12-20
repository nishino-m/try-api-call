const axios = require('axios');
const API_KEY = "xxxxxxxxxxx";
const ENDPOINT = "http://webservice.recruit.co.jp/hotpepper/shop/v1/"

//リクエストパラメータ
const params = {
    key: API_KEY,
    tel: "0662110071",
    format: 'json',
};


const getdata = async () =>{
    try {
        const res = await axios.get(ENDPOINT,{params});
        console.log(res.data.results.shop[0].name);
    } catch(error){
        console.error("失敗")
    }
}

getdata();
