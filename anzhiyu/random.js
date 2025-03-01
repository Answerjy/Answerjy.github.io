var posts=["2025/02/19/第一篇博客/","2025/02/20/所感所想/","2025/02/20/java基础+面向对象/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };