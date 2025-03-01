var posts=["2025/02/19/第一篇博客/","2025/02/20/所感所想/","2025/03/01/java基础以及面向对象复习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };