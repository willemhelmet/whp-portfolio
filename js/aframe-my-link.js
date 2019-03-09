AFRAME.registerComponent("my-link", {

    schema:
    {
        url: {type: 'string'}
    },

    init: function()
    {
        var my_url = this.data.url;
        this.el.addEventListener('click', function (event)
        {
            window.location.href = my_url;
        });
    }
});