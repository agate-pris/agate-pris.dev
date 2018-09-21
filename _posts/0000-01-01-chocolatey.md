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
