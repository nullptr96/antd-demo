export const getUserInfo = () => {
    let userInfo = {
        "error_code": 0,
        "data": [{
            "id": '1',
            "usertitle": "管理员",
            "username": "admin",
            "password": "123456",
            "token": "12345",
          },
          {
            "id": '2',
            "usertitle": "超级管理员",
            "username": "su",
            "password": "su",
            "token": "23456",
          }
        ]
    }
    return userInfo
}