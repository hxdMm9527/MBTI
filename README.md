# MBTI 性格测试

基于迈尔斯-布里格斯类型指标（MBTI）的在线性格测试应用，帮助用户发现真实的自己。

## 功能特点

- **16道测试题目**：涵盖四个维度（能量倾向、感知方式、判断方式、生活态度）
- **16种人格类型**：详细的人格分析报告
- **历史记录**：本地存储测试历史
- **维度分析图表**：可视化展示各维度倾向
- **分享功能**：一键分享测试结果
- **动画效果**：流畅的交互动画

## 技术栈

- **框架**：Next.js 14 (App Router)
- **UI库**：React 18
- **样式**：Tailwind CSS
- **动画**：Framer Motion
- **类型系统**：TypeScript

## 项目结构

```
├── app/                    # Next.js App Router 页面
│   ├── page.tsx           # 首页
│   ├── test/page.tsx      # 测试页面
│   ├── result/[type]/     # 结果页面
│   ├── history/page.tsx   # 历史记录
│   └── layout.tsx         # 根布局
├── components/            # React 组件
│   └── ui/                # UI 组件
│       ├── Button.tsx
│       ├── QuestionCard.tsx
│       ├── OptionButton.tsx
│       ├── ProgressBar.tsx
│       └── DimensionChart.tsx
├── lib/                    # 工具函数和数据
│   ├── questions.ts        # 测试题目
│   ├── personalityData.ts # 16种人格数据
│   ├── calculations.ts     # 计算逻辑
│   ├── storage.ts          # 本地存储
│   └── types.ts            # 类型定义
```

## 开始使用

### 环境要求

- Node.js 18+
- npm / yarn / pnpm

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
npm run start
```

## 脚本命令

| 命令 | 描述 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run start` | 启动生产服务器 |

## MBTI 维度说明

| 维度 | 倾向 | 描述 |
|------|------|------|
| 能量倾向 | E / I | 外向 ←→ 内向 |
| 感知方式 | S / N | 感觉 ←→ 直觉 |
| 判断方式 | T / F | 思考 ←→ 情感 |
| 生活态度 | J / P | 判断 ←→ 知觉 |

## 许可证

ISC


持续更新
