AFRAME.registerComponent("lower-on-click", {

    schema:
    {
        index: {type: 'string'}
    },

    init: function()
    {
        // I don't know why making the data in the schema a variable makes everything work -- but it does!
        var index_str = this.data.index;

        this.el.addEventListener('click', function (event)
        {
            console.log('time-to-lower-' + index_str)
            this.emit('time-to-lower-' + index_str);
        });
    }
});