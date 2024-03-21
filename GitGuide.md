# 这是教我如何用git切换控制分支的：

1. 创建一个分支branch叫dev并且切换过去

   ```bash
   git checkout -b dev
   ```

   

2. 之后可以在这个branch里随便更改东西

3. 之后就是git老操作

   ```bash
   git add .
   git commit -m "new change"
   ```

4. 现在，dev分支工作完成，切换到Master

   ```bash
   git checkout Master
   ```

5. 接下来吧dev上的改变merge到Master上

   ```bash
   git merge dev
   ```

6. 之后push到github上，用idea自带的点一下或者code 都行

   ```bash
   git push origin Master
   ```

7. 删除分支

   ```bash
   git branch -d dev
   ```

# 这是如何打标签的

1. **确定要打标签的提交**：首先，使用 `git log` 命令或 GitHub 上的提交历史确定您要打标签的提交

   ```bash
   git log
   ```

2. 创建标签, 其中v1.0.0和 " " 内的内容自由替换吧

   ```bash
   git tag -a v1.0.0 -m "Version 1.0.0 release"
   ```

3. 推送标签到远程仓库

   ```bash
   单独推送一个标签：
   git push origin v1.0.0
   
   推送所有:
   git push origin --tags
   ```

   

# 这是如何初始化仓库并且和GitHub连上的

1. 初始化文件夹：

   ```bash
   git init
   ```

2. 链接远程仓库

   ```bash
   git remote add origin <GitHub 仓库 URL / SSH>
   ```

3. git 老操作了

   ```bash
   git add .
   git commit -m "first upload"
   ```

4. push上去就好了，首次加一下-u

   ```bash
   git push -u origin master
   ```

   