const canvas = wx.createCanvas();
const context = canvas.getContext('2d');

var rect = {
  x: canvas.width / 2 - 25,
  y: 60,
  color: '#1aad19',
  w: 50,
  h: 50,
  draw: function () {
    context.save();
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
    context.restore();
  },
  reset: function() {
    this.x = canvas.width / 2 - 25;
    this.y = 60;
  },
}

const image = wx.createImage();
image.src = 'images/plane.png';
var plane = {
  x: canvas.width / 2 - 50,
  y: 500,
  realx: 9,
  realy: 31,
  realw: 83,
  realh: 35,
  w: 100,
  h: 100,
  touched: false,
  draw: function() {
    context.drawImage(image, this.x, this.y);
  },
  clear: function() {
    context.clearRect(this.x, this.y, this.w, this.h);
  },
  reset: function() {
    this.x = canvas.width / 2 - 50;
    this.y = 500;
  },
  checkin: function(x, y) {
    const deviation = 5;
    let rx = this.x + this.realx;
    let ry = this.y + this.realy;
    return !!(x >= rx - deviation
      && y >= ry - deviation
      && x <= rx + this.realw + deviation
      && y <= ry + this.realh + deviation);
  },
  //set pos in screen
  setpos(x, y) {
    let disX = x - this.w / 2;
    let disY = y - this.h / 2;
    if (disX < 0)
      disX = 0;
    else if (disX > canvas.width - this.w)
      disX = canvas.width - this.w;
    if (disY < 0)
      disY = 0;
    else if (disY > canvas.height - this.w)
      disY = canvas.height - this.w;
    this.x = disX;
    this.y = disY;
  }
}

function drawText(text, x, y) {
  context.save();
  context.font = "20px Arial";
  context.fillText(text, x, y);
  context.restore();
}

function drawLoop() {
  context.save();
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "blue";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.restore();
  drawText('飞机小游戏', canvas.width/2-30, 20);
  drawText('手指触摸进行移动飞机', canvas.width/2-100, 45);
  rect.draw();
  plane.draw();
  rect.y++;
  if(rect.y > canvas.height) {
    rect.y = 30;
  }
  if (plane.x + plane.realx >= rect.x - plane.realw
    && plane.x + plane.realx <= rect.x + rect.w
    && plane.y + plane.realy >= rect.y - plane.realh
    && plane.y + plane.realy <= rect.y + rect.h) {
    wx.showModal({
      title: '提示',
      content: '发生碰撞，游戏结束！',
      cancelText: '结束',
      confirmText: '继续',
      success (res) {
        if (res.confirm) {
          plane.reset();
          rect.reset();
          requestAnimationFrame(drawLoop);
        } else if (res.cancel) {
        }
      }
    });
    return;
  }
  requestAnimationFrame(drawLoop);
}

wx.onTouchStart(function (e) {
  let x = e.changedTouches[0].clientX;
  let y = e.changedTouches[0].clientY;
  if (plane.checkin(x, y)) {
    console.info("touch");
    plane.touched = true;
    plane.setpos(x, y);
  }
})

wx.onTouchMove(function (e) {
  let x = e.changedTouches[0].clientX;
  let y = e.changedTouches[0].clientY;
  if (plane.touched){
    plane.setpos(x, y);
  }
})

wx.onTouchEnd(function (e){
  plane.touched = false;
})

requestAnimationFrame(drawLoop);
