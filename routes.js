// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";






const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";
const COIN="/coin";
const COINS="/coins";
const NOTI="/notification";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";


// API

const API = "/api";
const REGISTER_VIEW = "/:id/view";
const LOGGED_USER = "/user/logged"




//
const PAYMENT_COMPLETE = "/payments/complete";
const PAYMENT_TRANSFER = "/payments/transfer";
const PAYMENT_LIST = "/coin/transfer";






const routes = {  
  home: HOME,
  join: JOIN,
  login: LOGIN,

  logout: LOGOUT,
  search: SEARCH,
  coin:COIN,
  coins:COINS,


  users: USERS,



  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,

  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: id => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: id => { 
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },
  deleteVideo: id => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return DELETE_VIDEO;
    }
  },
  me:ME,
  api: API,
  registerView: REGISTER_VIEW,
  loggedUser: LOGGED_USER,
  paymentComplete: PAYMENT_COMPLETE,
  paymentTransfer: PAYMENT_TRANSFER,
  paymentList: PAYMENT_LIST,
  noti: NOTI
  
  
};

export default routes;