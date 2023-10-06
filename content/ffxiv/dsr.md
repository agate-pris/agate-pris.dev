---
title: "絶竜詩戦争 Dragonsong's Reprise"
---

<style>
    table {
        margin: 2rem 0 2rem 0;
    }

    .mitigation-cheat-sheet img {
        width: 40px;
    }

    .make_no_sense img {
        opacity: calc(2/3);
    }

    .mitigation-chart td:nth-child(3) {
        width: 60px;
    }
    .mitigation-chart td:nth-child(4) {
        width: 236px;
    }
    .mitigation-chart td:nth-child(5) {
        width: 236px;
    }
    .mitigation-chart td:nth-child(3) img {
        width: 24px;
    }
    .mitigation-chart td:nth-child(4) img {
        width: 40px;
    }
    .mitigation-chart td:nth-child(5) img {
        width: 40px;
    }
</style>

<script>
    window.addEventListener('DOMContentLoaded', function() {
        const elements = document.getElementsByClassName("liturgy-of-the-bell");
        for (let index = 0; index < elements.length; index++) {
            const i = document.createElement("img");
            i.src = "liturgy_of_the_bell.png";
            i.alt = "Liturgy of the Bell";
            i.title
                = "リタージー・オブ・ベル リキャストタイム：180秒\n"
                + "指定した地面に「リタージー・オブ・ベル」を設置し、自身に5スタックの「リタージー・オブ・ベル」を付与する。\n"
                + "効果時間：20秒\n"
                + "リタージー・オブ・ベルの効果時間中に自身がダメージを受けると、スタックを1つ消費してリタージー・オブ・ベルの周囲20m以内にいる自身およびパーティメンバーを回復する。\n"
                + "回復力：400\n"
                + "この効果は、発動後1秒間は再発動しない。\n"
                + "リタージー・オブ・ベルの効果時間が経過するか効果時間中に再使用すると、残りスタック数に応じた回復効果が発動して消滅する。\n"
                + "回復力：200×残りスタック数\n"
                + "\n"
                + "Liturgy of the Bell Recast: 180s\n"
                + "Places a healing blossom at the designated location and grants 5 stacks of Liturgy of the Bell to self.\n"
                + "Duration: 20s\n"
                + "Taking damage will expend 1 stack of Liturgy of the Bell to heal self and all party members within a radius of 20 yalms.\n"
                + "Cure Potency: 400\n"
                + "The effect of this action can only be triggered once per second.\n"
                + "Any remaining stacks of Liturgy of the Bell will trigger an additional healing effect when time expires or upon executing this action a second time.\n"
                + "Cure Potency: 200 for every remaining stack of Liturgy of the Bell\n"
                + "This action does not share a recast timer with any other actions.";
            elements[index].appendChild(i);
        }
    });
</script>

# 軽減 Mitigation

基本的に類似アビリティで置き換え可能。

## 早見表 Cheat Sheet

<span class="mitigation-cheat-sheet">

| PLD | WAR | DRK | GNB
| :-: | :-: | :-: | :-:
| ![Sentinel](sentinel.png) | ![Vengeance](vengeance.png) | ![Shadow Wall](shadow_wall.png) | ![Nebula](nebula.png)
| ![Bulwark](bulwark.png) | ![Thrill of Battle](thrill_of_battle.png) | ![Dark Mind](dark_mind.png) | ![Camouflage](camouflage.png)
| ![Hallowed Ground](hallowed_ground.png) | ![Holmgang](holmgang.png) | ![Living Dead](living_dead.png) | ![Superbolide](superbolide.png)
| ![Holy Sheltron](holy_sheltron.png) | ![Bloodwhetting](bloodwhetting.png) | ![The Blackest Night](the_blackest_night.png) | ![Heart of Corundum](heart_of_corundum.png)
| ![Intervention](intervention.png) | ![Nascent Flash](nascent_flash.png) | ![Oblation](oblation.png)
| ![Divine Veil](divine_veil.png) | ![Shake It Off](shake_it_off.png) | ![Dark Missionary](dark_missionary.png) | ![Heart of Light](heart_of_light.png)
| ![Passage of Arms](passage_of_arms.png)

| WHM | AST
| :-: | :-:
| ![Divine Benison](divine_benison.png) | ![Celestial Intersection](celestial_intersection.png)
| ![Temperance](temperance.png) | ![Neutral Sect](neutral_sect.png)
| | ![Collective Unconscious](collective_unconscious.png)
| ![Aquaveil](aquaveil.png) | ![Exaltation](exaltation.png)
| <span class="liturgy-of-the-bell"></span> | ![Macrocosmos](macrocosmos_01.png)

| SCH | SGE
| :-: | :-:
| ![Sacred Soil](sacred_soil.png) | ![Kerachole](kerachole.png)
| ![Fey Illumination](fey_illumination.png) | ![Haima](haima.png)
| ![Summon Seraph](summon_seraph.png) | ![Panhaima](panhaima.png)
| ![Expedient](expedient.png) | ![Holos](holos.png)

| BRD | MCH | DNC
| :-: | :-: | :-:
| ![Troubadour](troubadour.png) | ![Tactician](tactician.png) | ![Shield Samba](shield_samba.png)

</span>

<span class="mitigation-chart">

## チャート Chart

| Time | Action | 属性 | MT (PLD)<br>H1 (WHM)<br>D1<br>D3 (BRD) | ST (DRK)<br>D2<br>D4
| :--- | :----- | :--: | :------- | :-------
| 00:15 | アスカロンマイト<br>Ascalon's Might<sup><a href="#war_holmgang">\[1\]</a></sup> | ![Physical](physical.png) | ![Holy Sheltron](holy_sheltron.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)![Bulwark](bulwark.png)<sup><a href="#mt_drk_physical_90s">\[2\]</a></sup>![Divine Benison](divine_benison.png)![Troubadour](troubadour.png) | ![Reprisal](reprisal.png)
| 00:57 | 邪竜の魔炎<br>the Dragon's Rage | ![Magic](magic.png) | ![Divine Veil](divine_veil.png)
| 00:58 | スカイワードリープ<br>Skyward Leap | ![Magic](magic.png) | ![Divine Veil](divine_veil.png)
| 00:58 | ホーリーシールドバッシュ<br>Holy Shield Bash | ![Physical](physical.png) | ![Holy Sheltron](holy_sheltron.png)![Oblation](oblation.png)![Rampart](rampart.png) | ![Intervention](intervention.png)![The Blackest Night](the_blackest_night.png)![Rampart](rampart.png)
| 01:01 | ホーリーブレードダンス<br>Holy Bladedance | ![Physical](physical.png) | ![Holy Sheltron](holy_sheltron.png)![Oblation](oblation.png)![Rampart](rampart.png) | ![Intervention](intervention.png)![The Blackest Night](the_blackest_night.png)![Rampart](rampart.png)
| 01:09 | エンシェントクエイガ<br>Ancient Quaga | ![Magic](magic.png) | ![Reprisal](reprisal.png) | ![Dark Missionary](dark_missionary.png)![Feint](feint.png)![Addle](addle.png)
| 01:19 | ヘヴンリーヒール<br>Heavenly Heel | ![Physical](physical.png) | ![Holy Sheltron](holy_sheltron.png)![Sentinel](sentinel.png)![Divine Benison](divine_benison.png)![Feint](feint.png) | ![Reprisal](reprisal.png)
| 01:23 | アスカロンマイト<br>Ascalon's Might | ![Physical](physical.png) | ![Feint](feint.png) | ![The Blackest Night](the_blackest_night.png)![Reprisal](reprisal.png)<span class="make_no_sense">![Dark Mind](dark_mind.png)</span><sup><a href="#st_drk_physical_90s">\[3\]</sup>![Shadow Wall](shadow_wall.png)</a>![Divine Benison](divine_benison.png)
| 01:51 | セイクリッドカット<br>Sacred Sever | ![Physical](physical.png) | ![Troubadour](troubadour.png)
| 02:09 | ハイマルストーム<br>Hiemal Storm | ![Magic](magic.png)
| 02:44 | アルティメットエンド<br>Ultimate End | ![Magic](magic.png) |  | ![Reprisal](reprisal.png)![Feint](feint.png)![Addle](addle.png)
| 03:18 | 終焉の竜詩<br>Final Chorus | ![Magic](magic.png) | ![Divine Veil](divine_veil.png)![Passage of Arms](passage_of_arms.png) | ![Dark Missionary](dark_missionary.png)
| 03:47 | アイ・オブ・タイラント<br>Eye of the Tyrant | ![Magic](magic.png) | ![Reprisal](reprisal.png)![Feint](feint.png)![Troubadour](troubadour.png)
| 04:08 | アイ・オブ・タイラント<br>Eye of the Tyrant | ![Magic](magic.png) | | ![Reprisal](reprisal.png)![Feint](feint.png)![Addle](addle.png)
| 04:40 | ソウルテザー<br>Soul Tether | ![Magic](magic.png) | ![Hallowed Ground](hallowed_ground.png) | ![Living Dead](living_dead.png)
| 05:46 | 苦悶の咆哮<br>Resentment | ![Magic](magic.png) |
| 06:03 | フレアディザスター<br>Flare Nova | ![Magic](magic.png) | ![Divine Veil](divine_veil.png)![Troubadour](troubadour.png) | ![Dark Missionary](dark_missionary.png)
| 06:10 | フレアスター<br>Flare Star | ![Magic](magic.png) | ![Divine Veil](divine_veil.png)![Troubadour](troubadour.png) | ![Dark Missionary](dark_missionary.png)
| 06:22 | ミラージュダイブ<br>Mirage Dive | ![Physical](physical.png)
| 06:47 | 憤怒の波動<br>Steep in Rage<sup><a href="#steep_in_rage">\[4\]</a></sup> | ![Magic](magic.png) | ![Reprisal](reprisal.png) | ![Reprisal](reprisal.png)
| 07:35 | 衝撃波<br>Shockwave | ![Magic](magic.png) | ![Limit Break](limit_break.png)
| 07:40 | 光翼閃<br>Brightwing | ![Magic](magic.png) | ![Limit Break](limit_break.png) | ![Addle](addle.png)
| 07:45 | 光翼閃<br>Brightwing | ![Magic](magic.png) | ![Reprisal](reprisal.png)![Divine Veil](divine_veil.png)![Feint](feint.png) | ![Addle](addle.png)
| 07:50 | 光翼閃<br>Brightwing | ![Magic](magic.png) | ![Reprisal](reprisal.png)![Divine Veil](divine_veil.png)![Feint](feint.png)![Troubadour](troubadour.png)
| 07:55 | 光翼閃<br>Brightwing | ![Magic](magic.png) | ![Troubadour](troubadour.png) | ![Reprisal](reprisal.png)![Dark Missionary](dark_missionary.png)![Feint](feint.png)
| 08:00 | ピュア・オブ・ハート<br>Pure of Heart | ![Magic](magic.png) | ![Troubadour](troubadour.png) | ![Reprisal](reprisal.png)![Dark Missionary](dark_missionary.png)![Feint](feint.png)
| 09:15 | スカイワードリープ<br>Skyward Leap | ![Magic](magic.png) | ![Divine Veil](divine_veil.png)
| 09:21 | スパイラルピアス<br>Spiral Pierce | ![Magic](magic.png) | ![Divine Veil](divine_veil.png)
| 09:21 | レベレーション・アスカロンメルシー<br>Ascalon's Mercy Revealed | ![Physical](physical.png) | ![Divine Veil](divine_veil.png)
| 09:21 | ヘブンリキッド<br>Liquid Heaven | ![Magic](magic.png)
| 09:35 | エンシェントクエイガ<br>Ancient Quaga | ![Magic](magic.png) | ![Reprisal](reprisal.png)![Troubadour](troubadour.png)
| 09:46 | ヘヴンリーヒール<br>Heavenly Heel<sup><a href="#war_holmgang">\[1\]</a></sup> | ![Physical](physical.png) | ![Holy Sheltron](holy_sheltron.png)![Rampart](rampart.png)![Bulwark](bulwark.png)<sup><a href="#mt_drk_physical_90s">\[2\]</a></sup>![Sentinel](sentinel.png)![Divine Benison](divine_benison.png)![Feint](feint.png)![Troubadour](troubadour.png) | ![Reprisal](reprisal.png)
| 09:50 | アスカロンマイト<br>Ascalon's Might<sup><a href="#war_holmgang">\[1\]</a></sup> | ![Physical](physical.png) | ![Feint](feint.png) | ![Intervention](intervention.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)![Reprisal](reprisal.png)![Rampart](rampart.png)![Divine Benison](divine_benison.png)
| 10:33 | フェイスアンムーブ<br>Faith Unmoving | ![Physical](physical.png)
| 10:36 | ヘヴンフレイム<br>Heavensflame | ![Magic](magic.png)
| 11:07 | エンシェントクエイガ<br>Ancient Quaga | ![Magic](magic.png) | | ![Reprisal](reprisal.png)![Addle](addle.png)
| 11:16 | ヘヴンリーヒール<br>Heavenly Heel | ![Physical](physical.png) | ![Reprisal](reprisal.png) | ![Intervention](intervention.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)<span class="make_no_sense">![Dark Mind](dark_mind.png)</span><sup><a href="#st_drk_physical_90s">\[3\]</a></sup>![Shadow Wall](shadow_wall.png)![Divine Benison](divine_benison.png)![Feint](feint.png)
| 11:19 | アスカロンマイト<br>Ascalon's Might | ![Physical](physical.png) | ![Holy Sheltron](holy_sheltron.png)![Reprisal](reprisal.png)![Rampart](rampart.png)![Divine Benison](divine_benison.png) | ![Feint](feint.png)
| 12:03 | 聖竜/邪竜の息吹<br>Great/Dread Wyrmsbreath | ![Magic](magic.png) | ![Holy Sheltron](holy_sheltron.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)![Sentinel](sentinel.png) | ![Intervention](intervention.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)![Rampart](rampart.png)
| 12:23 | アク・アファー<br>Akh Afah | ![Magic](magic.png) | ![Reprisal](reprisal.png)
| 12:36 | ホーリーフェザー<br>Hallowed Plume | ![Magic](magic.png) | ![Holy Sheltron](holy_sheltron.png)![Bulwark](bulwark.png)![Divine Benison](divine_benison.png) | ![The Blackest Night](the_blackest_night.png)![Reprisal](reprisal.png)![Dark Mind](dark_mind.png)![Divine Benison](divine_benison.png)
| 13:02 | アク・モーン<br>Akh Morn | ![Magic](magic.png) | ![Divine Veil](divine_veil.png)![Feint](feint.png)![Troubadour](troubadour.png) | ![Dark Missionary](dark_missionary.png)![Addle](addle.png)
| 13:32 | アク・アファー<br>Akh Afah | ![Magic](magic.png) | ![Reprisal](reprisal.png)
| 13:45 | ホーリーフェザー<br>Hallowed Plume | ![Magic](magic.png) | ![Holy Sheltron](holy_sheltron.png)![Rampart](rampart.png)![Divine Benison](divine_benison.png) | ![The Blackest Night](the_blackest_night.png)![Reprisal](reprisal.png)![Shadow Wall](shadow_wall.png)![Divine Benison](divine_benison.png)![Feint](feint.png)
| 14:04 | 聖竜/邪竜の息吹<br>Great/Dread Wyrmsbreath | ![Magic](magic.png) | ![Holy Sheltron](holy_sheltron.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)![Sentinel](sentinel.png) | ![Intervention](intervention.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)![Rampart](rampart.png)
| 14:17 | カータライズ<br>Cauterize | ![Magic](magic.png) | ![Hallowed Ground](hallowed_ground.png) | ![Living Dead](living_dead.png)
| 15:07 | 苦悶の咆哮<br>Resentment | ![Magic](magic.png)
| 15:24 | 衝撃波<br>Shockwave | ![Magic](magic.png)
| 15:40 | アルティメットエンド・オルタナ<br>Alternative End | ![Magic](magic.png) | ![Divine Veil](divine_veil.png)![Passage of Arms](passage_of_arms.png) | ![Dark Missionary](dark_missionary.png)![Sacred Soil](sacred_soil.png)![Expedient](expedient.png)![Summon Seraph](summon_seraph.png)![Consolation](consolation.png)
| 16:21 | 騎竜剣アク・モーン<br>Akh Morn's Edge | ![Magic](magic.png) | ![Reprisal](reprisal.png)![Temperance](temperance.png)![Feint](feint.png) | ![Sacred Soil](sacred_soil.png)![Addle](addle.png)
| 16:48 | 騎竜剣ギガフレア<br>Gigaflare's Edge | ![Magic](magic.png) | ![Troubadour](troubadour.png) | ![Reprisal](reprisal.png)![Sacred Soil](sacred_soil.png)![Feint](feint.png)
| 17:40 | 騎竜剣アク・モーン<br>Akh Morn's Edge | ![Magic](magic.png) | ![Reprisal](reprisal.png)![Divine Veil](divine_veil.png)<span class="liturgy-of-the-bell"></span> | ![Dark Missionary](dark_missionary.png)![Sacred Soil](sacred_soil.png)
| 18:08 | 騎竜剣ギガフレア<br>Gigaflare's Edge | ![Magic](magic.png) | ![Feint](feint.png) | ![Reprisal](reprisal.png)![Sacred Soil](sacred_soil.png)![Addle](addle.png)
| 19:00 | 騎竜剣アク・モーン<br>Akh Morn's Edge | ![Magic](magic.png) | ![Reprisal](reprisal.png)![Temperance](temperance.png)![Troubadour](troubadour.png) | ![Expedient](expedient.png)![Summon Seraph](summon_seraph.png)![Consolation](consolation.png)![Feint](feint.png)

</span>

1. <span id="war_holmgang">戦士がいる場合ホルムギャングで置き換え可能。WAR can replace the mitigations with Holmgang.</span>
2. <span id="mt_drk_physical_90s">暗黒 MT の場合、ここでブルワークの代わりにダークマインドを使用しても意味がない。If MT is DRK, it makes no sense to use Dark Mind instead of Bulwark here.</span>
3. <span id="st_drk_physical_90s">暗黒 ST の場合、ここでダークマインドを使用しても実際には意味がない。暗黒以外が ST の場合、ここで 90 秒アビを使用する。If DRK is ST, using Dark Mind here does not make actual sense. If the ST is other than DRK, use the 90s ability here.</span>
4. <span id="steep_in_rage">両眼を残す場合のみ両方にリプライザルを入れる。Only use Reprisal in both if you keep both eyes.</span>

(C) SQUARE ENIX CO., LTD. All Rights Reserved.
