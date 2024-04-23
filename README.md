# font-family-overwriter-for-linux-ja-chrome-extension

## Overview

This Chrome extension overwrites font-family in CSS in web pages for Linux Ja.

*Public Domain.*

## 概要

　Linux( Mint)でChromeで「小説家になろう」や「カクヨム」などでホワイト サークルである「○」が半角で4分の1の小ささで表示されてしまう不具合に対処するために、
Linux( Mint)に存在する可能性が高い日本語のフォントを、全てのウェブ ページのCSSのfont-familyに最優先で設定するChromeの拡張機能を最小構成で？自作してみました。

　*パブリック ドメインです。*

　2024年1月16日に、自作のChromeの拡張機能によって、Linux MintでChromeで「小説家になろう」と「カクヨム」でホワイト サークルである「○」が全角の大きさで表示される事を確認しました。

　ただし、ウェブ ページでCSSでIDや、クラスや、タグの階層構造を指定してfont-familyを指定している場合は、自作のChromeの拡張機能の指定は負けてしまいますので、ご注意ください。

　例えば、「カクヨム」の小説の編集中の「プレビュー」では、タグの階層構造を指定してfont-familyを指定しているため、ホワイト サークルである「○」が半角で4分の1の小ささで表示されてしまいます。

 ## インストール方法

 　Chromeで「拡張機能」をクリックして選択してから「拡張機能を管理」を選択します。

　「デベロッパー モード」をクリックしてオンにします。

　「パッケージ化されていない拡張機能を読み込む」をクリックして選択します。

　自作のChromeの拡張機能のファイルを置いているディレクトリを選択して「Select」ボタンをクリックします。

## 注意

　Chromeに指定して読み込んでいるディレクトリを削除すると、その自作のChromeの拡張機能も削除されてしまいます。
