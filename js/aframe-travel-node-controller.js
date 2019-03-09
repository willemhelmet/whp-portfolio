AFRAME.registerComponent("travel-node-controller", {
    init: function()
    {
        var teleportSpheresParent = this.el;
        var travelNode0 = teleportSpheresParent.querySelector('#travelNode0');
        var travelNode1 = teleportSpheresParent.querySelector('#travelNode1');
        var travelNode2 = teleportSpheresParent.querySelector('#travelNode2');
        var travelNode3 = teleportSpheresParent.querySelector('#travelNode3');
        var travelNode4 = teleportSpheresParent.querySelector('#travelNode4');
        //var travelNodes = [travelNode0, travelNode1, travelNode2, travelNode3, travelNode4];

        travelNode0.addEventListener('click', function (event)
        {
            travelNode1.emit('up');
            travelNode2.emit('up');
        });

        travelNode1.addEventListener('click', function (event)
        {
            travelNode0.emit('up');
            travelNode2.emit('up');
            travelNode3.emit('up');
        });

        travelNode2.addEventListener('click', function (event)
        {
            travelNode0.emit('up');
            travelNode1.emit('up');
            travelNode3.emit('up');
            travelNode4.emit('up');
        });

        travelNode3.addEventListener('click', function (event)
        {
            travelNode1.emit('up');
            travelNode2.emit('up');
            travelNode4.emit('up');
        });

        travelNode4.addEventListener('click', function (event)
        {
            travelNode2.emit('up');
            travelNode3.emit('up');
        });
    }
});