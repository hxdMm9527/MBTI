# Docker 部署说明

## 前置要求

- Docker 已安装
- Docker Compose 已安装

## 一键启动

```bash
# 进入项目目录
cd D:/1_Project/MBTI

# 构建并启动容器
docker-compose up -d --build

# 查看运行状态
docker-compose ps

# 查看日志
docker-compose logs -f
```

## 访问应用

启动成功后访问: http://localhost:3000

## 常用命令

```bash
# 停止服务
docker-compose down

# 重新构建
docker-compose up -d --build

# 强制重新构建（不用缓存）
docker-compose up -d --build --no-cache
```

## 生产环境部署建议

1. 使用 Nginx 反向代理
2. 配置 HTTPS
3. 使用 PM2 或 systemd 管理进程
4. 考虑使用 Docker Swarm 或 Kubernetes 进行编排