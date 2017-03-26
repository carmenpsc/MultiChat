/**
 * Created by Carmen-Uni on 21/03/2017.
 */
function DrawingManagement(ws, growl) {
    var canvas = new fabric.Canvas('canvas');
    canvas.setHeight(350);
    canvas.setWidth(350);
    canvas.freeDrawingBrush.color = 'green';
    canvas.freeDrawingBrush.lineWidth = 10;
    this.addCircle = function() {
        var obj = {
            radius: 20,
            fill: 'green',
            left: 100,
            top: 100
        };
        sendData('Circle', obj, 'add');
    };
    this.addRectangle = function() {
        var obj = {
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'red'
        };
        sendData('Rectangle', obj, 'add');
    };
    this.addTriangle = function() {
        var obj = {
            width: 20,
            height: 30,
            fill: 'blue',
            left: 50,
            top: 50
        };
        sendData('Triangle', obj, 'add');
    };
    this.addEllipse = function () {
        var obj = {
            rx: 20,
            ry: 30,
            fill: 'brown',
            left: 200,
            top: 200
        };
        sendData('Ellipse', obj, 'add');
    };
    this.addStar = function () {
        var obj = {
            coor: [
                {x: 175, y: 37.5},
                {x: 189.5, y: 80.5},
                {x: 234.5, y: 80.5},
                {x: 198.5, y: 107.5},
                {x: 211.5, y: 150.5},
                {x: 175, y: 125},
                {x: 138.5, y: 150.5},
                {x: 151.5, y: 107.5},
                {x: 115.5, y: 80.5},
                {x: 160.5, y: 80.5}
            ],
            more: {
                fill: 'yellow',
                left: 100,
                top: 100
            }
        };
        sendData('Star', obj, 'add');
    };

    this.getPencil = function() {
        canvas.isDrawingMode = true;
    };
    this.getSelection = function() {
        canvas.isDrawingMode = false;
    };
    this.clearAll = function(type, info) {
        sendData('', '', 'clearAll');
    };
    this.addObject = function(type, info) {
        var shape;
        if(type == 'Triangle') {
            shape = new fabric.Triangle(info);
        }
        else if(type == 'Rectangle') {
            shape = new fabric.Rect(info);
        }
        else if(type == 'Circle') {
            shape = new fabric.Circle(info);
        }
        else if(type == 'Ellipse') {
            shape = new fabric.Ellipse(info);
        }
        else if(type == 'Star') {
            shape = new fabric.Polygon(info.coor, info.more);
        }
        canvas.add(shape);
    };
    this.removeShapeData = function (type, info) {
        sendData('', '', 'removeShape');
    };
    this.removeShape = function (type, info) {
        if(canvas.getActiveObject() != null)
            canvas.remove(canvas.getActiveObject());
        else{
            growl.error('Select one shape',{
                title: 'Error'
            });
        }
    };
    this.clearObjects = function(type, info) {
        canvas.clear();
    };
    this.createImageData = function (type,info) {
        sendData('','','createImage');
    };
    this.createImage = function (type, info) {
        if(canvas.isEmpty()){
            growl.error('Put some shapes',{
                title: 'Error'
            });
        }
        else {
            var image = canvas.toDataURL('png');
            window.open(image);
        }
    };

    function sendData(type, info, operation) {
        ws.send(JSON.stringify({
            'section': 'drawings',
            'data': {
                'operation': operation,
                'type': type,
                'info': info,
            }}));
    }
}
