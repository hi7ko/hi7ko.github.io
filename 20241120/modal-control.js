let exampleModal = new bootstrap.Modal(
    document.querySelector('#exampleModal'), {});
// exampleModal.show();

function clickSecondButton(){
    let exampleModalBody = document.querySelector('#exampleModalBody');
    exampleModalBody.innerHTML = "書き換えられました";
    exampleModal.show();
}