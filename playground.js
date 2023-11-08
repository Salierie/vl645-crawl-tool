const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

url = 'https://xosovn.com/xs-mega-xem-them';

const getData = () => {
    axios.get('https://xosovn.com/xs-mega-xem-them').then(response => {
        console.log(response);
    });
};

const sendData = () => {
    axios.post('https://xosovn.com/xs-mega-xem-them',{
        
    }).then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    })
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);