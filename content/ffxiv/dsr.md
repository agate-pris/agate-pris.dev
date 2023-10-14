---
title: "絶竜詩戦争 Dragonsong's Reprise"
---

<style>
    table {
        margin: 2rem 2rem 2rem 0;
        display: inline flow-root;
    }

    form {
        margin: 2rem 0 2rem 0;
    }

    .job {
        display: inline flow-root;
        vertical-align: middle;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 1rem;
    }
    .job img {
        width: 40px;
        display: inline flow-root;
        vertical-align: middle;
        margin-left: 1rem;
    }

    .mitigation-cheat-sheet img {
        width: 40px;
    }

    .make_no_sense img {
        opacity: calc(2/3);
    }

    .mitigation-chart span {
        display: inline flow-root;
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

    .brd {
        display: inline;
    }
    .mch {
        display: inline;
    }
    .dnc {
        display: inline;
    }

    .sentinel {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("sentinel.png");
        background-size: contain;
    }
    .hallowed_ground {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("hallowed_ground.png");
        background-size: contain;
    }
    .bulwark {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("bulwark.png");
        background-size: contain;
    }
    .divine_veil {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("divine_veil.png");
        background-size: contain;
    }
    .intervention {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("intervention.png");
        background-size: contain;
    }
    .passage_of_arms {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("passage_of_arms.png");
        background-size: contain;
    }
    .holy_sheltron {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("holy_sheltron.png");
        background-size: contain;
    }
    .divine_benison {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("divine_benison.png");
        background-size: contain;
    }
    .temperance {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("temperance.png");
        background-size: contain;
    }
    .aquaveil {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("aquaveil.png");
        background-size: contain;
    }
    .liturgy_of_the_bell {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("liturgy_of_the_bell.png");
        background-size: contain;
    }
    .collective_unconscious {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("collective_unconscious.png");
        background-size: contain;
    }
    .celestial_intersection {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("celestial_intersection.png");
        background-size: contain;
    }
    .neutral_sect {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("neutral_sect.png");
        background-size: contain;
    }
    .exaltation {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("exaltation.png");
        background-size: contain;
    }
    .macrocosmos {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("macrocosmos_01.png");
        background-size: contain;
    }
    .riddle_of_earth {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("riddle_of_earth.png");
        background-size: contain;
    }
    .third_eye {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("third_eye.png");
        background-size: contain;
    }
    .arcane_crest {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("arcane_crest.png");
        background-size: contain;
    }
    .shade_shift {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("shade_shift.png");
        background-size: contain;
    }
    .troubadour {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("troubadour.png");
        background-size: contain;
    }
    .tactician {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("tactician.png");
        background-size: contain;
    }
    .dismantle {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("dismantle.png");
        background-size: contain;
    }
    .shield_samba {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left:40px;
        background-image: url("shield_samba.png");
        background-size: contain;
    }
    .improvisation {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left:40px;
        background-image: url("Improvisation.png");
        background-size: contain;
    }
    .improvised_finish {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left:40px;
        background-image: url("improvised_finish.png");
        background-size: contain;
    }
</style>

<script>
    function on_job_changed(selectors) {
        const all_input = document.querySelectorAll(selectors);
        for (const input of all_input) {
            const elements = document.getElementsByClassName(input.value);
            for (let i = 0; i < elements.length; i++) {
                if (input.checked) {
                    elements[i].style.display = "inline flow-root";
                }
                else {
                    elements[i].style.display = "none";
                }
            }
        }
    }
    function on_ph_changed() {
        on_job_changed("input[name=ph]");
    }
    function on_d1_changed() {
        on_job_changed("input[name=d1]");
    }
    function on_d2_changed() {
        on_job_changed("input[name=d2]");
    }
    function on_d3_changed() {
        on_job_changed("input[name=d3]");
    }

    function add_actions() {
        const data = {
            ph_30s: [
                ["whm", "divine_benison"],
                ["ast", "celestial_intersection"],
            ],
            ph_120s: [
                ["whm", "temperance"],
                ["ast", "neutral_sect"],
            ],
            ph_60s: [
                ["whm", "aquaveil"],
                ["ast", "exaltation"],
            ],
            ph_180s: [
                ["whm", "liturgy_of_the_bell"],
                ["ast", "macrocosmos"],
            ],
        };
        for (const [key, value] of Object.entries(data)) {
            const elements = document.getElementsByClassName(key);
            for (let i = 0; i < elements.length; i++) {
                value.forEach(v => {
                    const s = document.createElement("span");
                    v.forEach(c => {
                        s.classList.add(c);
                    });
                    elements[i].appendChild(s);
                });
            }
        }
    }

    function set_aria_labels() {
        const data = {
            sentinel: "センチネル\nSentinel\nPLD 120s\nDuration: 15s",
            hallowed_ground: "インビンシブル\nHallowed Ground\nPLD 420s\nDuration: 10s",
            bulwark: "ブルワーク\nBulwark\nPLD 90s\nDuration: 10s",
            divine_veil: "ディヴァインヴェール\nDivine Veil\nPLD 90s\nDuration: 30s",
            intervention: "インターベンション\nIntervention\nPLD 10s\nDuration: 8s",
            passage_of_arms: "パッセージ・オブ・アームズ\nPassage of Arms\nPLD 120s\nDuration: 18s",
            holy_sheltron: "ホーリーシェルトロン\nHoly Sheltron\nPLD 5s\nDuration: 8s",
            divine_benison: "ディヴァインベニゾン\nDivine Benison\nWHM 30s\nDuration: 15s\nMaximum Charges: 2",
            temperance: "テンパランス\nTemperance\nWHM 120s\nDuration: 20s",
            aquaveil: "アクアヴェール\nAquaveil\nWHM 60s\nDuration: 8s",
            liturgy_of_the_bell: "リタージー・オブ・ベル\nLiturgy of the Bell\nWHM 180s\nDuration: 20s",
            collective_unconscious: "運命の輪\nCollective Unconscious\nAST 60s\nDuration: 5s",
            celestial_intersection: "星天交差\nCelestial Intersection\nAST 30s\nDuration: 30s\nMaximum Charges: 2",
            neutral_sect: "ニュートラルセクト\nNeutral Sect\nAST 120s\nDuration: 30s",
            exaltation: "エクザルテーション\nExaltation\nAST 60s\nDuration: 8s",
            macrocosmos: "マクロコスモス\nMacrocosmos\nAST 180s\nDuration: 15s",
        };
        for (const [key, value] of Object.entries(data)) {
            const elements = document.getElementsByClassName(key);
            for (let i = 0; i < elements.length; i++) {
                elements[i].setAttribute("role", "tooltip");
                elements[i].setAttribute("aria-label", value);
            }
        }
    }

    window.addEventListener('DOMContentLoaded', function() {
        add_actions();
        set_aria_labels();
        const data = [
            {
                name: "rampart",
                src: "rampart.png",
                alt: "ランパート Rampart",
                ariaLabel: "Rampart; Tank 90s Buff",
            },
            {
                name: "reprisal",
                src: "reprisal.png",
                alt: "リプライザル Reprisal",
                ariaLabel: "Reprisal; Tank 60s Debuff",
            },
            {
                name: "feint",
                src: "feint.png",
                alt: "牽制 Feint",
                ariaLabel:
                    "牽制 Feint\n" +
                    "Melee 90s Debuff",
            },
            {
                name: "addle",
                src: "addle.png",
                alt: "アドル Addle",
                ariaLabel:
                    "アドル Addle\n" +
                    "Caster 90s Debuff",
            },
            {
                name: "shadow_wall",
                src: "shadow_wall.png",
                alt: "シャドウウォール Shadow Wall",
                ariaLabel: "Shadow Wall; DRK 120s Buff",
            },
            {
                name: "dark_mind",
                src: "dark_mind.png",
                alt: "ダークマインド Dark Mind",
                ariaLabel: "Dark Mind; DRK 90s Buff",
            },
            {
                name: "the_blackest_night",
                src: "the_blackest_night.png",
                alt: "ブラックナイト The Blackest Night",
                ariaLabel: "The Blackest Night; DRK 15s Short Buff",
            },
            {
                name: "dark_missionary",
                src: "dark_missionary.png",
                alt: "ダークミッショナリー Dark Missionary",
                ariaLabel: "Dark Missionary; DRK 90s Mitigation",
            },
            {
                name: "whispering-dawn",
                src: "whispering_dawn.png",
                alt: "光の囁き Whispering Dawn",
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
                ariaLabel:
                    "士気高揚の策; リキャストタイム 2.5秒\n" +
                    "回復 + バリア\n" +
                    "Succor; Reacast: 2.5s\n" +
                    "Cure + Barrier",
            },
            {
                name: "fey_illumination",
                src: "fey_illumination.png",
                alt: "フェイイルミネーション Fey Illumination",
                ariaLabel: "Fey Illumination; SCH 120s Mitigation",
            },
            {
                name: "lustrate",
                src: "lustrate.png",
                alt: "生命活性法  Lustrate",
                ariaLabel:
                    "生命活性法 ; リキャストタイム：1秒\n" +
                    "回復\n" +
                    "Lustrate; Reacast: 1s\n" +
                    "Cure",
            },
            {
                name: "sacred-soil",
                src: "sacred_soil.png",
                alt: "野戦治療の陣 Sacred Soil",
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
                ariaLabel:
                    "展開戦術; リキャストタイム 90秒\n" +
                    "バリア拡散\n" +
                    "Deployment Tactics; Reacast: 90s\n" +
                    "Extends Barrier",
            },
            {
                name: "excogitation",
                src: "excogitation.png",
                alt: "深謀遠慮の策 Excogitation",
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
                ariaLabel:
                    "秘策; リキャストタイム：90秒\n" +
                    "回復・バリアクリティカル確定, 効果時間：15秒\n" +
                    "Recitation; Reacast: 90s\n" +
                    "Ensuring cure and barrier critical, Duration:15s",
            },
            {
                name: "summon_seraph",
                src: "summon_seraph.png",
                alt: "サモン・セラフィム Summon Seraph",
                ariaLabel:
                    "サモン・セラフィム Summon Seraph\n" +
                    "SCH 120s Duration 22s",
            },
            {
                name: "consolation",
                src: "consolation.png",
                alt: "コンソレイション Consolation",
                ariaLabel:
                    "コンソレイション Consolation\n" +
                    "SCH Cure + Barrier",
            },
            {
                name: "protraction",
                src: "protraction.png",
                alt: "生命回生法 Protraction",
                ariaLabel:
                    "生命回生法; リキャストタイム：60秒\n" +
                    "最大 HP 10% 上昇, 効果時間：10秒\n" +
                    "Protraction; Reacast: 60s\n" +
                    "Increases Max HP by 10%, Duration:10s",
            },
            {
                name: "expedient",
                src: "expedient.png",
                alt: "疾風怒濤の計 Expedient",
                ariaLabel:
                    "疾風怒濤の計 Expedient\n" +
                    "SCH 120s 10% Mitigation",
            },
            {
                name: "druochole",
                src: "druochole.png",
                alt: "ドルオコレ Druochole",
                ariaLabel:
                    "ドルオコレ; リキャストタイム：1秒\n" +
                    "回復\n" +
                    "ドルオコレ; Reacast: 1s\n" +
                    "Cure",
            },
            {
                name: "kerachole",
                src: "kerachole.png",
                alt: "ケーラコレ Kerachole",
                ariaLabel:
                    "ケーラコレ; リキャストタイム 30秒\n" +
                    "10% 軽減\n" +
                    "Kerachole; Reacast: 30s\n" +
                    "10% Mitigation",
            },
            {
                name: "taurochole",
                src: "taurochole.png",
                alt: "タウロコレ Taurochole",
                ariaLabel:
                    "タウロコレ; リキャストタイム：45秒\n" +
                    "回復 + 10% 軽減, 効果時間：15秒\n" +
                    "Taurochole; Reacast: 45s\n" +
                    "Cure + 10% Mitigation, Duration:15s",
            },
            {
                name: "krasis",
                src: "krasis.png",
                alt: "クラーシス Krasis",
                ariaLabel:
                    "クラーシス; リキャストタイム：60秒\n" +
                    "被回復効果 20% 上昇, 効果時間：10秒\n" +
                    "Krasis; Reacast: 60s\n" +
                    "Increases HP recovery via healing by 20%, Duration:10s",
            },
            {
                name: "natures_minne",
                src: "nature's_minne.png",
                alt: "地神のミンネ Nature's Minne",
                ariaLabel: "地神のミンネ Nature's Minne\nBRD 120s",
            },
        ];
        data.forEach(d => {
            const elements = document.getElementsByClassName(d.name);
            for (let index = 0; index < elements.length; index++) {
                const i = document.createElement("img");
                i.src = d.src;
                i.alg = d.alt;
                i.title = d.alt;
                elements[index].setAttribute("role", "tooltip");
                elements[index].setAttribute("aria-label", d.ariaLabel);
                elements[index].setAttribute("data-microtip-position", "top");
                elements[index].appendChild(i);
            }
        });
        on_ph_changed();
        on_d1_changed();
        on_d2_changed();
        on_d3_changed();
    });
</script>

# 軽減 Mitigation

基本的に類似アビリティで置き換え可能。

## 早見表 Cheat Sheet

<span class="mitigation-cheat-sheet">

|     | PLD | WAR | DRK | GNB
| :-: | :-: | :-: | :-: | :-:
| 90s | <span class="bulwark"></span> | ![Thrill of Battle](thrill_of_battle.png) | <span class="dark_mind"></span> | ![Camouflage](camouflage.png)
| 120s | <span class="sentinel"></span> | ![Vengeance](vengeance.png) | <span class="shadow_wall"></span> | ![Nebula](nebula.png)
| Invul | <span class="hallowed_ground"></span> | ![Holmgang](holmgang.png) | ![Living Dead](living_dead.png) | ![Superbolide](superbolide.png)
| 90s | <span class="divine_veil"></span> | ![Shake It Off](shake_it_off.png) | <span class="dark_missionary"></span> | ![Heart of Light](heart_of_light.png)
| 120s | <span class="passage_of_arms"></span>
| Short 1 | <span class="holy_sheltron"></span> | ![Bloodwhetting](bloodwhetting.png) | <span class="the_blackest_night"></span> | ![Heart of Corundum](heart_of_corundum.png)
| Short 2 | <span class="intervention"></span> | ![Nascent Flash](nascent_flash.png) | ![Oblation](oblation.png)

|     | WHM | AST
| :-: | :-: | :-:
| 60s | | <span class="collective_unconscious"></span>
| 30s | <span class="divine_benison"></span> | <span class="celestial_intersection"></span>
| 120s | <span class="temperance"></span> | <span class="neutral_sect"></span>
| 60s | <span class="aquaveil"></span> | <span class="exaltation"></span>
| 180s | <span class="liturgy_of_the_bell"></span> | <span class="macrocosmos"></span>

|     | SCH | SGE
| :-: | :-: | :-:
| 30s | <span class="sacred-soil"></span> | <span class="kerachole"></span>
| 45s | <span class="excogitation"></span> | <span class="taurochole"></span>
| 60s | <span class="protraction"></span> | <span class="krasis"></span>
| 1s | <span class="lustrate"></span> | <span class="druochole"></span>
| 120s | <span class="fey_illumination"></span> | ![Haima](haima.png)
| 120s | <span class="summon_seraph"></span> | ![Panhaima](panhaima.png)
| 120s | <span class="expedient"></span> | ![Holos](holos.png)

|     | BRD | MCH | DNC
| :-: | :-: | :-: | :-:
| 90s | <span class="troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span> | <span class="tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span> | <span class="shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span>
| 120s | <span class="natures_minne" role="tooltip" aria-label="地神のミンネ&#13;&#10;Nature's Minne"></span> | <span class="dismantle" role="tooltip" aria-label="ウェポンブレイク&#13;&#10;Dismantle"></span> | <span class="improvisation" role="tooltip" aria-label="インプロビゼーション&#13;&#10;Improvisation"></span>

</span>

<span class="mitigation-chart">

## チャート Chart

<form method="on_mt_changed" style="display:none">
<p class="job">MT</p>
<p class="job"><input type="radio" name="mt" value="pld" onchange="on_mt_changed()" checked><img src="Paladin.png"></p>
<p class="job"><input type="radio" name="mt" value="war" onchange="on_mt_changed()"><img src="Warrior.png"></p>
<p class="job"><input type="radio" name="mt" value="drk" onchange="on_mt_changed()"><img src="DarkKnight.png"></p>
<p class="job"><input type="radio" name="mt" value="gnb" onchange="on_mt_changed()"><img src="Gunbreaker.png"></p>
</form>

<form method="on_st_changed" style="display:none">
<p class="job">ST</p>
<p class="job"><input type="radio" name="st" value="pld" onchange="on_st_changed()"><img src="Paladin.png"></p>
<p class="job"><input type="radio" name="st" value="war" onchange="on_st_changed()"><img src="Warrior.png"></p>
<p class="job"><input type="radio" name="st" value="drk" onchange="on_st_changed()" checked><img src="DarkKnight.png"></p>
<p class="job"><input type="radio" name="st" value="gnb" onchange="on_st_changed()"><img src="Gunbreaker.png"></p>
</form>

<form method="on_ph_changed">
<p class="job">PH</p>
<p class="job"><input type="radio" name="ph" value="whm" onchange="on_ph_changed()" checked><img src="WhiteMage.png"></p>
<p class="job"><input type="radio" name="ph" value="ast" onchange="on_ph_changed()"><img src="Astrologian.png"></p>
</form>

<form method="on_bh_changed" style="display:none">
<p class="job">BH</p>
<p class="job"><input type="radio" name="bh" value="sch" onchange="on_bh_changed()" checked><img src="Scholar.png"></p>
<p class="job"><input type="radio" name="bh" value="sge" onchange="on_bh_changed()"><img src="Sage.png"></p>
</form>

<form method="on_d1_changed">
<p class="job">D1</p>
<p class="job"><input type="radio" name="d1" value="d1_mnk" onchange="on_d1_changed()" checked><img src="Monk.png"></p>
<p class="job"><input type="radio" name="d1" value="d1_sam" onchange="on_d1_changed()"><img src="Samurai.png"></p>
<p class="job"><input type="radio" name="d1" value="d1_drg" onchange="on_d1_changed()"><img src="Dragoon.png"></p>
<p class="job"><input type="radio" name="d1" value="d1_rpr" onchange="on_d1_changed()"><img src="Reaper.png"></p>
<p class="job"><input type="radio" name="d1" value="d1_nin" onchange="on_d1_changed()"><img src="Ninja.png"></p>
</form>

<form method="on_d2_changed">
<p class="job">D2</p>
<p class="job"><input type="radio" name="d2" value="d2_mnk" onchange="on_d2_changed()"><img src="Monk.png"></p>
<p class="job"><input type="radio" name="d2" value="d2_sam" onchange="on_d2_changed()"><img src="Samurai.png"></p>
<p class="job"><input type="radio" name="d2" value="d2_drg" onchange="on_d2_changed()" checked><img src="Dragoon.png"></p>
<p class="job"><input type="radio" name="d2" value="d2_rpr" onchange="on_d2_changed()"><img src="Reaper.png"></p>
<p class="job"><input type="radio" name="d2" value="d2_nin" onchange="on_d2_changed()"><img src="Ninja.png"></p>
</form>

<form method="on_d3_changed">
<p class="job">D3</p>
<p class="job"><input type="radio" name="d3" value="brd" onchange="on_d3_changed()" checked><img src="Bard.png"></p>
<p class="job"><input type="radio" name="d3" value="mch" onchange="on_d3_changed()"><img src="Machinist.png"></p>
<p class="job"><input type="radio" name="d3" value="dnc" onchange="on_d3_changed()"><img src="Dancer.png"></p>
</form>

<form method="on_d4_changed" style="display:none">
<p class="job">D4</p>
<p class="job"><input type="radio" name="d4" value="blm" onchange="on_d4_changed()" checked><img src="BlackMage.png"></p>
<p class="job"><input type="radio" name="d4" value="smn" onchange="on_d4_changed()"><img src="Summoner.png"></p>
<p class="job"><input type="radio" name="d4" value="rdm" onchange="on_d4_changed()"><img src="RedMage.png"></p>
</form>

- [スプレッドシート（編集中） Spread Sheet (Work in Progress)](https://docs.google.com/spreadsheets/d/1NKBqjhQ-lWbdx_9-IxAu9eu3KFJX9YRv7Q4xoaqD_lQ/edit?usp=sharing)

| Time | Action | 属性 | MT (PLD)<br>H1 (WHM)<br>D1<br>D3 (BRD) | ST (DRK)<br>D2<br>D4
| :--- | :----- | :--: | :------- | :-------
| 00:15 | アスカロンマイト<br>Ascalon's Might<sup><a href="#war_holmgang">\[1\]</a></sup> | ![Physical](physical.png) | <span class="holy_sheltron"></span><span class="the_blackest_night"></span>![Oblation](oblation.png)<span class="bulwark"></span><sup><a href="#mt_drk_physical_90s">\[2\]</a></sup><span class="ph_30s"></span><span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span> | <span class="reprisal"></span>
| 00:57 | 邪竜の魔炎<br>the Dragon's Rage | ![Magic](magic.png) | <span class="divine_veil"></span>
| 00:58 | スカイワードリープ<br>Skyward Leap | ![Magic](magic.png) | <span class="divine_veil"></span>
| 00:58 | ホーリーシールドバッシュ<br>Holy Shield Bash | ![Physical](physical.png) | <span class="holy_sheltron"></span>![Oblation](oblation.png)<span class="rampart"></span> | <span class="intervention"></span><span class="the_blackest_night"></span><span class="rampart"></span>
| 01:01 | ホーリーブレードダンス<br>Holy Bladedance | ![Physical](physical.png) | <span class="holy_sheltron"></span>![Oblation](oblation.png)<span class="rampart"></span> | <span class="intervention"></span><span class="the_blackest_night"></span><span class="rampart"></span>
| 01:09 | エンシェントクエイガ<br>Ancient Quaga | ![Magic](magic.png) | <span class="reprisal"></span> | <span class="dark_missionary"></span><span class="feint"></span><span class="addle"></span>
| 01:19 | ヘヴンリーヒール<br>Heavenly Heel | ![Physical](physical.png) | <span class="holy_sheltron"></span><span class="sentinel"></span><span class="ph_30s"></span><span class="feint"></span> | <span class="reprisal"></span>
| 01:23 | アスカロンマイト<br>Ascalon's Might | ![Physical](physical.png) | <span class="feint"></span> | <span class="the_blackest_night"></span>![Oblation](oblation.png)<span class="reprisal"></span><span class="make_no_sense"><span class="dark_mind"></span></span><sup><a href="#st_drk_physical_90s">\[3\]</sup><span class="shadow_wall"></span></a><span class="ph_30s"></span>
| 01:51 | セイクリッドカット<br>Sacred Sever | ![Physical](physical.png) | <span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span>
| 02:09 | ハイマルストーム<br>Hiemal Storm | ![Magic](magic.png)
| 02:44 | アルティメットエンド<br>Ultimate End | ![Magic](magic.png) |  | <span class="reprisal"></span><span class="feint"></span><span class="addle"></span>
| 03:18 | 終焉の竜詩<br>Final Chorus | ![Magic](magic.png) | <span class="divine_veil"></span><span class="passage_of_arms"></span> | <span class="dark_missionary"></span>
| 03:47 | アイ・オブ・タイラント<br>Eye of the Tyrant | ![Magic](magic.png) | <span class="reprisal"></span><span class="feint"></span><span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span>
| 04:08 | アイ・オブ・タイラント<br>Eye of the Tyrant | ![Magic](magic.png) | | <span class="reprisal"></span><span class="feint"></span><span class="addle"></span>
| 04:40 | ソウルテザー<br>Soul Tether | ![Magic](magic.png) | ![Hallowed Ground](hallowed_ground.png) | ![Living Dead](living_dead.png)
| 05:46 | 苦悶の咆哮<br>Resentment | ![Magic](magic.png) |
| 06:03 | フレアディザスター<br>Flare Nova | ![Magic](magic.png) | <span class="divine_veil"></span><span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span> | <span class="dark_missionary"></span>
| 06:10 | フレアスター<br>Flare Star | ![Magic](magic.png) | <span class="divine_veil"></span><span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span> | <span class="dark_missionary"></span>
| 06:22 | ミラージュダイブ<br>Mirage Dive | ![Physical](physical.png)
| 06:47 | 憤怒の波動<br>Steep in Rage<sup><a href="#steep_in_rage">\[4\]</a></sup> | ![Magic](magic.png) | | <span class="reprisal"></span>
| 07:35 | 衝撃波<br>Shockwave | ![Magic](magic.png) | ![Limit Break](limit_break.png)
| 07:40 | 光翼閃<br>Brightwing | ![Magic](magic.png) | ![Limit Break](limit_break.png) | <span class="addle"></span>
| 07:45 | 光翼閃<br>Brightwing | ![Magic](magic.png) | <span class="reprisal"></span><span class="divine_veil"></span><span class="feint"></span> | <span class="addle"></span>
| 07:50 | 光翼閃<br>Brightwing | ![Magic](magic.png) | <span class="reprisal"></span><span class="divine_veil"></span><span class="feint"></span><span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span>
| 07:55 | 光翼閃<br>Brightwing | ![Magic](magic.png) | <span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span> | <span class="reprisal"></span><span class="dark_missionary"></span><span class="feint"></span>
| 08:00 | ピュア・オブ・ハート<br>Pure of Heart | ![Magic](magic.png) | <span class="ast collective_unconscious"></span><span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span> | <span class="reprisal"></span><span class="dark_missionary"></span><span class="feint"></span>
| 09:15 | スカイワードリープ<br>Skyward Leap | ![Magic](magic.png) | <span class="divine_veil"></span>
| 09:21 | スパイラルピアス<br>Spiral Pierce | ![Magic](magic.png) | <span class="divine_veil"></span>
| 09:21 | レベレーション・アスカロンメルシー<br>Ascalon's Mercy Revealed | ![Physical](physical.png) | <span class="divine_veil"></span>
| 09:21 | ヘブンリキッド<br>Liquid Heaven | ![Magic](magic.png)
| 09:35 | エンシェントクエイガ<br>Ancient Quaga | ![Magic](magic.png) | <span class="reprisal"></span><span class="ast collective_unconscious"></span><span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span>
| 09:46 | ヘヴンリーヒール<br>Heavenly Heel<sup><a href="#war_holmgang">\[1\]</a></sup> | ![Physical](physical.png) | <span class="holy_sheltron"></span><span class="rampart"></span><span class="bulwark"></span><sup><a href="#mt_drk_physical_90s">\[2\]</a></sup><span class="sentinel"></span><span class="ph_30s"></span><span class="feint"></span><span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span> | <span class="reprisal"></span>
| 09:50 | アスカロンマイト<br>Ascalon's Might<sup><a href="#war_holmgang">\[1\]</a></sup> | ![Physical](physical.png) | <span class="feint"></span> | <span class="intervention"></span><span class="the_blackest_night"></span>![Oblation](oblation.png)<span class="reprisal"></span><span class="rampart"></span><span class="ph_30s"></span>
| 10:33 | フェイスアンムーブ<br>Faith Unmoving | ![Physical](physical.png)
| 10:36 | ヘヴンフレイム<br>Heavensflame | ![Magic](magic.png)
| 11:07 | エンシェントクエイガ<br>Ancient Quaga | ![Magic](magic.png) | <span class="ast collective_unconscious"></span> | <span class="reprisal"></span><span class="addle"></span>
| 11:16 | ヘヴンリーヒール<br>Heavenly Heel | ![Physical](physical.png) | <span class="reprisal"></span> | <span class="intervention"></span><span class="the_blackest_night"></span><span class="make_no_sense"><span class="dark_mind"></span></span><sup><a href="#st_drk_physical_90s">\[3\]</a></sup><span class="shadow_wall"></span><span class="ph_30s"></span><span class="feint"></span>
| 11:19 | アスカロンマイト<br>Ascalon's Might | ![Physical](physical.png) | <span class="holy_sheltron"></span><span class="reprisal"></span><span class="rampart"></span>![Oblation](oblation.png)<span class="ph_30s"></span> | <span class="feint"></span>
| 12:03 | 聖竜/邪竜の息吹<br>Great/Dread Wyrmsbreath | ![Magic](magic.png) | <span class="holy_sheltron"></span><span class="the_blackest_night"></span>![Oblation](oblation.png)<span class="sentinel"></span><span class="ph_120s"></span><span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span> | <span class="intervention"></span><span class="the_blackest_night"></span>![Oblation](oblation.png)<span class="rampart"></span><span class="adloquium"></span><span class="deployment-tactics">
| 12:23 | アク・アファー<br>Akh Afah | ![Magic](magic.png) | <span class="reprisal"></span> | <span class="sacred-soil"></span><span class="recitation"></span><span class="succor"></span>
| 12:36 | ホーリーフェザー<br>Hallowed Plume | ![Magic](magic.png) | <span class="holy_sheltron"></span><span class="bulwark"></span><span class="ph_30s"></span><span class="ph_60s"></span><span class="adloquium"></span><span class="feint"></span> | <span class="the_blackest_night"></span><span class="reprisal"></span><span class="dark_mind"></span><span class="ph_30s"></span><span class="protraction"></span><span class="adloquium"></span>
| 13:02 | アク・モーン<br>Akh Morn | ![Magic](magic.png) | <span class="divine_veil"></span><span class="ph_180s"></span><span class="ast collective_unconscious"></span> | <span class="dark_missionary"></span><span class="expedient"></span><span class="summon_seraph"></span><span class="consolation"></span><span class="sacred-soil"></span><span class="succor"></span><span class="addle"></span>
| 13:32 | アク・アファー<br>Akh Afah | ![Magic](magic.png) | <span class="reprisal"></span><span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span> | <span class="sacred-soil"></span><span class="succor"></span>
| 13:45 | ホーリーフェザー<br>Hallowed Plume | ![Magic](magic.png) | <span class="holy_sheltron"></span><span class="rampart"></span><span class="ph_30s"></span><span class="ph_60s"></span><span class="adloquium"></span> | <span class="the_blackest_night"></span><span class="reprisal"></span><span class="shadow_wall"></span><span class="ph_30s"></span><span class="protraction"></span><span class="adloquium"></span><span class="feint"></span>
| 14:04 | 聖竜/邪竜の息吹<br>Great/Dread Wyrmsbreath | ![Magic](magic.png) | <span class="holy_sheltron"></span><span class="the_blackest_night"></span>![Oblation](oblation.png)<span class="sentinel"></span><span class="ph_120s"></span> | <span class="intervention"></span><span class="the_blackest_night"></span>![Oblation](oblation.png)<span class="rampart"></span><span class="recitation"></span><span class="adloquium"></span><span class="deployment-tactics">
| 14:17 | カータライズ<br>Cauterize | ![Magic](magic.png) | ![Hallowed Ground](hallowed_ground.png)<span class="ast collective_unconscious"></span> | ![Living Dead](living_dead.png)<span class="sacred-soil"></span><span class="succor"></span>
| 15:07 | 苦悶の咆哮<br>Resentment | ![Magic](magic.png) | <span class="dnc improvisation" role="tooltip" aria-label="インプロビゼーション&#13;&#10;Improvisation"></span>
| 15:24 | 衝撃波<br>Shockwave | ![Magic](magic.png) | <span class="dnc improvised_finish" role="tooltip" aria-label="インプロビゼーション・フィニッシュ&#13;&#10;Improvised Finish"></span>
| 15:35 | ペイン解除<br>Remove Bleeding | | <span class="brd natures_minne"></span> | <span class="summon_seraph"></span><span class="fey_illumination"></span>
| 15:40 | アルティメットエンド・オルタナ<br>Alternative End | ![Magic](magic.png) | <span class="intervention"></span><span class="divine_veil"></span><span class="passage_of_arms"></span><span class="ph_60s"></span><span class="ph_30s"></span><span class="ph_30s"></span><span class="ast collective_unconscious"></span><span class="d1_mnk riddle_of_earth" role="tooltip" aria-label="金剛の極意&#13;&#10;Riddle of Earth"></span><span class="d1_sam third_eye" role="tooltip" aria-label="心眼&#13;&#10;Third Eye"></span><span class="d1_rpr arcane_crest" role="tooltip" aria-label="アルケインクレスト&#13;&#10;Arcane Crest"></span><span class="d1_nin shade_shift" role="tooltip" aria-label="残影&#13;&#10;Shade Shift"></span> | <span class="the_blackest_night"></span><span class="dark_missionary"></span><span class="protraction"></span><span class="expedient"></span><span class="sacred-soil"></span><span class="mch recitation"></span><span class="succor"></span><span class="consolation"></span><span class="d2_mnk riddle_of_earth" role="tooltip" aria-label="金剛の極意&#13;&#10;Riddle of Earth"></span><span class="d2_sam third_eye" role="tooltip" aria-label="心眼&#13;&#10;Third Eye"></span><span class="d2_rpr arcane_crest" role="tooltip" aria-label="アルケインクレスト&#13;&#10;Arcane Crest"></span><span class="d2_nin shade_shift" role="tooltip" aria-label="残影&#13;&#10;Shade Shift"></span>
| 16:21 | 騎竜剣アク・モーン<br>Akh Morn's Edge | ![Magic](magic.png) | <span class="holy_sheltron"></span><span class="reprisal"></span><span class="sentinel"></span><span class="ph_120s"></span><span class="feint"></span> | <span class="the_blackest_night"></span><span class="shadow_wall"></span><span class="sacred-soil"></span><span class="adloquium"></span><span class="deployment-tactics"></span><span class="addle"></span>
| 16:48 | 騎竜剣ギガフレア<br>Gigaflare's Edge | ![Magic](magic.png) | <span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="mch dismantle" role="tooltip" aria-label="ウェポンブレイク&#13;&#10;Dismantle"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span> | <span class="reprisal"></span><span class="sacred-soil"></span><span class="brd recitation"></span><span class="dnc recitation"></span><span class="succor"></span><span class="feint"></span>
| 17:40 | 騎竜剣アク・モーン<br>Akh Morn's Edge | ![Magic](magic.png) | <span class="holy_sheltron"></span><span class="reprisal"></span><span class="divine_veil"></span><span class="rampart"></span><span class="bulwark"></span><span class="ph_180s"></span><span class="ast collective_unconscious"></span><span class="brd natures_minne"></span><span class="dnc improvisation" role="tooltip" aria-label="インプロビゼーション&#13;&#10;Improvisation"></span><span class="dnc improvised_finish" role="tooltip" aria-label="インプロビゼーション・フィニッシュ&#13;&#10;Improvised Finish"></span> | <span class="the_blackest_night"></span><span class="dark_missionary"></span><span class="rampart"></span><span class="dark_mind"></span><span class="sacred-soil"></span><span class="fey_illumination"></span><span class="mch recitation"></span><span class="succor"></span>
| 18:08 | 騎竜剣ギガフレア<br>Gigaflare's Edge | ![Magic](magic.png) | <span class="feint"></span> | <span class="reprisal"></span><span class="summon_seraph"></span><span class="sacred-soil"></span><span class="adloquium"></span><span class="deployment-tactics"></span><span class="consolation"></span><span class="addle"></span>
| 19:00 | 騎竜剣アク・モーン<br>Akh Morn's Edge | ![Magic](magic.png) | <span class="holy_sheltron"></span><span class="reprisal"></span><span class="sentinel"></span><span class="ph_120s"></span><span class="ast collective_unconscious"></span><span class="brd troubadour" role="tooltip" aria-label="トルバドール&#13;&#10;Troubadour"></span><span class="mch tactician" role="tooltip" aria-label="タクティシャン&#13;&#10;Tactician"></span><span class="mch dismantle" role="tooltip" aria-label="ウェポンブレイク&#13;&#10;Dismantle"></span><span class="dnc shield_samba" role="tooltip" aria-label="守りのサンバ&#13;&#10;Shield Samba"></span> | <span class="the_blackest_night"></span><span class="shadow_wall"></span><span class="expedient"></span><span class="sacred-soil"></span><span class="brd recitation"></span><span class="dnc recitation"></span><span class="succor"></span><span class="feint"></span>

## アルティメットエンド・オルタナ Alternative End

| Job | Mitigation | Target
| :-- | :--------- | :-----
| MT | Short Buff | PH
| ST | Short Buff | BH
| PH | Short Buff | D1
| PH | Barrier | D2, D3
| BH | Short Buff | D4

機工士がいる場合、バリアヒーラーは騎竜剣ギガフレア 1 回目と騎竜剣アク・モーン 3 回目の代わりに**アルティメットエンド・オルタナ**と**騎竜剣アク・モーン 2 回目**に 90 秒アビリティを使用する。（機工士が騎竜剣ギガフレア 2 回目と騎竜剣アク・モーン 3 回目にウェポンブレイクを使用する）

If there is MCH, BH should use 90s ability to **Alternative End** and **2nd Akh Morn's Edge** instead of 1st Gigaflare's Edge and 3rd Akh Morn's Edge. (MCH uses Dismantle to 2nd Gigaflare's Edge and 3rd Akh Morn's Edge)

</span>

## 注釈 Note

1. <span id="war_holmgang">戦士がいる場合ホルムギャングで置き換え可能。<br>WAR can replace the mitigations with Holmgang.</span>
2. <span id="mt_drk_physical_90s">暗黒 MT の場合、ここでブルワークの代わりにダークマインドを使用しても意味がない。<br>If MT is DRK, it makes no sense to use Dark Mind instead of Bulwark here.</span>
3. <span id="st_drk_physical_90s">暗黒 ST の場合、ここでダークマインドを使用しても実際には意味がない。暗黒以外が ST の場合、ここで 90 秒アビを使用する。<br>If DRK is ST, using Dark Mind here does not make actual sense. If the ST is other than DRK, use the 90s ability here.</span>

(C) SQUARE ENIX CO., LTD. All Rights Reserved.
