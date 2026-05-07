## メモ

- https://zakzakst.github.io/ai-practice2/
- https://docs.astro.build/ja/reference/cli-reference/#astro-preferences
- https://lucide.dev/icons/
- デジタル庁デザインシステム
  - https://www.figma.com/design/VhXKlCkDKW0iTQ7WJUu9Ko/デジタル庁デザインシステム-デザインデータ-v2.13.0--Community-?node-id=4-293&p=f&t=Kd5ADfMIe6R6vAV1-0
  - https://github.com/digital-go-jp/design-system-example-components-react/tree/main/src/components
  - https://design.digital.go.jp/dads/react/?path=/docs/documents-はじめに--docs

## TODO

- サンプルページの作成（TOP、記事一覧、記事詳細）

## 今回はやらない

- layoutファイルまわりのリファクタリング
  - headやbody末尾に追記する用のslot作る？
  - ogp周り切り出す？
  - pageDataみたいなの作ってlayoutまわりのコンポーネントは共通でそれを利用する？
- baseパスをローカルとデプロイで変えるのやめる

## 済

- 記事ページの画像パスどうするか考える（一旦相対パス？）
  - 相対パスは上手くいかなかった
    - Imageを利用すれば相対パスで指定できた
    - ただnpm run previewは上手く表示されなかった
  - 下記を設定すればできたりする？
  - https://docs.astro.build/en/reference/configuration-reference/#imageendpoint
  - ⇒そもそもbaseパスをローカルとデプロイで変えているのが原因
    - ドメインが変わるとかAPIのパスだったら分かるが、静的なサイトで基本無いように思える
  - baseパス変えるのやめる
- build時に対象から外す設定できるか調べる。パーツサンプルページ作って本番には公開しないみたいのやりたい
  - 分からなかった。一旦あきらめる
- カラムからはみ出してフルスクリーンにする（スクロールバーが幅の計算に影響する。JSで幅を取得してカスタムプロパティに設定する？）
  - JSを絡めるのは、冗長そう。containerをmax-width指定ではなく、media-queryでwidth変更にする（カラムはみ出しコンポーネントはスクロールバー分ズレるがContainerコンポーネントで他と揃う ※max-widthだけだと揃わない）
  - ⇒ この方法だとSP表示時にフル幅でなく325pxとかの幅になってしまい、画面を最大限使えないため、却下
