# npm/PostCSS 依存の導入経緯と削除

2026-08-09 に npm 依存を削除した。
この文書は、その依存がなぜ導入され、なぜ長く残り、なぜ削除されたかを記録する。

## 導入の経緯

2019-12-15 に **hugo-theme-sam**（Call me Sam）を採用した。
このテーマは本番ビルド時のみ PostCSS を実行する。
`layouts/partials/head/css.html` は `toCSS | postCSS(autoprefixer) | minify | fingerprint` のパイプラインを持つ。
そのため 2021-01-01 のコミット `8ce1b14` で `package.json` を追加した。
GitHub Actions でも `npm ci` を実行して PostCSS と autoprefixer を用意した。

## 不要になった経緯

2021-10-09 のコミット `5af039c` で **hugo-coder** に移行した。
hugo-coder は CSS を Hugo Pipes だけで処理し、PostCSS を使わない。
この時点で npm 依存は不要になった。
しかし `package.json` と `package-lock.json` は削除されず、ワークフローの `npm ci` も残り続けた。
約 5 年間、不要な依存を抱えたまま運用した。

## 削除の経緯

2026-08-09 の監査で npm の脆弱性が 5 件検出された。
high が 3 件（postcss、nanoid、picomatch）、moderate が 2 件（micromatch、yaml）である。
調査の結果、テーマが PostCSS を使わないことを再確認した。
`package.json` と `package-lock.json` を退避した状態で `hugo --cleanDestinationDir --gc --minify` を実行し、ビルドが成功することを確認した。
その後、以下の変更を行った。

- `package.json` と `package-lock.json` を削除
- ワークフローから Node のセットアップと `npm ci` を削除
- Dependabot の PR #68（picomatch 更新）をクローズ
- Dependabot アラートはマニフェストの消滅に伴い自動クローズされた

ビルドは Hugo 単体で完結し、CI の実行時間も短縮された。
