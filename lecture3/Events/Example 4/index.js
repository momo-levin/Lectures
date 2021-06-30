(function () {
    var form = document.getElementsByTagName('form')[0];
    form.addEventListener('click', function (ev) {
        switch (ev.target.type) {
            case 'button':
                alert('Помогите Даше выучить BOPF');
                console.log(ev);
                console.log(ev.target);
                break;

            case 'radio':
                alert('Я - карта');
                break;

            case 'checkbox':
                alert('Жулик, не воруй!');
                break;

            case 'password':
                alert('Я - рюкзак');
                break;

            default:
                console.log(ev.target.type)
                break;
        }
    });
})()