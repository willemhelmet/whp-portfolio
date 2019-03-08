AFRAME.registerComponent("ladder-rungs", {

    schema:
    {
        frequency: {type: 'number'},
        amount: {type: 'number'}
    },

    init: function()
    {
        // I don't know why making the data in the schema a variable makes everything work -- but it does!
        var frequency = this.data.frequency;
        var amount = this.data.amount;
        
        for (var i = 0; i < amount; i++)
        {
            var rung = document.createElement('a-box')
            this.el.appendChild(rung);

            rung.setAttribute('scale', {x: .6, y: .07, z: .1});
            rung.setAttribute('material', 'shader', 'flat');
            rung.setAttribute('position', {x: 0, y: frequency * i, z: 0})
        }

    }
});