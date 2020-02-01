const canvas = wx.createCanvas();
const context = canvas.getContext('2d');

var rect = {
  x: canvas.width / 2 - 50,
  y: 30,
  color: '#1aad19',
  draw: function () {
    context.save();
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, 100, 100);
    context.restore();
  }
}

const image = wx.createImage();
image.src = 'images/plane.png';
var plane = {
  x: canvas.width / 2 - 50,
  y: 500,
  draw: function() {
    context.drawImage(image, this.x, this.y);
  },
  clear: function() {
    context.clearRect(this.x, this.y, image.src.width, image.src.height);
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
  plane.draw();
  rect.draw();
  rect.y++;
  if(rect.y > canvas.height){
    rect.y = 30;
  }
  if (plane.x >= rect.x - 100 && plane.x <= rect.x + 100
    && plane.y >= rect.y - 100 && plane.y <= rect.y + 100) {
    wx.showModal({
      title: '提示',
      content: '发生碰撞，游戏结束！'
    });
  } else {
    requestAnimationFrame(drawLoop);
  }
}

wx.onTouchMove(function (e) {
  plane.clear();
  plane.x = e.changedTouches[0].clientX;
  plane.y = e.changedTouches[0].clientY;
})

requestAnimationFrame(drawLoop);
