# Changelog

All notable changes to this project will be documented in this file.

## [1.0.2] - 2026-04-16

### Fixed

#### UI/UX
- **上一题按钮位置**: 移至左下角 (`fixed bottom-8 left-8`)，避免遮挡选项

#### Keyboard Navigation
- **数字键支持**: 按 1/2/3/4 直接选择对应选项
- **方向键导航**: 上下左右方向键在选项间移动
- **Enter/Space 确认**: 确认当前聚焦的选项
- **自动聚焦**: 切换题目时自动聚焦第一个选项和容器

### Files Changed
```
app/test/page.tsx                # 按钮位置改为 fixed bottom-8 left-8
components/ui/QuestionCard.tsx   # 全局键盘监听、自动聚焦
components/ui/OptionButton.tsx   # 添加 data-option-index 属性
```

## [1.0.1] - 2026-04-15

### Fixed

#### Bug Fixes
- **分享文案重复**: 修复结果页分享文本 `${type}${type}` 重复显示类型的问题
- **无效类型验证**: 访问无效人格类型 URL 时现在会正确显示 404 页面而非空白页
- **类型清理**: 移除未使用的 `TestState` 和 `PersonalityResult` 类型定义

#### Accessibility
- **键盘导航**: 选项现在支持键盘操作
  - 使用方向键（↑↓←→）在选项间导航
  - 使用数字键 1-4 快速选择对应选项
- **焦点管理**: 题目切换时焦点自动移动到新题目区域
- **ARIA 属性**: 为选项添加 `role="option"`, `aria-selected`, `aria-label` 属性
- **减少动画**: 添加 `prefers-reduced-motion` 检测，自动跳过动画

#### Error Handling
- **ErrorBoundary**: 添加全局错误边界组件，捕获渲染错误并显示友好界面
- **测试结果存储**: 将测试结果临时存储到 localStorage，防止页面刷新丢失

### Changed
- **Question.options 类型**: 从 tuple `[Option, Option, Option, Option]` 改为 array `Option[]`
- **VALID_PERSONALITY_TYPES**: 导出有效人格类型数组用于验证

### Files Changed
```
app/layout.tsx                    # 添加 ErrorBoundary
app/test/page.tsx                # 键盘导航、焦点管理、localStorage 存储
app/result/[type]/page.tsx       # 修复分享文案、无效类型验证
components/ui/OptionButton.tsx    # 键盘支持、ARIA 属性
components/ui/QuestionCard.tsx    # 键盘导航、焦点管理
components/ErrorBoundary.tsx      # 新增全局错误边界
lib/types.ts                      # 类型清理、添加 VALID_PERSONALITY_TYPES
```

## [1.0.0] - 2026-04-15

### Added
- MBTI 性格测试 MVP 版本
- 16 道测试题目（4 个维度 × 4 题）
- 16 种人格类型结果展示
- 分享功能
- 响应式设计
- Framer Motion 动画
- 结构化题目数据设计（支持扩展）

---

## Known Issues & Future Improvements

### Testing & Documentation
- [ ] 缺少单元测试
- [ ] 缺少 README 文档

### Features
- [ ] 无暗色模式
- [ ] 无国际化（仅中文）
- [ ] `timeSpent` 在测试中始终为 0（未实现计时功能）
- [ ] 无 SEO meta 标签
- [ ] 无 PWA 支持（离线可用）
- [ ] 测试历史仅存储在 localStorage，无服务端持久化

### Potential Enhancements
- [ ] Docker 镜像体积优化
- [ ] 测试历史页面展示优化
- [ ] 结果页数据可视化增强
