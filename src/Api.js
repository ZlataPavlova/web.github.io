 export class Api {
    constructor(options) {
        this.options = options;


    }
    getInitialUserInfo() {
        return fetch(`${this.options.baseUrl}/users/me`, {
            headers: {
                authorization: this.options.headers.authorization
            }
        })
            .then((res) => {
                if (res.ok) return res.json();
                return res.status;
            })
             
            .catch((err) => {
                console.log(err);
            });

    }
    getInitialCards() {
        return fetch(`${this.options.baseUrl}/cards`, {
            headers: {
                authorization: this.options.headers.authorization
            }
        })

            .then((res) => {
                if (res.ok) return res.json();
                return res.status;
            })
            
            .catch((err) => {
                console.log(err);
            });
    }
    editUserInfo(userName, userInfo) {
        this.userName = userName;
        this.userInfo = userInfo;
        return fetch(`${this.options.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this.options.headers.authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userName.value,
                about: userInfo.value

            })
        })
            .then((res) => {
                if (res.ok) return res.json();
                return res.status;
            })
            
            .catch((err) => {
                console.log(err);
            });
    }
}

   
  
