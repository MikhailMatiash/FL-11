let account = [{
    user: 'User@gmail.com',
    password: 'UserPassword'
},{
    user: 'Admin@gmail.com',
    password: 'AdminPassword'
}]

let useremail = prompt('enter your email');
const minLength = 6;
if (!useremail){
    alert('Canceled.');
} else if (useremail.length < minLength) {
    alert("I don't know any emails having name length less than 6 symbols");
} else {
    for (let index = 0; index < account.length; index++) {
        if (account[index].user === useremail) {
            let pass = prompt('enter your password');
            chek = true;
            if (pass === account[index].password) {
                let confirmMesage = confirm(
                  'Do you want to change your password?'
                );
                if (confirmMesage) {
                    let oldPas = prompt('enter old password');
                    if (oldPas === account[index].password) {
                      let newPass = prompt('enter new password');
                      let newPassLength = 5;
                      if (newPass.length < newPassLength) {
                          alert('it`s too short password. Sorry.');
                      } else{
                          let newPassRepeat = prompt('repeat new password');
                          if (newPass === newPassRepeat){
                              alert('You have successfully changed your password.')
                          } else{
                              alert('You wrote the wrong password.')
                          }
                      }
                    } else if (!oldPas){
                        alert('Canceled.');
                    } else{
                        alert('Wrong password');
                    }
                } else{
                    alert('You have failed the change.');
                }
                break;
            } else if (!pass){
                alert('Canceled.');
                break;
            } else {
                alert('Wrong password');
                break;
            }
        }
        chek = false;
    }
    if (!chek) {
        alert(`I don’t know you`);
    }
}
