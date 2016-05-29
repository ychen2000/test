/**
 * Created by chenyong on 16/5/27.
 */

var GameLayer = cc.Layer.extend({
   mapPanel:null,
    ui:null,

    score:0,
    level:0,
    steps:0,
    limitStep:0,
    targetScore:0,

    map:null,

    ctor: function () {
        this._super();

        this.addChild(new GameBackgroundLayer());

        var size = cc.winSize;

        var clippingPanel = new cc.ClippingNode();
        this.addChild(clippingPanel,2);
        this.mapPanel = new cc.Layer();
        this.mapPanel.x = (size.width-config.CANDY_WIDTH*config.MAP_SIZE)/2;
        this.mapPanel.y = (size.height-config.CANDY_WIDTH*config.MAP_SIZE)/2;
        clippingPanel.addChild(this.mapPanel,1);

        var stencil = new cc.DrawNode();
        stencil.drawRect(cc.p(this.mapPanel.x,this.mapPanel.y),cc.p(this.mapPanel.x+config.CANDY_WIDTH*config.MAP_SIZE,
            this.mapPanel.y+config.CANDY_WIDTH*config.MAP_SIZE),cc.color(0,0,0),1,cc.color(0,0,0));
        clippingPanel.stencil = stencil;


        this._init();

        this.addChild(new GameUI());

    },
    _init: function () {
        this.steps = 0;
        this.level = 0;
        this.score = 0;
        this.limitStep = 30;
        this.targetScore = 100;
        this.map=[];
        for(var i = 0;i<config.MAP_SIZE;i++){
            var column = [];
            for(var j=0;j<config.MAP_SIZE;j++){
                var candy = Candy.createRandomType(i,j);
                this.mapPanel.addChild(candy);
                candy.x = i*config.CANDY_WIDTH+config.CANDY_WIDTH/2;
                candy.y = j*config.CANDY_WIDTH+config.CANDY_WIDTH/2;
                column.push(candy);
            }
            this.map.push(column);
        }

    }

});

var GameBackgroundLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this._init();
    },
    _init: function () {
        var bg = new cc.Sprite("res/bg.jpg");
        this.addChild(bg);
        bg.x = cc.winSize.width / 2;
        bg.y = cc.winSize.height / 2;
    }
});
