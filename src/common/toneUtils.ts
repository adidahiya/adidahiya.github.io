import Tone from "tone";

export const createLoopWithPlayers = (
    players: Tone.Players,
    interval: string,
    onInterval: (args: {
        time: number;
        bar: number;
        beat: number;
        sixteenth: number;
        trigger: (playerName: string) => void;
    }) => void,
) => {
    return new Tone.Loop((time: number) => {
        const [bar, beat, sixteenth] = Tone.Transport.position.split(":");
        const trigger = (playerName: string) => {
            const player = players.get(playerName);
            if (!player.loaded) {
                console.log(`Player [${playerName}] not loaded yet or file format is unsupported`);
                return;
            }
            // delay by 100ms as suggested in https://github.com/Tonejs/Tone.js/wiki/Performance
            player.start(time);
        };
        onInterval({
            time,
            bar: parseInt(bar, 10),
            beat: parseInt(beat, 10),
            sixteenth: parseInt(sixteenth, 10),
            trigger,
        });
    }, interval);
};
