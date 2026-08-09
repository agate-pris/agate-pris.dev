# AGENTS.md

agate-pris.dev は Hugo 製の個人ブログである。
GitHub Actions で gh-pages ブランチへデプロイする。
main への push で本番デプロイが走るため、作業は develop を経由する。

## 規約

- コミットメッセージは日本語で Conventional Commits 形式に書く（詳細は `conventional-commits` スキル）
- 日本語の技術文書は `japanese-tech-writing` スキルに従う
- GitHub の操作は `gh` と `gh-stack` を積極的に使う

## 開発フロー

- 作業ブランチは `feature/*` または `chore/*` とし、develop へスタック PR を積む
- マージは下層から順に、rebase マージで行う
- ビルド確認は `hugo --cleanDestinationDir --gc --minify` で行う
