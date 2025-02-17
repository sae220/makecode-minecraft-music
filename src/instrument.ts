/**
 * Minecraft instrument types that a note block can emit
 */
 declare const enum Instrument {
    //% block="Chime"
    //% jres=Block.PackedIce
    Chime,
    //% block="Bass"
    //% jres=Block.PlanksOak
    Bass,
    //% block="Snare Drum"
    //% jres=Block.Sand
    SnareDrum,
    //% block="Hi-hat"
    //% jres=Block.Glass
    HiHat,
    //% block="Bass Drum"
    //% jres=Block.Stone
    BassDrum,
    //% block="Bell"
    //% jres=Block.GoldBlock
    Bell,
    //% block="Flute"
    //% jres=Block.Clay
    Flute,
    //% block="Guitar"
    //% jres=Block.Wool
    Guitar,
    //% block="Xylophone"
    //% jres=Block.BoneBlock
    Xylophone,
    //% block="Vibraphone"
    //% jres=Block.IronBlock
    Vibraphone,
    //% block="Cow Bell"
    //% jres=Block.SoulSand
    CowBell,
    //% block="Didgeridoo"
    //% jres=Block.Pumpkin
    Didgeridoo,
    //% block="Bit"
    //% jres=Block.EmeraldBlock
    Bit,
    //% block="Banjo"
    //% jres=Block.HayBlock
    Banjo,
    //% block="Pling"
    //% jres=Block.Glowstone
    Pling,
    //% block="Harp"
    //% jres=Block.Scaffolding
    Harp,
}

namespace music {
    /**
     * Represents an instrument that can be played on a note block
     * @param name the name of the instrument
     */
    //% group="Notes" weight=48
    //% shim=TD_ID blockId=minecraft_instrument block="instrument $name"
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=340 name.fieldOptions.columns=8 name.fieldOptions.tooltips=true
    //% name.fieldOptions.maxRows="2"
    //% name.fieldOptions.hideRect=true
    //% help=github:makecode-minecraft-music/docs/play-sound
    //% useEnumVal=1
    export function instrument(name: Instrument): Instrument {
        return name;
    }

    /**
     * Gets the Minecraft ID string representing an instrument.
     * @param instrument the instrument
     */
    export function _instrumentMinecraftId(instrument: Instrument): string {
        switch (instrument) {
            case Instrument.Bass: return 'note.bass';
            case Instrument.SnareDrum: return 'note.snare';
            case Instrument.HiHat: return 'note.hat';
            case Instrument.BassDrum: return 'note.bd';
            case Instrument.Bell: return 'note.bell';
            case Instrument.Flute: return 'note.flute';
            case Instrument.Chime: return 'note.chime';
            case Instrument.Guitar: return 'note.guitar';
            case Instrument.Xylophone: return 'note.xylophone';
            case Instrument.Vibraphone: return 'note.iron_xylophone';
            case Instrument.CowBell: return 'note.cow_bell';
            case Instrument.Didgeridoo: return 'note.didgeridoo';
            case Instrument.Bit: return 'note.bit';
            case Instrument.Banjo: return 'note.banjo';
            case Instrument.Pling: return 'note.pling';
            case Instrument.Harp: return 'note.harp';
        }

        throw `unrecognized instrument ${instrument}`;
    }
}
