# MBTI性格测试 MVP PRD

## 1. Concept & Vision

一款简洁优雅的在线MBTI性格测试工具，帮助用户在5分钟内了解自己的性格类型。设计风格采用现代极简主义，配合流畅的动画过渡，让测试过程如同一次自我探索的旅程，而非枯燥的问卷。

## 2. Design Language

### Aesthetic Direction
灵感来源于高端心理测试平台 + 极简北欧设计。大量留白，柔和渐变，舒适阅读。

### Color Palette
- Primary: `#6366F1` (Indigo-500，主色调)
- Secondary: `#8B5CF6` (Violet-500，辅助色)
- Accent: `#F59E0B` (Amber-500，强调色)
- Background: `#F8FAFC` (Slate-50)
- Surface: `#FFFFFF`
- Text Primary: `#1E293B` (Slate-800)
- Text Secondary: `#64748B` (Slate-500)

### Typography
- Headings: Inter (700)
- Body: Inter (400, 500)
- Scale: 14px / 16px / 20px / 28px / 36px

### Motion Philosophy
- 页面切换: slide + fade, 300ms ease-out
- 选项选中: scale 1.02 + border color transition, 200ms
- 进度条: smooth transition, 400ms ease-out
- 结果展示: stagger animation, 100ms delay between items

## 3. Layout & Structure

### Page Flow
```
Landing → Test (逐题显示) → Loading → Result
```

### Landing Page
- 顶部: Logo + 标题
- 中央: 测试简介卡片 + 开始按钮
- 底部: 简要说明测试时长

### Test Page
- 顶部: 进度条 + 当前题号/总题数
- 中央: 问题卡片（单题显示）
- 底部: 4个选项按钮（2x2网格）

### Result Page
- 顶部: 性格类型大字展示 (e.g., "INTJ")
- 中部: 4个维度的简要说明
- 底部: 分享按钮 + 重新测试

## 4. Features & Interactions

### Core Features

#### 4.1 性格测试题库
- 4个维度 x 4题 = 16题
- 维度: E/I (外向/内向), S/N (感知), T/F (判断), J/P (生活态度)
- 每题4个选项，A/B倾向于前者，C/D倾向于后者

#### 4.2 答题逻辑
- 逐题显示，不可返回
- 选中选项后自动进入下一题
- 进度条实时更新

#### 4.3 结果计算
- 每个维度计算倾向百分比
- 根据倾向确定最终类型 (e.g., E > I → E, S > N → S, ...)
- 组合形成16种人格类型

#### 4.4 结果展示
- 16种人格类型的独立介绍页面
- 每种人格包含: 类型名称、简介、4个维度详解、适合的职业方向

#### 4.5 分享功能
- 一键复制结果链接
- 分享到社交平台

### Interaction Details
- Hover: 选项按钮 scale 1.02, shadow加深
- Click: 按钮按下效果 + 颜色变化 → 自动跳转
- Loading: 1.5秒测试计算动画
- Result: 类型字母逐个显示动画

## 5. Component Inventory

### Button
- Primary: bg-indigo-500, text-white, hover:bg-indigo-600
- Secondary: border-indigo-500, text-indigo-500, hover:bg-indigo-50
- Disabled: opacity-50, cursor-not-allowed

### ProgressBar
- Height: 8px, rounded-full
- Track: bg-slate-200
- Fill: bg-gradient-to-r from-indigo-500 to-violet-500

### QuestionCard
- bg-white, rounded-2xl, shadow-lg, p-8
- 包含题号标签 + 问题文本 + 选项网格

### OptionButton
- States: default, hover, selected, disabled
- Default: bg-white, border-slate-200
- Hover: border-indigo-300, shadow-md
- Selected: bg-indigo-50, border-indigo-500

### ResultTypeCard
- 大号类型字母 (e.g., "INTJ") + 类型名称
- 渐变背景 + 人格描述

## 6. Technical Approach

### Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animation**: Framer Motion
- **Font**: Google Fonts (Inter)

### Architecture
```
/app
  /page.tsx              # Landing page
  /test/page.tsx         # Test page
  /result/[type]/page.tsx # Result page
  /history/page.tsx      # 测试历史记录 (后续)
/components
  /ui                    # Reusable UI components
/lib
  /questions.ts          # Question data (支持扩展)
  /types.ts              # Type definitions
  /calculations.ts       # Result calculation logic
  /storage.ts            # 测试记录存储 (后续)
```

### Data Model

```typescript
// ========== 核心类型 ==========
type Dimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
type DimensionPair = 'E/I' | 'S/N' | 'T/F' | 'J/P';
type PersonalityType = 'INTJ' | 'INTP' | 'ENTJ' | ... | 'ESFP';

// ========== 题目扩展设计 ==========

// 题目分类（支持多套题目）
interface QuestionCategory {
  id: string;              // 'mbti', 'bigfive', 'career', etc.
  name: string;            // 'MBTI性格测试', '大五人格', '职业倾向'
  description: string;
  version: string;         // '1.0', '2.0'
  dimensions: DimensionDefinition[];  // 维度定义
  questionCount: number;    // 该分类的总题数
}

interface DimensionDefinition {
  pair: DimensionPair;
  name: string;            // '能量倾向'
  description: string;
}

// 单题定义
interface Question {
  id: number;
  categoryId: string;      // 所属分类
  dimension: DimensionPair;
  dimensionAspect: 'first' | 'second';  // 偏向哪个维度
  text: string;
  options: [Option, Option, Option, Option];
}

interface Option {
  label: string;
  value: 'A' | 'B' | 'C' | 'D';
  weight: Record<Dimension, number>; // e.g., { E: 1, I: 0 }
}

// ========== 测试记录（后续） ==========

interface TestRecord {
  id: string;              // UUID
  categoryId: string;       // 测试分类
  type: PersonalityType;    // 测试结果
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  dimensionScores: DimensionScore[];
  completedAt: string;      // ISO timestamp
  timeSpent: number;        // 花费时间(秒)
}

interface DimensionScore {
  dimension: DimensionPair;
 倾向: Dimension;
  percentage: number;
  score: number;
}
```

### 题目扩展设计

MVP版本16题结构：
```
每维度 4题 × 4维度 = 16题
```

后续扩展方向：
```
扩展选项A: 增加题库深度
  每维度 10题 × 4维度 = 40题（从中随机抽取16题）

扩展选项B: 增加测试维度
  - 大五人格测试 (5个维度)
  - 职业价值观测试
  - 情商测试

扩展选项C: 混合测试
  - MBTI + 大五人格组合
  - 性格 + 职业倾向组合
```

扩展实现要点：
1. `QuestionCategory` 支持多套测试题库
2. `Question.categoryId` 标识题目所属分类
3. `questions.ts` 结构化导出，支持按分类加载
4. 测试时指定 `categoryId`，动态计算题目数量

## 7. MVP Scope

### Included
- ✅ Landing页面
- ✅ 16题测试流程（结构化设计，支持扩展）
- ✅ 进度指示
- ✅ 结果页面 (16种类型)
- ✅ 响应式设计
- ✅ 基础动画

### 测试记录功能（后续）

**设计目标**：
- 存储每次测试结果到 localStorage
- 支持查看历史测试记录
- 支持删除记录
- 方便后续增加用户系统

**数据存储**：
```typescript
interface StorageSchema {
  records: TestRecord[];
  settings: UserSettings;
}

interface UserSettings {
  lastTestCategory?: string;
  theme?: 'light' | 'dark';
}
```

**实现位置**: `lib/storage.ts`

### Deferred
- ⏳ 用户答题数据持久化
- ⏳ 历史测试记录
- ⏳ 详细人格分析报告
- ⏳ 社区功能
- ⏳ 多语言支持
- ⏳ 扩展题库（40题深度测试）
- ⏳ 多套测试题库（大五人格、职业倾向）

## 8. 16种人格类型

| 类型 | 名称 |
|------|------|
| INTJ | 建筑师 |
| INTP | 逻辑学家 |
| ENTJ | 指挥官 |
| ENTP | 辩论家 |
| INFJ | 提倡者 |
| INFP | 调停者 |
| ENFJ | 主人公 |
| ENFP | 竞选者 |
| ISTJ | 物流师 |
| ISFJ | 守卫者 |
| ESTJ | 总经理 |
| ESFJ | 执行者 |
| ISTP | 鉴赏家 |
| ISFP | 探险家 |
| ESTP | 企业家 |
| ESFP | 表演者 |
