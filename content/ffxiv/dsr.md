---
title: "絶竜詩戦争 Dragonsong's Reprise"
---

<style>
    table {
        margin: 2rem 2rem 2rem 0;
        display: inline flow-root;
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
        const data = [
            {
                name: "divine-benison",
                src: "divine_benison.png",
                alt: "ディヴァインベニゾン Divine Benison",
                title: "ディヴァインベニゾン Divine Benison",
                ariaLabel:
                    "ディヴァインベニゾン; リキャストタイム 30秒\n" +
                    "バリア\n" +
                    "Divine Benison; Reacast: 30s\n" +
                    "Barrier",
            },
            {
                name: "celestial-intersection",
                src: "celestial_intersection.png",
                alt: "星天交差 Celestial Intersection",
                title: "星天交差 Celestial Intersection",
                ariaLabel:
                    "星天交差; リキャストタイム 30秒\n" +
                    "バリア\n" +
                    "Celestial Intersection; Reacast: 30s\n" +
                    "Barrier",
            },
            {
                name: "temperance",
                src: "temperance.png",
                alt: "テンパランス Temperance",
                title: "テンパランス Temperance",
                ariaLabel:
                    "テンパランス; リキャストタイム：120秒\n" +
                    "回復 + 10% 軽減\n" +
                    "Temperance; Reacast: 120s\n" +
                    "Cure + 10% Mitigation",
            },
            {
                name: "neutral-sect",
                src: "neutral_sect.png",
                alt: "ニュートラルセクト Neutral Sect",
                title: "ニュートラルセクト Neutral Sect",
                ariaLabel:
                    "ニュートラルセクト; リキャストタイム：120秒\n" +
                    "バリア\n" +
                    "Neutral Sect; Reacast: 120s\n" +
                    "Barrier",
            },
            {
                name: "aquaveil",
                src: "aquaveil.png",
                alt: "アクアヴェール Aquaveil",
                title: "アクアヴェール Aquaveil",
                ariaLabel:
                    "アクアヴェール; リキャストタイム：60秒\n" +
                    "15% 軽減\n" +
                    "Aquaveil; Reacast: 60s\n" +
                    "15% Mitigation",
            },
            {
                name: "exaltation",
                src: "exaltation.png",
                alt: "エクザルテーション Exaltation",
                title: "エクザルテーション Exaltation",
                ariaLabel:
                    "エクザルテーション; リキャストタイム：60秒\n" +
                    "10% 軽減\n" +
                    "Exaltation; Reacast: 60s\n" +
                    "10% Mitigation",
            },
            {
                name: "liturgy-of-the-bell",
                src: "liturgy_of_the_bell.png",
                alt: "リタージー・オブ・ベル Liturgy of the Bell",
                title: "リタージー・オブ・ベル Liturgy of the Bell",
                ariaLabel:
                    "リタージー・オブ・ベル; リキャストタイム：180秒, カウンターヒール, 効果時間：20秒.\n" +
                    "Liturgy of the Bell; Reacast: 180s, Counter Heal, Duration:20s.",
            },
            {
                name: "macrocosmos",
                src: "macrocosmos_01.png",
                alt: "マクロコスモス Macrocosmos",
                title: "マクロコスモス Macrocosmos",
                ariaLabel:
                    "マクロコスモス; リキャストタイム：180秒, カウンターヒール, 効果時間：15秒.\n" +
                    "Macrocosmos; Reacast: 180s, Counter Heal, Duration:15s.",
            },
            {
                name: "whispering-dawn",
                src: "whispering_dawn.png",
                alt: "光の囁き Whispering Dawn",
                title: "光の囁き Whispering Dawn",
                ariaLabel:
                    "光の囁き; リキャストタイム 60秒\n" +
                    "継続回復, 効果時間：21秒\n" +
                    "Whispering Dawn; Reacast: 60s\n" +
                    "Gradually Cure, Duration: 21s ",
            },
            {
                name: "adloquium",
                src: "adloquium.png",
                alt: "鼓舞激励の策 Adloquium",
                title: "鼓舞激励の策 Adloquium",
                ariaLabel:
                    "鼓舞激励の策; リキャストタイム 2.5秒\n" +
                    "回復 + バリア\n" +
                    "Adloquium; Reacast: 2.5s\n" +
                    "Cure + Barrier",
            },
            {
                name: "succor",
                src: "succor.png",
                alt: "士気高揚の策 Succor",
                title: "士気高揚の策 Succor",
                ariaLabel:
                    "士気高揚の策; リキャストタイム 2.5秒\n" +
                    "回復 + バリア\n" +
                    "Succor; Reacast: 2.5s\n" +
                    "Cure + Barrier",
            },
            {
                name: "sacred-soil",
                src: "sacred_soil.png",
                alt: "野戦治療の陣 Sacred Soil",
                title: "野戦治療の陣 Sacred Soil",
                ariaLabel:
                    "野戦治療の陣; リキャストタイム 30秒\n" +
                    "10% 軽減\n" +
                    "Sacred Soil; Reacast: 30s\n" +
                    "10% Mitigation",
            },
            {
                name: "deployment-tactics",
                src: "deployment_tactics.png",
                alt: "展開戦術 Deployment Tactics",
                title: "展開戦術 Deployment Tactics",
                ariaLabel:
                    "展開戦術; リキャストタイム 90秒\n" +
                    "バリア拡散\n" +
                    "Deployment Tactics; Reacast: 90s\n" +
                    "Extends Barieer",
            },
            {
                name: "kerachole",
                src: "kerachole.png",
                alt: "ケーラコレ Kerachole",
                title: "ケーラコレ Kerachole",
                ariaLabel:
                    "ケーラコレ; リキャストタイム 30秒\n" +
                    "10% 軽減\n" +
                    "Kerachole; Reacast: 30s\n" +
                    "10% Mitigation",
            },
            {
                name: "excogitation",
                src: "excogitation.png",
                alt: "深謀遠慮の策 Excogitation",
                title: "深謀遠慮の策 Excogitation",
                ariaLabel:
                    "深謀遠慮の策; リキャストタイム：45秒\n" +
                    "カウンターヒール, 効果時間：45秒\n" +
                    "Excogitation; Reacast: 45s\n" +
                    "Counter Heal, Duration:45s",
            },
            {
                name: "recitation",
                src: "recitation.png",
                alt: "秘策 Recitation",
                title: "秘策 Recitation",
                ariaLabel:
                    "秘策; リキャストタイム：90秒\n" +
                    "回復・バリアクリティカル確定, 効果時間：15秒\n" +
                    "Recitation; Reacast: 90s\n" +
                    "Ensuring cure and barrier critical, Duration:15s",
            },
            {
                name: "protraction",
                src: "protraction.png",
                alt: "生命回生法 Protraction",
                title: "生命回生法 Protraction",
                ariaLabel:
                    "生命回生法; リキャストタイム：60秒\n" +
                    "最大 HP 10% 上昇, 効果時間：10秒\n" +
                    "Protraction; Reacast: 60s\n" +
                    "Increases Max HP by 10%, Duration:10s",
            },
            {
                name: "krasis",
                src: "krasis.png",
                alt: "クラーシス Krasis",
                title: "クラーシス Krasis",
                ariaLabel:
                    "クラーシス; リキャストタイム：60秒\n" +
                    "被回復効果 20% 上昇, 効果時間：10秒\n" +
                    "Krasis; Reacast: 60s\n" +
                    "Increases HP recovery via healing by 20%, Duration:10s",
            },
            {
                name: "taurochole",
                src: "taurochole.png",
                alt: "タウロコレ Taurochole",
                title: "タウロコレ Taurochole",
                ariaLabel:
                    "タウロコレ; リキャストタイム：45秒\n" +
                    "回復 + 10% 軽減, 効果時間：15秒\n" +
                    "Taurochole; Reacast: 45s\n" +
                    "Cure + 10% Mitigation, Duration:15s",
            },
            {
                name: "lustrate",
                src: "lustrate.png",
                alt: "生命活性法  Lustrate",
                title: "生命活性法  Lustrate",
                ariaLabel:
                    "生命活性法 ; リキャストタイム：1秒\n" +
                    "回復\n" +
                    "Lustrate; Reacast: 1s\n" +
                    "Cure",
            },
            {
                name: "druochole",
                src: "druochole.png",
                alt: "ドルオコレ Druochole",
                title: "ドルオコレ Druochole",
                ariaLabel:
                    "ドルオコレ; リキャストタイム：1秒\n" +
                    "回復\n" +
                    "ドルオコレ; Reacast: 1s\n" +
                    "Cure",
            },
        ];
        data.forEach(d => {
            const elements = document.getElementsByClassName(d.name);
            for (let index = 0; index < elements.length; index++) {
                const i = document.createElement("img");
                i.src = d.src;
                i.alg = d.alt;
                i.title = d.title;
                elements[index].setAttribute("role", "tooltip");
                elements[index].setAttribute("aria-label", d.ariaLabel);
                elements[index].setAttribute("data-microtip-position", "top");
                elements[index].appendChild(i);
            }
        });
    });
</script>

# 軽減 Mitigation

基本的に類似アビリティで置き換え可能。

## 早見表 Cheat Sheet

<span class="mitigation-cheat-sheet">

|     | PLD | WAR | DRK | GNB
| :-: | :-: | :-: | :-: | :-:
| 120s | ![Sentinel](sentinel.png) | ![Vengeance](vengeance.png) | ![Shadow Wall](shadow_wall.png) | ![Nebula](nebula.png)
| 90s | ![Bulwark](bulwark.png) | ![Thrill of Battle](thrill_of_battle.png) | ![Dark Mind](dark_mind.png) | ![Camouflage](camouflage.png)
| Invul | ![Hallowed Ground](hallowed_ground.png) | ![Holmgang](holmgang.png) | ![Living Dead](living_dead.png) | ![Superbolide](superbolide.png)
| Short 1 | ![Holy Sheltron](holy_sheltron.png) | ![Bloodwhetting](bloodwhetting.png) | ![The Blackest Night](the_blackest_night.png) | ![Heart of Corundum](heart_of_corundum.png)
| Short 2 | ![Intervention](intervention.png) | ![Nascent Flash](nascent_flash.png) | ![Oblation](oblation.png)
| 90s | ![Divine Veil](divine_veil.png) | ![Shake It Off](shake_it_off.png) | ![Dark Missionary](dark_missionary.png) | ![Heart of Light](heart_of_light.png)
| 120s | ![Passage of Arms](passage_of_arms.png)

|     | WHM | AST
| :-: | :-: | :-:
| 30s | <span class="divine-benison"></span> | <span class="celestial-intersection"></span>
| 120s | <span class="temperance"></span> | <span class="neutral-sect"></span>
| 60s | | ![Collective Unconscious](collective_unconscious.png)
| 60s | <span class="aquaveil"></span> | <span class="exaltation"></span>
| 180s | <span class="liturgy-of-the-bell"></span> | <span class="macrocosmos"></span>

|     | SCH | SGE
| :-: | :-: | :-:
| 30s | <span class="sacred-soil"></span> | <span class="kerachole"></span>
| 45s | <span class="excogitation"></span> | <span class="taurochole"></span>
| 60s | <span class="protraction"></span> | <span class="krasis"></span>
| 1s | <span class="lustrate"></span> | <span class="druochole"></span>
| 120s | ![Fey Illumination](fey_illumination.png) | ![Haima](haima.png)
| 120s | ![Summon Seraph](summon_seraph.png) | ![Panhaima](panhaima.png)
| 120s | ![Expedient](expedient.png) | ![Holos](holos.png)

|     | BRD | MCH | DNC
| :-: | :-: | :-: | :-:
| 90s | ![Troubadour](troubadour.png) | ![Tactician](tactician.png) | ![Shield Samba](shield_samba.png)

</span>

<span class="mitigation-chart">

## チャート Chart

| Time | Action | 属性 | MT (PLD)<br>H1 (WHM)<br>D1<br>D3 (BRD) | ST (DRK)<br>D2<br>D4
| :--- | :----- | :--: | :------- | :-------
| 00:15 | アスカロンマイト<br>Ascalon's Might<sup><a href="#war_holmgang">\[1\]</a></sup> | ![Physical](physical.png) | ![Holy Sheltron](holy_sheltron.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)![Bulwark](bulwark.png)<sup><a href="#mt_drk_physical_90s">\[2\]</a></sup><span class="divine-benison"></span>![Troubadour](troubadour.png) | ![Reprisal](reprisal.png)
| 00:57 | 邪竜の魔炎<br>the Dragon's Rage | ![Magic](magic.png) | ![Divine Veil](divine_veil.png)
| 00:58 | スカイワードリープ<br>Skyward Leap | ![Magic](magic.png) | ![Divine Veil](divine_veil.png)
| 00:58 | ホーリーシールドバッシュ<br>Holy Shield Bash | ![Physical](physical.png) | ![Holy Sheltron](holy_sheltron.png)![Oblation](oblation.png)![Rampart](rampart.png) | ![Intervention](intervention.png)![The Blackest Night](the_blackest_night.png)![Rampart](rampart.png)
| 01:01 | ホーリーブレードダンス<br>Holy Bladedance | ![Physical](physical.png) | ![Holy Sheltron](holy_sheltron.png)![Oblation](oblation.png)![Rampart](rampart.png) | ![Intervention](intervention.png)![The Blackest Night](the_blackest_night.png)![Rampart](rampart.png)
| 01:09 | エンシェントクエイガ<br>Ancient Quaga | ![Magic](magic.png) | ![Reprisal](reprisal.png) | ![Dark Missionary](dark_missionary.png)![Feint](feint.png)![Addle](addle.png)
| 01:19 | ヘヴンリーヒール<br>Heavenly Heel | ![Physical](physical.png) | ![Holy Sheltron](holy_sheltron.png)![Sentinel](sentinel.png)<span class="divine-benison"></span>![Feint](feint.png) | ![Reprisal](reprisal.png)
| 01:23 | アスカロンマイト<br>Ascalon's Might | ![Physical](physical.png) | ![Feint](feint.png) | ![The Blackest Night](the_blackest_night.png)![Reprisal](reprisal.png)<span class="make_no_sense">![Dark Mind](dark_mind.png)</span><sup><a href="#st_drk_physical_90s">\[3\]</sup>![Shadow Wall](shadow_wall.png)</a><span class="divine-benison"></span>
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
| 09:46 | ヘヴンリーヒール<br>Heavenly Heel<sup><a href="#war_holmgang">\[1\]</a></sup> | ![Physical](physical.png) | ![Holy Sheltron](holy_sheltron.png)![Rampart](rampart.png)![Bulwark](bulwark.png)<sup><a href="#mt_drk_physical_90s">\[2\]</a></sup>![Sentinel](sentinel.png)<span class="divine-benison"></span>![Feint](feint.png)![Troubadour](troubadour.png) | ![Reprisal](reprisal.png)
| 09:50 | アスカロンマイト<br>Ascalon's Might<sup><a href="#war_holmgang">\[1\]</a></sup> | ![Physical](physical.png) | ![Feint](feint.png) | ![Intervention](intervention.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)![Reprisal](reprisal.png)![Rampart](rampart.png)<span class="divine-benison"></span>
| 10:33 | フェイスアンムーブ<br>Faith Unmoving | ![Physical](physical.png)
| 10:36 | ヘヴンフレイム<br>Heavensflame | ![Magic](magic.png)
| 11:07 | エンシェントクエイガ<br>Ancient Quaga | ![Magic](magic.png) | | ![Reprisal](reprisal.png)![Addle](addle.png)
| 11:16 | ヘヴンリーヒール<br>Heavenly Heel | ![Physical](physical.png) | ![Reprisal](reprisal.png) | ![Intervention](intervention.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)<span class="make_no_sense">![Dark Mind](dark_mind.png)</span><sup><a href="#st_drk_physical_90s">\[3\]</a></sup>![Shadow Wall](shadow_wall.png)<span class="divine-benison"></span>![Feint](feint.png)
| 11:19 | アスカロンマイト<br>Ascalon's Might | ![Physical](physical.png) | ![Holy Sheltron](holy_sheltron.png)![Reprisal](reprisal.png)![Rampart](rampart.png)<span class="divine-benison"></span> | ![Feint](feint.png)
| 12:03 | 聖竜/邪竜の息吹<br>Great/Dread Wyrmsbreath | ![Magic](magic.png) | ![Holy Sheltron](holy_sheltron.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)![Sentinel](sentinel.png)<span class="temperance"></span> | ![Intervention](intervention.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)![Rampart](rampart.png)<span class="recitation"></span><span class="adloquium"></span><span class="deployment-tactics">
| 12:23 | アク・アファー<br>Akh Afah | ![Magic](magic.png) | ![Reprisal](reprisal.png) | <span class="sacred-soil"></span><span class="succor"></span>
| 12:36 | ホーリーフェザー<br>Hallowed Plume | ![Magic](magic.png) | ![Holy Sheltron](holy_sheltron.png)![Bulwark](bulwark.png)<span class="divine-benison"></span><span class="aquaveil"></span><span class="adloquium"></span> | ![The Blackest Night](the_blackest_night.png)![Reprisal](reprisal.png)![Dark Mind](dark_mind.png)<span class="divine-benison"></span><span class="protraction"></span><span class="adloquium"></span>
| 13:02 | アク・モーン<br>Akh Morn | ![Magic](magic.png) | ![Divine Veil](divine_veil.png)<span class="liturgy-of-the-bell"></span>![Feint](feint.png)![Troubadour](troubadour.png) | ![Dark Missionary](dark_missionary.png)![Expedient](expedient.png)![Summon Seraph](summon_seraph.png)![Consolation](consolation.png)<span class="sacred-soil"></span><span class="succor"></span>![Addle](addle.png)
| 13:32 | アク・アファー<br>Akh Afah | ![Magic](magic.png) | ![Reprisal](reprisal.png) | <span class="sacred-soil"></span><span class="succor"></span>
| 13:45 | ホーリーフェザー<br>Hallowed Plume | ![Magic](magic.png) | ![Holy Sheltron](holy_sheltron.png)![Rampart](rampart.png)<span class="divine-benison"></span><span class="aquaveil"></span><span class="adloquium"></span> | ![The Blackest Night](the_blackest_night.png)![Reprisal](reprisal.png)![Shadow Wall](shadow_wall.png)<span class="divine-benison"></span><span class="protraction"></span><span class="adloquium"></span>![Feint](feint.png)
| 14:04 | 聖竜/邪竜の息吹<br>Great/Dread Wyrmsbreath | ![Magic](magic.png) | ![Holy Sheltron](holy_sheltron.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)![Sentinel](sentinel.png)<span class="temperance"></span> | ![Intervention](intervention.png)![The Blackest Night](the_blackest_night.png)![Oblation](oblation.png)![Rampart](rampart.png)<span class="recitation"></span><span class="adloquium"></span><span class="deployment-tactics">
| 14:17 | カータライズ<br>Cauterize | ![Magic](magic.png) | ![Hallowed Ground](hallowed_ground.png) | ![Living Dead](living_dead.png)<span class="sacred-soil"></span><span class="succor"></span>
| 15:07 | 苦悶の咆哮<br>Resentment | ![Magic](magic.png)
| 15:24 | 衝撃波<br>Shockwave | ![Magic](magic.png)
| 15:40 | アルティメットエンド・オルタナ<br>Alternative End | ![Magic](magic.png) | ![Divine Veil](divine_veil.png)![Passage of Arms](passage_of_arms.png) | ![Dark Missionary](dark_missionary.png)<span class="sacred-soil"></span>![Expedient](expedient.png)![Summon Seraph](summon_seraph.png)![Consolation](consolation.png)
| 16:21 | 騎竜剣アク・モーン<br>Akh Morn's Edge | ![Magic](magic.png) | ![Reprisal](reprisal.png)<span class="temperance"></span>![Feint](feint.png) | <span class="sacred-soil"></span>![Addle](addle.png)
| 16:48 | 騎竜剣ギガフレア<br>Gigaflare's Edge | ![Magic](magic.png) | ![Troubadour](troubadour.png) | ![Reprisal](reprisal.png)<span class="sacred-soil"></span>![Feint](feint.png)
| 17:40 | 騎竜剣アク・モーン<br>Akh Morn's Edge | ![Magic](magic.png) | ![Reprisal](reprisal.png)![Divine Veil](divine_veil.png)<span class="liturgy-of-the-bell"></span> | ![Dark Missionary](dark_missionary.png)<span class="sacred-soil"></span>
| 18:08 | 騎竜剣ギガフレア<br>Gigaflare's Edge | ![Magic](magic.png) | ![Feint](feint.png) | ![Reprisal](reprisal.png)<span class="sacred-soil"></span>![Addle](addle.png)
| 19:00 | 騎竜剣アク・モーン<br>Akh Morn's Edge | ![Magic](magic.png) | ![Reprisal](reprisal.png)<span class="temperance"></span>![Troubadour](troubadour.png) | ![Expedient](expedient.png)![Summon Seraph](summon_seraph.png)![Consolation](consolation.png)![Feint](feint.png)

</span>

1. <span id="war_holmgang">戦士がいる場合ホルムギャングで置き換え可能。<br>WAR can replace the mitigations with Holmgang.</span>
2. <span id="mt_drk_physical_90s">暗黒 MT の場合、ここでブルワークの代わりにダークマインドを使用しても意味がない。<br>If MT is DRK, it makes no sense to use Dark Mind instead of Bulwark here.</span>
3. <span id="st_drk_physical_90s">暗黒 ST の場合、ここでダークマインドを使用しても実際には意味がない。暗黒以外が ST の場合、ここで 90 秒アビを使用する。<br>If DRK is ST, using Dark Mind here does not make actual sense. If the ST is other than DRK, use the 90s ability here.</span>
4. <span id="steep_in_rage">両眼を残す場合のみ両方にリプライザルを入れる。<br>Only use Reprisal in both if you keep both eyes.</span>

(C) SQUARE ENIX CO., LTD. All Rights Reserved.
