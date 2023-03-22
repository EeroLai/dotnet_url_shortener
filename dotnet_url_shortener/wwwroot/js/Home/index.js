(function(){
    handleButton();

    function handleButton() {
        $('#btn_url_short').on('click', () => {
            let str_url = $('#input_url');
            alert(str_url.val());
        })
    }
})();