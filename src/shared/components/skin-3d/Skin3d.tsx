import { useEffect, useRef } from "react";
import { SkinViewer } from "skinview3d";

type Props = {
    username: string;
};

const Skin3d = ({ username }: Props):JSX.Element => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const viewer = new SkinViewer({
            width: 120,
            height: 300,
            canvas: canvasRef.current,            skin: `https://mc-heads.net/skin/${username}`,
        });

        viewer.autoRotate = true;

        return () => {
            viewer.dispose();
        };
    }, [username]);

    return <canvas ref={canvasRef} />;
}

export { Skin3d }