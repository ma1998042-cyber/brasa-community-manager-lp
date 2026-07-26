# BRASA コミュニティマネージャー育成講座 LP

実践型コミュニティマネージャー育成講座「BRASA」のランディングページです。

![BRASA LP preview](./implementation-desktop.png)

## 使用技術

- React 19
- Vite 6
- Phosphor Icons
- Cloudflare Workers互換の配信構成

## セットアップ

```bash
npm install
npm run dev
```

開発サーバーが起動したら、ターミナルに表示されるURLをブラウザで開いてください。

## ビルド

```bash
npm run build
```

生成物は `dist/` に出力されます。

## テスト

```bash
npm run test:sites
```

## 主な構成

```text
public/images/   LPで使用する画像
src/App.jsx      ページ本体
src/styles.css   スタイル
worker/          静的ファイル配信用Worker
tests/           Workerテスト
```
