// import Cookies from 'js-cookie';
import Cookie from 'react-native-cookie';


// export const domain = "http://127.0.0.1:8000";
export const domain = "";


const token = ""
export const header = {
    Authorization: `token ${token}`
}
const csrftoken = Cookie.get('csrftoken')
export const header2 = {
    'X-CSRFToken': csrftoken,
}