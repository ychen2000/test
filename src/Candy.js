/**
 * Created by chenyong on 16/5/26.
 */

var Candy = cc.Sprite.extend({
    type : 0,
    column:0,
    row:0,

    ctor:function(type,column,row){
        this._super("res/" + (type+1)+".png");
        this.init(type,column,row)
    },
    init:function(type,colum,row){
        this.type = type;
        this.column = colum;
        this.row = row;
    }
});

Candy.createRandomType=function(column,row){
    return new Candy(parseInt(Math.random()*config.CANDY_TYPE_COUNT),column,row);
};

