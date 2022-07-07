const server = "http://10.80.162.124:3000";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const signUpBtn = document.querySelector("#signUpBtn");
const ul = document.querySelector("#ul");

signUpBtn.addEventListener("click", () => {
    signUp();
})

function signUp() {
    axios
    .post(`${server}/signUp`, {
        id: id.value,
        password: password.value,
    })
    .then((res) => {})
    .catch((e) => {
        console.log(e);
    });
    //select();
}

function select() {
    let users;
    axios.get{`${server}/users`} .then((item)) => {
        users = item.data;
        console.log(users);
    };
}