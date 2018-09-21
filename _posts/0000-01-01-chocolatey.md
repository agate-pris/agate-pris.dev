---
layout: post
---

- [Chocolatey - The package manager for Windows](https://www.chocolatey.org)
- [chocolatey/choco: Chocolatey - the package manager for Windows](https://github.com/chocolatey/choco)
- [Home · chocolatey/choco Wiki](https://github.com/chocolatey/choco/wiki)

## install

- [Installation](https://www.chocolatey.org/install)
- [Installation · chocolatey/choco Wiki](https://github.com/chocolatey/choco/wiki/Installation)

PowerShellを管理者権限で立ち上げ, 以下の手順でインストールする.

- `Get-ExecutionPolicy`を実行する.
  もし`Restricted`を返したら,
  `Set-ExecutionPolicy AllSigned`または`Set-ExecutionPolicy Bypass`を実行する.
- 以下のコマンドを実行する.

```ps1
Set-ExecutionPolicy Bypass -Scope Process -Force; iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex
```

## setup

- [ChocolateyConfiguration](https://chocolatey.org/docs/chocolatey-configuration)
- [CommandsFeature](https://chocolatey.org/docs/commands-feature)
- [How-To-Parse-PackageParameters-Argument](https://chocolatey.org/docs/how-to-parse-package-parameters-argument#step-2---add-package-parameters-to-the-description)
- [ChocolateyConfiguration · chocolatey/choco Wiki](https://github.com/chocolatey/choco/wiki/ChocolateyConfiguration)
- [CommandsFeature · chocolatey/choco Wiki](https://github.com/chocolatey/choco/wiki/CommandsFeature)
- [How To Parse PackageParameters Argument · chocolatey/choco Wiki](https://github.com/chocolatey/choco/wiki/How-To-Parse-PackageParameters-Argument)

以下のコマンドで`useRememberedArgumentsForUpgrades`を有効化する.

```ps1
choco feature enable -n useRememberedArgumentsForUpgrades
```

## usage

- [CommandsReference](https://chocolatey.org/docs/commands-reference)
- [CommandsReference · chocolatey/choco Wiki](https://github.com/chocolatey/choco/wiki/CommandsReference)

以下のコマンドでローカルにインストールされたパッケージを一覧表示する.

```ps1
clist -l
```

以下のコマンドでパッケージを検索する.

```ps1
clist <filter>
```

以下のコマンドでパッケージの情報を表示する.

```ps1
choco info <pkgname>
```

以下のコマンドでパッケージをインストールする.

```ps1
cinst <pkg|packages.config>
```

以下のコマンドでパッケージをピン留めする.

```ps1
choco pin add <pkgname>
```

以下のコマンドでピン留めされたパッケージを一覧表示する

```ps1
choco pin
```

以下のコマンドでパッケージのピン留めを解除する.

```ps1
choco pin remove <pkgname>
```

以下のコマンドで個別またはすべてのパッケージを更新する.

```ps1
cup <pkg|all>
```
