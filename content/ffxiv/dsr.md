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

    .physical {
        display: inline flow-root;
        width: 24px;
        height: 24px;
        padding-left: 24px;
        background-image: url("physical.png");
        background-size: contain;
    }
    .magic {
        display: inline flow-root;
        width: 24px;
        height: 24px;
        padding-left: 24px;
        background-image: url("magic.png");
        background-size: contain;
    }
    .limit_break {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("limit_break.png");
        background-size: contain;
    }
    .rampart {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("rampart.png");
        background-size: contain;
    }
    .reprisal {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("reprisal.png");
        background-size: contain;
    }
    .feint {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("feint.png");
        background-size: contain;
    }
    .addle {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("addle.png");
        background-size: contain;
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
    .thrill_of_battle {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("thrill_of_battle.png");
        background-size: contain;
    }
    .vengeance {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("vengeance.png");
        background-size: contain;
    }
    .holmgang {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("holmgang.png");
        background-size: contain;
    }
    .shake_it_off {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("shake_it_off.png");
        background-size: contain;
    }
    .nascent_flash {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("nascent_flash.png");
        background-size: contain;
    }
    .bloodwhetting {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("bloodwhetting.png");
        background-size: contain;
    }
    .shadow_wall {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("shadow_wall.png");
        background-size: contain;
    }
    .dark_mind {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("dark_mind.png");
        background-size: contain;
    }
    .living_dead {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("living_dead.png");
        background-size: contain;
    }
    .the_blackest_night {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("the_blackest_night.png");
        background-size: contain;
    }
    .dark_missionary {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("dark_missionary.png");
        background-size: contain;
    }
    .oblation {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("oblation.png");
        background-size: contain;
    }
    .camouflage {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("camouflage.png");
        background-size: contain;
    }
    .nebula {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("nebula.png");
        background-size: contain;
    }
    .superbolide {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("superbolide.png");
        background-size: contain;
    }
    .heart_of_light {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("heart_of_light.png");
        background-size: contain;
    }
    .heart_of_corundum {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("heart_of_corundum.png");
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
    .whispering_dawn {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("whispering_dawn.png");
        background-size: contain;
    }
    .adloquium {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("adloquium.png");
        background-size: contain;
    }
    .succor {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("succor.png");
        background-size: contain;
    }
    .fey_illumination {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("fey_illumination.png");
        background-size: contain;
    }
    .lustrate {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("lustrate.png");
        background-size: contain;
    }
    .sacred_soil {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("sacred_soil.png");
        background-size: contain;
    }
    .deployment_tactics {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("deployment_tactics.png");
        background-size: contain;
    }
    .excogitation {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("excogitation.png");
        background-size: contain;
    }
    .recitation {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("recitation.png");
        background-size: contain;
    }
    .summon_seraph {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("summon_seraph.png");
        background-size: contain;
    }
    .consolation {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("consolation.png");
        background-size: contain;
    }
    .protraction {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("protraction.png");
        background-size: contain;
    }
    .expedient {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("expedient.png");
        background-size: contain;
    }
    .druochole {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("druochole.png");
        background-size: contain;
    }
    .kerachole {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("kerachole.png");
        background-size: contain;
    }
    .taurochole {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("taurochole.png");
        background-size: contain;
    }
    .haima {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("haima.png");
        background-size: contain;
    }
    .holos {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("holos.png");
        background-size: contain;
    }
    .panhaima {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("panhaima.png");
        background-size: contain;
    }
    .krasis {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("krasis.png");
        background-size: contain;
    }
    .natures_minne {
        display: inline flow-root;
        width: 40px;
        height: 40px;
        padding-left: 40px;
        background-image: url("nature's_minne.png");
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
    const action_data = [
        {
            name: "rampart",
            name_jp: "ランパート",
            name_en: "Rampart",
            acquired: "Tank",
            recast: "90s",
            duration: "20s",
        },
        {
            name: "reprisal",
            name_jp: "リプライザル",
            name_en: "Reprisal",
            acquired: "Tank",
            recast: "90s",
            duration: "10s",
        },
        {
            name: "feint",
            name_jp: "牽制",
            name_en: "Feint",
            acquired: "Melee",
            recast: "90s",
            duration: "10s",
        },
        {
            name: "addle",
            name_jp: "アドル",
            name_en: "Addle",
            acquired: "Caster",
            recast: "90s",
            duration: "10s",
        },
        {
            name: "sentinel",
            name_jp: "センチネル",
            name_en: "Sentinel",
            acquired: "PLD",
            recast: "120s",
            duration: "15s",
        },
        {
            name: "hallowed_ground",
            name_jp: "インビンシブル",
            name_en: "Hallowed Ground",
            acquired: "PLD",
            recast: "420s",
            duration: "10s",
        },
        {
            name: "bulwark",
            name_jp: "ブルワーク",
            name_en: "Bulwark",
            acquired: "PLD",
            recast: "90s",
            duration: "10s",
        },
        {
            name: "divine_veil",
            name_jp: "ディヴァインヴェール",
            name_en: "Divine Veil",
            acquired: "PLD",
            recast: "90s",
            duration: "30s",
        },
        {
            name: "intervention",
            name_jp: "インターベンション",
            name_en: "Intervention",
            acquired: "PLD",
            recast: "10s",
            duration: "8s",
        },
        {
            name: "passage_of_arms",
            name_jp: "パッセージ・オブ・アームズ",
            name_en: "Passage of Arms",
            acquired: "PLD",
            recast: "120s",
            duration: "18s",
        },
        {
            name: "holy_sheltron",
            name_jp: "ホーリーシェルトロン",
            name_en: "Holy Sheltron",
            acquired: "PLD",
            recast: "5s",
            duration: "8s",
        },
        {
            name: "thrill_of_battle",
            name_jp: "スリル・オブ・バトル",
            name_en: "Thrill of Battle",
            acquired: "WAR",
            recast: "90s",
            duration: "10s",
        },
        {
            name: "vengeance",
            name_jp: "ヴェンジェンス",
            name_en: "Vengeance",
            acquired: "WAR",
            recast: "120s",
            duration: "15s",
        },
        {
            name: "holmgang",
            name_jp: "ホルムギャング",
            name_en: "Holmgang",
            acquired: "WAR",
            recast: "240s",
            duration: "10s",
        },
        {
            name: "shake_it_off",
            name_jp: "シェイクオフ",
            name_en: "Shake it Off",
            acquired: "WAR",
            recast: "90s",
            duration: "30s",
        },
        {
            name: "nascent_flash",
            name_jp: "原初の猛り",
            name_en: "Nascent Flash",
            acquired: "WAR",
            recast: "25s",
            duration: "8s",
        },
        {
            name: "bloodwhetting",
            name_jp: "原初の血気",
            name_en: "Bloodwhetting",
            acquired: "WAR",
            recast: "25s",
            duration: "8s",
        },
        {
            name: "shadow_wall",
            name_jp: "シャドウウォール",
            name_en: "Shadow Wall",
            acquired: "DRK",
            recast: "120s",
            duration: "15s",
        },
        {
            name: "dark_mind",
            name_jp: "ダークマインド",
            name_en: "Dark Mind",
            acquired: "DRK",
            recast: "60s",
            duration: "10s",
        },
        {
            name: "living_dead",
            name_jp: "リビングデッド",
            name_en: "Living Dead",
            acquired: "DRK",
            recast: "300s",
            duration: "10s",
        },
        {
            name: "the_blackest_night",
            name_jp: "ブラックナイト",
            name_en: "The Blackest Night",
            acquired: "DRK",
            recast: "15s",
            duration: "7s",
        },
        {
            name: "dark_missionary",
            name_jp: "ダークミッショナリー",
            name_en: "Dark Missionary",
            acquired: "DRK",
            recast: "90s",
            duration: "15s",
        },
        {
            name: "oblation",
            name_jp: "オブレーション",
            name_en: "Oblation",
            acquired: "DRK",
            recast: "60s",
            duration: "10s",
            maximum_charges: 2,
        },
        {
            name: "camouflage",
            name_jp: "カモフラージュ",
            name_en: "Camouflage",
            acquired: "GNB",
            recast: "90s",
            duration: "20s",
        },
        {
            name: "nebula",
            name_jp: "ネビュラ",
            name_en: "Nebula",
            acquired: "GNB",
            recast: "120s",
            duration: "15s",
        },
        {
            name: "superbolide",
            name_jp: "ボーライド",
            name_en: "Superbolide",
            acquired: "GNB",
            recast: "360s",
            duration: "10s",
        },
        {
            name: "heart_of_light",
            name_jp: "ハート・オブ・ライト",
            name_en: "Heart of Light",
            acquired: "GNB",
            recast: "90s",
            duration: "15s",
        },
        {
            name: "heart_of_corundum",
            name_jp: "ハート・オブ・コランダム",
            name_en: "Heart of Corundum",
            acquired: "GNB",
            recast: "25s",
            duration: "8s",
        },
        {
            name: "divine_benison",
            name_jp: "ディヴァインベニゾン",
            name_en: "Divine Benison",
            acquired: "WHM",
            recast: "30s",
            duration: "15s",
            maximum_charges: 2,
        },
        {
            name: "temperance",
            name_jp: "テンパランス",
            name_en: "Temperance",
            acquired: "WHM",
            recast: "120s",
            duration: "20s",
        },
        {
            name: "aquaveil",
            name_jp: "アクアヴェール",
            name_en: "Aquaveil",
            acquired: "WHM",
            recast: "60s",
            duration: "8s",
        },
        {
            name: "liturgy_of_the_bell",
            name_jp: "リタージー・オブ・ベル",
            name_en: "Liturgy of the Bell",
            acquired: "WHM",
            recast: "180s",
            duration: "20s",
        },
        {
            name: "collective_unconscious",
            name_jp: "運命の輪",
            name_en: "Collective Unconscious",
            acquired: "AST",
            recast: "60s",
            duration: "5s",
        },
        {
            name: "celestial_intersection",
            name_jp: "星天交差",
            name_en: "Celestial Intersection",
            acquired: "AST",
            recast: "30s",
            duration: "30s",
            maximum_charges: 2,
        },
        {
            name: "neutral_sect",
            name_jp: "ニュートラルセクト",
            name_en: "Neutral Sect",
            acquired: "AST",
            recast: "120s",
            duration: "30s",
        },
        {
            name: "exaltation",
            name_jp: "エクザルテーション",
            name_en: "Exaltation",
            acquired: "AST",
            recast: "60s",
            duration: "8s",
        },
        {
            name: "macrocosmos",
            name_jp: "マクロコスモス",
            name_en: "Macrocosmos",
            acquired: "AST",
            recast: "180s",
            duration: "15s",
        },
        {
            name: "whispering_dawn",
            name_jp: "光の囁き",
            name_en: "Whispering Dawn",
            acquired: "SCH",
            recast: "60s",
            duration: "21s",
        },
        {
            name: "adloquium",
            name_jp: "鼓舞激励の策",
            name_en: "Adloquium",
            acquired: "SCH",
            recast: "2.5s",
            duration: "30s",
        },
        {
            name: "succor",
            name_jp: "士気高揚の策",
            name_en: "Succor",
            acquired: "SCH",
            recast: "2.5s",
            duration: "30s",
        },
        {
            name: "fey_illumination",
            name_jp: "フェイイルミネーション",
            name_en: "Fey Illumination",
            acquired: "SCH",
            recast: "120s",
            duration: "20s",
        },
        {
            name: "lustrate",
            name_jp: "生命活性法",
            name_en: "Lustrate",
            acquired: "SCH",
            recast: "1s",
            duration: null,
        },
        {
            name: "sacred_soil",
            name_jp: "野戦治療の陣",
            name_en: "Sacred Soil",
            acquired: "SCH",
            recast: "30s",
            duration: "15s",
        },
        {
            name: "deployment_tactics",
            name_jp: "展開戦術",
            name_en: "Deployment Tactics",
            acquired: "SCH",
            recast: "90s",
            duration: null,
        },
        {
            name: "excogitation",
            name_jp: "深謀遠慮の策",
            name_en: "Excogitation",
            acquired: "SCH",
            recast: "45s",
            duration: "45s",
        },
        {
            name: "recitation",
            name_jp: "秘策",
            name_en: "Recitation",
            acquired: "SCH",
            recast: "90s",
            duration: "15s",
        },
        {
            name: "summon_seraph",
            name_jp: "サモン・セラフィム",
            name_en: "Summon Seraph",
            acquired: "SCH",
            recast: "120s",
            duration: "22s",
        },
        {
            name: "consolation",
            name_jp: "コンソレイション",
            name_en: "Consolation",
            acquired: "SCH",
            recast: "30s",
            duration: "30s",
            maximum_charges: 2,
        },
        {
            name: "protraction",
            name_jp: "生命回生法",
            name_en: "Protraction",
            acquired: "SCH",
            recast: "60s",
            duration: "10s",
        },
        {
            name: "expedient",
            name_jp: "疾風怒濤の計",
            name_en: "Expedient",
            acquired: "SCH",
            recast: "120s",
            duration: "20s",
        },
        {
            name: "druochole",
            name_jp: "ドルオコレ",
            name_en: "Druochole",
            acquired: "SGE",
            recast: "1s",
        },
        {
            name: "kerachole",
            name_jp: "ケーラコレ",
            name_en: "Kerachole",
            acquired: "SGE",
            recast: "30s",
            duration: "15s",
        },
        {
            name: "taurochole",
            name_jp: "タウロコレ",
            name_en: "Taurochole",
            acquired: "SGE",
            recast: "45s",
            duration: "15s",
        },
        {
            name: "haima",
            name_jp: "ハイマ",
            name_en: "Haima",
            acquired: "SGE",
            recast: "120s",
            duration: "15s",
        },
        {
            name: "holos",
            name_jp: "ホーリズム",
            name_en: "Holos",
            acquired: "SGE",
            recast: "120s",
            duration: "20s",
        },
        {
            name: "panhaima",
            name_jp: "パンハイマ",
            name_en: "Panhaima",
            acquired: "SGE",
            recast: "120s",
            duration: "15s",
        },
        {
            name: "krasis",
            name_jp: "クラーシス",
            name_en: "Krasis",
            acquired: "SGE",
            recast: "60s",
            duration: "10s",
        },
        {
            name: "riddle_of_earth",
            name_jp: "金剛の極意",
            name_en: "Riddle of Earth",
            acquired: "MNK",
            recast: "120s",
            duration: "10s",
        },
        {
            name: "third_eye",
            name_jp: "心眼",
            name_en: "Third Eye",
            acquired: "MNK",
            recast: "15s",
            duration: "4s",
        },
        {
            name: "third_eye",
            name_jp: "心眼",
            name_en: "Third Eye",
            acquired: "MNK",
            recast: "15s",
            duration: "4s",
        },
        {
            name: "arcane_crest",
            name_jp: "アルケインクレスト",
            name_en: "Arcane Crest",
            acquired: "RPR",
            recast: "30s",
            duration: "5s",
        },
        {
            name: "shade_shift",
            name_jp: "残影",
            name_en: "Shade Shift",
            acquired: "NIN",
            recast: "120s",
            duration: "20s",
        },
        {
            name: "troubadour",
            name_jp: "トルバドゥール",
            name_en: "Troubadour",
            acquired: "BRD",
            recast: "90s",
            duration: "15s",
        },
        {
            name: "natures_minne",
            name_jp: "地神のミンネ",
            name_en: "Nature's Minne",
            acquired: "BRD",
            recast: "120s",
            duration: "15s",
        },
        {
            name: "tactician",
            name_jp: "タクティシャン",
            name_en: "Tactician",
            acquired: "MCH",
            recast: "90s",
            duration: "15s",
        },
        {
            name: "dismantle",
            name_jp: "ウェポンブレイク",
            name_en: "Dismantle",
            acquired: "MCH",
            recast: "120s",
            duration: "10s",
        },
        {
            name: "shield_samba",
            name_jp: "守りのサンバ",
            name_en: "Shield Samba",
            acquired: "DNC",
            recast: "90s",
            duration: "15s",
        },
        {
            name: "improvisation",
            name_jp: "インプロビゼーション",
            name_en: "Improvisation",
            acquired: "DNC",
            recast: "120s",
            duration: "15s",
        },
        {
            name: "improvised_finish",
            name_jp: "インプロビゼーション・フィニッシュ",
            name_en: "Improvised Finish",
            acquired: "DNC",
            recast: "1.5s",
            duration: "30s",
        },
    ];
    function on_job_changed(selectors) {
        const all_input = document.querySelectorAll(selectors);
        let checked;
        for (const input of all_input) {
            if (input.checked) {
                checked = input.value;
                break;
            }
        }
        for (const input of all_input) {
            const elements = document.getElementsByClassName(input.value);
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element.classList.contains(checked)) {
                    element.style.display = "inline flow-root";
                }
                else {
                    element.style.display = "none";
                }
            }
        }
    }
    function on_mt_changed() {
        on_job_changed("input[name=mt]");
    }
    function on_st_changed() {
        on_job_changed("input[name=st]");
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
            mt_90s: [
                ["mt_pld", "bulwark"],
                ["mt_war", "thrill_of_battle"],
                ["mt_gnb", "camouflage"],
            ],
            mt_120s: [
                ["mt_pld", "sentinel"],
                ["mt_war", "vengeance"],
                ["mt_drk", "shadow_wall"],
                ["mt_gnb", "nebula"],
            ],
            mt_short: [
                ["mt_pld", "holy_sheltron"],
                ["mt_war", "bloodwhetting"],
                ["mt_drk", "the_blackest_night"],
                ["mt_gnb", "heart_of_corundum"],
            ],
            mt_all: [
                ["mt_pld", "divine_veil"],
                ["mt_war", "shake_it_off"],
                ["mt_drk", "dark_missionary"],
                ["mt_gnb", "heart_of_light"],
            ],
            mt_invul: [
                ["mt_pld", "hallowed_ground"],
                ["mt_war", "holmgang"],
                ["mt_drk", "living_dead"],
                ["mt_gnb", "superbolide"],
            ],
            mt_support: [
                ["mt_pld", "intervention"],
                ["mt_war", "nascent_flash"],
                ["mt_drk", "the_blackest_night"],
                ["mt_gnb", "heart_of_corundum"],
            ],
            st_90s: [
                ["st_pld", "bulwark"],
                ["st_war", "thrill_of_battle"],
                ["st_gnb", "camouflage"],
            ],
            st_120s: [
                ["st_pld", "sentinel"],
                ["st_war", "vengeance"],
                ["st_drk", "shadow_wall"],
                ["st_gnb", "nebula"],
            ],
            st_short: [
                ["st_pld", "holy_sheltron"],
                ["st_war", "bloodwhetting"],
                ["st_drk", "the_blackest_night"],
                ["st_gnb", "heart_of_corundum"],
            ],
            st_all: [
                ["st_pld", "divine_veil"],
                ["st_war", "shake_it_off"],
                ["st_drk", "dark_missionary"],
                ["st_gnb", "heart_of_light"],
            ],
            st_invul: [
                ["st_pld", "hallowed_ground"],
                ["st_war", "holmgang"],
                ["st_drk", "living_dead"],
                ["st_gnb", "superbolide"],
            ],
            st_support: [
                ["st_pld", "intervention"],
                ["st_war", "nascent_flash"],
                ["st_drk", "the_blackest_night"],
                ["st_gnb", "heart_of_corundum"],
            ],
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
            rng_90s: [
                ["brd", "troubadour"],
                ["mch", "tactician"],
                ["dnc", "shield_samba"],
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

    window.addEventListener('DOMContentLoaded', function() {
        add_actions();
        action_data.forEach(d => {
            const elements = document.getElementsByClassName(d.name);
            let label
                = d.name_jp + "\n" + d.name_en + "\n" + d.acquired + " "
                + d.recast;
            if (d.duration != null) {
                label = label + "\nDuration: " + d.duration;
            }
            if (d.maximum_charges != null) {
                label = label + "\nMaximum Charges: " + d.maximum_charges;
            }
            for (let index = 0; index < elements.length; index++) {
                elements[index].setAttribute("role", "tooltip");
                elements[index].setAttribute("aria-label", label);
            }
        });
        on_mt_changed();
        on_st_changed();
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
| 90s | <span class="bulwark"></span> | <span class="thrill_of_battle"></span> | <span class="dark_mind"></span> | <span class="camouflage"></span>
| 120s | <span class="sentinel"></span> | <span class="vengeance"></span> | <span class="shadow_wall"></span> | <span class="nebula"></span>
| Invul | <span class="hallowed_ground"></span> | <span class="holmgang"></span> | <span class="living_dead"></span> | <span class="superbolide"></span>
| 90s | <span class="divine_veil"></span> | <span class="shake_it_off"></span> | <span class="dark_missionary"></span> | <span class="heart_of_light"></span>
| 120s | <span class="passage_of_arms"></span>
| Short 1 | <span class="holy_sheltron"></span> | <span class="bloodwhetting"></span> | <span class="the_blackest_night"></span> | <span class="heart_of_corundum"></span>
| Short 2 | <span class="intervention"></span> | <span class="nascent_flash"></span> | <span class="oblation"></span>

|     | WHM | AST
| :-: | :-: | :-:
| 60s | | <span class="collective_unconscious"></span>
| 30s | <span class="divine_benison"></span> | <span class="celestial_intersection"></span>
| 120s | <span class="temperance"></span> | <span class="neutral_sect"></span>
| 60s | <span class="aquaveil"></span> | <span class="exaltation"></span>
| 180s | <span class="liturgy_of_the_bell"></span> | <span class="macrocosmos"></span>

|     | SCH | SGE
| :-: | :-: | :-:
| 30s | <span class="sacred_soil"></span> | <span class="kerachole"></span>
| 45s | <span class="excogitation"></span> | <span class="taurochole"></span>
| 60s | <span class="protraction"></span> | <span class="krasis"></span>
| 1s | <span class="lustrate"></span> | <span class="druochole"></span>
| 120s | <span class="fey_illumination"></span> | <span class="haima"></span>
| 120s | <span class="summon_seraph"></span> | <span class="panhaima"></span>
| 120s | <span class="expedient"></span> | <span class="holos"></span>

|     | BRD | MCH | DNC
| :-: | :-: | :-: | :-:
| 90s | <span class="troubadour"></span> | <span class="tactician"></span> | <span class="shield_samba"></span>
| 120s | <span class="natures_minne"></span> | <span class="dismantle"></span> | <span class="improvisation"></span>

</span>

<span class="mitigation-chart">

## チャート Chart

<form method="on_mt_changed">
<p class="job">MT</p>
<p class="job"><input type="radio" name="mt" value="mt_pld" onchange="on_mt_changed()" checked><img src="Paladin.png"></p>
<p class="job"><input type="radio" name="mt" value="mt_war" onchange="on_mt_changed()"><img src="Warrior.png"></p>
<p class="job"><input type="radio" name="mt" value="mt_drk" onchange="on_mt_changed()"><img src="DarkKnight.png"></p>
<p class="job"><input type="radio" name="mt" value="mt_gnb" onchange="on_mt_changed()"><img src="Gunbreaker.png"></p>
</form>

<form method="on_st_changed">
<p class="job">ST</p>
<p class="job"><input type="radio" name="st" value="st_pld" onchange="on_st_changed()"><img src="Paladin.png"></p>
<p class="job"><input type="radio" name="st" value="st_war" onchange="on_st_changed()"><img src="Warrior.png"></p>
<p class="job"><input type="radio" name="st" value="st_drk" onchange="on_st_changed()" checked><img src="DarkKnight.png"></p>
<p class="job"><input type="radio" name="st" value="st_gnb" onchange="on_st_changed()"><img src="Gunbreaker.png"></p>
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
| 00:15 | アスカロンマイト<br>Ascalon's Might | <span class="physical"></span> | <span class="mt_war holmgang"></span><span class="mt_pld mt_drk mt_gnb"><span class="mt_short"></span><span class="st_support"></span><span class="ph_30s"></span><span class="rng_90s"></span></span> | <span class="mt_pld mt_drk mt_gnb"><span class="reprisal"></span><span class="feint"></span></span>
| 00:57 | 邪竜の魔炎<br>the Dragon's Rage | <span class="magic"></span> | <span class="mt_all"></span>
| 00:58 | スカイワードリープ<br>Skyward Leap | <span class="magic"></span> | <span class="mt_all"></span>
| 00:58 | ホーリーシールドバッシュ<br>Holy Shield Bash | <span class="physical"></span> | <span class="rampart"></span><span class="mt_90s"></span><span class="mt_drk oblation"></span><span class="st_drk oblation"></span><span class="mt_pld mt_drk mt_short"></span> | <span class="rampart"></span><span class="mt_drk oblation"></span><span class="st_drk oblation"></span><span class="st_90s"></span><span class="st_pld st_drk st_short"></span>
| 01:01 | ホーリーブレードダンス<br>Holy Bladedance | <span class="physical"></span> | <span class="rampart"></span><span class="mt_90s"></span><span class="mt_drk oblation"></span><span class="st_drk oblation"></span><span class="mt_pld mt_drk mt_short"></span> | <span class="rampart"></span><span class="mt_drk oblation"></span><span class="st_drk oblation"></span><span class="st_90s"></span><span class="st_pld st_drk st_short"></span>
| 01:09 | エンシェントクエイガ<br>Ancient Quaga | <span class="magic"></span> | <span class="reprisal"></span> | <span class="st_all"></span><span class="mt_war feint"></span><span class="addle"></span>
| 01:19 | ヘヴンリーヒール<br>Heavenly Heel | <span class="physical"></span> | <span class="mt_short"></span><span class="mt_120s"></span><span class="ph_30s"></span><span class="feint"></span> | <span class="reprisal"></span>
| 01:23 | アスカロンマイト<br>Ascalon's Might | <span class="physical"></span> | <span class="feint"></span> | <span class="st_short"></span><span class="reprisal"></span><span class="st_120s"></span><span class="ph_30s"></span>
| 01:51 | セイクリッドカット<br>Sacred Sever | <span class="physical"></span> | <span class="rng_90s"></span>
| 02:09 | ハイマルストーム<br>Hiemal Storm | <span class="magic"></span>
| 02:44 | アルティメットエンド<br>Ultimate End | <span class="magic"></span> |  | <span class="reprisal"></span><span class="feint"></span><span class="addle"></span>
| 03:18 | 終焉の竜詩<br>Final Chorus | <span class="magic"></span> | <span class="mt_all"></span><span class="mt_pld passage_of_arms"></span> | <span class="st_all"></span><span class="st_pld passage_of_arms"></span>
| 03:47 | アイ・オブ・タイラント<br>Eye of the Tyrant | <span class="magic"></span> | <span class="reprisal"></span><span class="feint"></span><span class="rng_90s"></span>
| 04:08 | アイ・オブ・タイラント<br>Eye of the Tyrant | <span class="magic"></span> | | <span class="reprisal"></span><span class="feint"></span><span class="addle"></span>
| 04:40 | ソウルテザー<br>Soul Tether | <span class="magic"></span> | <span class="mt_invul"></span> | <span class="st_invul"></span>
| 05:46 | 苦悶の咆哮<br>Resentment | <span class="magic"></span> |
| 06:03 | フレアディザスター<br>Flare Nova | <span class="magic"></span> | <span class="mt_all"></span><span class="rng_90s"></span> | <span class="st_all"></span>
| 06:10 | フレアスター<br>Flare Star | <span class="magic"></span> | <span class="mt_all"></span><span class="rng_90s"></span> | <span class="st_all"></span>
| 06:22 | ミラージュダイブ<br>Mirage Dive | <span class="physical"></span>
| 06:47 | 憤怒の波動<br>Steep in Rage | <span class="magic"></span> | | <span class="reprisal"></span>
| 07:35 | 衝撃波<br>Shockwave | <span class="magic"></span> | <span class="limit_break"></span>
| 07:40 | 光翼閃<br>Brightwing | <span class="magic"></span> | <span class="limit_break"></span> | <span class="addle"></span>
| 07:45 | 光翼閃<br>Brightwing | <span class="magic"></span> | <span class="reprisal"></span><span class="mt_all"></span><span class="feint"></span> | <span class="addle"></span>
| 07:50 | 光翼閃<br>Brightwing | <span class="magic"></span> | <span class="reprisal"></span><span class="mt_all"></span><span class="feint"></span><span class="rng_90s"></span>
| 07:55 | 光翼閃<br>Brightwing | <span class="magic"></span> | <span class="rng_90s"></span> | <span class="reprisal"></span><span class="st_all"></span><span class="feint"></span>
| 08:00 | ピュア・オブ・ハート<br>Pure of Heart | <span class="magic"></span> | <span class="ast collective_unconscious"></span><span class="rng_90s"></span> | <span class="reprisal"></span><span class="st_all"></span><span class="feint"></span>
| 09:15 | スカイワードリープ<br>Skyward Leap | <span class="magic"></span> | <span class="mt_all"></span>
| 09:21 | スパイラルピアス<br>Spiral Pierce | <span class="magic"></span> | <span class="mt_all"></span>
| 09:21 | レベレーション・アスカロンメルシー<br>Ascalon's Mercy Revealed | <span class="physical"></span> | <span class="mt_all"></span>
| 09:21 | ヘブンリキッド<br>Liquid Heaven | <span class="magic"></span>
| 09:35 | エンシェントクエイガ<br>Ancient Quaga | <span class="magic"></span> | <span class="reprisal"></span><span class="ast collective_unconscious"></span><span class="mt_war feint"></span><span class="rng_90s"></span>
| 09:46 | ヘヴンリーヒール<br>Heavenly Heel | <span class="physical"></span> | <span class="mt_war holmgang"></span><span class="mt_pld mt_drk mt_gnb"><span class="mt_short"></span><span class="rampart"></span><span class="mt_90s"></span><span class="mt_120s"></span><span class="ph_30s"></span><span class="feint"></span><span class="rng_90s"></span></span> | <span class="mt_pld mt_drk mt_gnb"><span class="reprisal"></span></span>
| 09:50 | アスカロンマイト<br>Ascalon's Might | <span class="physical"></span> | <span class="mt_war holmgang"></span><span class="mt_pld mt_drk mt_gnb"><span class="feint"></span></span> | <span class="mt_pld mt_drk mt_gnb"><span class="st_short"></span><span class="mt_drk oblation"></span><span class="st_drk oblation"></span><span class="reprisal"></span><span class="rampart"></span><span class="st_90s"></span><span class="ph_30s"></span></span>
| 10:33 | フェイスアンムーブ<br>Faith Unmoving | <span class="physical"></span>
| 10:36 | ヘヴンフレイム<br>Heavensflame | <span class="magic"></span>
| 11:07 | エンシェントクエイガ<br>Ancient Quaga | <span class="magic"></span> | <span class="ast collective_unconscious"></span> | <span class="reprisal"></span><span class="addle"></span>
| 11:16 | ヘヴンリーヒール<br>Heavenly Heel | <span class="physical"></span> | <span class="reprisal"></span> | <span class="st_short"></span><span class="st_120s"></span><span class="ph_30s"></span><span class="feint"></span>
| 11:19 | アスカロンマイト<br>Ascalon's Might | <span class="physical"></span> | <span class="mt_short"></span><span class="reprisal"></span><span class="rampart"></span><span class="mt_drk oblation"></span><span class="st_drk oblation"></span><span class="ph_30s"></span> | <span class="feint"></span>
| 12:03 | 聖竜/邪竜の息吹<br>Great/Dread Wyrmsbreath | <span class="magic"></span> | <span class="mt_short"></span><span class="st_support"></span><span class="mt_drk oblation"></span><span class="st_drk oblation"></span><span class="mt_120s"></span><span class="ph_120s"></span><span class="rng_90s"></span> | <span class="mt_support"></span><span class="st_short"></span><span class="mt_drk oblation"></span><span class="st_drk oblation"></span><span class="rampart"></span><span class="adloquium"></span><span class="deployment_tactics"></span>
| 12:23 | アク・アファー<br>Akh Afah | <span class="magic"></span> | <span class="reprisal"></span> | <span class="sacred_soil"></span><span class="recitation"></span><span class="succor"></span>
| 12:36 | ホーリーフェザー<br>Hallowed Plume | <span class="magic"></span> | <span class="mt_short"></span><span class="mt_90s"></span><span class="mt_drk dark_mind"></span><span class="ph_30s"></span><span class="ph_60s"></span><span class="adloquium"></span><span class="feint"></span> | <span class="st_short"></span><span class="reprisal"></span><span class="st_90s"></span><span class="st_drk dark_mind"></span><span class="ph_30s"></span><span class="protraction"></span><span class="adloquium"></span>
| 13:02 | アク・モーン<br>Akh Morn | <span class="magic"></span> | <span class="mt_all"></span><span class="ph_180s"></span><span class="ast collective_unconscious"></span> | <span class="st_all"></span><span class="expedient"></span><span class="summon_seraph"></span><span class="consolation"></span><span class="sacred_soil"></span><span class="succor"></span><span class="addle"></span>
| 13:32 | アク・アファー<br>Akh Afah | <span class="magic"></span> | <span class="reprisal"></span><span class="rng_90s"></span> | <span class="sacred_soil"></span><span class="succor"></span>
| 13:45 | ホーリーフェザー<br>Hallowed Plume | <span class="magic"></span> | <span class="mt_short"></span><span class="rampart"></span><span class="mt_drk dark_mind"></span><span class="ph_30s"></span><span class="ph_60s"></span><span class="adloquium"></span> | <span class="st_short"></span><span class="reprisal"></span><span class="st_120s"></span><span class="ph_30s"></span><span class="protraction"></span><span class="adloquium"></span><span class="feint"></span>
| 14:04 | 聖竜/邪竜の息吹<br>Great/Dread Wyrmsbreath | <span class="magic"></span> | <span class="mt_short"></span><span class="st_support"></span><span class="mt_drk oblation"></span><span class="st_drk oblation"></span><span class="mt_120s"></span><span class="ph_120s"></span> | <span class="mt_support"></span><span class="st_short"></span><span class="mt_drk oblation"></span><span class="st_drk oblation"></span><span class="rampart"></span><span class="st_drk dark_mind"></span><span class="recitation"></span><span class="adloquium"></span><span class="deployment_tactics"></span>
| 14:17 | カータライズ<br>Cauterize | <span class="magic"></span> | <span class="mt_invul"></span><span class="ast collective_unconscious"></span> | <span class="st_invul"></span><span class="sacred_soil"></span><span class="succor"></span>
| 15:07 | 苦悶の咆哮<br>Resentment | <span class="magic"></span> | <span class="dnc improvisation"></span>
| 15:24 | 衝撃波<br>Shockwave | <span class="magic"></span> | <span class="dnc improvised_finish"></span>
| 15:35 | ペイン解除<br>Remove Bleeding | | <span class="brd natures_minne"></span> | <span class="summon_seraph"></span><span class="fey_illumination"></span>
| 15:40 | アルティメットエンド・オルタナ<br>Alternative End | <span class="magic"></span> | <span class="mt_support"></span><span class="mt_all"></span><span class="mt_pld passage_of_arms"></span><span class="ph_30s"></span><span class="ph_30s"></span><span class="ph_60s"></span><span class="ast collective_unconscious"></span><span class="d1_mnk riddle_of_earth"></span><span class="d1_sam third_eye"></span><span class="d1_rpr arcane_crest"></span><span class="d1_nin shade_shift"></span> | <span class="st_support"></span><span class="st_all"></span><span class="st_pld passage_of_arms"></span><span class="protraction"></span><span class="expedient"></span><span class="sacred_soil"></span><span class="mch recitation"></span><span class="succor"></span><span class="consolation"></span><span class="d2_mnk riddle_of_earth"></span><span class="d2_sam third_eye"></span><span class="d2_rpr arcane_crest"></span><span class="d2_nin shade_shift"></span>
| 16:21 | 騎竜剣アク・モーン<br>Akh Morn's Edge | <span class="magic"></span> | <span class="mt_short"></span><span class="reprisal"></span><span class="mt_120s"></span><span class="mt_drk dark_mind"></span><span class="st_drk oblation"></span><span class="ph_120s"></span><span class="feint"></span> | <span class="st_short"></span><span class="st_120s"></span><span class="st_drk dark_mind"></span><span class="mt_drk oblation"></span><span class="sacred_soil"></span><span class="adloquium"></span><span class="deployment_tactics"></span><span class="addle"></span>
| 16:48 | 騎竜剣ギガフレア<br>Gigaflare's Edge | <span class="magic"></span> | <span class="brd troubadour"></span><span class="mch tactician"></span><span class="mch dismantle"></span><span class="dnc shield_samba"></span> | <span class="reprisal"></span><span class="sacred_soil"></span><span class="brd recitation"></span><span class="dnc recitation"></span><span class="succor"></span><span class="feint"></span>
| 17:40 | 騎竜剣アク・モーン<br>Akh Morn's Edge | <span class="magic"></span> | <span class="mt_short"></span><span class="reprisal"></span><span class="mt_all"></span><span class="rampart"></span><span class="mt_90s"></span><span class="mt_drk dark_mind"></span><span class="st_drk oblation"></span><span class="ph_180s"></span><span class="ast collective_unconscious"></span><span class="brd natures_minne"></span><span class="dnc improvisation"></span><span class="dnc improvised_finish"></span> | <span class="st_short"></span><span class="st_all"></span><span class="rampart"></span><span class="st_90s"></span><span class="st_drk dark_mind"></span><span class="mt_drk oblation"></span><span class="sacred_soil"></span><span class="fey_illumination"></span><span class="mch recitation"></span><span class="succor"></span>
| 18:08 | 騎竜剣ギガフレア<br>Gigaflare's Edge | <span class="magic"></span> | <span class="feint"></span> | <span class="reprisal"></span><span class="summon_seraph"></span><span class="sacred_soil"></span><span class="adloquium"></span><span class="deployment_tactics"></span><span class="consolation"></span><span class="addle"></span>
| 19:00 | 騎竜剣アク・モーン<br>Akh Morn's Edge | <span class="magic"></span> | <span class="mt_short"></span><span class="reprisal"></span><span class="mt_120s"></span><span class="mt_drk dark_mind"></span><span class="st_drk oblation"></span><span class="ph_120s"></span><span class="ast collective_unconscious"></span><span class="brd troubadour"></span><span class="mch tactician"></span><span class="mch dismantle"></span><span class="dnc shield_samba"></span> | <span class="st_short"></span><span class="st_120s"></span><span class="st_drk dark_mind"></span><span class="mt_drk oblation"></span><span class="expedient"></span><span class="sacred_soil"></span><span class="brd recitation"></span><span class="dnc recitation"></span><span class="succor"></span><span class="feint"></span>

## アルティメットエンド・オルタナ Alternative End

| Job | Mitigation | Target
| :-- | :--------- | :-----
| MT | Short Buff | PH
| ST | Short Buff | BH
| PH | Barrier | D1, D2
| PH | Short Buff | D3
| BH | Short Buff | D4

機工士がいる場合、バリアヒーラーは騎竜剣ギガフレア 1 回目と騎竜剣アク・モーン 3 回目の代わりに**アルティメットエンド・オルタナ**と**騎竜剣アク・モーン 2 回目**に 90 秒アビリティを使用する。（機工士が騎竜剣ギガフレア 1 回目と騎竜剣アク・モーン 3 回目にウェポンブレイクを使用する）

If there is MCH, BH should use 90s ability to **Alternative End** and **2nd Akh Morn's Edge** instead of 1st Gigaflare's Edge and 3rd Akh Morn's Edge. (MCH uses Dismantle to 1st Gigaflare's Edge and 3rd Akh Morn's Edge)

</span>

(C) SQUARE ENIX CO., LTD. All Rights Reserved.
