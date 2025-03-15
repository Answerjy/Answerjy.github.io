var posts=["2025/02/19/第一篇博客/","2025/02/20/所感所想/","2025/03/01/java基础+面向对象/","2025/03/03/函数式编程，枚举，字符串/","2025/03/06/java集合/","2025/03/10/多线程基础/","2025/03/11/java反射/","2025/03/13/SpringIOC/","2025/03/13/SpringAOP/","2025/03/14/动态代理/","2025/03/15/Spring整合以及事务/","2025/03/16/SpringMVC基础/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };