---
title: "Google Domainsでドメインを取得してHugoで静的ウェブサイトを構築した話"
date: 2019-12-21T03:16:58+09:00
showDate: true
tags: ["blog","story","hugo"]
---

本当は[Zola](https://getzola.org/)を使いたかったがうまく動かせず諦めた。やはり自分が知らない分野では長いものに巻かれた方が良い。

要求要件は以下の通り。

- 軽量マークアップ言語で書けること。
- プロフィールページを設置できること。

ビルドが遅くなるほどたくさんの記事を書く予定もなかったが、遅いよりは速い方が良いだろうし、幸い流行っているものが同時に速いものでもあったので[Hugo](https://gohugo.io/)を採用した。

[Google Domains](https://domains.google/)でのドメインの取得は簡単だった。自分がとりたいドメインを入力して、クレジットで決済するだけ。年額1400円。

設定は以下の様にした。

|名前  |タイプ |TTL |データ
|:---- |:----- |:-- |:-----
|`@`   |A      |1h  |`185.199.110.153`
|      |       |    |`185.199.108.153`
|      |       |    |`185.199.111.153`
|      |       |    |`185.199.109.153`
|`www` |CNAME  |1h  |`agate-pris.github.io`

より短いApexドメインを使わず、wwwサブドメインを使っているのはNetlifyがそれを推奨していたため。

- [To WWW or not WWW | Netlify](https://www.netlify.com/blog/2017/02/28/to-www-or-not-www/)

デプロイはGitHub Actionsを使用した。外部サービスを利用せずとも完結するのは楽で良い。

どのActionを使うか迷ったが、Star数が多いものを使った。

- [peaceiris/actions-hugo: GitHub Actions for Hugo ⚡️ Setup Hugo quickly and build your site fast. Hugo extended, Hugo Modules, Linux (Ubuntu), macOS, and Windows are supported.](https://github.com/peaceiris/actions-hugo)
- [peaceiris/actions-gh-pages: GitHub Actions for GitHub Pages 🚀 Deploy static files and publish your site easily. Static-Site-Generators-friendly.](https://github.com/peaceiris/actions-gh-pages)

ドメイン料以外すべて無料で、数十行のスクリプトで簡単にウェブサイトが構築できるなんて、よい時代になったものだ。

- [agate-pris.dev/gh-pages.yml at master · agate-pris/agate-pris.dev](https://github.com/agate-pris/agate-pris.dev/blob/master/.github/workflows/gh-pages.yml)

`hugo`コマンドを呼ぶときに`--gc`オプションと`--cleanDestinationDir`オプションを付けるべきかも知れないが、まだやっていない。

# 参考文献

- [GitHub Actions による GitHub Pages への自動デプロイ - Qiita](https://qiita.com/peaceiris/items/d401f2e5724fdcb0759d)
